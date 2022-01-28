import './styles.scss'
import { useLocation } from 'react-router'
import React, { useEffect, useState } from 'react'
import LessonsCarausal from '../../components/lessonsCarausal'
import Player from '../../components/Player'
import Loader from '../../components/loader'
import { getSkillById } from '../../functions/apis'
import { updateProgress } from '../../functions/apis'
import PageWrapper from '../../components/pageWrapper'

const Learn = () => {
    const location = useLocation()
    const [id, setId] = useState(null)
    const [lesson, setLesson] = useState([])
    const [activeLesson, setActiveLesson] = useState(null)
    const [skillData, setSkillData] = useState(null)
    const [lessonProgress, setLessonProgress] = useState([])

    useEffect(() => {
        id && getSkillById(id)
        .then(res => {
            const item = res.items[0];
            setSkillData(item)
            setLesson(item.lessons)
            setLessonProgress(JSON.parse(item.progress.lessons))
            setActiveLesson(item.lessons[0])
        }).catch(err => console.log(err))
    }, [id])
  
    useState(() => {
        setId(location.pathname.split('/')[2])
    }, [location])

    const lessonEnded = () => {
        const currentProgress = [...lessonProgress];
        currentProgress.push(activeLesson.id);
        setLessonProgress(currentProgress);
        const progress = (currentProgress.length/lesson.length)*100
        const body = {
            progress: JSON.stringify(progress),
            lessons: JSON.stringify(currentProgress)
        }
        updateProgress(body, skillData.progress.id)
        .then(res => {
           console.log(res)
        }).catch(err => console.log(err))
    }
    
    return <PageWrapper className='relative flex flex-column'>
        <h1 className='app-name' style={{ textTransform: 'uppercase' }}><b>{skillData?.title}</b> - {skillData?.creator}</h1>
        <br />
        {activeLesson ? <div className='videoContainer'><Player lesson={activeLesson} lessonEnded={lessonEnded}/></div>
        : 
        <section className="loader-wrapper"><Loader/></section>}
        {activeLesson && lesson.length > 0 && <LessonsCarausal active={activeLesson} lessonProgress={lessonProgress} lessons={lesson} setLesson={(lesson) => setActiveLesson(lesson)}/>}
    </PageWrapper>
}

export default Learn
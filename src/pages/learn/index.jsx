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
            const item = res.items;
            setSkillData(item)
            setLesson(item.json_build_object.all_lessons)
            setLessonProgress(item.json_build_object.completed_lessons)
            setActiveLesson(item.json_build_object.all_lessons[0])
        }).catch(err => console.log(err))
    }, [id])
  
    useState(() => {
        setId(location.pathname.split('/')[2])
    }, [location])

    const lessonEnded = () => {
        if(lessonProgress.includes(activeLesson.lesson_id)) return;
        const currentProgress = [...lessonProgress];
        currentProgress.push(activeLesson.lesson_id);
        setLessonProgress(currentProgress);
        const body = {
            progress_id: skillData.progress_id,
            lesson_id: activeLesson.lesson_id
        }
        updateProgress(body)
        .then(res => {
           console.log(res)
        }).catch(err => console.log(err))
    }
    
    return <PageWrapper className='relative flex flex-column'>
        {skillData && <h1 className='app-name' style={{ textTransform: 'uppercase' }}><b>{skillData?.skill_name}</b> - {activeLesson?.creator}</h1>}
        <br />
        {activeLesson ? <div className='videoContainer'><Player lesson={activeLesson} lessonEnded={lessonEnded}/></div>
        : 
        <section className="loader-wrapper"><Loader/></section>}
        {activeLesson && lesson.length > 0 && <LessonsCarausal active={activeLesson} lessonProgress={lessonProgress} lessons={lesson} setLesson={(lesson) => setActiveLesson(lesson)}/>}
    </PageWrapper>
}

export default Learn
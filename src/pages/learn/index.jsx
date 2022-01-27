import './styles.scss'
import Header from '../../components/header'
import { useLocation } from 'react-router'
import React, { useEffect, useState } from 'react'
import LessonsCarausal from '../../components/lessonsCarausal'
import Player from '../../components/Player'
import Loader from '../../components/loader'

import { getSkillById } from '../../functions/apis'

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

    const toggleTheme = () => {
        const modeSwitch = document.querySelector('.mode-switch');
        document.documentElement.classList.toggle('dark');
        modeSwitch.classList.toggle('active');
    }
    
    return <section className='app-container'>
    <Header toggleTheme={toggleTheme}/>
    <section className='relative flex flex-column'>
        <h1 className='app-name' style={{ textTransform: 'uppercase' }}><b>{skillData?.title}</b> - {skillData?.creator}</h1>
        <br />
        {activeLesson ? <div className='videoContainer'>
            <Player lesson={activeLesson}/>
        </div> : 
        <section className="loader-wrapper">
            <Loader/>
        </section>}
        {lesson.length > 0 && <LessonsCarausal lessonProgress={lessonProgress} lessons={lesson} setLesson={(e) => setActiveLesson(e)}/>}
    </section>
  </section>
}

export default Learn
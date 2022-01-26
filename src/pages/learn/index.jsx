import './styles.scss'
import Header from '../../components/header'
import { useLocation } from 'react-router'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import LessonsCarausal from '../../components/lessonsCarausal'
import Player from '../../components/Player'

import { getSkillById } from '../../functions/apis'

const Learn = () => {
    const location = useLocation()
    const [id, setId] = useState(null)
    const [lesson, setLesson] = useState([])
    const [activeLesson, setActiveLesson] = useState(null)

    useEffect(() => {
        console.log(location.pathname.split('/')[2])
        id && getSkillById(location.pathname.split('/')[2])
        .then(res => {
            setLesson(res.items)
            setActiveLesson(res.items[0])
        })
        .catch(err => {
            console.log(err)
        })
    }, [id])

    useState(() => {
        setId(location.pathname.split('/')[2])
    }, [location])

    const paused = e => {
        console.log(e)
    }

    const player = (activeLesson) => {
        return <ReactPlayer
            url={`${activeLesson.url}?rel=0`}
            width='1280px'
            height='640px'
            playing={false}
            controls={true}
            className="player"
            onEnded={e => paused(e)}
        />
    }

    const toggleTheme = () => {
        var modeSwitch = document.querySelector('.mode-switch');
        document.documentElement.classList.toggle('dark');
        modeSwitch.classList.toggle('active');
    }
    
    return <section className='app-container'>
    <Header toggleTheme={toggleTheme}/>
    <section className='relative flex flex-column'>
        {activeLesson && <div className='videoContainer'>
            <Player lesson={activeLesson}/>
        </div>}
        {lesson.length > 0 && <LessonsCarausal lessons={lesson} setLesson={(e) => setActiveLesson(e)}/>}
    </section>
  </section>
}

export default Learn
import './styles.scss'
import Header from '../../components/header'
import { useLocation } from 'react-router'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import LessonsCarausal from '../../components/lessonsCarausal'
import Player from '../../components/Player'

const Learn = () => {
    const location = useLocation()
    const [lesson, setLesson] = useState(location?.state?.lessons)
    const [activeLesson, setActiveLesson] = useState(lesson[0])

    useEffect(() => {
        setLesson(location?.state?.lessons)
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
        <div className='videoContainer'>
            {/* {player(activeLesson)} */}
            <Player lesson={activeLesson}/>
        </div>
        <LessonsCarausal lessons={lesson} setLesson={(e) => setActiveLesson(e)}/>
    </section>
  </section>
}

export default Learn
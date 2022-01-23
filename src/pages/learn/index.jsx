import './styles.scss'
import Header from '../../components/header'
import { useLocation } from 'react-router'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

const Learn = () => {
    const location = useLocation()
    const id = location.pathname.split('/')[2]
    const [lesson, setLesson] = useState(location?.state?.lessons)
    const [activeLesson, setActiveLesson] = useState(lesson[0])

    useEffect(() => {
        setLesson(location?.state?.lessons)
    }, [location])

    const player = (activeLesson) => {
        return <ReactPlayer
            url={`${activeLesson.url}?rel=0`}
            width='1280px'
            height='720px'
            playing={true}
            controls={true}
            className="player"
        />
    }

    const toggleTheme = () => {
        var modeSwitch = document.querySelector('.mode-switch');
        document.documentElement.classList.toggle('dark');
        modeSwitch.classList.toggle('active');
    }
    
    return <section className=''>
    <Header toggleTheme={toggleTheme}/>
    <section className='relative flex' style={{ top: 100,  height: 'calc(100vh - 100px)'}}>
        <div className='videoContainer'>
            {player(activeLesson)}
        </div>
        <div className='lessonsContainer'>
            <ul>
                {lesson.map((list, i) => <li onClick={() => setActiveLesson(list)}>{list.title}</li>)}
            </ul>
        </div>
    </section>
  </section>
}

export default Learn
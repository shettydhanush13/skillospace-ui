import './styles.scss'
import Header from '../../components/root/header'
import { useLocation } from 'react-router'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'

const Learn = () => {
    const location = useLocation()
    const id = location.pathname.split('/')[2]
    const data = {
        cardTrick: [
            {
                title: 'True Coincidence',
                url: 'https://www.youtube.com/watch?v=8-2LzMxvjUM',
                id: '2'
            },
            {
                title: 'Indicator',
                url: 'https://www.youtube.com/watch?v=RRcpL7tQHvk',
                id: '2'
            },
            {
                title: "Spectator's dead",
                url: 'https://www.youtube.com/watch?v=3tjaoveeTEQ',
                id: '3'
            },
            {
                title: 'Name Any Card',
                url: 'https://www.youtube.com/watch?v=Ixj_T3FLrUI',
                id: '4'
            },
            {
                title: '12 card magic',
                url: 'https://www.youtube.com/watch?v=P9X1s_ia9Ik',
                id: '5'
            }
        ],
        rubikCube: [
            {
                title: "How to Solve a 2*2 Rubik's Cube",
                url: 'https://www.youtube.com/watch?v=GANnG5a19kg',
                id: '1'
            },
            {
                title: "How to Solve a 3x3 Rubik's Cube",
                url: 'https://www.youtube.com/watch?v=KGvQRaK1mvs',
                id: '2'
            },
            {
                title: "How to Solve a 4*4 Rubik's Cube",
                url: 'https://www.youtube.com/watch?v=f9ilC-ePrg4',
                id: '3'
            },
            {
                title: 'CFOP Speedcubing Method',
                url: 'https://www.youtube.com/watch?v=MS5jByTX_pk',
                id: '4'
            }
        ],
        soccerFreestyle: [
            {
                title: '5 Essential Receiving Skills',
                url: 'https://www.youtube.com/watch?v=Hgtq1gepBdE',
                id: '1'
            },
            {
                title: '5 Simple Nutmeg Skills',
                url: 'https://www.youtube.com/watch?v=yBYx2r3dDxA',
                id: '2'
            },
            {
                title: "6 Ways To Control The Ball ",
                url: 'https://www.youtube.com/watch?v=YWNdqAOx59g',
                id: '3'
            },
            {
                title: 'Rabona and Rabona Fake',
                url: 'https://www.youtube.com/watch?v=Zt-imRuYpfg',
                id: '4'
            },
            {
                title: 'Scissor Move',
                url: 'https://www.youtube.com/watch?v=UAP1C_urdwk',
                id: '5'
            }
        ]
    }
  

    const [lesson, ] = useState(data[id])
    const [activeLesson, setActiveLesson] = useState(lesson[0])

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
    
    return <section className='bg-color-secondary'>
    <Header/>
    <section className='relative flex' style={{ top: 100,  height: 'calc(100vh - 100px)', background: '#000'}}>
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
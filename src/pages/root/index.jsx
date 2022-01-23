import { useEffect } from 'react';
import Header from '../../components/header'
import SkillCard from '../../components/skillCard'
import './styles.scss'

const Home = () => {
    const skillsList = [
        {
            title: 'card trick',
            id: 'cardTrick',
            subTitle: 'Prototyping',
            progress: '60',
            lessons: [
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
            ]
        },
        {
            title: "solve rubik's cube",
            id: 'rubikCube',
            subTitle: 'Prototyping',
            progress: '60',
            lessons: [
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
        ]},
        {
            title: 'soccer freestyle skills',
            id: 'soccerFreestyle',
            subTitle: 'Prototyping',
            progress: '60',
            lessons: [
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
        ]}
    ]

    const toggleTheme = () => {
        var modeSwitch = document.querySelector('.mode-switch');
        document.documentElement.classList.toggle('dark');
        modeSwitch.classList.toggle('active');
    }

    const toggleView = (type) => {
        var listView = document.querySelector('.list-view');
        var gridView = document.querySelector('.grid-view');
        var projectsList = document.querySelector('.project-boxes');
        if(type === 'list') {
            gridView.classList.remove('active');
            listView.classList.add('active');
            projectsList.classList.remove('jsGridView');
            projectsList.classList.add('jsListView');
        } else {
            gridView.classList.add('active');
            listView.classList.remove('active');
            projectsList.classList.remove('jsListView');
            projectsList.classList.add('jsGridView');
        }
    }

    const sidebar = () => {
        return <div class="app-sidebar">
            <a href="" class="app-sidebar-link active">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            </a>
            <a href="" class="app-sidebar-link">
                <svg class="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-pie-chart" viewBox="0 0 24 24">
                <defs />
                <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
                </svg>
            </a>
            <a href="" class="app-sidebar-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
            </a>
            <a href="" class="app-sidebar-link">
                <svg class="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-settings" viewBox="0 0 24 24">
                <defs />
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                </svg>
            </a>
        </div>
    }

    const toggleViewMenu = () => {
        return (
            <div class="view-actions">
                <button class="view-btn list-view" title="List View" onClick={() => toggleView('list')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list">
                        <line x1="8" y1="6" x2="21" y2="6" />
                        <line x1="8" y1="12" x2="21" y2="12" />
                        <line x1="8" y1="18" x2="21" y2="18" />
                        <line x1="3" y1="6" x2="3.01" y2="6" />
                        <line x1="3" y1="12" x2="3.01" y2="12" />
                        <line x1="3" y1="18" x2="3.01" y2="18" />
                    </svg>
                </button>
                <button class="view-btn grid-view active" title="Grid View" onClick={() => toggleView('grid')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                    </svg>
                </button>
            </div>
        )
    }

    return <>
        <div class="app-container">
            <Header toggleTheme={toggleTheme}/>
            <div class="app-content">
                {/* {sidebar()} */}
                <div class="projects-section">
                    <div class="projects-section-header">
                        <p>Skills</p>
                        {toggleViewMenu()}
                    </div>
                    <div class="project-boxes jsGridView">
                        {skillsList.map(skill => <SkillCard skill={skill} />)}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Home
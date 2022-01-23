import { useEffect } from 'react';
import Header from '../../components/header'
import './styles.scss'

const Home = () => {
    const skills = [
        {
            date: 'December 10, 2020',
            title: 'Web Designing',
            subTitle: 'Prototyping',
            progress: '60'
        },
        {
            date: 'December 10, 2020',
            title: 'Testing',
            subTitle: 'Prototyping',
            progress: '50'
        },
        {
            date: 'December 10, 2020',
            title: 'Svg Animations',
            subTitle: 'Prototyping',
            progress: '80'
        },
        {
            date: 'December 10, 2020',
            title: 'UI Development',
            subTitle: 'Prototyping',
            progress: '20'
        },
        {
            date: 'December 10, 2020',
            title: 'Data Analysis',
            subTitle: 'Prototyping',
            progress: '60'
        },
        {
            date: 'December 10, 2020',
            title: 'Web Designing',
            subTitle: 'Prototyping',
            progress: '40'
        }
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

    return <>
        <div class="app-container">
            <Header toggleTheme={toggleTheme}/>
            <div class="app-content">
                <div class="app-sidebar">
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
                <div class="projects-section">
                    <div class="projects-section-header">
                        <p>Skills</p>
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
                    </div>
                    <div class="project-boxes jsGridView">
                        {skills.map(skill => (
                        <div class="project-box-wrapper">
                        <div class="project-box" style={{backgroundColor: '#fee4cb'}}>
                        <div class="project-box-header">
                            <span>{skill.date}</span>
                            <div class="more-wrapper">
                                <button class="project-btn-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                                    <circle cx="12" cy="12" r="1" />
                                    <circle cx="12" cy="5" r="1" />
                                    <circle cx="12" cy="19" r="1" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="project-box-content-header">
                            <p class="box-content-header">{skill.title}</p>
                            <p class="box-content-subheader">{skill.subTitle}</p>
                        </div>
                        <div class="box-progress-wrapper">
                            <p class="box-progress-header">Progress</p>
                            <div class="box-progress-bar">
                                <span class="box-progress" style={{ width: `${skill.progress}%`, backgroundColor: '#ff942e'}}></span>
                            </div>
                            <p class="box-progress-percentage">{skill.progress}%</p>
                        </div>
                        <div class="project-box-footer">
                            <div class="participants">
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="participant"/>
                                <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="participant"/>
                                <button class="add-participant">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                                    <path d="M12 5v14M5 12h14" />
                                    </svg>
                                </button>
                            </div>
                            <div class="days-left">
                                2 Days Left
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
    </>
}

export default Home
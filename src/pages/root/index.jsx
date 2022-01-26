import { useEffect, useState } from 'react'
import Header from '../../components/header'
import SkillCard from '../../components/skillCard'
import { getAllSkills, getMyProgress } from '../../functions/apis'

import './styles.scss'

// const myskillsList = require('../../data/mySkills.json')
// const skillsList = require('../../data/allSkills.json')

const Home = () => {

    useEffect(() => {
        getAllSkills()
        .then(res => {
            console.log(res.items)
            setSkillsList(res.items)
        })
        .catch(err => {
            console.log(err)
        })

        getMyProgress()
        .then(res => {
            console.log(res.items)
            setMySkillsList(res.items)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const [skillsList, setSkillsList] = useState([])
    const [myskillsList, setMySkillsList] = useState([])

    const [login, ] = useState(localStorage.getItem('userName'))

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
                <div class="projects-section">
                    {login && <>
                        <div class="projects-section-header">
                            <p>Continue learning</p>
                            {toggleViewMenu()}
                        </div>
                        <div class="project-boxes jsGridView">
                            {myskillsList.map(skill => <SkillCard type='my' skill={skill} />)}
                        </div>
                        <br /><br />
                    </>}
                    <div class="projects-section-header">
                        <p>All Skills</p>
                    </div>
                    <div class="project-boxes jsGridView">
                        {skillsList.map(skill => <SkillCard type='all' skill={skill} />)}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Home
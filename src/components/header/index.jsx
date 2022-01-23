import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Logout } from '../../functions'
import './styles.scss'

const Header = ({ toggleTheme }) => {

    const [username, setUsername] = useState('Login');

    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("userName")
        setUsername(user)
    }, [])

    const signout = () => {
        Logout().then(() => navigate("/login")).catch(err => console.log(err))
    }

    
    return (
        <div class="app-header">
            <div class="app-header-left" onClick={() => navigate('/')}>
                <span class="app-icon"></span>
                <p class="app-name">skillOspace</p>
                {/* <div class="search-wrapper">
                    <input class="search-input" type="text" placeholder="Search"/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-search" viewBox="0 0 24 24">
                    <defs></defs>
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="M21 21l-4.35-4.35"></path>
                    </svg>
                </div> */}
            </div>
            <div class="app-header-right">
                <button class="mode-switch" title="Switch Theme" onClick={() => toggleTheme()}>
                    <svg class="moon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="24" height="24" viewBox="0 0 24 24">
                    <defs></defs>
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                    </svg>
                </button>
                {/* <button class="notification-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                </button> */}
                <button class="profile-btn">
                    {username && <span>{username.toUpperCase()}</span>}
                    {!username && <span onClick={() => navigate('/login')}>Login</span>}
                </button>
                    {username && <button class="profile-btn">
                    {username && <span onClick={() => signout()}>LOGOUT</span>}
                </button>}
            </div>
            <button class="messages-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
            </button>
        </div>
    )
}

export default Header
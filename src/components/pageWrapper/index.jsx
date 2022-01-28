import './styles.scss'
import Header from '../header'

const PageWrapper = ({ children, className }) => {

    const toggleTheme = () => {
        const modeSwitch = document.querySelector('.mode-switch');
        document.documentElement.classList.toggle('dark');
        modeSwitch.classList.toggle('active');
    }

    return <div class="app-container">
        <Header toggleTheme={toggleTheme}/>
        <div className={`app-content ${className}`}>{children}</div>
    </div>
    }

export default PageWrapper;
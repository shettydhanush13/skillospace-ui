import { useNavigate } from 'react-router';
import './styles.scss';
import { createProgress } from '../../functions/apis';

const SkillCard = ({ skill, type }) => {

    const navigate = useNavigate();

    const navigateToLearn = () => navigate(`learn/${skill.skill_id}`, { state: skill })

    const learn = () => {
        if(type === 'all') {
            const body = {
                progress: '1',
                skill_id: skill.skill_id
            }
            createProgress(body)
            .then(() => navigateToLearn())
            .catch(err => console.log(err))
        } else navigateToLearn()
    }

    return <div className="project-box-wrapper">
    <div className="project-box" style={{backgroundColor: '#bddba8'}}>
        <div className="project-box-header">
        <span></span>
        {/* <div className="more-wrapper">
            <button className="project-btn-more">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical">
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                </svg>
            </button>
        </div> */}
        </div>
        <div className="project-box-content-header">
            <p className="box-content-header">{skill.title.toUpperCase()}</p>
            <p className="box-content-subheader">{skill.creator}</p>
        </div>
        {type === 'my' && <div className="box-progress-wrapper">
            <p className="box-progress-header">Progress</p>
            <div className="box-progress-bar">
                <span className="box-progress" style={{ width: `${skill.progress}%`, backgroundColor: '#6ba644'}}></span>
            </div>
        </div>}
        <div className="project-box-footer">
            <div className="participants">
                <button className="days-left">
                    {type === 'my' ? 
                        `${skill.progress} %`
                        :
                        skill.progress.length > 0 ? 
                            `+${skill.progress.length} Learner`
                            :
                            'Be the first learner'}
                </button>
            </div>
            <div onClick={() => learn()} className="days-left">{`${type === 'my' ? 'Continue' : 'Start'} Learning`}</div>
        </div>
    </div>
 </div>
}

export default SkillCard;
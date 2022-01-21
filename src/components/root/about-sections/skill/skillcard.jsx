import React from "react";
import { useNavigate } from "react-router";
import "./styles.scss";

const Skillcard = ({ skills }) => {
    const { title, description, logo, skillId } = skills
    const navigate = useNavigate()
    return (
        <div className="flex flex-column flex-align-center worklist-container relative fancy-card">
            <div className="worklist flex flex-column flex-align-center">
                <img style={{ height: 100, objectFit: 'contain' }} src={logo} alt="" />
                <p className="font-bold">{title}</p>
                <p className="work-description text-center">{description}</p>
                <button className='primaryButton font-bold' onClick={() => navigate(`/learn/${skillId}`)}>START</button>
            </div>
            <div class="middle"></div>
            <div class="bottom"></div>
        </div>
    )
}

export default Skillcard
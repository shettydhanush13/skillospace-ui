import React from "react";
import "./styles.scss";
import Skillcard from "./skillcard"

const skillsList = [
    {
        title: 'Learn Soccer freestyle',
        skillId: 'soccerFreestyle',
        description: 'Lorem ipsum...',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRl2L0DzF-C_TnwnNNNluDjvWmlLF56VeM9gbIwToK85Bm2qJPbDFQndEVjLbxlYrUS5c&usqp=CAU'
    },
    {
        title: "Solve rubik's cube",
        skillId: 'rubikCube',
        description: 'Lorem ipsum...',
        logo: 'https://i.pinimg.com/736x/05/3b/b9/053bb9b3b5534c448998e1065d01009e--rubiks-cube-logo-cube.jpg'
    },
    {
        title: 'Learn card tricks',
        skillId: 'cardTrick',
        description: 'Lorem ipsum...',
        logo: 'https://storage.googleapis.com/burbcommunity-aroundambler/2016/08/gloves_and_cards.png'
    }
]

const Work = () => {
    return (
        <section className="skillsContainer flex flex-column flex-align-center bg-color-secondary font-color-primary full-view noTopPadding">
            <h1 className="introRole font-bold">Choose a skill to learn</h1>
            <div className="skillRow flex flex-wrap">
                {skillsList.map(skills => <Skillcard skills={skills}/>)}
            </div>
        </section>        
    )
}

export default Work
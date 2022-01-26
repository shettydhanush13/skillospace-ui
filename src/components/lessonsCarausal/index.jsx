import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './styles.scss'

const LessonsCarausal = ({ lessons, setLesson, completedLessons }) => {
return <OwlCarousel className='owl-theme' height={50} margin={10} items={4}>
    {lessons.map(lesson =>  <div onClick={() => setLesson(lesson)}
      className={`item flex flex-column flex-align-center project-box lessonCard`}>
        <h4 className='text-center'>{lesson.title}</h4>
    </div>)}
</OwlCarousel>
}

export default LessonsCarausal
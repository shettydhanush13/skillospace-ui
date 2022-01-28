import React, { useEffect } from 'react';
import './styles.scss'

const LessonsCarausal = ({ active, lessons, setLesson, lessonProgress }) => {
  const activeLessonChange = (lesson) => {
    const cards = document.getElementsByClassName('lessonCard')
    for(let i=0; i<cards.length; i++) {
      cards[i].classList.remove('current-lesson');
    }
    document.getElementById(lesson.id).classList.add('current-lesson');
    setLesson(lesson);
  }

  useEffect(() => {
    activeLessonChange(active)
  }, [])

  return <div className='flex flex-wrap'>
      {lessons.map(lesson =>  <div onClick={() => activeLessonChange(lesson)}
        id={lesson.id}
        className={`flex flex-column flex-align-center project-box lessonCard`}>
          {lessonProgress.includes(lesson.id) && <img className='completed-icon' src="https://static.thenounproject.com/png/426713-200.png" alt="" />}
          <span className='text-center'>{lesson.title}</span>
      </div>)}
  </div>
}

export default LessonsCarausal
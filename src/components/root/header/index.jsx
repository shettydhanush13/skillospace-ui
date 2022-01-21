import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.scss'

const Header = () => {
  const navigate = useNavigate()
  return <header>
      <h1 onClick={() => navigate('/')} className='heading'>
        <><img src={require('../../../assets/icons/logo_white.svg').default} alt="" />SkillOspace.</>
      </h1>
  </header>
};

export default Header
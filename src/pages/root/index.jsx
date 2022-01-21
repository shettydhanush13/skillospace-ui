import React from 'react'
import Header from '../../components/root/header'
import './styles.scss'

import {
  Skill,
  Me,
  Contact
} from "../../components/root/about-sections"

const Root = () => (
  <section className='bg-color-secondary'>
    <Header/>
    <section className='relative' style={{ top: 100 }}>
        <Skill/>
        <Me/>
        <Contact/>
    </section>
  </section>
);

export default Root
import React from 'react'
import PNavbar from './PNavbar'
import PBanner from './PBanner'
import PFooter from './PFooter'
import PSkills from './PSkills'
import PEducation from './PEducation'
import Projects from './Projects'


function PHome() {
  return (
    <>
    <PNavbar/>
    <PBanner/>
    <PSkills/>
    <PEducation/>
    <Projects/>
    <PFooter/>
    </>
  )
}

export default PHome
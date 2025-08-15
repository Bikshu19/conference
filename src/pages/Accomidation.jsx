import React from 'react'
import Homenav from '../components/homepagecomponents/homenav'
import Homefooter from "../components/homepagecomponents/homefooter"
import Accomidations from '../components/Accomidations'

function Accomidation() {
  return (
    <div >
        <Homenav/>
        <div style={{"margin":"120px"}}>
         <Accomidations/>
        </div>
        <Homefooter/>
    </div>
  )
}

export default Accomidation
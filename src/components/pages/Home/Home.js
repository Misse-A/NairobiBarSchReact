import React from 'react'
import { HomeBanner } from './HomeBanner/HomeBanner'
import { Learing } from './Learing/Learing'
import { OurPopluarCourses } from './OurpopluarCourse/OurPopluarCourses'
import { DistanceLearing } from './DistanceLearing/DistanceLearing'
import { CourseInstrucation } from './CourseInstrucation/CourseInstrucation'
import { SelfDevelopment } from './SelfDevelopment/SelfDevelopment'
import { Certification } from './Certificate.js/Certification'
import { Video } from './Video/Video'
import { LogoSlider } from './Logoslider/LogoSlider'
import { OurPublication } from './OurPublication/OurPublication'
import { NewsLetter } from './NewsLetter/NewsLetter'
import "../../../theme/css/Home.css"

export const Home = () => {
    return (
        <div>
           <HomeBanner/>
            <Learing/>
            <OurPopluarCourses/>
            <div className="Distance-Img">
            <DistanceLearing/>
            <CourseInstrucation/>
            </div>
            <SelfDevelopment/>
            <Certification/>
            <Video/>
            <LogoSlider/>
            <OurPublication/>
            <NewsLetter/>
        </div>
    )
}

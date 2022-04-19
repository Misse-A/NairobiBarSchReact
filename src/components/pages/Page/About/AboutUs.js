import React from 'react'
import { CourseInstrucation } from '../../Home/CourseInstrucation/CourseInstrucation'

import { DistanceLearing } from '../../Home/DistanceLearing/DistanceLearing'
import { Learing } from '../../Home/Learing/Learing'
import { Video } from '../../Home/Video/Video'

import { BreadCrumb } from './BreadCrumb'

export const AboutUs = () => {
    return (
        <>
            <BreadCrumb/>
            <Learing/>
            <DistanceLearing/>
            <Video/>
            <CourseInstrucation/>
        </>
    )
}

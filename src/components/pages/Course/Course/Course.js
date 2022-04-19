import React from 'react'
import { BreadCrumb } from './BreadCrumb'
import { CourseSection } from './CourseSection'
import "../../../../theme/css/Course.css";
import { NewsLetter } from '../../Home/NewsLetter/NewsLetter';

export const Course = () => {
    return (
        <div>
            <BreadCrumb/>
            <CourseSection/>
            <NewsLetter/>
        </div>
    )
}

import React from 'react'
import "../../../../theme/css/SingleCourse.css"
import { BreadCrumb } from './BreadCrumb'
import { SingleCourseSection } from './SingleCourseSection'
import { NewsLetter } from '../../Home/NewsLetter/NewsLetter';
export const SingleCourse = () => {
    return (
        <>
          <BreadCrumb/>
          <SingleCourseSection/>
          <NewsLetter/>
        </>
    )
}

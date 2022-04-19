import React from 'react'
import { BreadCrumb } from './BreadCrumb'
import { FAQArea } from './FAQArea'
import "../../../../theme/css/FAQ.css";
import { NewsLetter } from '../../Home/NewsLetter/NewsLetter';


export const FQA = () => {
    return (
        <div>
            <BreadCrumb/>
            <FAQArea/>
            <NewsLetter/>
        </div>
    )
}

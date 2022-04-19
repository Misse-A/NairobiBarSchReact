import React from 'react'

import { BreadCrumb } from './BreadCrumb'
import { GalleryImg } from './GalleryImg'
import "../../../../theme/css/Gallery.css";
import { NewsLetter } from '../../Home/NewsLetter/NewsLetter';

export const Gallery = () => {
    return (
        <div>
            <BreadCrumb/>
            <GalleryImg/>
            <NewsLetter/>
        </div>
    )
}

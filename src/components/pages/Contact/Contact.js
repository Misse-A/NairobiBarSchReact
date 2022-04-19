import React from 'react'
import "../../../theme/css/Contact.css"
import { BreadCrumb } from './BreadCrumb'
import { ContactDetail } from './ContactDetail'

export const Contact = () => {
    return (
        <div>
            <BreadCrumb/>
            <ContactDetail/>
        </div>
    )
}

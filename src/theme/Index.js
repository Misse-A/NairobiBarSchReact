import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "../components/pages/Blog/Blog";
import { Contact } from "../components/pages/Contact/Contact";
import { Events } from "../components/pages/Event/Events";
import { Home } from "../components/pages/Home/Home";
import { AboutUs } from "../components/pages/Page/About/AboutUs";
import { FQA } from "../components/pages/Page/FAQ/FQA";
import { Gallery } from "../components/pages/Page/Gallery/Gallery";
import { PrivacyPolicy } from "../components/pages/Page/PrivacyPolicy/PrivacyPolicy";
import { TermsCondition } from "../components/pages/Page/Terms&Condition/TremsCondition";
import { SingleCourse } from "../components/pages/Course/SingleCourse/SingleCourse";
import { Course } from "../components/pages/Course/Course/Course";
import { ForgotPwd } from "../components/LoginRigester/Forgotpwd/ForgotPwd";
import { Login } from "../components/LoginRigester/Login/Login";
import { RegisterMain } from "../components/LoginRigester/Register/RegisterMain";



// import Page from "../components/pages/Page/Page";

export default function Index() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={< Gallery/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/faq" element={<FQA/>}/>
        <Route path="/terms" element={<TermsCondition/>}/>
        <Route path="/policy" element={<PrivacyPolicy/>}/>
        <Route path="/course" element={<Course/>}/>
        <Route path="/singlecourse" element={<SingleCourse/>}/>
        <Route path="/event" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/register" element={<RegisterMain/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgotpwd"  element={<ForgotPwd/>}/>
      </Routes>
    </div>
  );
}

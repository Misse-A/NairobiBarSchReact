import React from "react";
import "../../../theme/css/Blog.css";
import { BlogArea } from "./BlogArea";
import { BreadCrumb } from "./BreadCrumb";

export default function Blog() {
  return (
    <>
        <BreadCrumb/>
        <BlogArea/>
    </>
  );
}

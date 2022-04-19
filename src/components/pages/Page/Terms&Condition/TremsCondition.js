import React from "react";
import { BreadCrumb } from "./BreadCrumb";
import { TermsConditonSection } from "./TremsConditionSection";
import "../../../../theme/css/TermsCondition.css";

export const TermsCondition = () => {
  return (
    <>
      <div>
        <BreadCrumb />
        <TermsConditonSection />
      </div>
    </>
  );
};

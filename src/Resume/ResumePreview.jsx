import React, { useContext } from "react";
import { useResumeInfoContext } from "../Context/DataContext";
import PersonalData from "../Preview/PersonalData";
import SummeryPreview from "../Preview/SummeryPreview";
import ExperiencePreview from "../Preview/ExperiencePreview";
import EducationalPreview from "../Preview/EducationalPreview";
import SkillsPreview from "../Preview/SkillsPreview";

const ResumePreview = () => {
  const { resumeInfo, setResumeInfo } = useContext(useResumeInfoContext);
  console.log(resumeInfo);

  return (
    <div
      className={`shadow-lg h-full p-14 border-t-[20px] `}
      style={{ borderTopColor: resumeInfo?.themeColor }}
    >
      <PersonalData resumeInfo={resumeInfo}></PersonalData>

      <SummeryPreview resumeInfo={resumeInfo}></SummeryPreview>
     

      {resumeInfo?.experience?.length > 0 && (
        <ExperiencePreview resumeInfo={resumeInfo}></ExperiencePreview>
      )}

      {resumeInfo?.education?.length > 0 && (
        <EducationalPreview resumeInfo={resumeInfo} />
      )}
      {/* Skilss  */}
      {resumeInfo?.skills?.length > 0 && (
        <SkillsPreview resumeInfo={resumeInfo} />
      )}
    </div>
  );
};

export default ResumePreview;

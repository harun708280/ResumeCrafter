import React from 'react';

const SkillsPreview = ({ resumeInfo = {} }) => {
  const defaultThemeColor = '#4CAF50'; 
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeInfo?.themeColor || defaultThemeColor,
        }}
      >
        Skills
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor || defaultThemeColor,
        }}
      />

      <div className="grid grid-cols-2 gap-3 my-4">
        {resumeInfo?.skills?.length > 0 ? (
          resumeInfo?.skills.map((skill, index) => (
            <div key={index} className="flex items-center justify-between">
              <h2 className="text-xs">{skill.name}</h2>
              <div className="h-2 bg-gray-200 w-[120px] rounded overflow-hidden shadow">
                <div
                  className="h-2"
                  style={{
                    backgroundColor:resumeInfo?.themeColor,
                    width:skill?.rating*20+'%'
                }}
                ></div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No skills available.</p>
        )}
      </div>
    </div>
  );
};

export default SkillsPreview;

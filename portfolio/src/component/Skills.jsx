import React from 'react';
import estin from '../assets/estin.png';

const Skills = () => {
  return (
    <div className="h-screen w-full  py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        My <span className="text-blue-600">Skills</span>
      </h1>

      <div className="flex flex-row justify-center gap-8 ">
        {/* Web Section */}
        <div className="w-full  md:w-1/3 p-4">
        <div className="  rounded-lg   shadow-lg shadow-gray-800 hover:shadow-2xl transition-shadow duration-300">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-center text-blue-700">Web</h2>
            </div>
            <div className="p-6 space-y-4">
              <SkillItem title="React" percentage="90%" />
              <SkillItem title="JavaScript" percentage="80%" />
              <SkillItem title="CSS" percentage="75%" />
              <SkillItem title="HTML" percentage="85%" />
            </div>
          </div>
        </div>

        {/* AI & Data Science Section */}
        <div className="w-full md:w-1/3 p-4">
        <div className="  rounded-lg   shadow-lg shadow-gray-800 hover:shadow-2xl transition-shadow duration-300">
        <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-center text-blue-700">AI & Data Science</h2>
            </div>
            <div className="p-6 space-y-4">
              <SkillItem title="Python" percentage="90%" />
              <SkillItem title="Machine Learning" percentage="80%" />
              <SkillItem title="Data Analysis" percentage="85%" />
              <SkillItem title="TensorFlow" percentage="70%" />
            </div>
          </div>
        </div>

        {/* Engineering Section */}
        <div className="w-full md:w-1/3 p-4">
        <div className="  rounded-lg   shadow-lg shadow-gray-800 hover:shadow-2xl transition-shadow duration-300">
        <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-center text-blue-700">Engineering</h2>
            </div>
            <div className="p-6 space-y-4">
              <SkillItem title="C++" percentage="75%" />
              <SkillItem title="Algorithms" percentage="80%" />
              <SkillItem title="Data Structures" percentage="85%" />
              <SkillItem title="System Design" percentage="70%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable SkillItem Component
const SkillItem = ({ title, percentage }) => (
  <div className="flex flex-col mb-4">
    <div className="flex justify-between items-center mb-2">
      <p className="text-lg font-medium">{title}</p>
      <p className="text-lg font-medium">{percentage}</p>
    </div>
    <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full bg-blue-600 rounded-full transition-width duration-300"
        style={{ width: percentage }}
      ></div>
    </div>
  </div>
);

export default Skills;

 
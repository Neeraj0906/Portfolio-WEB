// src/components/Skills.jsx
import React from "react";

const Skills = () => {
  const technicalSkills = [
    { name: "JavaScript", description: "Core JavaScript and ES6+ features" },
    { name: "React.js", description: "Building dynamic web applications with React" },
    { name: "Node.js", description: "Creating server-side applications with Node.js" },
    { name: "MongoDB", description: "Efficient data management with MongoDB (NoSQL)" },
    { name: "Express.js", description: "Building scalable APIs and backend logic with Express.js" },
    { name: "MySQL", description: "Experience with relational databases and CRUD operations" },
    { name: "GitHub", description: "Collaborative development and version control with GitHub" },
    { name: "Vercel", description: "Deploying web applications on Vercel" },
    { name: "Render", description: "Deployment of both frontend and backend on Render" },
    { name: "Tailwind CSS", description: "Building responsive designs using Tailwind CSS" },
    { name: "HTML/CSS", description: "Creating structured, responsive web pages" },
    { name: "API Integration", description: "Integrating external APIs (e.g., Amadeus, Stripe)" },
  ];

  const softSkills = [
    { name: "Communication", description: "Effective communication with teams and stakeholders" },
    { name: "Time Management", description: "Skilled in prioritizing tasks and meeting deadlines" },
    { name: "Team Leader", description: "Led teams towards achieving project goals" },
    { name: "Team Player", description: "Collaborative and supportive in team settings" },
  ];

  return (
    <section style={{marginLeft:"87px",backgroundColor:""}} className="ml-64 p-8 bg-[#2C3E50] min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Skills Heading */}
        <h1 className="text-5xl font-extrabold text-[#F1C40F] mb-8 text-center underline decoration-4 underline-offset-4 text-transparent bg-clip-text bg-gradient-to-r from-[#F1C40F] to-[#F39C12]">
          Skills
        </h1>

        {/* Technical Skills Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-[#F1C40F] mb-6 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#34495E] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300 transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-[#F1C40F] mb-2">{skill.name}</h3>
                <p className="text-sm text-[#BDC3C7]">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div>
          <h2 className="text-3xl font-semibold text-[#BDC3C7] mb-6 text-center">
            Soft Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#5D6D7E] p-6 rounded-lg shadow-md hover:shadow-lg transition-all ease-in-out duration-300 transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-white mb-2">{skill.name}</h3>
                <p className="text-sm text-[#BDC3C7]">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

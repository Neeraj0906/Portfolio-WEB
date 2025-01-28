// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section style={{ marginLeft: "80px", padding: "100px" }} className="bg-[#f4f6f7] min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 style={{ fontSize: "50px" }} className="text-4xl font-semibold text-[#2C3E50] mb-6">
          About Me
        </h1>

        {/* Content Section */}
        <div className="space-y-6 text-lg text-[#2C3E50] text-justify">
          <p>
            Hi, I'm <strong className="text-[#F1C40F]">Neeraj Subramani</strong>, a passionate web developer with a keen interest in creating beautiful and interactive websites. I specialize in front-end development using React and back-end technologies such as Node.js and Express.js.
          </p>
          <p>
            I believe in turning ideas into innovative solutions through code, and my goal is to help businesses grow through seamless digital experiences.
          </p>
          <p>
            When I'm not coding, I enjoy exploring new technologies, reading tech blogs, and working on personal projects that challenge me to learn and grow.
          </p>
          <p>
            My technical expertise includes JavaScript, React.js, Node.js, MongoDB, Express.js, and Tailwind CSS. I'm always eager to learn new skills and improve my craft, and I'm open to collaborating on exciting projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

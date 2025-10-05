import React from "react";

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-8 py-16">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      <a 
        href="/resume.pdf" 
        download 
        className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
      >
        Download My Resume
      </a>
    </div>
  );
};

export default Resume;
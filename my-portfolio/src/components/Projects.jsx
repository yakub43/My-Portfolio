import React from "react";

const Projects = () => {
  const projects = [
    { name: "E-Commerce App", link: "#", desc: "Full stack app with Spring Boot + React" },
    { name: "Payment System", link: "#", desc: "API for online payments" },
    { name: "Portfolio Website", link: "#", desc: "This personal portfolio site" },
  ];

  return (
    <div className="min-h-screen px-8 py-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mt-2 text-gray-600">{p.desc}</p>
            <a href={p.link} target="_blank" rel="noreferrer" className="text-blue-500 mt-4 inline-block">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
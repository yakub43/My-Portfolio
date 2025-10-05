import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-8 py-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="mb-4">Feel free to reach out!</p>
      <p>Email: <a href="mailto:your.email@example.com" className="text-blue-500">your.email@example.com</a></p>
      <p className="mt-2">LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="text-blue-500">linkedin.com/in/yourprofile</a></p>
      <p className="mt-2">GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="text-blue-500">github.com/yourusername</a></p>
    </div>
  );
};

export default Contact;
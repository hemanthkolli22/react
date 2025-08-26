import React, { useState, useEffect } from "react";

const JobApplication = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    resume: null,
  });

  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const storedApplications = JSON.parse(localStorage.getItem("jobApplications")) || [];
    setApplications(storedApplications);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newApplication = {
      ...formData,
      id: Date.now(),
      resumeName: formData.resume?.name || "",
      resumeType: formData.resume?.type || "",
      resumeSize: formData.resume?.size || 0,
    };

    const updatedApplications = [...applications, newApplication];
    localStorage.setItem("jobApplications", JSON.stringify(updatedApplications));
    setApplications(updatedApplications);

    alert("Application submitted!");

    setFormData({
      name: "",
      email: "",
      position: "",
      resume: null,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 px-4 py-10">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-lg mb-10">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Apply for a Job</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Position</label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Choose a role</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Upload Resume</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="w-full text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-100 file:text-indigo-700 hover:file:bg-indigo-200"
              required
            />
            {formData.resume && (
              <div className="mt-3 text-sm text-gray-700 bg-gray-50 p-3 rounded-lg border border-dashed border-indigo-300">
                <p><strong>Selected File:</strong> {formData.resume.name}</p>
                <p><strong>Type:</strong> {formData.resume.type || "N/A"}</p>
                <p><strong>Size:</strong> {(formData.resume.size / 1024).toFixed(2)} KB</p>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-4xl">
        <h3 className="text-2xl font-bold text-indigo-700 mb-6">Application Tracker</h3>
        {applications.length === 0 ? (
          <p className="text-gray-600">No applications submitted yet.</p>
        ) : (
          <ul className="space-y-4">
            {applications.map((app) => (
              <li key={app.id} className="p-4 border rounded-lg shadow-sm bg-gray-50">
                <p><strong>Name:</strong> {app.name}</p>
                <p><strong>Email:</strong> {app.email}</p>
                <p><strong>Position:</strong> {app.position}</p>
                <p><strong>Resume:</strong> {app.resumeName} ({(app.resumeSize / 1024).toFixed(2)} KB)</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default JobApplication;

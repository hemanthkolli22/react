import React, { useState } from "react";

const Jobpostings = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    company: "",
    location: "",
    salary: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job title is required";
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.salary.trim()) newErrors.salary = "Salary is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess(false);
    } else {
      console.log("Form Submitted:", formData);
      setSuccess(true);
      setFormData({
        jobTitle: "",
        company: "",
        location: "",
        salary: "",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-indigo-200 px-6 py-10">
      <div className="bg-white/30 backdrop-blur-xl border border-white/50 shadow-lg rounded-3xl p-10 w-full max-w-xl transition-all duration-300">
        <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text mb-8">
          Post a New Job
        </h2>

        {success && (
          <div className="mb-4 p-3 text-green-800 bg-green-100 border border-green-300 rounded-md text-sm">
             Job posted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
        
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-white/80 border ${
                errors.jobTitle ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-indigo-400 focus:outline-none`}
            />
            {errors.jobTitle && <p className="text-xs text-red-500 mt-1">{errors.jobTitle}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-white/80 border ${
                errors.company ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-indigo-400 focus:outline-none`}
            />
            {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-white/80 border ${
                errors.location ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-indigo-400 focus:outline-none`}
            />
            {errors.location && <p className="text-xs text-red-500 mt-1">{errors.location}</p>}
          </div>

          {/* Salary */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">Salary</label>
            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-white/80 border ${
                errors.salary ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-indigo-400 focus:outline-none`}
            />
            {errors.salary && <p className="text-xs text-red-500 mt-1">{errors.salary}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default Jobpostings;

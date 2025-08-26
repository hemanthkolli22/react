import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bookmark, Heart } from "lucide-react";

const Jobcards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSalary, setSelectedSalary] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);
  const [heartJobs, setHeartJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [jobCounter, setJobCounter] = useState(0);

  const jobsPerPage = 3;
  const categories = ["All", "Frontend", "Backend", "UI/UX"];

  useEffect(() => {
    const fetchJobs = async () => {
      const mockData = [
        {
          id: 1,
          title: "Frontend Developer",
          company: "Amazon",
          location: "Hyderabad",
          category: "Frontend",
          salary: 80000,
          postedDate: "2025-07-20",
        },
        {
          id: 2,
          title: "Backend Developer",
          company: "Google",
          location: "Bangalore",
          category: "Backend",
          salary: 95000,
          postedDate: "2025-07-19",
        },
        {
          id: 3,
          title: "UI/UX Designer",
          company: "Adobe",
          location: "Delhi",
          category: "UI/UX",
          salary: 70000,
          postedDate: "2025-07-21",
        },
        {
          id: 4,
          title: "UX Designer",
          company: "Capgemini",
          location: "Chennai",
          category: "UI/UX",
          salary: 60000,
          postedDate: "2025-07-18",
        },
        {
          id: 5,
          title: "Full Stack Developer",
          company: "Microsoft",
          location: "Pune",
          category: "Frontend",
          salary: 110000,
          postedDate: "2025-07-22",
        },
        {
          id: 6,
          title: "Backend Engineer",
          company: "Technotask",
          location: "Mumbai",
          category: "Backend",
          salary: 55000,
          postedDate: "2025-07-17",
        },
        {
          id: 7,
          title: "Product Designer",
          company: "Flipkart",
          location: "Kolkata",
          category: "UI/UX",
          salary: 75000,
          postedDate: "2025-07-15",
        },
      ];
      await new Promise((resolve) => setTimeout(resolve, 500));
      setJobs(mockData);
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    let count = 0;
    const total = jobs.length;

    if (total > 0) {
      const interval = setInterval(() => {
        count += 1;
        setJobCounter(count);
        if (count >= total) clearInterval(interval);
      }, 80); // Speed of animation
      return () => clearInterval(interval);
    }
  }, [jobs]);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || job.category === selectedCategory;
    const matchesSalary =
      selectedSalary === "All" || job.salary >= parseInt(selectedSalary.replace(/,/g, ""));
    return matchesSearch && matchesCategory && matchesSalary;
  });

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + jobsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const toggleHeartmark = (jobId) => {
    setHeartJobs((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    );
  };

  const toggleBookmark = (jobId) => {
    setBookmarkedJobs((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    );
  };

  const formatPostedDate = (dateString) => {
    const postedDate = new Date(dateString);
    const today = new Date();
    const diffTime = today - postedDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return "Posted today";
    if (diffDays === 1) return "Posted 1 day ago";
    return `Posted ${diffDays} days ago`;
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Available Jobs: <span className="text-blue-600">{jobCounter}</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6 mb-10">
        <div className="w-full lg:w-2/4">
          <input
            type="text"
            placeholder="🔍 Search jobs or companies..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full p-3 pl-4 rounded-xl border border-blue-300 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-400"
          />
        </div>

        <div className="flex flex-col lg:flex-row w-full lg:w-2/4 gap-4">
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <select
            value={selectedSalary}
            onChange={(e) => {
              setSelectedSalary(e.target.value);
              setCurrentPage(1);
            }}
            className="p-3 w-full lg:w-auto rounded-xl border border-blue-300 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-400"
          >
            <option value="All">All Salaries</option>
            <option value="50000">50,000+</option>
            <option value="60000">60,000+</option>
            <option value="70000">70,000+</option>
            <option value="80000">80,000+</option>
            <option value="95000">95,000+</option>
            <option value="110000">1,10,000+</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentJobs.length > 0 ? (
          currentJobs.map((job) => (
            <div
              key={job.id}
              className="relative bg-white rounded-2xl shadow-md p-6 border border-gray-100 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl flex flex-col justify-between"
            >
              <button
                onClick={() => toggleHeartmark(job.id)}
                className="absolute top-4 right-11"
                aria-label="Toggle Bookmark"
              >
                <Heart
                  size={22}
                  fill={heartJobs.includes(job.id) ? "red" : "none"}
                  stroke="red"
                />
              </button>

              <button
                onClick={() => toggleBookmark(job.id)}
                className="absolute top-4 right-4"
                aria-label="Toggle Bookmark"
              >
                <Bookmark
                  size={22}
                  fill={bookmarkedJobs.includes(job.id) ? "black" : "none"}
                  stroke="black"
                />
              </button>

              <div>
                <h2 className="text-lg font-semibold text-blue-700 mb-1">
                  {job.title}
                </h2>
                <p className="text-gray-800 font-medium">{job.company}</p>
                <p className="text-sm text-gray-500">{job.location}</p>
                <p className="text-sm text-gray-600 mt-1">
                  Salary: ₹{job.salary.toLocaleString()}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {formatPostedDate(job.postedDate)}
                </p>
                <span
                  className={`inline-block text-sm font-medium px-3 py-1 rounded-full mt-3 ${
                    job.category === "Frontend"
                      ? "bg-blue-100 text-blue-700"
                      : job.category === "Backend"
                      ? "bg-green-100 text-green-700"
                      : "bg-pink-100 text-pink-700"
                  }`}
                >
                  {job.category}
                </span>
              </div>

              <Link to="/jobapplication" state={{ position: job.title }}>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl transition duration-200 mt-4">
                  Apply Now
                </button>
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              No Jobs Found
            </h2>
          </div>
        )}
      </div>

      {filteredJobs.length > jobsPerPage && (
        <div className="mt-10 flex justify-center items-center gap-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md text-white ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => handlePageChange(idx + 1)}
              className={`px-4 py-2 rounded-md font-semibold ${
                currentPage === idx + 1
                  ? "bg-blue-700 text-white"
                  : "bg-white border border-blue-400 text-blue-600 hover:bg-blue-100"
              }`}
            >
              {idx + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md text-white ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Jobcards;

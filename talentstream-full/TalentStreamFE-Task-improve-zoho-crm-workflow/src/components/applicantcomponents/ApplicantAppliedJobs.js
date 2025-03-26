import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apiUrl } from '../../services/ApplicantAPIService';
import { useUserContext } from '../common/UserProvider';
import './ApplicantFindJobs.css';

function ApplicantAppliedJobs({ setSelectedJobId }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUserContext();
  const applicantId = user.id;
  const navigate = useNavigate();
  const pageSize = 10; // for Pagination page Size
  const [pageNum, setPageNum] = useState(0); // for pagination page numbers
  const [totalPages, setTotalPages] = useState(1);//for pagination total pages
// for previous page pagination
  const handlePreviousPage = () => {
        if (pageNum > 0) setPageNum((prev) => prev - 1);
      };
// for next page pagination
      const handleNextPage = () => {
        if (pageNum < totalPages - 1) setPageNum((prev) => prev + 1); // Fixed logic
                  };
  

  const fetchAppliedJobs = useCallback(async () => {
    setLoading(true);//new line added
    try {
      const jwtToken = localStorage.getItem('jwtToken');
      const response = await axios.get(
        `${apiUrl}/applyjob/getAppliedJobs/${applicantId}?page=${pageNum}&size=${pageSize}`,//new api added
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching applied jobs:', error);
    } finally {
      setLoading(false);
    }
  }, [applicantId, pageNum]);// pageNum added for pagination

// for count calculate applied jobs for pagination
  const fetchTotalAppliedJobs = useCallback(async () => {
    try {
      const response = await axios.get(`${apiUrl}/applyjob/countAppliedJobs/${applicantId}`);
      const totalJobs = response.data || 0;
      setTotalPages( Math.ceil(totalJobs / pageSize)); // Ensures at least 1 page
    } catch (error) {
      console.error('Error fetching total applied jobs count:', error);
    }
  }, [applicantId]);
  
  useEffect(() => {
    fetchTotalAppliedJobs();
    fetchAppliedJobs();
  }, [fetchAppliedJobs, fetchTotalAppliedJobs]);//for applied total jons addes for pagination

// for console
  useEffect(() => {
    console.log("Total Pages:", totalPages, "Page Number:", pageNum);
  }, [totalPages, pageNum]);
  
 
  useEffect(() => {
    fetchTotalAppliedJobs().then(() => {
      fetchAppliedJobs();
    });
  }, [pageNum]); // Depend only on pageNum for pagination
  

  return (
    <div>
      {loading ? null : (
        <div className="dashboard__content">
          {/* Job List */}
          <div className="row mr-0 ml-10">
            <div className="col-lg-12 col-md-12">
              <section className="page-title-dashboard">
                <div className="themes-container">
                  <div className="title-dashboard">
                    <div className="title-dash flex2">My Applied Jobs</div>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-lg-12 col-md-12">
              <section className="flat-dashboard-setting flat-dashboard-setting2">
                <div className="themes-container">
                  <div className="content-tab">
                    <div className="inner">
                      <div className="group-col-2">
                        {jobs.length === 0 ? (
                          <div style={{ marginLeft: 30 }}>No Applied jobs available</div>
                        ) : (
                          jobs.map((job) => (
                            <div className="features-job cl2 bg-white" key={job.id}>
                              <div className="job-archive-header">
                                <div className="inner-box">
                                  <div className="box-content">
                                    <h4>
                                      <a href="javascript:void(0);">{job.companyname}</a>
                                    </h4>
                                    <h3>{job.jobTitle}</h3>
                                    <ul>
                                      <li>
                                        <span className="icon-map-pin"></span>&nbsp;{job.location}
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="job-archive-footer">
                                <div className="job-footer-left">
                                  <ul className="job-tag">
                                    <li>
                                      <a href="javascript:void(0);">{job.employeeType}</a>
                                    </li>
                                    <li>
                                      <a href="javascript:void(0);">
                                        {job.remote ? 'Remote' : 'Office-based'}
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:void(0);">
                                        Exp &nbsp;{job.minimumExperience} - {job.maximumExperience} years
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="job-footer-right">
                                  <button
                                    className="button-status"
                                    onClick={() => setSelectedJobId(job.applyJobId)}
                                  >
                                    Check Status
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>

                    {/* Pagination */}

                    <div className="pagination" style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px", gap: "10px" }}>
  <button
    onClick={handlePreviousPage}
    className="arrow-button"
    disabled={pageNum === 0}
    style={pageNum === 0 ? { opacity: 0.5, cursor: "not-allowed" } : {}}
  >
    <span aria-hidden="true">&lsaquo;</span> {/* Left Arrow */}
  </button>

  {/* Page Numbers */}
  {Array.from({ length: totalPages }, (_, i) => i + 1) // Map backend 0-indexed to frontend 1-indexed
    .filter((pageNumber) => {
      return (
        pageNumber <= 1 || // Show first page
        pageNumber === totalPages || // Show last page
        (pageNumber >= pageNum + 1 && pageNumber <= pageNum + 3) // Show pages near the current page
      );
    })
    .reduce((acc, pageNumber, index, array) => {
      if (index > 0 && pageNumber !== array[index - 1] + 1) {
        acc.push("...");
      }
      acc.push(pageNumber);
      return acc;
    }, [])
    .map((pageNumber, index) =>
      pageNumber === "..." ? (
        <span key={index} style={{ padding: "0 5px" }}>...</span>
      ) : (
        <button
          key={pageNumber}
          onClick={() => setPageNum(pageNumber - 1)} // Subtract 1 since backend uses 0 indexing
          className={pageNum === pageNumber - 1 ? "active" : ""}
          style={{ marginBottom: "5px" }}
        >
          {pageNumber} {/* Display page as pageNum + 1 */}
        </button>
      )
    )}

  <button
    onClick={handleNextPage}
    className="arrow-button"
    disabled={pageNum === totalPages - 1}
    style={pageNum === totalPages - 1 ? { opacity: 0.5, cursor: "not-allowed" } : {}}
  >
    <span aria-hidden="true">&rsaquo;</span> {/* Right Arrow */}
  </button>
</div>

                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ApplicantAppliedJobs;

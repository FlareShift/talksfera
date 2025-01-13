import React from "react";
import "./ComparisonTable.css";

const ComparisonTable = () => {
  return (
    <div className="comparison-table">
      <h2>
        <span className="highlight">TalkSfera</span> vs. traditional in-office therapy
      </h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Features</th>
              <th>TalkSfera</th>
              <th>In-office</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Qualified Therapists</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>In-Office Visits</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>24/7 Messaging</td>
              <td>Yes</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Real-Time Chat Sessions</td>
              <td>Yes</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Phone Sessions</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Video Sessions</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>AI Therapist Support</td>
              <td>Yes</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Smart Therapist Matching</td>
              <td>Yes</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Easy Scheduling</td>
              <td>Yes</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Courses and Training</td>
              <td>Yes</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Hands-On Training for Students</td>
              <td>Yes</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Support for Veterans</td>
              <td>Yes</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Flexible Therapist Switching</td>
              <td>Yes</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Digital Resources</td>
              <td>Yes</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Accessibility from Anywhere</td>
              <td>Yes</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;

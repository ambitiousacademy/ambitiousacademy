import React from 'react';
 import { Link } from 'react-router-dom';
import './styles.css';

const WorkshopDetails: React.FC = () => {
  return (
    <div className="workshop-container">
      <h1 className="workshop-title">Workshop on Moot Court</h1>
      <p><strong>Duration:</strong> One Week</p>
      <p><strong>Objective:</strong> This workshop aims to provide law students with a comprehensive understanding of moot court procedures, enhance their legal research and argumentation skills, and boost their confidence in public speaking and legal advocacy.</p>
      
      <h2>Workshop Benefits:</h2>
      <ul>
        <li>In-depth Understanding of Moot Court Procedures</li>
        <li>Legal Research Skills</li>
        <li>Argumentation and Brief Writing</li>
        <li>Oral Advocacy</li>
        <li>Public Speaking and Presentation Skills</li>
        <li>Teamwork and Collaboration</li>
      </ul>
      
      <h2>Workshop Structure:</h2>
      <h3>Day 1: Introduction to Moot Court</h3>
      <ul>
        <li>Welcome and Overview of the Workshop</li>
        <li>Introduction to Moot Court: History, Purpose, and Importance</li>
        <li>Understanding the Structure of a Moot Court Competition</li>
        <li>Roles and Responsibilities of Participants (Judges, Advocates, Researchers)</li>
        <li>Introduction to Legal Research: Sources and Methods</li>
      </ul>
      <h3>Day 2: Legal Research and Analysis</h3>
      <ul>
        <li>Advanced Legal Research Techniques</li>
        <li>Identifying and Analyzing Relevant Case Law</li>
        <li>Practical Research Exercise: Case Study Analysis</li>
        <li>Group Discussion and Feedback</li>
      </ul>
      {/* Add other days similarly */}
      
      <div className="register-button-container">
        <Link to="/register">
          <button className="register-button">Register Now</button>
        </Link>
      </div>
    </div>
  );
};

export default WorkshopDetails;

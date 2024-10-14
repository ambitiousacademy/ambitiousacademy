"use client"
import React from 'react';
// import { Link } from 'react-router-dom';
import '/src/app/styles.css';

const WorkshopDetails: React.FC = () => {
  return (
    <div className="workshop-container">
           {/* Price and Register Box */}
        <div className="price-register-box">
        <p className="price-text">₹1000/- (50% off on <del>₹2000/-</del>)</p>
        <button className="register-button"><a href="https://forms.gle/EoxFvgG3dHqzvRRT9">Register Now</a></button>
      </div>
      <h1 className="workshop-title">Workshop on Moot Court</h1>
      <p><strong>Duration:</strong> One Week</p>
      <p><strong>Objective:</strong> This workshop aims to provide law students with a comprehensive understanding of moot court procedures, enhance their legal research and argumentation skills, and boost their confidence in public speaking and legal advocacy.</p>
      
      <h2>Workshop Benefits:</h2>
      <ul>
        <li><b>In-depth Understanding of Moot Court Procedures:</b> Students will learn the intricacies of moot court, including the roles of participants, stages of a moot court competition, and the overall process.
        </li>
        <li><b>Legal Research Skills:</b>The workshop will cover effective legal research techniques, helping students to gather relevant case law, statutes, and legal principles to support their arguments.
        </li>
        <li><b>Argumentation and Brief Writing:</b> Participants will be trained in crafting persuasive arguments and writing concise, compelling briefs.
        </li>
        <li><b>Oral Advocacy:</b>Students will develop their oral advocacy skills through practice sessions and receive feedback from experienced legal professionals.</li>
        <li><b>Public Speaking and Presentation Skills:</b>The workshop will help students improve their public speaking abilities, focusing on clarity, confidence, and persuasive delivery.
        </li>
        <li><b>Teamwork and Collaboration:</b>Participants will engage in group activities that foster teamwork and collaborative problem-solving.
        </li>
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
      <h3>Day 3: Brief Writing</h3>
      <ul>
        <li>Fundamentals of Brief Writing: Structure and Style</li>
        <li>Crafting Strong Legal Arguments</li>
        <li>Writing Exercise: Drafting a Sample Brief</li>
        <li>Peer Review and Feedback</li>
      </ul>
<h3>Day 4: Oral Advocacy Skills</h3>
      <ul>
        <li>Principles of Effective Oral Advocacy</li>
        <li>Techniques for Persuasive Speaking</li>
        <li>Practice Sessions: Delivering Opening Statements</li>
        <li>Individual Feedback and Improvement Tips</li>
      </ul>

<h3>Day 5: Simulated Moot Court Preparation</h3>
      <ul>
        <li>Understanding Moot Court Problems and Issues</li>
        <li>Strategy Development for Moot Court Cases</li>
        <li>Team Formation and Role Assignment</li>
        <li>Case Analysis and Argument Preparation</li>
      </ul>


<h3>Day 6: Simulated Moot Court Rounds</h3>
      <ul>
        <li>First Round of Simulated Moot Court</li>
        <li>Judges' Feedback and Evaluation</li>
        <li>Second Round of Simulated Moot Court</li>
        <li>Group Debrief and Discussion</li>
      </ul>


<h3>Day 7: Final Presentations and Wrap-Up</h3>
      <ul>
        <li>Final Round of Simulated Moot Court</li>
        <li>Comprehensive Feedback from Judges and Instructors</li>
        <li>Workshop Review and Reflection</li>
        <li>Certificates and Closing Remarks</li>
      </ul>

<p>By the end of the week, students will have gained practical experience in moot court proceedings, honed their legal research and writing skills, and enhanced their ability to present and argue cases effectively. This workshop will not only prepare students for moot court competitions but also provide valuable skills for their future legal careers.
</p>
      {/* Add other days similarly */}
      
        {/* <div className="register-button-container">
      
            <button className="register-button"><a href="https://forms.gle/EoxFvgG3dHqzvRRT9">Register Now</a></button>
          
        </div> */}
    </div>
  );
};

export default WorkshopDetails;

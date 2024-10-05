import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>William James R. Canlas</h1>
        <p>Email: william.james@example.com</p>
        <p>Phone: +63 966-446-7267</p>
        <p>Location: Sta. Ana Pampanga Philippines</p>
        <p>
          LinkedIn: <a href="https://linkedin.com/in/williamjames" target="_blank" rel="noopener noreferrer">linkedin.com/in/williamjames</a>
        </p>
        <hr />
      </header>

      <section>
        <h2>Education</h2>
        <ul>
          <li>
            <h3>Bachelor of Science in Information Technology</h3>
            <p>University of the Assumption, 2022 - 2026</p>
          </li>
        </ul>
        <hr />
      </section>

      <section>
        <h2>Experience</h2>
        <ul>
          <li>
            <h3>Software Engineer</h3>
            <p></p>
            <p>Working on full-stack web development with React and Node.js, building scalable applications.</p>
          </li>
          <li>
            <h3>Intern Developer</h3>
            <p></p>
            <p>Assisted in developing front-end components for an e-commerce platform using React and Redux.</p>
          </li>
        </ul>
        <hr />
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>JavaScript (React, Node.js)</li>
          <li>HTML5 & CSS3</li>
          <li>Version Control (Git, GitHub)</li>
          <li>Databases (MongoDB, MySQL)</li>
          <li>Agile Development</li>
        </ul>
        <hr />
      </section>
    </div>
  );
}

export default App;
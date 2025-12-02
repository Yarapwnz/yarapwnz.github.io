import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';
import Contact from './Contact';
import Resume from './Resume';

const Pages = ({ user }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Me user={user} />} />
        <Route path="/projects" element={<Projects user={user} />} />
        <Route path="/work" element={<Work user={user} />} />
        <Route path="/education" element={<Education user={user} />} />
        <Route path="/contact" element={<Contact user={user} />} />
        <Route path="/resume" element={<Resume user={user} />} />
      </Routes>
    </Router>
  );
};

export default Pages;
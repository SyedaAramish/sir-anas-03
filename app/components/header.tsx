// src/app/components/header.tsx

"use client"; // Marking this component as a Client Component

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null); // State for hovered item

  return (
    <header style={{ padding: '20px', backgroundColor: '#34495e', color: '#ecf0f1', textAlign: 'center' }}>
      <h1 style={{ margin: '0', fontSize: '2rem' }}>Aramish's Website Header</h1>
      <nav>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li
            style={{
              display: 'inline',
              margin: '0 15px',
              color: hoveredItem === 'home' ? '#f39c12' : '#ecf0f1', // Change color on hover
              cursor: 'pointer',
            }}
            onMouseEnter={() => setHoveredItem('home')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            style={{
              display: 'inline',
              margin: '0 15px',
              color: hoveredItem === 'about' ? '#f39c12' : '#ecf0f1', // Change color on hover
              cursor: 'pointer',
            }}
            onMouseEnter={() => setHoveredItem('about')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link href="/about-us">About Us</Link>
          </li>
          <li
            style={{
              display: 'inline',
              margin: '0 15px',
              color: hoveredItem === 'apply' ? '#f39c12' : '#ecf0f1', // Change color on hover
              cursor: 'pointer',
            }}
            onMouseEnter={() => setHoveredItem('apply')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link href="/apply">Apply</Link>
          </li>
          <li
            style={{
              display: 'inline',
              margin: '0 15px',
              color: hoveredItem === 'jobs' ? '#f39c12' : '#ecf0f1', // Change color on hover
              cursor: 'pointer',
            }}
            onMouseEnter={() => setHoveredItem('jobs')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link href="/jobs">Jobs</Link>
          </li>
          <li
            style={{
              display: 'inline',
              margin: '0 15px',
              color: hoveredItem === 'contact' ? '#f39c12' : '#ecf0f1', // Change color on hover
              cursor: 'pointer',
            }}
            onMouseEnter={() => setHoveredItem('contact')}
            onMouseLeave={() => setHoveredItem(null)}
          >

<Link href="/portfolio">Portfolio</Link>
          </li>
          <li
            style={{
              display: 'inline',
              margin: '0 15px',
              color: hoveredItem === 'portfolio' ? '#f39c12' : '#ecf0f1', // Change color on hover
              cursor: 'pointer',
            }}
            onMouseEnter={() => setHoveredItem('portfolio')}
            onMouseLeave={() => setHoveredItem(null)}
          >




            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

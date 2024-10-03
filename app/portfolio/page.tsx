// src/app/portfolio/page.tsx

import React from 'react';

const PortfolioPage = () => {
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">My Creative Portfolio</h1>
      <p className="portfolio-subtitle">A Showcase of My Best Works and Projects</p>

      <div className="portfolio-gallery">
        <div className="portfolio-item item-1">Project 1</div>
        <div className="portfolio-item item-2">Project 2</div>
        <div className="portfolio-item item-3">Project 3</div>
        <div className="portfolio-item item-4">Project 4</div>
        <div className="portfolio-item item-5">Project 5</div>
        <div className="portfolio-item item-6">Project 6</div>
      </div>
    </div>
  );
};

export default PortfolioPage;

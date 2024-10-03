// src/app/page.tsx

import Header from './components/header';
import Footer from './components/footer'; // Import the footer

export default function Home() {
  return (
    <div className="page-container">
      <Header />
      <main>
        <section className="hero">
          <h1 className="welcome-text">WELCOME TO WEBSITE</h1>
          <p className="built-by">BUILT BY SYEDA ARAMISH (SUNDAY 9-12) SIR ANAS</p>
        </section>
      </main>
      <Footer /> {/* Place footer here */}
    </div>
  );
}


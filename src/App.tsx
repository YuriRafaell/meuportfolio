import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
          <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
              <p>&copy; {new Date().getFullYear()} Yuri Araújo. Todos os direitos reservados.</p>
            </div>
          </footer>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
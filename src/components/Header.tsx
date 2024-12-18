import React from 'react';
import { Menu, Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-gray-900 dark:text-white">Portfolio</div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('nav.home')}</a>
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('nav.about')}</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('nav.projects')}</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('nav.contact')}</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <ThemeToggle />
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FileDown size={16} className="mr-1" />
              CV
            </a>
            <div className="flex items-center space-x-4 ml-4">
              <a href="https://github.com/YuriRafaell" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/steffany-jennyfer-04762b200/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="mailto:yuri.araujo.709@ufrn.edu.br" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <button className="md:hidden text-gray-600 dark:text-gray-300">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
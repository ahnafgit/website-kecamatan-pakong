import { renderNavbar } from './components/Navbar.js';
import { renderFooter } from './components/Footer.js';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // Render Shared Components
  const navContainer = document.getElementById('navbar');
  const footerContainer = document.getElementById('footer');

  if (navContainer) navContainer.innerHTML = renderNavbar();
  if (footerContainer) footerContainer.innerHTML = renderFooter();

  // Mobile Menu Logic (to be added)
  console.log('Kecamatan Pakong Website Loaded');
});

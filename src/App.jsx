import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ArrowLeft, HeartPulse } from 'lucide-react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import Emergency from './modules/emergency/index.js';
import DoctorDashboard from './modules/doctor-dashboard/index.js';
import Laboratory from './modules/laboratory/index.js';
import Pharmacy from './modules/pharmacy/index.js';
import Reporting from './modules/reporting/index.js';

function NotFound(){return <main className="container not-found"><div className="code">404</div><div className="eyebrow" style={{justifyContent:'center'}}>We couldn't find that page</div><h1>Let's get you back to care.</h1><p>The page may have moved, or the address may be incomplete.</p><Link to="/" className="btn"><ArrowLeft size={15}/> Back to CityCare</Link><div style={{marginTop:24,color:'#8aa0a5'}}><HeartPulse size={24}/></div></main>}
function RoutedPages(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo({top:0,behavior:'smooth'})},[pathname]);return <><Navbar/><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/contact" element={<Contact/>}/><Route path="/emergency" element={<Emergency/>}/><Route path="/doctor-dashboard" element={<DoctorDashboard/>}/><Route path="/laboratory" element={<Laboratory/>}/><Route path="/pharmacy" element={<Pharmacy/>}/><Route path="/reporting" element={<Reporting/>}/><Route path="*" element={<NotFound/>}/></Routes><Footer/></>}
export default function App(){return <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}><RoutedPages/></BrowserRouter>}

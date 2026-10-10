import { Link } from 'react-router-dom';
import { HeartPulse, MapPin, Phone, Mail, Clock } from 'lucide-react';
export default function Footer(){return <footer className="footer"><div className="container"><div className="footer-grid">
  <div><Link to="/" className="brand"><span className="brand-mark"><HeartPulse size={21}/></span><span>CityCare<small>COMMUNITY HOSPITAL</small></span></Link><p className="footer-about">Thoughtful care, close to home. Your neighborhood hospital for life's important moments.</p></div>
  <div><h4>Explore</h4><div className="footer-links"><Link to="/about">Our hospital</Link><Link to="/services">Care & services</Link><Link to="/contact">Contact us</Link><Link to="/doctor-dashboard">Care team demo</Link></div></div>
  <div><h4>Care systems</h4><div className="footer-links"><Link to="/emergency">Emergency</Link><Link to="/laboratory">Laboratory</Link><Link to="/pharmacy">Pharmacy</Link><Link to="/reporting">Reporting</Link></div></div>
  <div><h4>Visit CityCare</h4><div className="footer-contact"><span><MapPin size={15}/> 214 Willow Avenue, Brookside</span><span><Phone size={15}/> (555) 014-2200</span><span><Mail size={15}/> hello@citycare.example</span><span><Clock size={15}/> Emergency care, 24 hours</span></div></div>
  </div><div className="footer-bottom"><span>© 2025 CityCare Hospital. Care belongs close to home.</span><span>Demo experience · No patient data is collected</span></div></div></footer>}

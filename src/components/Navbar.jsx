import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, HeartPulse, Phone } from 'lucide-react';

const links = [['Home','/'],['About','/about'],['Services','/services'],['Contact','/contact']];
export default function Navbar(){
  const [open,setOpen]=useState(false);
  return <><div className="topline"><div className="container topline-inner"><span><HeartPulse size={14}/> Here for you, every day</span><span className="hide-mobile"><Phone size={13}/> Care line <strong>(555) 014-2200</strong> &nbsp;·&nbsp; 24-hour emergency</span></div></div><header className="navbar"><div className="container nav-inner">
    <Link to="/" className="brand" onClick={()=>setOpen(false)}><span className="brand-mark"><HeartPulse size={21}/></span><span>CityCare<small>COMMUNITY HOSPITAL</small></span></Link>
    <nav className={`nav-links ${open?'open':''}`} aria-label="Main navigation">{links.map(([name,path])=><NavLink key={path} to={path} end={path==='/'} className={({isActive})=>isActive?'active':''} onClick={()=>setOpen(false)}>{name}</NavLink>)}</nav>
    <Link to="/contact" className="nav-cta"><Phone size={15}/> Get in touch</Link>
    <button className="menu-button" onClick={()=>setOpen(!open)} aria-label={open?'Close menu':'Open menu'}>{open?<X/>:<Menu/>}</button>
  </div></header></>
}

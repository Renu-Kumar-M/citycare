import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function ServiceCard({title,description,icon:Icon,href}){return <Link to={href} className="service-card"><span className="service-icon">{Icon&&<Icon size={22}/>}</span><h3>{title}</h3><p>{description}</p><span className="service-arrow"><ArrowUpRight size={16}/></span></Link>}

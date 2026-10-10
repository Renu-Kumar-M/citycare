import { Activity, UsersRound, Clock3 } from 'lucide-react';
import { getAnalytics } from '../../services/reportingService.js';
const analytics=getAnalytics();
const metricIcons=[UsersRound,Activity,Clock3];
export default function Analytics(){return <><div className="metric-grid">{analytics.metrics.map(([label,value,detail],index)=>{const Icon=metricIcons[index];return <div className="metric" key={label}><small>{label}</small><strong>{value}</strong><em><Icon size={12}/> {detail}</em></div>})}</div><section className="panel" style={{marginBottom:20}}><div className="panel-title"><div><h2>Patient visits</h2><small style={{color:'#81969c'}}>Daily activity · sample counts</small></div><span className="pill">1,284 total</span></div><div className="bar-chart" aria-label="Sample visits each day">{analytics.visits.map(([day,height],i)=><div className="bar-col" key={i}><div className="bar" style={{height:`${height}%`}}/><span>{day}</span></div>)}</div></section></>}

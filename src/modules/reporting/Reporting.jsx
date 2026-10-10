import Analytics from './Analytics.jsx';
import ReportsList from './ReportsList.jsx';
export default function Reporting(){return <main className="container module-page"><div className="module-title"><div><div className="eyebrow">Care operations / Insights</div><h1>Reporting & analytics</h1><p>A snapshot of service activity across the CityCare community.</p></div><span className="pill blue">Last 7 days · Sample</span></div><Analytics/><div className="panel"><div className="panel-title"><h2>Recent reports</h2><span className="pill">Illustrative output</span></div><ReportsList/></div></main>}

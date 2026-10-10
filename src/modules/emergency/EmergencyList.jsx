import { getEmergencyCases } from '../../services/emergencyService.js';
const cases=getEmergencyCases();
export default function EmergencyList(){return <div className="table-wrap"><table className="data-table"><thead><tr><th>Case</th><th>Patient</th><th>Reason</th><th>Priority</th><th>Wait</th></tr></thead><tbody>{cases.map(r=><tr key={r[0]}><td><strong>{r[0]}</strong></td><td>{r[1]}</td><td>{r[2]}</td><td><span className={`pill ${r[3]==='Immediate'?'alert':r[3]==='Urgent'?'warn':''}`}>{r[3]}</span></td><td>{r[4]}</td></tr>)}</tbody></table></div>}

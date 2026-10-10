import { APPOINTMENTS } from '../../utils/constants.js';
const appointments=APPOINTMENTS;
export default function ScheduleView(){return <div className="table-wrap"><table className="data-table"><thead><tr><th>Time</th><th>Patient</th><th>Visit</th><th>Status</th></tr></thead><tbody>{appointments.map(r=><tr key={r[0]}><td><strong>{r[0]}</strong></td><td>{r[1]}</td><td>{r[2]}</td><td><span className={`pill ${r[3]==='In room'?'warn':''}`}>{r[3]}</span></td></tr>)}</tbody></table></div>}

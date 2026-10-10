import { getLabTests } from '../../services/labService.js';
const tests=getLabTests();
export default function LabTestList(){return <div className="table-wrap"><table className="data-table"><thead><tr><th>Test ID</th><th>Test</th><th>Patient</th><th>Status</th><th>Time</th></tr></thead><tbody>{tests.map(r=><tr key={r[0]}><td>{r[0]}</td><td><strong>{r[1]}</strong></td><td>{r[2]}</td><td><span className={`pill ${r[3]==='In progress'?'warn':r[3]==='Collected'?'blue':''}`}>{r[3]}</span></td><td>{r[4]}</td></tr>)}</tbody></table></div>}

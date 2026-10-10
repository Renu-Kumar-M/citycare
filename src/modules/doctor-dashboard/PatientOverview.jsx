import { ArrowUpRight } from 'lucide-react';
import { PATIENT_OVERVIEW } from '../../utils/constants.js';
const patients=PATIENT_OVERVIEW;
export default function PatientOverview(){return <div className="mini-list">{patients.map(p=><div className="mini-row" key={p[0]}><div><strong>{p[1]}</strong><small>{p[0]} · {p[2]}</small></div><span>{p[3]} <ArrowUpRight size={13}/></span></div>)}</div>}

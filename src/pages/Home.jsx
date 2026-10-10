import { Link } from "react-router-dom";
import {
  Ambulance,
  ArrowRight,
  ChartNoAxesCombined,
  CheckCircle2,
  FlaskConical,
  HeartHandshake,
  Pill,
  Stethoscope,
} from "lucide-react";
import Hero from "../components/Hero.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import StatsCard from "../components/StatsCard.jsx";
import { DOCTORS, SERVICE_CARDS, STATS } from "../utils/constants.js";

const serviceIcons = {
  "Emergency Module": Ambulance,
  "Doctor Dashboard": Stethoscope,
  Laboratory: FlaskConical,
  Pharmacy: Pill,
  Reporting: ChartNoAxesCombined,
};
const services = SERVICE_CARDS.map((service) => ({
  ...service,
  icon: serviceIcons[service.title],
}));

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Care, made connected</div>
              <h2>One community. Many ways to care.</h2>
            </div>
            <p>
              Meet the people, services, and thoughtful systems helping our
              neighborhood feel better.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats-row">
          {STATS.map((stat) => (
            <StatsCard key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div className="about-visual">
            <HeartHandshake size={128} strokeWidth={1.1} />
            <div className="about-quote">
              “Good care starts with listening.”
              <br />
              <strong>— The CityCare team</strong>
            </div>
          </div>
          <div className="about-copy">
            <div className="eyebrow">People first, always</div>
            <h2>A hospital that feels like part of your neighborhood.</h2>
            <p>
              For more than three decades, CityCare has brought expert care
              closer to home. We believe good healthcare is personal,
              understandable, and built around the life you live.
            </p>
            <ul className="check-list">
              <li><CheckCircle2 size={17} /> Familiar faces and clear next steps</li>
              <li><CheckCircle2 size={17} /> Care designed for every generation</li>
              <li><CheckCircle2 size={17} /> A local team available when you need us</li>
            </ul>
            <Link to="/about" className="btn">
              Get to know CityCare <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#edf5f3" }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Meet your care team</div>
              <h2>Skilled hands. Kind hearts.</h2>
            </div>
            <p>
              A few of the friendly specialists you’ll find around CityCare.
              Profiles shown here are illustrative.
            </p>
          </div>
          <div className="doctor-grid">
            {DOCTORS.map((doctor) => (
              <article className="doctor-card" key={doctor.name}>
                <div className="doctor-avatar">
                  <img
                    src={`${import.meta.env.BASE_URL}${doctor.image}`}
                    alt={`Illustrative portrait of ${doctor.name}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <h3>{doctor.name}</h3>
                <p>{doctor.specialty}</p>
                <span className="doctor-specialty">CityCare medical team</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-band">
        <div className="container contact-panel">
          <div>
            <div className="eyebrow">We’re close by</div>
            <h2>Questions? Start here.</h2>
            <p>Our team can help you find the right place to begin.</p>
          </div>
          <Link to="/contact" className="btn">
            Contact CityCare <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}

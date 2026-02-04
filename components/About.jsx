import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <section className="about">
      <h2>ABOUT ME</h2>
      <p className="subtitle">
        Hi, I'm <span>Alan</span> and I'm here to bring your channel to the next
        level with video editing
      </p>

      <div className="about-card">
        <ul>
          <li>
            <strong>SPECIALIZATION</strong>
            <p>25-year-old Brazilian video editor focused on high-retention short-form content.</p>
          </li>
          <li>
            <strong>EXPERIENCE</strong>
            <p>1 year of hands-on experience creating edits that hook fast.</p>
          </li>
          <li>
            <strong>PROFESSIONALISM</strong>
            <p>Clear communication, fast responses, and respect for deadlines.</p>
          </li>
          <li>
            <strong>VALUE</strong>
            <p>Consistency and clarity to help you scale without stress.</p>
          </li>
        </ul>
      </div>

      <div className="profile">
        <img src={profile} alt="Alan Roger" />
        <h3>Alan Roger</h3>
        <span>SHORT-FORM CONTENT SPECIALIST</span>
      </div>
    </section>
  );
}
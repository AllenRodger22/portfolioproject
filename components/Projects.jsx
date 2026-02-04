export default function Projects() {
  const videos = [
    "https://www.youtube.com/embed/VIDEO1",
    "https://www.youtube.com/embed/VIDEO2",
    "https://www.youtube.com/embed/VIDEO3",
    "https://www.youtube.com/embed/VIDEO4",
  ];

  return (
    <section className="projects" id="projects">
      <span className="eyebrow blue">PROVEN RESULTS</span>
      <h2>Recent Projects</h2>

      <div className="projects-grid">
        {videos.map((src, i) => (
          <div className="video-card" key={i}>
            <iframe
              src={src}
              title={`Project ${i}`}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </section>
  );
}
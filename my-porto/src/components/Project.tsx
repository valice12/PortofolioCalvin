function Projects() {
  const projects = [
    { title: "Portfolio Website", link: "#", desc: "Website pribadi dengan React & Tailwind" },
    { title: "Stock Prediction App", link: "#", desc: "Prediksi harga saham dengan LSTM" },
    { title: "Face Recognition Attendance", link: "#", desc: "Absensi dengan Face Recognition" }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 w-full">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-600">{p.desc}</p>
              <a href={p.link} className="text-blue-600 mt-3 inline-block">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

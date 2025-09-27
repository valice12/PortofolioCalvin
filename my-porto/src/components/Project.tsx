import { useState } from "react";

function Projects() {
  const [selectedProject, setSelectedProject] = useState<null | number>(null);

  const projects = [
    { 
      title: "Portfolio Website", 
      link: "#", 
      desc: "Website pribadi dengan React & Tailwind", 
      image: "/portfolio.png" 
    },
    { 
      title: "Stock Prediction App", 
      link: "https://colab.research.google.com/drive/1zRiR78QAUh0D-wN7gX6SAoMZ9DV5wG2z#scrollTo=isoU-MvF44lJ", 
      desc: "Prediksi harga saham dengan LSTM", 
      image: "/Stock Market Prediction Using LSTM.png" 
    },
    { 
      title: "myFilea", 
      link: "https://www.figma.com/proto/K3JvK0TExurQqIvgUENhDw/myFilea?node-id=1038-810&starting-point-node-id=1038%3A810", 
      desc: "Pembuatan Front End untuk Website Reservasi lapangan secara online", 
      image: "/myFilea.png" 
    },
    { 
      title: "Vkellog's", 
      link: "https://www.figma.com/proto/60yt7Otf9LDPa6i4eDiLR4/Vkellogg-s-Figma?node-id=1-2&t=ynxe1TUm4zmF1zFW-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=12%3A29&hide-ui=1", 
      desc: "Project Akhir untuk Pembuatan Front End berdasarkan website yang sudah ada", 
      image: "/VKellog's.png" 
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 w-full">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-black">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedProject(index)}
            >
              <img src={p.image} alt={p.title} className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold text-black">{p.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
            <button 
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
            <img 
              src={projects[selectedProject].image} 
              alt={projects[selectedProject].title} 
              className="w-full h-60 object-cover rounded mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{projects[selectedProject].title}</h3>
            <p className="text-gray-700 mb-4">{projects[selectedProject].desc}</p>
            <a 
              href={projects[selectedProject].link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              View Project
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;

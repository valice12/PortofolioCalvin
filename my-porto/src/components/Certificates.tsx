import { useState } from "react";

function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    { title: "Freshmen Leader", issuer: "Freshmen Leader", image: "/Freshmen Leader.png" },
    { title: "Career Development with Astra Otoparts", issuer: "Astra Otoparts", image: "/Astra Otoparts.png" },
  ];

  return (
    <section id="certificates" className="py-20 bg-white w-full flex flex-col items-center">
      <div className="mx-auto px-4 sm:px-6 text-center w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-6 text-black">Certificates</h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center lg:flex lg:justify-center lg:flex-wrap">
          {certificates.map((c, index) => (
            <li
              key={index}
              className="p-4 border rounded-lg shadow-md flex flex-col items-center cursor-pointer bg-white hover:shadow-lg transition"
              onClick={() => setSelectedImage(c.image)}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-64 h-auto rounded-lg shadow hover:scale-105 transition"
                />
              </div>
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-gray-500">{c.issuer}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()} // biar gak close saat klik gambar
          >
            <button
              className="absolute -top-6 -right-6 bg-white rounded-full p-2 shadow hover:bg-gray-200"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;

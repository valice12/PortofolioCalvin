import { useState } from "react";

function Certificates() {
  const  [selectedImage, setSelectedImage] = useState<string |null>(null);

  const certificates = [
    { title: "Freshmen Leader", issuer: "Freshmen Leader", image: "/Freshmen Leader.png"},
    { title: "Career Development with Astra Otoparts", issuer: "Astra Otoparts", image: "/Astra Otoparts.png"},

  ];

  return (
    <section id="certificates" className="py-20 bg-white w-full flex flex-col items-center">
      <div className="mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-black">Certificates</h2>
        <ul className="space-y-4">
          {certificates.map((c, index) => (
            <li key={index} className="p-4 border rounded-lg shadow-md flex flex-col items-center w-[1080px]" onClick={()=> setSelectedImage(c.image)}>
              <div className="flex justify-center mb-4 cursor-pointer" >
                <img src={c.image} alt={c.title} className="w-64 h-auto rounded-lg mb-4 shadow hover:scale-105"/>
              </div>
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-gray-500">{c.issuer}</p>
            </li>
          ))}
        </ul>
      </div>

      {/*Modal*/}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}>
            <img src={selectedImage} alt="Certificate" className="max-w-4xl w-full h-auto rounded-lg shadow-lg" />
        </div>
      )}
    </section>
  );
}

export default Certificates;
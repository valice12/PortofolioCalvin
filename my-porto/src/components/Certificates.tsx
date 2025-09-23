function Certificates() {
  const certificates = [
    { title: "Dicoding Frontend Developer", issuer: "Dicoding" },
    { title: "AWS Cloud Practitioner", issuer: "Amazon" },
  ];

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Certificates</h2>
        <ul className="space-y-4">
          {certificates.map((c, index) => (
            <li key={index} className="p-4 border rounded-lg shadow-sm">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-gray-500">{c.issuer}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Certificates;

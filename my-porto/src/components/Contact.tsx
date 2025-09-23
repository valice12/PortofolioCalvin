function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-700">Hubungi saya di:</p>
        <div className="mt-4 space-y-2">
          <a href="mailto:youremail@example.com" className="text-blue-600 block">📧 youremail@example.com</a>
          <a href="https://github.com/username" target="_blank" className="text-blue-600 block">🐙 GitHub</a>
          <a href="https://linkedin.com/in/username" target="_blank" className="text-blue-600 block">💼 LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;


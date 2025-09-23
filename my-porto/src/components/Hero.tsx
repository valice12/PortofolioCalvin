function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <img src="/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-6" />
      <h1 className="text-4xl font-bold">Calvin Aritama</h1>
      <p className="text-lg mt-3">Web Developer | React Enthusiast</p>
      <a
        href="#contact"
        className="mt-6 px-6 py-2 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100 transition"
      >
        Contact Me
      </a>
    </section>
  );
}

export default Hero;

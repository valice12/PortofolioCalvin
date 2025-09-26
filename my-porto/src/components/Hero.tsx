function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 overflow-hidden">
      <div className="absolute top-10 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff" fillOpacity="1" d="M0,256L80,224C160,192,320,128,480,112C640,96,800,128,960,138.7C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>

      <div className="relative flex flex-col justify-center items-center text-center">
        <div className="w-32 h-32 border-2 border-white rounded-full flex items-center justify-center overflow-hidden shadow-lg">
          <img
            src="/Profile.jpg"
            alt="Foto Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
          Calvin Aritama
        </h1>
        <p className="text-sm md:text-base text-white/90">
          Full-Stack Minded | Data Enthusiast
        </p>
        <button className="mt-6 px-6 py-2 bg-white text-blue-600 rounded-xl shadow-md hover:scale-105 transition-transform">
          Contact Me
        </button>
      </div>
    </section>
  );
}

export default Hero;

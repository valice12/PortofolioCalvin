function Hero() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <div className="w-32 h-32 border-2 border-white rounded-full flex items-center justify-center">
          <img src="/Profile.jpg" alt="Fot Profile" className="w-full h-full object-cover rounded-full"/>
        </div>
        <h1 className="mt-4 text-2xl font-bold">Calvin Aritama</h1>
        <p className="text-sm">Full-Stack Minded | Data Entusiast</p>
        <button className="mt-4 px-4 py-2 bg-white text-blue-600 rounded">Contact Me</button>
      </div>
    </section>
  );
}

export default Hero;

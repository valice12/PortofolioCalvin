import { FaJava, FaJs, FaPython, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiC } from "react-icons/si";

function About() {
  return (
    <section id="about" className="bg-white w-full relative">

       {/* Hiasan background */}
      <div className="absolute top-20 left-10 w-40 h-20 bg-blue-300 rounded-full blur-3 opacity-30 -z-5"></div>
      <div className="absolute top-20 right-10 w-20 h-40 bg-purple-400 rounded-full blur-3 opacity-30 -z-5"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-blue-300 rounded-full z-20"></div>



      <svg
        className="absolute top-0 right-0 w-64 h-64 opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="smallGrid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="2" fill="gray" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#smallGrid)" />
      </svg>

      <svg
        className="absolute bottom-0 ;eft-0 w-64 h-64 opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="smallGrid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="2" fill="gray" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#smallGrid)" />
      </svg>

      <div className="w-full min-h-screen mx-auto px-6 py-16 text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-6 text-black">About Me</h2>
        <p className="text-gray-700 leading-relaxed max-w-2xl">
          Saya seorang mahasiswa dan web developer yang suka membangun aplikasi
          dengan React dan TypeScript. Saya memiliki kemampuan dibidang front-end, 
          back-end, dan juga pengolahan data.
        </p>

        {/* Skill Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-black mb-4">Skills</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <FaJava className="text-5xl text-red-600 mb-2" />
              <span>Java</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <FaJs className="text-5xl text-yellow-400 mb-2" />
              <span>JavaScript</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <FaPython className="text-5xl text-blue-500 mb-2" />
              <span>Python</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <SiC className="text-5xl text-gray-600 mb-2" />
              <span>C</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <FaHtml5 className="text-5xl text-orange-600 mb-2" />
              <span>HTML</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <FaCss3Alt className="text-5xl text-blue-600 mb-2" />
              <span>CSS</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <FaDatabase className="text-5xl text-green-600 mb-2" />
              <span>SQL</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-100 to-transparent "></div>
    </section> 
  );
}

export default About;

function Navbar(){
    return(
        <nav className="fixed top-0 w-full bg-white shadow z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600">MyPortfolio</h1>
            <ul className="flex space-x-6 text-gray-700">
            <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#certificates" className="hover:text-blue-600">Certificates</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
        </div>
        </nav>
    )
}

export default Navbar;
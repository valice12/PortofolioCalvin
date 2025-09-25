function Skills() {
  const skills = ["JavaScript", "TypeScript", "React", "Node.js", "Python", "SQL"];

  return (
    <section id="skills" className="py-20 bg-white w-full">
      <div className="mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg shadow">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

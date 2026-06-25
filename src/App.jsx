function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden relative">

  <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>

  <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-600/20 rounded-full blur-3xl"></div>
      
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl text-center">

  <div className="flex justify-center mb-8">
    <img
      src="/profile.jpeg"
      alt="Kashish Raheja"
      className="w-44 h-44 rounded-full object-cover border-4 border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.6)]"
    />
  </div>

          <p className="text-purple-400 mb-4 tracking-widest uppercase">
            Welcome To My Portfolio
          </p>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            Kashish
            <span className="block text-purple-500">
              Raheja
            </span>
          </h1>

          <p className="mt-6 text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
            B.Tech Computer Science Engineering Student passionate about
            Cybersecurity, Web Development, Generative AI and Problem Solving.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://github.com/KashishRaheja004"
              target="_blank"
              className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kashish-raheja04"
              target="_blank"
              className="px-6 py-3 rounded-xl border border-zinc-700 hover:border-purple-500 transition"
            >
              LinkedIn
            </a>
          </div>

        </div>
      </section>
      <section className="py-24 px-6">
  <div className="max-w-5xl mx-auto">

    <h2 className="text-4xl font-bold mb-8 text-center">
      About Me
    </h2>

    <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-8">
      <p className="text-zinc-300 leading-8 text-lg">
        I am Kashish Raheja, a B.Tech Computer Science Engineering student
        at Amity University Rajasthan with a CGPA of 9.24. I am passionate
        about Cybersecurity, Web Development, Generative AI, and Problem
        Solving. Through internships and hands-on projects, I have gained
        practical experience in HTML, CSS, JavaScript, and modern software
        development practices. I enjoy learning emerging technologies and
        continuously improving my technical skills.
      </p>
    </div>

  </div>
</section>
<section className="py-24 px-6">
  <div className="max-w-5xl mx-auto">

    <h2 className="text-4xl font-bold mb-10 text-center">
      Technical Skills
    </h2>

    <div className="flex flex-wrap justify-center gap-4">

      {[
        "C",
        "C++",
        "Java",
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Generative AI",
        "Web Development",
        "Problem Solving",
        "Cybersecurity"
      ].map((skill) => (
        <div
          key={skill}
          className="px-5 py-3 rounded-full bg-zinc-900 border border-zinc-700 hover:border-purple-500 hover:scale-105 transition-all duration-300"
        >
          {skill}
        </div>
      ))}

    </div>

  </div>
</section>
<section className="py-24 px-6">
  <div className="max-w-5xl mx-auto">

    <h2 className="text-4xl font-bold mb-12 text-center">
      Internship Experience
    </h2>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-6">
        <h3 className="text-2xl font-semibold mb-2">
          InternPe
        </h3>

        <p className="text-purple-400 mb-4">
          Connect 4 Game | June 2025 - July 2025
        </p>

        <ul className="text-zinc-300 space-y-2">
          <li>• Developed a responsive 6×7 game grid using HTML & CSS.</li>
          <li>• Built JavaScript game logic and turn management.</li>
          <li>• Implemented winning sequence detection algorithm.</li>
          <li>• Enhanced practical web development skills.</li>
        </ul>
      </div>

      <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-6">
        <h3 className="text-2xl font-semibold mb-2">
          CodSoft
        </h3>

        <p className="text-purple-400 mb-4">
          Hampers of Hearts | May 2025
        </p>

        <ul className="text-zinc-300 space-y-2">
          <li>• Designed responsive web pages using HTML, CSS and JavaScript.</li>
          <li>• Implemented interactive form validation.</li>
          <li>• Improved debugging and problem-solving skills.</li>
          <li>• Strengthened practical web development knowledge.</li>
        </ul>
      </div>

    </div>

  </div>
</section>
{/* EDUCATION */}
<section className="py-24 px-6">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center">
      Education
    </h2>

    <div className="space-y-6">
      <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-6">
        <h3 className="text-xl font-semibold">
          B.Tech Computer Science Engineering
        </h3>
        <p className="text-purple-400">
          Amity University Rajasthan | 2023 - 2027
        </p>
        <p className="text-zinc-300 mt-2">
          CGPA: 9.24
        </p>
      </div>

      <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-6">
        <h3 className="text-xl font-semibold">
          Class XII
        </h3>
        <p className="text-purple-400">
          St. Joseph's Convent School
        </p>
        <p className="text-zinc-300 mt-2">
          83.2%
        </p>
      </div>

      <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-6">
        <h3 className="text-xl font-semibold">
          Class X
        </h3>
        <p className="text-purple-400">
          St. Peter's Convent School
        </p>
        <p className="text-zinc-300 mt-2">
          94.8%
        </p>
      </div>
    </div>
  </div>
</section>

{/* CERTIFICATIONS */}
<section className="py-24 px-6">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center">
      Certifications
    </h2>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6">
        Full Stack Web Development Bootcamp - Udemy
      </div>

      <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6">
        Data Analyst - Udemy
      </div>

      <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6">
        Generative AI - Upflairs
      </div>

      <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6">
        Coding & Development - Deloitte
      </div>

    </div>
  </div>
</section>

{/* ACHIEVEMENTS */}
<section className="py-24 px-6">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center">
      Achievements
    </h2>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6">
        🏆 25% Merit Scholarship for Academic Excellence
      </div>

      <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6">
        🏆 CGPA 9.24 in B.Tech CSE
      </div>

      <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6">
        🏆 2nd Position - Group Dance Competition (Odyssey)
      </div>

      <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6">
        🏆 2nd Position - Volleyball (Sangathan)
      </div>

    </div>
  </div>
</section>

{/* CONTACT */}
<section className="py-24 px-6">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-4xl font-bold mb-8">
      Contact Me
    </h2>

    <p className="text-zinc-400 mb-8">
      Let's connect and build something amazing together.
    </p>

    <div className="flex flex-wrap justify-center gap-4">

     <a
  href="mailto:rahejakashish58@gmail.com"
  target="_blank"
  rel="noreferrer"
  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl transition"
>
  Email
</a>

<a
  href="https://github.com/KashishRaheja004"
  target="_blank"
  rel="noreferrer"
  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl transition"
>
  GitHub
</a>

<a
  href="https://www.linkedin.com/in/kashish-raheja04"
  target="_blank"
  rel="noreferrer"
  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl transition"
>
  LinkedIn
</a>

    </div>
  </div>
</section>

    </div>
  );
}

export default App;

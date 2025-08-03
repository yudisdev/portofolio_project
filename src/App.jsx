function App () {
  return (
    <>
    <div className="hero grid grid-cols-2">
      <div>
         <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
           <img src="./assets/hero-img.webp" alt="" className="w-10 rounded-md" />
           <q>beutiful code comes from consistent result.😁</q>
         </div>
         <h1 className="text-5xl/tight font-bold mb-6">Hi there, i am Yudis</h1>
         <p className="text-base/loose mb-6 opacity-50">I'm a web developer who loves turning ideas into interactive, responsive websites.
            Currently learning React, Tailwind, and exploring the logic behind modern web apps.
            Every project here is part of my journey — built step by step while understanding the code deeply.
            Let's grow together in this coding adventure! 🚀</p>
          <div className="flex items-center gap-4 ">
            <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV</a>
            <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">View Project</a>
          </div>
      </div>
      <img src="./assets/hero-img.webp" alt="" className="w-[500px] ml-auto" />
    </div>
    </>
  )
}

export default App;
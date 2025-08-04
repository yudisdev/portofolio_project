function App () {
  return (
    <>
    <div className="hero grid items-center pt-10 xl:gap-0 gap-6 md:grid-cols-2 grid-cols-1 ">
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
          <div className="flex items-center sm:gap-4 gap-2 ">
            <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV <i className="ri-download-line ri-lg"></i></a>
            <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">View Project <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
      </div>
      <img src="./assets/hero-img.webp" alt="" className="w-[500px] md:ml-auto" />
    </div>

    {/* {about} */}
    <div className="about mt-32 py-10">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
      <img src="./assets/hero-img.webp" alt="image" className="w-12 rounded-md mb-10 sm:hidden" />
        <p className="text-base/loose mb-10">I'm a budding front-end developer who enjoys exploring modern web technologies. I'm currently focushed on learning React and Tailwind CSS, while building real-world project to hone my skills.</p>
        <div className="flex  items-center justify-between">
          <img src="./assets/hero-img.webp" alt="" className="rounded-md w-12 sm:block hidden" />
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">45 <span className="text-violet-500">+</span></h1>
              <p>Project complate</p>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-4xl mb-1">4 <span className="text-violet-500">+</span></h1>
              <p>Years of experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* {about} */}
    </>
  )
}

export default App;
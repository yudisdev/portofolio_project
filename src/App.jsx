import { listTools, listProyek } from "./data";


function App() {
  return (
    <>
      <div className="hero grid items-center pt-10 xl:gap-0 gap-6 md:grid-cols-2 grid-cols-1 ">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src="./assets/Yudis.jpg" alt="" className="w-10 rounded-md" loading="lazy" />
            <q>beutiful code comes from consistent result.😁</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi there, i am Yudis
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            I'm a web developer who loves turning ideas into interactive,
            responsive websites. Currently learning React, Tailwind, and
            exploring the logic behind modern web apps. Every project here is
            part of my journey — built step by step while understanding the code
            deeply. Let's grow together in this coding adventure! 🚀
          </p>
          <div className="flex items-center sm:gap-4 gap-2 ">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              View Project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src="./assets/Yudis.jpg"
          alt=""
          className="w-[500px] md:ml-auto rounded-lg" loading="lazy"
        />
      </div>

      {/* {about} */}
      <div className="about mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <img
            src="./assets/Yudis.jpg"
            alt="image"
            className="w-12 rounded-md mb-10 sm:hidden" loading="lazy"
          />
          <p className="text-base/loose mb-10">
            I'm a budding front-end developer who enjoys exploring modern web
            technologies. I'm currently focushed on learning React and Tailwind
            CSS, while building real-world project to hone my skills.
          </p>
          <div className="flex  items-center justify-between">
            <img
              src="./assets/Yudis.jpg"
              alt=""
              className="rounded-md w-12 sm:block hidden" loading="lazy"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  45 <span className="text-violet-500">+</span>
                </h1>
                <p>Project complate</p>
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-4xl mb-1">
                  4 <span className="text-violet-500">+</span>
                </h1>
                <p>Years of experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4">Tools used</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">
            The following tools are the ones i often use to create websites.
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tools) => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tools.id}>
                <img
                  src={tools.gambar}
                  alt="toolsimage"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy"
                />
                <div>
                  <h4 className="font-bold">{tools.nama}</h4>
                  <p className="opacity-50">{tools.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* {about} */}

      {/* Project */}
      <div className="Project mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-2">Project</h1>
        <p className="text-base/loose text-center opacity-50">The following is a project that i have created</p>
        <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listProyek.map((proyek) => (
              <div key={proyek.id} className="p-4 bg-zinc-800">
               <img src={proyek.gambar} alt="Project image" loading="lazy" />
               <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border-zinc-500 bg-zinc-500 hover:bg-zinc-700 rounded-md font-semibold" key={index} >{tool}</p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600 font-semibold" href="#">See Website</a>
                </div>
               </div>
              </div>
            ))}
        </div>
      </div>
      {/* Project */}

      {/* contact */}
      <div className="contact mt-32 p-10">
        <h1 className="text-4xl mb-2 font-bold text-center">Contact</h1>
        <p className="text-base/loose text-center mb-10 opacity-50">Let's connect</p> 
        <form action="https://formsubmit.co/yudistirahady77@gmail.com" method="POST" className="bg-zinc-800 p-10 w-fit mx-auto rounded-lg" autoComplete="off">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Name</label>
              <input type="text" name="name" placeholder="Enter your name..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Enter your email..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-semibold">Message</label>
              <textarea name="message" id="message" cols={45} rows={7} placeholder="Enter your message..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="Sumbit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">Send message</button>
            </div>
          </div>
        </form>
      </div>
      {/* contact */}
    </>
  );
}

export default App;

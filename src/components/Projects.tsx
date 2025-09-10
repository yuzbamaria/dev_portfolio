import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col mx-auto p-16 md:p-36 max-w-[100rem]"
    >
      <div className="mb-2 pb-5 md:mb-6">
        <h2 className="text-5xl font-inter font-bold mb-2">HIGHLIGHTS</h2>
        <p className="max-w-2xl text-gray-500">
          As a full-stack developer, I build modern, responsive, and scalable
          web applications, combining clean front-end design with robust
          back-end functionality to create seamless digital experiences.
        </p>
      </div>
      <div className="flex flex-col items-center gap-5">
        {/* Project 1 */}
        <div className="flex flex-col md:flex-row items-center mb-4 pb-4 border-b-1 border-black">
          {/* Text */}
          <div className="flex flex-col items-start flex-[1.5] mr-6">
            <h3 className="mt-4 text-2xl font-montserrat">
              Vacation Property Listing App
            </h3>
            <p className="mt-6 font-montserrat text-sm">
              A vacation property booking platform inspired by Airbnb. The app
              fetches dynamic data from a PostgreSQL database and provides a
              seamless, responsive user experience.
            </p>
          </div>
          {/* Image */}
          <div className="flex-1 py-4 md:py-8">
            <img
              src="/airbnc.png"
              alt="airBNB-style property app"
              className="rounded-xl"
            />
          </div>
          {/* Links */}
          <div className="flex flex-col flex-1 gap-4 font-inter m-2 items-center md:p-5 md:items-end">
            <a
              href="https://airbnc-front-end.netlify.app/"
              target="_blank"
              rel="noopener noreferrer" // Security best practice for using target="_blank" for external links
              className="cursor-pointer text-base"
            >
              <div className="relative group py-1">
                View project
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="mx-2 w-4 h-4 -rotate-45"
                />
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </div>
            </a>
            <a
              href="https://github.com/yuzbamaria/fe-airbnc"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-base"
            >
              <div className="relative group py-1">
                GitHub
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="mx-2 w-4 h-4 -rotate-45"
                />
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </div>
            </a>
            {/* </button> */}
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col md:flex-row items-center mb-4 pb-4 border-b-1 border-black">
          {/* Text */}
          <div className="flex flex-col items-start flex-[1.5] mr-6">
            <h3 className="mt-4 text-2xl font-montserrat">Kindly</h3>
            <p className="mt-6 font-montserrat text-sm">
              Kindly is a web application built for Trafalgar Girls, a
              charitable organization supporting refugees in the UK. The app is
              designed to improve accessibility and engagement, helping users
              navigate services, donations, and volunteer opportunities.
              Currently, the project is in the UI/UX design phase, with
              continuous updates to user flows and visual elements to meet
              evolving design requirements.
            </p>
          </div>
          {/* Image */}
          <div className="flex-1 py-4 md:py-8">
            <img src="/kindly.png" alt="kindly app" className="rounded-xl" />
          </div>
          {/* Links */}
          <div className="flex flex-col flex-1 gap-4 font-inter m-2 items-center md:p-5 md:items-end">
            <div className="relative group py-1">
              View project
              <FontAwesomeIcon
                icon={faArrowRight}
                className="mx-2 w-4 h-4 -rotate-45"
              />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-2/3"></span>
            </div>
            <a
              href="https://github.com/enBloc-org/kindly"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-base"
            >
              <div className="relative group py-1">
                GitHub
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="mx-2 w-4 h-4 -rotate-45"
                />
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-2/3"></span>
              </div>
            </a>
          </div>
        </div>

        {/* Project 5 */}
        <div className="flex flex-col md:flex-row items-center mb-4 pb-4 border-b-1 border-black">
          {/* Text */}
          <div className="flex flex-col items-start flex-[1.5] mr-6">
            <h3 className="mt-4 text-2xl font-montserrat">HelpChain</h3>
            <p className="mt-6 font-montserrat text-sm">
              HelpChain is an open-source web platform dedicated to empowering
              Ukrainians in the United Kingdom through professional, legal, and
              economic integration. The platform connects users to employment
              opportunities, business support, education, and community
              resources, fostering long-term integration while preserving
              cultural heritage.
            </p>
          </div>
          {/* Image */}
          <div className="flex-1 py-4 md:py-8">
            <img src="/helpchain.png" alt="helpchain" className="rounded-xl" />
          </div>
          {/* Links */}
          <div className="flex flex-col flex-1 gap-4 font-inter m-2 items-center md:p-5 md:items-end">
            <a
              href="https://helpchain-ua.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-base"
            >
              <div className="relative group py-1">
                View project
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="mx-2 w-4 h-4 -rotate-45"
                />
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-2/3"></span>
              </div>
            </a>
            <a
              href="https://github.com/yuzbamaria/helpchain-ua"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-base"
            >
              <div className="relative group py-1">
                GitHub
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="mx-2 w-4 h-4 -rotate-45"
                />
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-2/3"></span>
              </div>
            </a>
          </div>
        </div>

        {/* Project 4 */}
        {/* <div className="break-inside-avoid bg-white shadow p-2">
          <img
            src="/password_generator.png"
            alt="password generator"
            className="w-full object-cover"
          />
          <h3 className="mt-4 text-2xl font-inter font-light">
            Password generator
          </h3>
          <div className="mt-2 py-2 justify-left flex gap-4 font-inter">
            <button className="cursor-pointer p-2 w-36 bg-gray-300 text-sm">
              <div className="relative group py-1">
                View project
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-2/3"></span>
              </div>
            </button>
            <button className="cursor-pointer p-2 w-36 border border-black text-sm">
              <div className="relative group py-1">
                GitHub
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-2/3"></span>
              </div>
            </button>
          </div>
        </div> */}

        {/* Project 5 */}
        {/* <div className="break-inside-avoid bg-white shadow p-2">
          <img
            src="/code_quiz.png"
            alt="code quiz"
            className="w-full object-cover"
          />
          <h3 className="mt-4 text-2xl font-inter font-light">Code quiz</h3>
          <div className="mt-2 py-2 justify-left flex gap-4 font-inter">
            <button className="cursor-pointer p-2 w-36 bg-gray-300 text-sm">
              <div className="relative group py-1">
                View project
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-2/3"></span>
              </div>
            </button>
            <button className="cursor-pointer p-2 w-36 border border-black text-sm">
              <div className="relative group py-1">
                GitHub
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-2/3"></span>
              </div>
            </button>
          </div>
        </div> */}

        {/* Project 6 */}
        {/* <div className="break-inside-avoid bg-white shadow p-2">
          <img
            src="/kindly.png"
            alt="crypto dashboard"
            className="w-full object-cover"
          />
          <h3 className="mt-4 text-2xl font-inter font-light">
            Crypto dashboard
          </h3>
          <div className="mt-2 py-2 justify-left flex gap-4 font-inter">
            <button className="cursor-pointer p-2 w-36 bg-gray-300 text-sm">
              <div className="relative group py-1">
                View project
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-2/3"></span>
              </div>
            </button>
            <button className="cursor-pointer p-2 w-36 border border-black text-sm">
              <div className="relative group py-1">
                GitHub
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-2/3"></span>
              </div>
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}

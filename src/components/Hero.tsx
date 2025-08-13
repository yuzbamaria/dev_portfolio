import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section className="py-10 flex flex-col justify-center items-center px-4 sm:px-16">
      <div className="relative flex flex-col lg:flex-row items-center justify-between w-full gap-8">
        <div className="p-3">
          <p className="text-xl font-inter font-light mb-4">
            Hi, I'm Maria Yuzba
          </p>
          <h1 className="font-montserrat font-semibold text-7xl mb-4">
            Fullstack <br /> <span className="text-purple-700">developer</span>
          </h1>

          <p className="text-lg sm:text-xl max-w-xl font-inter font-light mb-4 pb-4 border-b-2 border-gray-200">
            Crafting the future of web experiences through clean, efficient, and
            captivating <span className="text-purple-700">fullstack</span>{" "}
            solitions.
          </p>

          <ul className="flex mt-4 mb-4 gap-3">
            <li className="text-sm max-w-xl font-inter font-light py-3">
              <a
                href="mailto:yuzba.maria@gmail.com"
                className="relative py-3 group"
              >
                Email
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="mx-2 w-4 h-4 -rotate-45"
                />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>

            <li className="text-sm max-w-xl font-inter font-light py-3">
              <a
                href="https://github.com/yuzbamaria"
                target="_blank"
                rel="noopener noreferrer"
                className="relative py-3 group"
              >
                GitHub
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="mx-2 w-4 h-4 -rotate-45"
                />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="text-sm max-w-xl font-inter font-light py-3">
              <a
                href="https://linkedin.com/in/mariyayuzba"
                target="_blank"
                rel="noopener noreferrer"
                className="relative py-3 group"
              >
                LinkedIn
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="mx-2 w-4 h-4 -rotate-45"
                />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>

        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="h-[500px] w-[400px] max-md:h-96 overflow-hidden rounded-b-full shadow-2xl">
            <img
              src="/portfolio_img.jpeg"
              alt="portfolio image"
              className="h-full w-full aspect-[3/4] rounded-b-full object-cover transition duration-300 hover:scale-[1.02] grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

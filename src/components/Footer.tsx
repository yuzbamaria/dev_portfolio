import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const p1Ref = useRef<HTMLParagraphElement | null>(null);
  const p2Ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      [p1Ref.current, p2Ref.current],
      { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" }, // 100% from the top
      {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)", // fully revealed
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.3, // delay between p1 and p2
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="px-24 pt-16 pb-12 bg-black font-montserrat"
    >
      <p ref={p1Ref} className="text-3xl text-white font-light mb-2">
        Excited to collaborate on creating high-quality, innovative digital
        solutions.
      </p>
      <p ref={p2Ref} className="text-3xl text-white font-light mb-2">
        Let's build something amazing together!
      </p>
      <ul className="flex flex-col gap-1 text-white mb-3">
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
      <hr className="border-white w-full" />
      <p className="font-montserrat text-lg font-light py-3 mt-3 text-white">
        MY @all rights reserved
      </p>
    </section>
  );
}

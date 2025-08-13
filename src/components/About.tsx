import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // register ScrollTrigger so GSAP can animate things based on scroll position.

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
      {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 2,
        ease: "power3.out",
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
      id="about"
      ref={sectionRef}
      className="flex flex-col items-center py-16 px-20"
    >
      <h2 className="font-inter font-medium text-purple-700 pb-10">ABOUT ME</h2>
      <p
        ref={textRef}
        className="font-montserrat font-light text-2xl text-center"
      >
        Full-Stack Developer with hands-on experience building modern,
        responsive, and engaging web applications using HTML, CSS, Tailwind,
        JavaScript, TypeScript, React.js, Next.js, Node.js, and PostgreSQL.
        Experienced in applying best practices such as Test-Driven Development
        (TDD), CI/CD, and Agile methodologies. Constantly evolving, I aim to
        deliver seamless UI/UX and high-performance designs.
      </p>
    </section>
  );
}

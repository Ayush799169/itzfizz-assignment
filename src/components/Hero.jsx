
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollObject from "./ScrollObject";
import Stats from "./Stats";

 gsap.registerPlugin(ScrollTrigger);

 const HEADLINE = "WELCOMEITZFIZZ";

function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      intro
        .from(".car-intro", { opacity: 0, scale: 1.1, duration: 1.6 })
        .from(".hero-label", { opacity: 0, y: 20, duration: 0.6 }, "-=1")
        .from( ".hero-letter", { opacity: 0, y: 70, rotateX: -80, duration: 0.9, stagger: 0.06 }, "-=0.6",  )
        .from(".hero-subtitle", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4").addLabel("stats", "-=0.2")
        .from(".stat-card",{ opacity: 0, y: 40, duration: 0.7, stagger: 0.2 },"stats", );

      gsap.utils.toArray(".stat-value").forEach((el, i) => {
        const counter = { val: 0 };
        intro.to(
          counter,
          {
            val: Number(el.dataset.value),
            duration: 1.4,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = `${Math.round(counter.val)}%`;
            },
          },
          `stats+=${i * 0.2}`,
        );
      });

      gsap
        .timeline({
          defaults: { ease: "none", duration: 1 },
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=150%",
            scrub: 1, 
            pin: true,
          },
        })
        .to(".car-scroll", { scale: 1.9, yPercent: -8, ease: "power1.inOut" }, 0, )
        .fromTo(".light-streak", { xPercent: -100 }, { xPercent: 100 }, 0)
        .to(".hero-text", { scale: 0.8, opacity: 0, y: -60, duration: 0.5 }, 0)
        .to(".hero-label-wrap", { opacity: 0, duration: 0.4 }, 0)
        .to(".stats-wrap", { y: -40, duration: 0.6 }, 0)
        .to(".stats-wrap", { opacity: 0, duration: 0.4 }, 0.6);
     }, 
    heroRef);
    return () => ctx.revert();
    }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h- [650px] overflow-hidden px-4"
    >
      <ScrollObject />
      <div className="relative z-20 flex h-full flex-col items-center justify-between pb-16 pt-[15vh]">
        <div className="flex w-full flex-col items-center">
          <div className="hero-label-wrap">
            <p className="hero-label text-xl font-bold uppercase tracking-[0.4em] text-red-500 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-lg">
              Web Development Internship
            </p>
          </div>

          <div className="hero-text mt-6 w-full text-center">
            <h1
              aria-label={HEADLINE}
              className="whitespace-nowrap text-[clamp(1.5rem,6.5vw,5rem)] font-bold uppercase leading-none tracking-[0.35em] text-white drop-shadow-[0_0_30px_rgba(34,211,238,0.35)]"
              style={{ perspective: 600 }}
            >
              {HEADLINE.split("").map((char, i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  className="hero-letter inline-block"
                >
                  {char}
                </span>
              ))}
            </h1>

            <p className="hero-subtitle mx-auto mt-5 max-w-xl text-sm font-medium leading-6 text-cyan-200 tracking- [0.1em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-lg">
              Creating modern digital experiences with technology, creativity
              and smooth interactions.
            </p>
          </div>
        </div>

        <Stats />
      </div>
    </section>
  );
 }

        export default Hero;

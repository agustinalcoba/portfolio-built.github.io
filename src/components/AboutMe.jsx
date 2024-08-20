import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitTextJS from "split-text-js";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);
const AboutMeP = ({ children }) => {
  return <p className="my-2">{children}</p>;
};
const Highlight = ({ children }) => {
  return (
    <span className=" bg-clip-text text-transparent font-bold bg-gradient-to-tr from-cerulean-blue-700 to-cerulean-blue-900 drop-shadow-white">
      {children}
    </span>
  );
};

const Particles = () => {
  useFrame((state) => {});

  let result = [];
  let scales = [];
  for (let i = 0; i < 100; i++) {
    const position = [
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 5,
    ];
    const _scale = Math.random() * 0.1;
    const scale = [_scale, _scale, _scale];

    // scales.push(scale);
    const j = i;
    result.push(
      <Sphere scale={scale} position={position} key={j}>
        <meshBasicMaterial color={"#8093da"} />
      </Sphere>
    );
  }
  return result;
};
const Background = () => {
  return (
    <div className="absolute border w-full h-full top-0 left-0 ">
      <Canvas camera={{ position: [0, 0, 5], fov: 20 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
};
export const AboutMe = () => {
  // const element = useRef(null);
  const title = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    // gsap.fromTo(
    //   [title.current, text.current],
    //   {
    //     opacity: 0,
    //     scale: 0,
    //   },
    //   {
    //     duration: 1,
    //     opacity: 1,
    //     scale: 1,
    //     ease: "back.in",
    //     stagger: 0.1,
    //     scrollTrigger: {
    //       trigger: title.current,
    //       start: "top 90%",
    //       // markers: true,
    //     },
    //   }
    // );
  }, []);
  return (
    <section className="h-[75vh] p-16  bg-white text-black relative">
      <Background />
      <h2
        className="text-3xl w-fit text-center font-bold sm:text-5xl  sm:text-start"
        ref={title}
      >
        About Me
      </h2>
      <div
        className="text-lg sm:text-2xl lg:text-3xl sm:ms-56 py-16 drop-shadow-md"
        ref={text}
      >
        <AboutMeP>
          I'm a <Highlight>software developer</Highlight> who has always lived
          in Uruguay.
        </AboutMeP>
        <AboutMeP>
          Some of my hobbies include{" "}
          <Highlight>programming, gaming, and 3D art</Highlight>.
        </AboutMeP>
        <AboutMeP>
          I enjoy working on projects that{" "}
          <Highlight>make a difference</Highlight> in people's lives.
        </AboutMeP>

        <AboutMeP>
          Feel free to reach out if you'd like to collaborate on a project.
        </AboutMeP>
      </div>
    </section>
  );
};

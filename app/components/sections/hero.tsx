"use client";
import Button from "../button";

export default function Hero() {
  return (
    <section className="relative">
      <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-8 mt-10 py-20 w-full md:max-w-7xl md:mx-auto">
        <div>
          <h1 className="text-2xl md:text-5xl text-center md:text-left mb-2 font-bold">
            Hi, I'm Dean Louis T. Santos
          </h1>
          <p className="text-xl md:text-4xl text-center md:text-left mb-5 font-semibold">
            Aspiring Web Developer
          </p>
          <p className="text-sm md:text-xl text-center md:text-left">
            Building real-world web applications with practical solutions{" "}
          </p>
          <div className="flex justify-center gap-5 mt-5">
            <Button label="View Portfolio" link="https://github.com/" />
            <Button label="Resume" link="https://github.com/" />
          </div>
        </div>
        <img
          src="https://media.tenor.com/0MQzvm8QLdgAAAAi/pc.gif"
          alt="Computer GIF"
          className="mr-10 max-w-xs md:max-w-md"
        />
      </div>
    </section>
  );
}

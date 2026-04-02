"use client";
import Button from "../button";

export default function Hero() {
  return (
    <section className="relative">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-10 py-20 w-full max-w-7xl mx-auto">
        <div>
          <h1 className="text-5xl mb-2 font-bold">
            Hi, I'm Dean Louis T. Santos
          </h1>
          <p className="text-4xl mb-5 font-semibold">Aspiring Web Developer</p>
          <p className="text-xl">
            Building real-world web applications with practical solutions{" "}
          </p>
          <div className="mt-5 space-x-5">
            <Button label="View Portfolio" link="https://github.com/" />
            <Button label="Resume" link="https://github.com/" />
          </div>
        </div>
        <img
          src="https://media.tenor.com/0MQzvm8QLdgAAAAi/pc.gif"
          alt="Computer GIF"
          className="mr-10 max-w-md"
        />
      </div>
    </section>
  );
}

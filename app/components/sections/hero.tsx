"use client";
import Button from "../button";

export default function Hero() {
    return(
        <section className="relative">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-10 w-full max-w-7xl mx-auto">
                <div>
                    <h1>Hi, I am Dean Louis T. Santos</h1>
                    <p>Full Stack Web Developer</p>
                    <div>
                        <Button label="View Portfolio" onClick={() => console.log("clicked!")} />
                        <Button label="Resume" onClick={() => console.log("clicked!")} />
                    </div>
                </div>
            <img src="https://media.licdn.com/dms/image/v2/D5603AQE1d7X_1zWzOw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722985330612?e=1775692800&v=beta&t=1AQDuK4Gm2EPmuIhfv7QuW4lITqmYRRQXEF2mDZYTyg" alt="Dean Louis T. Santos" className="max-w-md"/>
            </div>
        </section>
    );
}
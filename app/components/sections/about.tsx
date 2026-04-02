import SkillIcon from "../skill-icon";
import CSharpIcon from "../skill-icon-svg/c-sharp-icon";
import CSSIcon from "../skill-icon-svg/css-icon";
import DotNetCoreIcon from "../skill-icon-svg/dot-net-logo";
import HTMLIcon from "../skill-icon-svg/html-icon";
import JavascriptIcon from "../skill-icon-svg/javascript-icon";
import ReactIcon from "../skill-icon-svg/react-icon";
import TypescriptIcon from "../skill-icon-svg/typescript-icon";
export default function About() {
  return (
    <section id="about-me" className="scroll-mt-24 relative">
      <div className="py-10 mt-50 w-full max-w-7xl mx-auto">
        <h2 className="text-center text-5xl">About me</h2>
        <div className="flex justify-between items-start">
          <div className="w-full">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQE1d7X_1zWzOw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722985330612?e=1775692800&v=beta&t=1AQDuK4Gm2EPmuIhfv7QuW4lITqmYRRQXEF2mDZYTyg"
              alt="Dean Louis T. Santos"
              className="mt-20 max-w-md"
            />
          </div>
          <div className="w-full">
            <p className="mt-20 text-2xl max-w-xl">
              I am a Graduating Computer Science student with a passion for
              programming, especially in web development. I am eager to apply my
              skills to build responsive and innovative web applications while
              gaining experience on a professional setting. I aim to grow as a
              developer and continuously learn and enhance my technical
              expertise and proficiency.
            </p>
            <div className="mt-10 p-5 max-w-[40vw] bg-gray-600 rounded-2xl transition duration-500 ease-in-out hover:shadow-lg hover:shadow-gray-500/50 hover:scale-105">
              <h3 className="mb-10 text-3xl font-semibold text-white">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                <SkillIcon
                  icon={<HTMLIcon width={32} height={32} />}
                  iconName="HTML"
                />
                <SkillIcon
                  icon={<CSSIcon width={32} height={32} />}
                  iconName="CSS"
                />

                <SkillIcon
                  icon={<JavascriptIcon width={32} height={32} />}
                  iconName="Javascript"
                />

                <SkillIcon
                  icon={<TypescriptIcon width={32} height={32} />}
                  iconName="Typescript"
                />

                <SkillIcon
                  icon={<ReactIcon width={32} height={32} />}
                  iconName="React"
                />

                <SkillIcon
                  icon={<CSharpIcon width={32} height={32} />}
                  iconName="C#"
                />

                <SkillIcon
                  icon={<DotNetCoreIcon width={28} height={28} />}
                  iconName="ASP.NET Core"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import SkillIcon from "../skill-icon";
import HTMLIcon from "../skill-icon-svg/html-icon";
export default function About() {
  return (
    <section className="relative">
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
            <div className="mt-10">
              <h3 className="text-2xl">Skills</h3>
              <div>
                <SkillIcon
                  icon={<HTMLIcon width={32} height={32} />}
                  iconName="HTML"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

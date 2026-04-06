import ContactIcon from "../contact-icon";
import GithubIcon from "../contact-icon-svg/github-icon";
import GmailIcon from "../contact-icon-svg/gmail-icon";
import LinkedinIcon from "../contact-icon-svg/linkedin-icon";

export default function Contacts() {
  return (
    <section id="contacts" className="relative scroll-mt-24">
      <div className="py-10 mt-50 max-w-7xl mx-auto">
        <h2 className="text-5xl text-center font-bold">Get in touch</h2>
        <div className="max-w-4xl mt-20 p-10 mx-auto bg-gray-900 rounded-full">
          <ul className="flex justify-evenly">
            <li>
              <ContactIcon
                icon={<GmailIcon width={80} height={80} />}
                contactLink={"mailto:deanlt.santos@gmail.com"}
              />
            </li>
            <li>
              <ContactIcon
                icon={<LinkedinIcon width={80} height={80} />}
                contactLink={
                  "https://www.linkedin.com/in/dean-louis-santos-3892842a5/"
                }
              />
            </li>
            <li>
              <ContactIcon
                icon={<GithubIcon width={80} height={80} />}
                contactLink={"https://github.com/dlsntos"}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

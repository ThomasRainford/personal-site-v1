import { getSiteSection } from "../../../data/data";
import { ContactSection } from "../../../data/types";
import MailIcon from "../../icons/MailIcon";

const Contact = () => {
  const contactData = getSiteSection("contact") as ContactSection;
  const email = contactData.email;
  const linkedin = contactData.linkedin;

  return (
    <div>
      <div className="flex flex-row ml-2">
        <div className="mr-4">
          <a href={`mailto:${email}`}>
            <MailIcon width="30px" height="30px" colour="text-secondary" />
          </a>
        </div>
        <div className="mr-4">
          <a href={linkedin} target="_blank">
            <i className="devicon-linkedin-plain text-3xl text-secondary"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import { FaLinkedin,
  FaDiscord, 
  FaGithub,
  FaLine,
  FaPhoneSquareAlt 
} from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500 text-3xl"
        href="https://www.linkedin.com/in/natchanon-danual-6448aa9a/"
        target="_blank"
        rel="noreferrer"
      >
        {/* <img alt="linkedin-link" src="../assets/linkedin.png" /> */}
        <FaLinkedin color="#FDCC49" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 text-3xl"
        href="https://discord.com/users/696748830045110272."
        target="_blank"
        rel="noreferrer"
      >
        {/* <img alt="twitter-link" src="../assets/twitter.png" /> */}
        <FaDiscord color="#FDCC49" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 text-3xl"
        href="https://github.com/em4arkay"
        target="_blank"
        rel="noreferrer"
      >
        {/* <img alt="facebook-link" src="../assets/facebook.png" /> */}
        <FaGithub color="#FDCC49" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 text-3xl"
        href="https://kmutt.me/hZkmEMr"
        target="_blank"
        rel="noreferrer"
      >
        {/* <img alt="instagram-link" src="../assets/instagram.png" /> */}
        <FaLine color="#FDCC49" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 text-3xl"
        href="tel:+66917543638"
        target="_blank"
        rel="noreferrer"
      >
        {/* <img alt="instagram-link" src="../assets/instagram.png" /> */}
        <FaPhoneSquareAlt color="#FDCC49" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;

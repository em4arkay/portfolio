import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-sofiasans font-semibold text-2xl text-yellow">
            NATCHANON DANAUL
          </p>
          <p className="font-sofiasans text-md text-yellow">
            ©2022 MARK. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;

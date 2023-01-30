import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const About = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="about" className="pt-10 pb-24">
      {/* HEADER & IMAGE */}
      <div className="md:flex md:justify-between md:gap-16 mt-24">
        {/* HEADER */}
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-sofiasans font-semibold text-4xl mb-5">
            <span className="text-yellow">ABOUT</span> ME 
          </p>
          <LineGradient width="w-1/3" />
          <p className="font-firacode mt-10 mb-7">
            I am graduated in Computer Science from King Mongkut's University of Technology Thonburi (KMUTT). 
            I have experience in Web Development in different projects and also in Data (Analyst, Scientist). 
            I would	like to	gain the necessary experience	to hopefully become 
          </p>
        </motion.div>

        {/* IMAGE */}
        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/about.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>
    </section>
  );
};

export default About;

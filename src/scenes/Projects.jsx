import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { 
  FaGithub,
  FaLink 
} from "react-icons/fa";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, desc, linkGit, linkDemo }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-sofiasans">{title}</p>
        <p className="font-firacode mt-7">{desc}</p>
        <div className="flex justify-center md:justify-start my-10 gap-7">
          <a
            className="hover:opacity-50 transition duration-500 text-3xl"
            href={linkGit}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub color="black" />
          </a>
          <a
            className="hover:opacity-50 transition duration-500 text-3xl"
            href={linkDemo}
            target="_blank"
            rel="noreferrer"
          >
            <FaLink color="black" />
          </a>
        </div>
      </div>
      <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-24 pb-32">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-sofiasans font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="font-firacode mt-10 mb-10">
          What did I do? Click the projects for detail!!
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-sofiasans font-semibold"
          >
            BEGINING FROM HERE
          </div>
          <Project 
            title="Robofood" 
            desc="Robot + food delivery website (frontend only) using HTML CSS and Javascript."
            linkGit="https://github.com/em4arkay/robofood" 
            linkDemo="#" 
          />
          <Project 
            title="Project 2" 
            desc=""
            linkGit="https://github.com/em4arkay" 
            linkDemo="https://kmutt.me/hZkmEMr" 
          />

          {/* ROW 2 */}
          <Project 
            title="noisesion" 
            desc="music is life don't you think so? this is music player website created by Rapidapi & React"
            linkGit="https://github.com/em4arkay/noisesion" 
            linkDemo="https://kmutt.me/hZkmEMr" 
          />
          <Project 
            title="Project 4" 
            desc=""
            linkGit="https://github.com/em4arkay/noisesion" 
            linkDemo="https://kmutt.me/hZkmEMr" 
          />
          <Project 
            title="co_ok-studio" 
            desc=""
            linkGit="https://github.com/em4arkay/co-ok-studio" 
            linkDemo="https://kmutt.me/hZkmEMr" 
          />

          {/* ROW 3 */}
          <Project 
            title="Project 6" 
            desc=""
            linkGit="https://github.com/em4arkay" 
            linkDemo="https://kmutt.me/hZkmEMr" 
          />
          <Project 
            title="Project 7" 
            desc=""
            linkGit="https://github.com/em4arkay" 
            linkDemo="https://kmutt.me/hZkmEMr" 
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-sofiasans font-semibold"
          >
            LET'S GOING ON
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

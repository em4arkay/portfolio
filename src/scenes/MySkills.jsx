import LineGradient from "../components/LineGradient";
// import LineVGradient from "../components/LineVGradient";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const skillVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Skills = ({ title }) => {
  return (
    <motion.div variants={skillVariant} className="relative cursor-pointer hover:opacity-10">
      <img src={`../assets/${title}.png`} alt={title} />
    </motion.div>
  );
};

const MySkills = () => {
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER */}
      <div className="md:flex md:justify-center md:gap-16 mt-24">
        <motion.div
          className="md:w-1/3 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-sofiasans font-semibold text-4xl mb-5 text-center">
            MY <span className="text-blue">SKILLS </span> 
            & <span className="text-blue">EXPERIENCES</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </motion.div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-center gap-8">
        <motion.div
          className="mx-auto relative border-yellow border-2 max-w-[350px] h-[350px] flex flex-col-3 p-10 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="grid grid-cols-3 grid-row-4 grip-flow-col">
            <div className="font-sofiasans text-md">Jul 2018 - Jun 2022</div>
            <div className="mx-auto my-end text-blue">
                <CircleOutlinedIcon />
            </div>
            <p className="font-firacode text-start text-md">
                Student, <p className='text-sm'>KMUTT</p>
            </p>

            {/* <div className="font-sofiasans text-md"></div>
            <div className="mx-auto">
                <LineVGradient />
            </div>
            <p className="font-firacode text-start text-md"></p> */}

            <div className="font-sofiasans text-md">Jun 2022 - Nov 2022</div>
            <div className="mx-auto my-start text-red">
                <CircleOutlinedIcon />
            </div>
            <p className="font-firacode text-start text-md">
                DA (Internship), <p className='text-sm'>Lotus's</p>
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto my-auto grid grid-cols-4 gap-3 mt-10 m-10 p-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-0 bg-red
              max-w-[100px] max-h-[100px] text-2xl font-sofiasans font-semibold"
          >
            A
          </div>
          <Skills title="html" />
          <Skills title="css" />
          <Skills title="javascript" />
          <Skills title="react-native" />
          <Skills title="vue-js" />
          <Skills title="tailwindcss" />
          <Skills title="nodejs" />
          <Skills title="mysql" />
          <Skills title="mongodb" />
          <Skills title="python" />
          <div
            className="flex justify-center text-center items-center p-0 bg-blue
              max-w-[100px] max-h-[100px] text-2xl font-sofiasans font-semibold"
          >
            Z
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;

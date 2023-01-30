import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="pt-24 pb-10">
      {/* HEADIND & EXPERIENCE */}
      <div className="md:flex md:justify-between mt-16 gap-20">
        {/* HEADING */}
        <motion.div
          className="md:w-1/3 text-center md:text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div>
            <p className="font-sofiasans font-semibold text-4xl mb-5 text-blue">
              SERVICES
            </p>
            <LineGradient width="mx-auto w-2/5" />
            <p className="font-firacode mt-10">
              Here's What People are Saying About My Work. 
            </p>
          </div>
        </motion.div>

        {/* FRONTEND DEV. */}
        <motion.div
          className="md:w-1/3 mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-sofiasans font-semibold text-5xl">01</p>
              <p className="font-sofiasans font-semibold text-3xl mt-3">
                Frontend Developer
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="font-firacode mt-5 mb-5">
            I am a frontend developer with a passion for building beautiful and functional web applications.
          </p>
        </motion.div>

        {/* BACKEND DEV. */}
        <motion.div
          className="md:w-1/3 mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-sofiasans font-semibold text-5xl">02</p>
              <p className="font-sofiasans font-semibold text-3xl mt-3">
                Backend Developer
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="font-firacode mt-5 mb-5">
            I am a backend developer with a passion for building beautiful and functional web applications.
          </p>
        </motion.div>

        {/* DATA SCIENTIST */}
        <motion.div
          className="md:w-1/3 mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-sofiasans font-semibold text-5xl">03</p>
              <p className="font-sofiasans font-semibold text-3xl mt-3">
                Data Scientist
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="font-firacode mt-5 mb-5">
            I am a data scientist with passion for Python	& SQL programming, modeling and analyzing data.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

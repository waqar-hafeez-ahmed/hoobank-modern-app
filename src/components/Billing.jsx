import styles, { layout } from "../style";
import { bill } from "../assets";
import { apple } from "../assets";
import { google } from "../assets";
const Billing = () => {
  return (
    <section className={` ${layout.section}`}>
      <div className="absolute -z-1 w-[40%] h-[40%] -left-[50%] rounded-full pink__gradient" />

      <div className={`${styles.flexCenter} md:w-1/2 md:pr-10 max-w-[600px] z-10`}>
        <img src={bill} alt="" />
      </div>
      <div className={`${layout.sectionInfo} md:ml-20`}>
        <h2 className={`${styles.heading2}`}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} mt-4 max-w-[470px]`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row gap-8 mt-12">
          <img src={apple} alt="" />
          <img src={google} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Billing;

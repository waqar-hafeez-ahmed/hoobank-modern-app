import styles, { layout } from "../style";
import { bill } from "../assets";
import { apple } from "../assets";
import { google } from "../assets";
const Billing = () => {
  return (
    <section className={` ${layout.section}`}>
      <div className="-z-1 pink__gradient absolute -left-[50%] h-[40%] w-[40%] rounded-full" />

      <div
        className={`${styles.flexCenter} z-10 max-w-[600px] md:w-1/2 md:pr-10`}
      >
        <img src={bill} alt="" />
      </div>
      <div className={`${layout.sectionInfo} md:ml-20`}>
        <h2 className={`${styles.heading2}`}>
          Easily control your <br className="hidden sm:block" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} mt-4 max-w-[470px]`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="mt-12 flex flex-row gap-8">
          <img src={apple} alt="" />
          <img src={google} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Billing;

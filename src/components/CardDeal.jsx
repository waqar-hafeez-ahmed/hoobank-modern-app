import Button from "./Button";
import { card } from "../assets";
import styles, { layout } from "../style";

const CardDeal = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="md:block hidden" />
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-4`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles={"mt-4"} />
      </div>
      <div className={`${styles.flexCenter} md:w-1/2 md:pl-12 max-w-[600px]`}>
        <img src={card} alt="" />
      </div>
    </section>
  );
};

export default CardDeal;

import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={` ${styles.flexCenter} p-[2px] bg-blue-gradient rounded-full w-[140px] h-[140px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} bg-primary flex-col rounded-full w-[100%] h-[100%]`}
      >
        <div className={`${styles.flexStart} flex-row `}>
          <p className="text-gradient font-poppins text-lg leading-[23px]">
            Get
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain ml-2"
          />
        </div>
        <p className="text-gradient font-poppins text-lg leading-[23px]">
          Started
        </p>
      </div>
    </div>
  );
};

export default GetStarted;

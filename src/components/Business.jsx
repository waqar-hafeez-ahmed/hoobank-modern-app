/* eslint-disable react/prop-types */
import styles, { layout } from "../style";
import { features } from "../constants";
import Button from "./Button";
const Business = () => {
  const FeatureCard = ({ icon , content, title }) => (
    <div
      className={` feature-card flex cursor-pointer   items-center justify-between gap-4 rounded-[20px] p-6`}
    >
      <div
        className={`h-[64px] w-[64px] rounded-full bg-dimBlue ${styles.flexCenter} `}
      >
        <img src={icon} alt="" className="h-[50%] w-[50%] object-contain" />
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="mb-1 font-poppins text-lg font-semibold leading-6 text-white">
          {title}
        </h3>
        <p className=" font-poppins  leading-6 text-dimWhite ">
          {content}
        </p>
      </div>
    </div>
  );

  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="hidden sm:block" />
          we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles={"mt-10"} />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;

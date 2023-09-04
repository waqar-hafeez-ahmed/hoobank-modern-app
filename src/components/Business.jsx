import styles, { layout } from "../style";
import { features } from "../constants";
import Button from "./Button";
const Business = () => {
  const FeatureCard = ({ icon , content, title }) => (
    <div
      className={` feature-card flex cursor-pointer   items-center justify-between gap-4 p-6 rounded-[20px]`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter} `}
      >
        <img src={icon} alt="" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-poppins font-semibold text-white leading-6 mb-1">
          {title}
        </h3>
        <p className=" font-poppins  text-dimWhite leading-6 ">
          {content}
        </p>
      </div>
    </div>
  );

  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" />
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

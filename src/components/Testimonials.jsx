import styles, { layout } from "../style";
import FeedbackCard from "./FeedbackCard";
import { feedback } from "../constants";

const Testimonials = () => {
  return (
    <section id="clients" className={` ${styles.flexCenter} flex-col relative ${styles.paddingY}`}>
     <div className="absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>
      <div
        className={`w-full flex justify-between sm:mb-16 mb-6 z-[1] md:flex-row  flex-col items-center`}
      >
        <h2 className={`${styles.heading2}`}>
          What people are <br className="sm:block hidden" />
          saying about us
        </h2>
        <div className=" w-full md:mt-0 mt-6">

        <p className={`${styles.paragraph}  max-w-[450px] `}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card)=>(

          <FeedbackCard key={card.id} {...card}/>
        ))
          
        }
      </div>
    </section>
  );
};

export default Testimonials;

import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  return (
    <section className={` ${styles.flexCenter} flex-row flex-wrap  sm:mb-20 mb-6`}>

    
        {stats.map((stat) => (
          <div
            className="flex flex-1 justify-start  items-center m-3 flex-row"
            key={stat.id}
          >
            <h2 className="text-4xl font-poppins font-bold"> {stat.value}</h2>
            <p className="text-xl font-poppins text-gradient">{stat.title}</p>
          </div>
        ))}
 
    </section>
  );
};

export default Stats;

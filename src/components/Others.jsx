import React from "react";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { skills } from "../constants";

const Others = () => {
  return (
    <div>
              <h2 className={`${styles.sectionHeadText} text-center`}>
          Other Skills I have  
        </h2>
      <br />
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      
      {skills.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    <br />
    <p className={`${styles.sectionSubText} text-center`}>
  Check my{" "}
  <a
    href='https://www.upwork.com/freelancers/~019b9bcbc8ab964978?viewMode=1'
    target='_blank'
    rel='noopener noreferrer'
    className='text-white text-3xl hover:text-[#34D399] transition-all duration-300'
  >
    UpWork
  </a>
  account to see my portfolio.
</p>
    </div>
  );
};

export default SectionWrapper(Others, "others");

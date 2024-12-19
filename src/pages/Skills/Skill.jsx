import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SkillCard from "../../Components/SkillCard/SkillCard";
import styles from "./Skills.module.css";
import { motion } from "framer-motion";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Circle from "../../Components/Circle/Circle";

function Skill() {
  return (
    <div>
      <Navbar />
      <Circle top={"18rem"} right={"-18rem"} />
      <MainContainer>
        <ComponentTitle title={"My Skills"} />
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
          className={styles.skill_container}
        >
          <SkillCard skill_name={"HTML"} level={5} key={"HTML"} />
          <SkillCard skill_name={"CSS "} level={5} key={"CSS"} />
          <SkillCard skill_name={"JavaScript"} level={4} key={"JavaScript"} />
          <SkillCard skill_name={"React.js"} level={4} key={"React.js"} />
          <SkillCard skill_name={"Redux (Classic & RTK)"} level={3} key={"Redux"} />
          <SkillCard
            skill_name={"Git and GitHub"}
            level={3}
            key={"Git and GitHub"}
          /> 
          <SkillCard
            skill_name={"Tailwind CSS"}
            level={4}
            key={"Tailwind"}
          />
          <SkillCard skill_name={"MongoDB"} level={4} key={"MongoDB"} />
          <SkillCard skill_name={"Express.js"} level={4} key={"Express.js"} />
          <SkillCard skill_name={"Node.js"} level={4} key={"Node.js"} />
          
          {/* <SkillCard skill_name={} */}
        </motion.div>
      </MainContainer>
    </div>
  );
}

export default Skill;

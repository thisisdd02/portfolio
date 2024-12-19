import ActionBox from "../../Components/ActionBox/ActionBox";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./AboutPage.module.css";
import ContainerTitle from "../../Components/ComponentTitle/ComponentTitle";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <Circle bottom={"19rem"} right={"-25rem"} />
      <MainContainer>
        <div className={style.about_component}>
          <ContainerTitle title={"About me"} />
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Education</h1>
            <div className={style.timeline_box}>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2016 - 2017"}
                  timeline_title={"High School"}
                  location={"KalyanaSundaram HSC School, Thanjavur"}
                  details={
                    "Completed my High School Degree from State Board with 78%."
                  }
                />
              </div>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2018 - 2019"}
                  timeline_title={"Senior Secondary (10+2)"}
                  location={"KalyanaSundaram School, Thanjavur"}
                  details={
                    "Completed my Degree from State Board with 72% from KalyanaSundaram HSC School, Thanjavur, 613009."
                  }
                />
              </div>
              <div className= {`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2022 - 2025"}
                  timeline_title={"Bachelors in Computer Applications"}
                  location={"Bharadhidasan University"}
                  details={
                    "Currently completing my Bachelors Degree in Computer Applications from Bharadhidasan University"
                  }
                  img={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq25wBcbXkIUAg1yyYvwNMT--QIk76V1QFkI0rIdt5Kw&s"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default AboutPage;

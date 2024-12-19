import Navbar from "../../Components/Navbar/Navbar";
import styles from "./ProjectPage.module.css";
import ProjectCard from "../../Components/ProjectCard/projectCard";
import ecommerce from "../../assets/e-commerce.jpg";
import foodDelivery from "../../assets/food-delivery.png";
import geminiClone from "../../assets/gemini-clone.jpg";
import chatApp from "../../assets/chat-app.jpg"
import musicApp from "../../assets/spotify-clone.jpg"
import youtubeClone from "../../assets/YT-clone.png"
import { motion } from "framer-motion";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";

function Projects() {
  return (
    <div>
      <Navbar />
      <Circle right={"-6rem"} top={"-8rem"} />
      <MainContainer>
        <div className={styles.project_page_component}> 
          <ComponentTitle title={"My projects"} /> 
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
            className={styles.projects_component}
          >
            <ProjectCard
              previewLink={"https://del-food-frontend.onrender.com/"}
              githubLink={"https://github.com/thisisdd02/del-food.git"}
              projectName={"Food delivery"}
              projectDetails={
                "Mern Stack Food Delivery: Ordering Food and Pay by Payment Gatway "
              }
              demoImage={foodDelivery}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
                "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
              ]}
            />
            <ProjectCard
              previewLink={"https://enchanting-gumption-207080.netlify.app/"}
              githubLink={"https://github.com/thisisdd02/mern-ecommerce.git"}
              projectName={"E-commerce"}
              projectDetails={
                "Mern E-commerce : AddToCart,Serach Products,Sort & Filter , RelatedProducts Payment by Payment Gateway ."
              }
              demoImage={ ecommerce}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
                "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
                "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
                "https://cdn.worldvectorlogo.com/logos/redux.svg"
              ]}
            />

            <ProjectCard
              previewLink={"https://gemini-clone-react.onrender.com"}
              githubLink={"https://github.com/thisisdd02/Gemini-clone-react.git"}
              projectName={"Gemini-clone"}
              projectDetails={
                "Gemini-clone : AI chatbot response to your query "
              }
              demoImage={geminiClone}
              key={"Gemini-clone"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                 "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
            <ProjectCard
              previewLink={"#"}
              githubLink={
                "https://github.com/thisisdd02/Howdy.git"
              }
              projectName={"Mern Chat Application"}
              projectDetails={
                "Mern Chat-App - using Socket.io to connect frontend to backend"
              }
              demoImage={chatApp}
              key={"Mern Chat Application"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
                "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
                "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
                "https://cdn.worldvectorlogo.com/logos/socket-io.svg"
              ]}
            />
            <ProjectCard
              previewLink={"https://musically-client.onrender.com"}
              githubLink={"https://github.com/thisisdd02/Musically.git"}
              projectName={"Mern Music App"}
              projectDetails={
                "Mern Music Application to play and pause the song as you wish"
              }
              demoImage={musicApp}
              key={"Mern Music App"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
                "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
                "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
              ]}
            />
            <ProjectCard
              previewLink={"https://yt-clone-tbju.onrender.com/"}
              githubLink={
                "https://github.com/thisisdd02/YT-Clone.git"
              }
              projectName={"Youtube Clone"}
              projectDetails={
                "Youtube UI Clone to play the video and pause , see the comments."
              }
              demoImage={youtubeClone}
              key={"Youtube Clone"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
          </motion.div>
        </div>
      </MainContainer>
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: ".3", stiffness: "150" }}
        className="component_container"
      ></motion.div>
    </div>
  );
}

export default Projects;

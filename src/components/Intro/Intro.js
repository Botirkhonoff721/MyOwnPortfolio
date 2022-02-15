import React, { useState } from "react";
import { Box, SubBox, Text, Img } from "./style";
import Me from "../../assets/Images/profile-img.png";
import { motion } from "framer-motion";
import {
  MainContainer,
  Container,
  Contact,
  BLOG,
  Work,
  ABOUT,
  SKILLS,
  BottomBar,
  Center,
  DarkDiv,
  Button,
} from "./style";
const Intro = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h3>Assalamu alaykum</h3>
          <h1>I'm ABDULAZIZ.</h1>
          <h6>I'm Frontend Developer</h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <DarkDiv click={click} />
            <Contact
              target="blank"
              to={{ pathname: " mailto: botirkhonoffon571@gmail.com" }}
            >
              <h2>Contact</h2>
            </Contact>
            <BLOG to="/blog">
              <h2>Resume</h2>
            </BLOG>
            <Work to="/work" click={click}>
              <h2>Work</h2>
            </Work>
            <ABOUT to="/about" click={click}>
              <h2>About</h2>
            </ABOUT>
            <SKILLS to="/skills">
              <h2 style={{ fontSize: "2vw" }}>My skills</h2>
            </SKILLS>
          {click ? <Intro click={click} /> : null}
          {/* <Img src={Me} alt="Profile pic" /> */}
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;

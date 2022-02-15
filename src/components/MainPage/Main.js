import React, { useState } from "react";
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
import PowerButton from "../../subComponents/PowerButton";
import LogoComponent from "../../subComponents/LogoComponent/LogoComponent";
import SocialIcons from "../../subComponents/SocialIcons/SocialIcons";
import LanguagesLogo from "../../assets/svg/LanguagesLogo.jpg";
import Intro from "../Intro/Intro";
import { YinYang } from "../AllSvgs/AllSvg";
const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />
        <Center click={click}>
          {/* <YinYang
            onClick={() => handleClick()}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          ></YinYang> */}
          <Button
            src={LanguagesLogo}
            onClick={() => handleClick()}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            // fill="currentColor"
          >
            {" "}
            {click ? "Back" : "Welcome to my Portfolio"}
          </Button>
 </ Center >
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;

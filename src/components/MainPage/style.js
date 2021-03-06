import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
export const MainContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

export const Container = styled.div`
  padding: 2rem;
`;
export const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body} ;
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

export const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 6%;
  right: 50%;
  text-decoration: none;
  z-index: 1;
`;

export const Work = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 6%;
  left: 30%;
  text-decoration: none;
  z-index: 1;
`;
export const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
export const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  text-decoration: none;
  z-index: 1;
  /* top: 100%; */
  bottom: 94%;
`;
export const SKILLS = styled(NavLink)`
  color: ${(props) => (onclick ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;
const rotate = keyframes`
    from{
        transform: rotate(0);
    }
    to{
        transform: rotate(360deg);
    }
`;
export const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  /* & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }
  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  } */
`;

export const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  background-color: #000;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

export const Button = styled.p`
position: relative;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 2em;
  letter-spacing: 4px;
  overflow: hidden;
  background: linear-gradient(90deg, #000, #fff, #000);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 5s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
}

@keyframes animate {
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }

`;

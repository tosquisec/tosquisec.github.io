/** @jsx jsx */
import { jsx } from "theme-ui";
import Divider from "../elements/divider";
import Inner from "../elements/inner";
import Content from "../elements/content";
import Svg from "./svg";
import { UpDown, UpDownWide, Rain } from "../styles/animations";
import Intro from "../sections/intro.mdx";
import Window from "./project-window";

// Array of available icons
const icons = [
  "python",
  "javascript",
  "java",
  "spring",
  "trendmicro",
  "splunk",
  "msdos",
  "typescript",
  "android",
  "c",
  "packer",
  "apple",
  "linux",
  "angular",
  "terraform",
  "windows",
  "docker",
  "powershell",
  "ansible"
];

// Function to shuffle the array of icons
const shuffleArray = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

// Shuffle the icons array
const shuffledIcons = shuffleArray([...icons]);

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  // Index for the shuffledIcons array
  let iconIndex = 0;

  // Function to get the next icon
  const getNextIcon = () => {
    if (iconIndex >= shuffledIcons.length) {
      iconIndex = 0; // Reset to first icon if we run out
    }
    return shuffledIcons[iconIndex++];
  };

  return (
    <div>
      <Divider speed={0.2} offset={offset} factor={factor}>
        <Rain>
          <Svg icon={getNextIcon()} size="100px" left="5%" top="10%" />
          <Svg icon={getNextIcon()} size="100px" left="5%" top="10%" />
          <Svg icon={getNextIcon()} size="100px" left="5%" top="10%" />
          <Svg icon={getNextIcon()} size="100px" left="5%" top="10%" />
          <Svg icon={getNextIcon()} size="100px" left="5%" top="10%" />
          <Svg icon={getNextIcon()} size="100px" left="5%" top="10%" />
          <Svg icon={getNextIcon()} size="100px" left="5%" top="10%" />
          <Svg icon={getNextIcon()} size="100px" left="5%" top="10%" />
          <Svg icon={getNextIcon()} size="100px" left="5%" top="10%" />
          <Svg icon={getNextIcon()} size="100px" left="5%" top="10%" />
          <Svg icon={getNextIcon()} size="100px" left="5%" top="10%" />
          <Svg icon={getNextIcon()} size="100px" left="5%" top="10%" />
          <Svg icon={getNextIcon()} size="100px" left="5%" top="10%" />
          <Svg icon={getNextIcon()} size="100px" left="5%" top="10%" />
          <Svg icon={getNextIcon()} size="100px" left="5%" top="10%" />
          <Svg icon={getNextIcon()} size="100px" left="5%" top="10%" />
          <Svg icon={getNextIcon()} size="100px" left="5%" top="10%" />
          <Svg icon={getNextIcon()} size="100px" left="5%" top="10%" />
          <Svg icon={getNextIcon()} size="100px" left="5%" top="10%" />
        </Rain>
      </Divider>
      <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="bash" size="45%" left="5%" top="-4" />
      </UpDown>
      
      {/* <RainAndDissolve>
        <Svg icon={getNextIcon()} hiddenMobile width={64} left="5%" top="10%" />
        <Svg icon={getNextIcon()} hiddenMobile width={64} left="20%" top="75%" />
        <Svg icon={getNextIcon()} hiddenMobile width={64} left="35%" top="20%" />
        <Svg icon={getNextIcon()} hiddenMobile width={64} left="50%" top="85%" />
        <Svg icon={getNextIcon()} hiddenMobile width={64} left="65%" top="30%" />
        <Svg icon={getNextIcon()} hiddenMobile width={64} left="80%" top="60%" />
        <Svg icon={getNextIcon()} hiddenMobile width={64} left="10%" top="50%" />
        <Svg icon={getNextIcon()} hiddenMobile width={64} left="25%" top="90%" />
        <Svg icon={getNextIcon()} hiddenMobile width={64} left="40%" top="15%" />
        <Svg icon={getNextIcon()} hiddenMobile width={64} left="55%" top="70%" />
        <Svg icon={getNextIcon()} hiddenMobile width={64} left="70%" top="5%" />
        <Svg icon={getNextIcon()} hiddenMobile width={64} left="85%" top="40%" />
        <Svg icon={getNextIcon()} hiddenMobile width={64} left="15%" top="80%" />
        <Svg icon={getNextIcon()} hiddenMobile width={64} left="30%" top="25%" />
        <Svg icon={getNextIcon()} hiddenMobile width={64} left="45%" top="55%" />
        <Svg icon={getNextIcon()} hiddenMobile width={64} left="60%" top="10%" />
      </RainAndDissolve>       */}
      </Divider>
      <Content
        sx={{ variant: `texts.bigger` }}
        speed={0.4}
        offset={offset}
        factor={factor}
      >
        <Inner>
          <Intro />
        </Inner>
      </Content>
    </div>
  );
};

export default Hero;
import { Flex, VStack, Heading } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { useColorMode } from "@chakra-ui/color-mode";
import Header from "./components/Header/Header";
import Social from "./components/Social/Social";
import Profile from "./components/Profile/Profile";
import React from "react";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          Popagusi{" "}
        </Heading>
        <a
          href="https://www.linkedin.com/in/agustinrolettomktdigital/"
          target="blank"
        >
          {" "}
          <IconButton icon={<FaLinkedin />} isRound="true"></IconButton>
        </a>
        <a href="https://github.com/agustinroletto" target="blank">
          <IconButton ml={2} icon={<FaGithub />} isRound="true"></IconButton>
        </a>
        <a href="https://www.instagram.com/agusroletto/" target="blank">
          <IconButton ml={2} icon={<FaInstagram />} isRound="true"></IconButton>
        </a>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
};

export default App;

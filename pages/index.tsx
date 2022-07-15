import Advantage from "../components/Advantage/Advantage";
import { Container } from "@chakra-ui/react";
import Featured from "../components/Home/Featured/Featured";
import type { NextPage } from "next";
import Section from "../components/Section";

const Home: NextPage = () => {
  return (
    <>
      <Featured />
      <Advantage py={8} minH="auto" bg="#37474f" color="white" />
    </>
  );
};

export default Home;

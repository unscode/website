import Advantage from "../components/Advantage/Advantage";
import Featured from "../components/Home/Featured/Featured";
import type { NextPage } from "next";
import Service from "../components/Service/Service";

const Home: NextPage = () => {
  return (
    <>
      <Featured />
      <Advantage py={8} minH="auto" bg="#37474f" color="white" />
      <Service py={8} />
    </>
  );
};

export default Home;

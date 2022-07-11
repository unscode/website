import { Box, Container, Heading, Text } from "@chakra-ui/react";

import type { NextPage } from "next";
import Section from "../components/Section";

const Home: NextPage = () => {
  return (
    <Box>
      <Section>
        <Container maxW="container.xl">
          <Box w={["100%", "65%"]}>
            <Heading mb={4} textTransform="uppercase" fontWeight="700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Heading>
            <Text>
              lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Nam, doloribus,
              temporibus consectetur ratione iste deleniti, atque consequatur
              voluptate incidunt adipisci dolorum! Dolorum labore quod ad, dolor
              aliquam magni? Saepe, expedita.
            </Text>
          </Box>
          <Box></Box>
        </Container>
      </Section>
      <Section>
        <Container maxW="container.xl">Section 2</Container>
      </Section>
    </Box>
  );
};

export default Home;

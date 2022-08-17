import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Section, { SectionProps } from "../../Section";

import Illustration from "./Illustration";
import React from "react";

export default function Featured(props: SectionProps) {
  return (
    <Section {...props}>
      <Container maxW="container.xl">
        <Flex alignItems="center">
          <Box w={["80%"]}>
            <Heading mb={8} fontWeight="800" fontSize={["2xl", "7xl"]}>
              Desenvolvimento de{" "}
              <Text
                as="span"
                background="-webkit-linear-gradient(315deg,#ff9966 25%,#fd1d7c)"
                backgroundClip="text"
                __css={{
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                }}
              >
                Sistemas
              </Text>{" "}
              e Consultoria de
              <Text
                as="span"
                background="-webkit-linear-gradient(315deg,#ff9966 25%,#fd1d7c)"
                backgroundClip="text"
                __css={{
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                }}
              >
                {" "}
                TI.
              </Text>
            </Heading>
            <Text fontSize="lg">
              Não importa onde você esteja, Nós temos a solução para você
            </Text>
            <Text mb={8} fontSize="lg">
              Trazer automação, agilidade eficiência usando tecnologia é o nosso
              jeito de mudar vidas.
            </Text>
            <Button size="lg" bg="#ff9966" color="white">
              <Text fontSize="lg" fontWeight="700">
                Contate-nos
              </Text>
            </Button>
          </Box>
          <Box color="#ff6373">
            <Illustration w={650} />
          </Box>
        </Flex>
      </Container>
    </Section>
  );
}

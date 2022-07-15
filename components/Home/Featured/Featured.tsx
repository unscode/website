import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Section, { SectionProps } from "../../Section";

import Illustration from "./Illustration";
import React from "react";

export default function Featured(props: SectionProps) {
  return (
    <Section {...props}>
      <Container maxW="container.xl">
        <Flex alignItems="center">
          <Box w={["100%", "65%"]}>
            <Heading mb={8} textTransform="uppercase" fontWeight="700">
              Desenvolvimento de sistemas e consultoria de
              <Text as="span" color="#fe735e">
                {" "}
                TI
              </Text>
            </Heading>
            <Text fontSize="lg">
              Não importa onde você esteja, Nós temos a solução para você
            </Text>
            <Text mb={8} fontSize="lg">
              Trazer automação, agilidade eficiência usando tecnologia é o nosso
              jeito de mudar vidas.
            </Text>
            <Button size="lg" bg="#fe735e" color="white">
              <Text fontSize="lg" fontWeight="700">
                Contate-nos
              </Text>
            </Button>
          </Box>
          <Box color="#fe735e">
            <Illustration w={[600]} />
          </Box>
        </Flex>
      </Container>
    </Section>
  );
}

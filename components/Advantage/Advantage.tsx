import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import Section, { SectionProps } from "../Section";

import React from "react";

export default function Advantage(props: SectionProps) {
  return (
    <Section {...props}>
      <Container maxW="container.xl">
        <Flex alignItems="center" justifyContent="space-between">
          <Box
            p={5}
            borderWidth={5}
            borderColor="currentColor"
            borderRightWidth={0}
            w={["35%"]}
            position="relative"
            _after={{
              top: 0,
              right: 0,
              content: "''",
              height: "40%",
              borderRightWidth: 5,
              borderRightColor: "currentColor",
              position: "absolute",
            }}
          >
            <Heading as="h4" size="md" mb={4} color="#fe735e">
              Vantagens de Trabalhar com a nossa equipe de TI
            </Heading>
            Oferecemos entrega confiável e eficiente com engenheiros de alta
            eficiência e processos de desenvolvimento de software transparente.
            Sabe aquele problema de não encontrar profissional qualificado para
            aquele serviço? Ou a empresa que você contratou não está sendo
            transparente com o trabalho e estendendo os prazos? Os valores são
            exorbitantes mas não está gerando valor e gerando impacto na
            prática?
          </Box>
          <Box w={["40%"]}>
            <Heading as="h3" size="lg" color="#fe735e">
              Vem com a Unscode que a gente resolve! Comunicação, Agilidade e
              Transparência são os nossos lemas.
            </Heading>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
}

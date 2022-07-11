import {
  Box,
  ChakraProps,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  useStyleConfig,
} from "@chakra-ui/react";

import Brand from "./Brand";
import React from "react";

interface NavbarProps extends ChakraProps {}

export default function Navbar(props: NavbarProps) {
  const { ...rest } = props;
  const styles = useStyleConfig("Navbar");
  return (
    <Box __css={styles} {...rest}>
      <Container maxW="container.xl">
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Brand w="150px" />
          </Box>
          <Box>
            <Stack direction={["column", "row"]} spacing={5}>
              <Text fontSize="2xl">Início</Text>
              <Text fontSize="2xl">Serviços</Text>
              <Text fontSize="2xl">Recursos</Text>
              <Text fontSize="2xl">Sobre</Text>
            </Stack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

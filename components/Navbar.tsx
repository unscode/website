import {
  Box,
  ChakraProps,
  Container,
  Flex,
  useStyleConfig,
} from "@chakra-ui/react";

import React from "react";

interface NavbarProps extends ChakraProps {}

export default function Navbar(props: NavbarProps) {
  const { ...rest } = props;
  const styles = useStyleConfig("Navbar");
  return (
    <Box __css={styles} {...rest}>
      <Container maxW="container.xl">
        <Flex>
          <Box>1</Box>
          <Box>2</Box>
        </Flex>
      </Container>
    </Box>
  );
}

import { Box, ChakraProps, useStyleConfig } from "@chakra-ui/react";

interface SectionProps extends ChakraProps {
  children?: React.ReactNode;
}

export default function Section({ children, ...props }: SectionProps) {
  const { ...rest } = props;
  const styles = useStyleConfig("Section");

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

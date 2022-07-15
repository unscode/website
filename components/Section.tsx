import { Box, BoxProps, useStyleConfig } from "@chakra-ui/react";

export interface SectionProps extends BoxProps {
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

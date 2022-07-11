import { ComponentSingleStyleConfig, ThemeConfig, extendTheme } from "@chakra-ui/react";
import { GlobalStyleProps, Styles } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: true,
}

const styles: Styles = {
    global: ({ colorMode }: GlobalStyleProps) => ({
        body: {
            background: colorMode === "light" ? "white" : "black",
        },
        "*::placeholder": {
            color: colorMode === "light" ? "gray.600" : "gray.400",
        }
    }),
}

const Navbar: ComponentSingleStyleConfig = {
    baseStyle: {
        position: "sticky",
        zIndex: 999,
    }
}

const theme = extendTheme({
    config,
    componentes: {
        Navbar
    },
    styles,
});

export default theme;

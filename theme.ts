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
            //fontFamily: "'Lato', sans-serif"
            fontFamily: "'Nunito', sans-serif"
        },
        "*::placeholder": {
            color: colorMode === "light" ? "gray.600" : "gray.400",
        }
    }),
}

const Navbar: ComponentSingleStyleConfig = {
    baseStyle: ({ colorMode }) => ({
        top: 0,
        py: 4,
        width: "100%",
        background: colorMode === "light" ? "white" : "black",
        //position: "sticky",
        position: "fixed",
        zIndex: 999
    }),
}

const Section: ComponentSingleStyleConfig = {
    baseStyle: ({ colorMode }: GlobalStyleProps) => ({
        width: "100%",
        minHeight: "100vh",
        color: colorMode === "light" ? "gray.600" : "gray.400",
        background: colorMode === "light" ? "white" : "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    })
}

const theme = extendTheme({
    config,
    components: {
        Navbar, 
        Section,
    },
    styles,
});

export default theme;

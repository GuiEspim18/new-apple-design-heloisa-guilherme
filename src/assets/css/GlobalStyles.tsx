import styled, { css, createGlobalStyle } from "styled-components";
import { darkLightBlue, light_blue, opacityWhite, primaryColor } from "../main/main";

export const Global = createGlobalStyle`
    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;


export const StyledButton = styled.button`
    width: 100%;
    height: 50px;
    padding: 10px;
    box-sizing: border-box;
    color: ${primaryColor};
    font-weight: 300;
    font-size: 15px;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: ${opacityWhite};
    }
`;


export const BlueButton = styled(StyledButton)`
    padding: 5px 20px !important;
    box-sizing: unset !important;
    background: ${light_blue};
    transition: 0.3s;
    min-width: 150px;
    text-align: center;


    &:hover {
        background: ${darkLightBlue};
    }
`;


export const noCopy = css`
    -webkit-user-select:none;
    -moz-user-select:none;
    user-select:none;
`;


export const StyledLink = styled.a`
    cursor: pointer;
    transition: 0.3s;
    text-decoration: none;
    color: ${primaryColor};
    padding: 5px;

    &:hover {
        text-decoration: underline;
    }
`;


export const StyledIconButton = styled.button`
    padding: 20px;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    box-sizing: border-box;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;
    border: none;

    &:hover {
        background: ${opacityWhite};
    }

    img {
        width: 30px !important;
    }
`;


export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;
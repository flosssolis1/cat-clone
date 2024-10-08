import styled from "styled-components";

export const HeaderComponent = styled.header`
    width: calc(100% - 40px);
    border-bottom: 1px solid #000;
    padding: 20px 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const RedButton = styled.button`
    display: none;

    @media (min-width: 900px) {
        display: block;
    }

    background: #FB4B4D;
    border-radius: 0;
    outline: none;
    border: none;
    padding: 15px 30px;

    font-family: "Roboto", sans-serif;
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    text-transform: uppercase;

    transition: 0.3s;

    &:hover {
        background: #BB3839;
        outline: none;
        border: none;
    }

    &:focus {
        outline: none;
        border: none;
    }
`

export const Link = styled.a`
    display: none;

    @media (min-width: 900px) {
        display: block;
    }
        
    font-family: "Roboto", sans-serif;
    color: #000;
    font-weight: 400;
    font-size: 14px;
    text-transform: uppercase;

    transition: 0.3s;

    &:hover {
        cursor: pointer;
        color: #8B83F6;
    }
`

export const MenuButton = styled.button`
    display: block;

    background: transparent;
    outline: none;
    border: none;

    &:hover {
        outline: none;
        border: none;
    }

    &:focus {
        outline: none;
        border: none;
    }

    @media (min-width: 900px) {
        display: none;
    }
`
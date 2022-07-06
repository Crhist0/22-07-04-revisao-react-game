import { styled } from "@mui/material";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

type CustomLinkProps ={
    to: string;
    children: string | ReactElement
    isAppBar?: boolean
}

type StyledLinkProps = {
    isAppBar?: boolean
}

const StyledLink = styled(Link)<StyledLinkProps>`
width: 100%;
padding: ${props=> props.isAppBar ? ' 0px 4px' : '8px 16px'};
text-decoration: none;
color: black;
`


export default function CustomLink(props: CustomLinkProps) {
    
    return(
        <>
                <StyledLink 
                to={`/${props.to}`}
                isAppBar={props.isAppBar}
                >
                    {props.children}
                </StyledLink>
        </>
    )
}
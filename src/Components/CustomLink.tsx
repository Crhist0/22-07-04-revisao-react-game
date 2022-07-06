import { styled } from "@mui/material";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

type CustomLinkProps ={
    to: string;
    children: string | ReactElement
    isappbar?: boolean
    ishomebutton?: boolean
}

type StyledLinkProps = {
    isappbar?: boolean
    ishomebutton?: boolean
}

const StyledLink = styled(Link)<StyledLinkProps>`
width: ${props=> props.ishomebutton ? '100%' : ''};
padding: ${props=> props.isappbar ? ' 0px' : '8px 16px'};
text-decoration: none;
color: black;
`


export default function CustomLink(props: CustomLinkProps) {
    
    return(
        <>
                <StyledLink 
                to={`/${props.to}`}
                isappbar={props.isappbar}
                ishomebutton={props.ishomebutton}
                >
                    {props.children}
                </StyledLink>
        </>
    )
}
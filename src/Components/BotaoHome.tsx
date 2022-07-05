import { Button } from "@mui/material"
import CustomLink from "./CustomLink";

type BotaoHomeProps = {
    children: string;
    to: string
}

function BotaoHome(props: BotaoHomeProps) {
    
    return (
            <Button 
            sx={{width: '50%', padding: 0}} 
            variant="contained"
            >
                <CustomLink 
                to={props.to}
                >
                    {props.children}
                </CustomLink>
            </Button>
    )
}

export default BotaoHome
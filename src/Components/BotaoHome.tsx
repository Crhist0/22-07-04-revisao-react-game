import { Button } from "@mui/material"
import CustomLink from "./CustomLink";

type BotaoHomeProps = {
    children: string;
    to: string
}

function BotaoHome(props: BotaoHomeProps) {
    
    return (
            <Button 
            color="primary"
            sx={{width: '50%', padding: 0}} 
            variant="contained"
            >
                <CustomLink 
                ishomebutton
                to={props.to}
                >
                    {props.children}
                </CustomLink>
            </Button>
    )
}

export default BotaoHome
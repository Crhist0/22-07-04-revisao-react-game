import { Button } from "@mui/material"
import { ReactElement } from "react"

type BotaoHomeProps = {
    children: string
}

function BotaoHome(props: BotaoHomeProps) {
    
    return (

        <Button 
        sx={{width: '50%'}} 
        variant="contained">
            
            {props.children}
            
            </Button>

    )
}

export default BotaoHome
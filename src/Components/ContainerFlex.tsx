import { Container, useTheme } from "@mui/material"
import { ReactElement } from "react"

type ContainerFlexProps = {
    children: ReactElement[] | ReactElement
}

function ContainerFlex(props: ContainerFlexProps) {

    const theme = useTheme()   
    
    return(
        <>
            <Container 
            maxWidth="md" 
            disableGutters sx={{
                backgroundColor: theme.palette.background.default,
                height: 'inherit',
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '16px'
                }}>
                {props.children}
            </Container>
        </>
    )
}

export default ContainerFlex
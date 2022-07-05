import { Container } from "@mui/material"
import { ReactElement } from "react"

type ContainerFlexProps = {
    children: ReactElement[] | ReactElement
}

function ContainerFlex(props: ContainerFlexProps) {
    
    return(
        <>
            <Container 
            maxWidth="md" 
            disableGutters sx={{
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
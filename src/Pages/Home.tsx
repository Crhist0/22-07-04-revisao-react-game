import {Box, Button, Container} from '@mui/material'
import BotaoHome from '../Components/BotaoHome'
import ContainerFlex from '../Components/ContainerFlex'
function Home() {
    
    return(
        <>
            <ContainerFlex>
                <BotaoHome>Jogar</BotaoHome>
                <BotaoHome>Classificação</BotaoHome>
                <BotaoHome>Opções</BotaoHome>
            </ContainerFlex>
        </>
    )
}

export default Home
import { ReactElement } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Ranking from './Pages/Ranking'

type RouterProps = {
    children: ReactElement
}

function Router(props:RouterProps) {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                path='/' 
                element={
                <>
                    {props.children}
                    <Home/>
                </>
            } />
                <Route 
                path='/ranking' 
                element={
                <>
                    {props.children}
                    <Ranking/>
                </>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
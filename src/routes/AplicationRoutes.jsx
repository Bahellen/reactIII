import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Sobre from '../pages/Sobre/SectionApr'
import Comentarios from '../pages/Comentarios/Comentarios'
import Portfolio from '../pages/Portfolio/Portfolio'
import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'


function AplicationRoutes(){
    return(
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Sobre />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="comentarios" element={<Comentarios />} />
            </Routes>
            <Footer />
        </BrowserRouter>

    ) 
}

export default AplicationRoutes
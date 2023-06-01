import styled from "styled-components"

import Banner from "../components/Banner/Banner"
import Footer from '../components/Footer'
const StyleHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 91vh;
    
`


const Home = ()=>{
    return <StyleHome>
             
              <Banner/>
              <Footer/> 
            </StyleHome>
}

export default Home
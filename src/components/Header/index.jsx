import styled from "styled-components"
import logo from '../../assets/img/logo.png'
import Button from '../Button'
import { black,colorPrimary} from "../UI/variables"
import { Link } from "react-router-dom"


const StyleHeader = styled.nav`

background-color:${black['dark']};
display    :flex ;
justify-content: space-between;
align-items: center;
padding: 20px 40px;
border-bottom: 2px solid ${colorPrimary};
`
const Logo = styled.img`
width: 168px;
height: 40px;
`



const Header = () => {
    return <StyleHeader>
    <Link to="/"> <Logo src={logo} /></Link>
     <Button bgcolor='dark' color='white'>Nuevo Video</Button>
    </StyleHeader>

}
export default Header 
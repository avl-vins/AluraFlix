import logo from '../../assets/img/logo.png'
import styled from 'styled-components'
import { colorPrimary } from '../UI/variables'

const StyleFooter = styled.footer`
 display: flex;
 justify-content: center;
 align-items: flex-end;
 border-top: ${colorPrimary};
 color: white;
 border-top: 2px solid ${colorPrimary};
 padding: 20px;
` 


const Footer = ()=>{
    return <StyleFooter>
        <img src={logo} alt="" />
    </StyleFooter>
}
export default Footer
import styled from "styled-components"
import { colorPrimary ,black ,gray} from "../UI/variables"


// el boton pide color y backgroundcolor

const StyleButton = styled.button`
color:${({color})=>color==="white"? 'white':black[color]};
background-color:${({bgcolor})=> bgcolor === 'primary'? colorPrimary : (bgcolor==='dark'? black[bgcolor]:black[bgcolor])};
font-weight: 600;
font-size: 21px;
line-height: 24px;
border-radius: 4px;
padding: 5px 20px;
font-family:'Source Sans Pro';
border:1px solid ${gray['light']};
`

const Button = ({bgcolor,children,color})=>{ 
   return <StyleButton bgcolor={bgcolor} color={color} >{children}</StyleButton>
}
export default Button
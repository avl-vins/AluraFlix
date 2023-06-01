import styled from "styled-components"
import { gray,colorCursos } from "../UI/variables"

const StyleCategory = styled.div`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 60px;
    line-height: 70px;
    text-align: center;
    color: ${gray['light']};
    width: 296px;
    height: 92px;
    border-radius: 4px;
    background-color:${({bgColor})=>colorCursos[bgColor]}} ;
`
const TitleCategory = ({bgColor,children})=>{
   return <StyleCategory bgColor={bgColor}>{children}</StyleCategory>
}

export default TitleCategory
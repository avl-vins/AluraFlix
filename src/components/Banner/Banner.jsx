import styled from "styled-components"
import TitleCategory from "../TitleCategory/TitleCategory"
import frontend from '../../assets/img/frontend.png'
import { gray } from "../UI/variables"

const StyleBanner = styled.div`
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items:flex-end;
    height: 70vh;
    padding:0 28px 60px 28px;
   
`
const StyleSection = styled.section`
color:${gray['light']} ;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content:space-between;
background-color: red;
align-items: flex-start;
gap: 9px;
text-align: left;
height: 50%;
` 
const StyleTitle = styled.h1`
font-weight: 400;
font-size: 46px;
line-height: 54px;
`
const StyleParrafo = styled.p`
    font-weight: 300px;
    font-size: 18px;
    line-height: 21px;
`
const StylePlayer = styled.img`
    
`


const Banner = ()=>{
    return <StyleBanner>
            <StyleSection>
               <TitleCategory bgColor="frontend" color="light" >texto</TitleCategory>
                <StyleTitle>fdfdfdf</StyleTitle>
                <StyleParrafo>sdfskjdls sdlfjsldj sd fslkdfjsl d</StyleParrafo>

            </StyleSection>
           <StylePlayer src={frontend} />
        
        
    </StyleBanner>

}
export default Banner
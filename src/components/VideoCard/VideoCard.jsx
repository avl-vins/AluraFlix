import styled from "styled-components"


const StyledVideoCard = styled.div`
    border-radius: 4px;
`
const Video = styled.video`
    
`
const VideoCard = ()=>{

    return <StyledVideoCard>
        <Video controls>
            {/* <source type="video" / > */}
        </Video>
    </StyledVideoCard>
}
export default VideoCard
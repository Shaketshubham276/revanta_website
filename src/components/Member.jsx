import styled from "styled-components"
import {Facebook, FavoriteBorderOutlined, Instagram, LinkedIn, SearchOutlined, ShoppingCartOutlined}from "@mui/icons-material";

const Info=styled.div`
  opacity:0;
   width: 100%;
   height: 100%;
   position :absolute ;
   top: 0;
   left: 0;
   /* background-color:rgba(0,0,0,0.2); */
   z-index: 3;
   display: flex;
   align-items: center;
   justify-content: center;
   transition: all 0.5s ease;
   cursor: pointer;

`

const Container=styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
   display:flex;
   align-content: center;
   justify-content: center;
   background-color: #f5fbfd;
   position: relative;

   &:hover ${Info}{
   opacity: 1;
   }

`
const Circle=styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color:white;
    position:absolute;
`
const Image=styled.img`
   height :75% ;
   mix-blend-mode: darken;
   z-index: 2;
`

const Icon=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
`
const Post=styled.div`
   font-weight :800 ;
   color:white;
`

const Member = ({item}) => {
  return (
   
    <Container>
      <Circle/>
     
      <Image src={item.img}/>
     
      <Info>
      <Post>{item.post}</Post>
        <Icon>
          <Instagram/>  
        </Icon>
        <Icon>
          <LinkedIn/> 
        </Icon>
        <Icon>
          <Facebook/>  
        </Icon>
       
      </Info>
     
   
    </Container>
    
   
    
  )
}

export default Member
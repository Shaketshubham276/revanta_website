import { Send } from '@mui/icons-material'
import styled from 'styled-components'



const Container=styled.div`
    height: 60vh;
    background-color:#a4c6db;
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
`
const Title=styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Description=styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20;

`
const InputContainer=styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border:1px solid lightgray;
 
`
const Input=styled.input`
    border: none;
    flex:8;
    padding-left: 20px;

`
const Button=styled.button`
    flex:.5;
    border: none;
    background-color: teal;
    color:white;

`

const Newsletter = () => {
  return (
    <Container>
        <Title>Connect with us</Title>
        <Description>Let's bring revolution by helping us.</Description>
        <InputContainer>
        <Input placeholder='Your email'/>
        <Button>
            <Send/>
        </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter
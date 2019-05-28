import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%; /* necessário para alinhamento dos itens no centro */
`

export const Img = styled.img`
    max-width: 100%;
    height: auto;
    /* background-image: url('2200.jpg'); */
`

export const Card = styled.div`
    display: flex;
    width: 350px;
    height: 400px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-style: none;
    border-radius: 4px;
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.07);
    background-color: #FFF;
    margin-left: 50px;
`

export const Form = styled.form`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
`

export const Text = styled.h1`
    font-size: ${props => `${props.fontSize}px`};
`

export const Input = styled.input`
    font-size: 14px;
    border: 1px solid #DDD;
    border-radius: 4px;
    height: 40px;
    width: 250px;
    padding: 0 20px;
`

export const Button = styled.input`
    height: 40px;
    width: 250px;
    border-style: none;
    border-radius: 4px;
    font-size: 14px;
    background-color: #F4CF7F;
`

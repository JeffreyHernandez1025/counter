import { styled } from "styled-components"

const Title = styled.h1`
text-align: center;
margin-top: 20px;
`

export default function Counter(props) {
    return(
        <Title> {props.count} </Title>
    )
}
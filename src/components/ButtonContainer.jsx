import { styled } from "styled-components"

const Container = styled.div`
display: flex;
justify-content: space-evenly;
`

export default function ButtonContainer(props) {

    return(
        <Container>

                <button onClick={() => {
                    // adds one to the total count
                    props.setCount(props.count + 1)
                }}> increment </button>

                <button onClick={() => {
                    // subtracts one to the total count
                    props.setCount(props.count - 1)
                }}> decrement </button>

                <button onClick={() => {
                    // sets count back to 0
                    props.setCount(0)
                }}> reset </button>

                <button onClick={() => {
                    // sets count to a random number from 1 to 100
                    props.setCount(Math.floor(Math.random() * 100))
                }}> random </button>
        </Container>
    )
}
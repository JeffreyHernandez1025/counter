import Counter from './components/Counter';
import ButtonContainer from './components/ButtonContainer';
import { useState } from 'react';
import { styled } from 'styled-components';

const PageContainer = styled.div`

`

function App() {
  const [count, setCount] = useState(0)

  return (
    <PageContainer>
      
      <Counter 
      count = {count}
      />

      <ButtonContainer
      count = {count}
      setCount = {setCount}
      />
      
    </PageContainer>
  );
}

export default App;

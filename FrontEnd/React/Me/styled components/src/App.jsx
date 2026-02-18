import styled, { css } from 'styled-components'

const H1 = styled.h1`
${props => props.as === `h1` && css`color:red;`};
${props => props.as === `h2` && css`color:green;`};
${props => props.as === `h3` && css`color:blue;`};
padding: 1rem;
margin: 1rem;
` 
function App() {
  return (
    <div>
      <H1 as={`h1`}>sultan</H1>
      <H1 as={`h2`}>sultan</H1>
      <H1 as={`h3`}>sultan</H1>
    </div>
  )
}

export default App

import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Input,
} from "@chakra-ui/react";
import "./App.css";
import { useState } from "react";
function App() {
  const [ inputValue, setInputValue ] = useState('0');
  
  const handleInput = ( value ) => {
    setInputValue ( prevValue => {
      if( prevValue === '0') {
        return value;
      }
      else {
        return prevValue + value;
      }
    })
  }

  const operatorHandler = ( value ) => {
    setInputValue ( prevValue => {
      if(/[+\-*/]/.test(prevValue.slice(-1))) {
        return prevValue.slice(0, -1) + value;
      }
      else {
        return prevValue + value;
      }
    })
  }

  const backHandler = () => {
    setInputValue( prevValue => {
      if(prevValue.length === 1) {
        return '0';
      }
      else {
        return prevValue.slice(0, -1);
      }
    })
  }

  const clearHandler = () => {
    setInputValue('0')
  }

  const calculateHandler = () => {
    try {
      setInputValue(eval(inputValue))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Container maxW="3xl" mt="30px">
        <Box boxShadow="lg" p="6" rounded="md" bg="white">
          <Heading
            as="h1"
            fontSize="72px"
            mb="20px"
            color="#ec1839"
            align="center"
          >
            Calculator
          </Heading>
          <Box width='300px' m='auto'>
            <Input mb='4px' borderWidth='2px' textAlign='right' size='lg' value={inputValue} />
            <Grid templateColumns="repeat(4, 1fr)" gap={1}>
              <GridItem colSpan={2}>
                <Button width='100%' onClick={clearHandler}>Clear</Button>
              </GridItem>
              <GridItem colSpan={2}>
                <Button width='100%' onClick={backHandler}>Back</Button>
              </GridItem>
              <GridItem>
                <Button width='100%' onClick={() => handleInput('7')}>7</Button>
              </GridItem>
              <GridItem>
                <Button width='100%' onClick={() => handleInput('8')}>8</Button>
              </GridItem>
              <GridItem>
                <Button width='100%' onClick={() => handleInput('9')}>9</Button>
              </GridItem>
              <GridItem>
                <Button width='100%' onClick={() => operatorHandler('/')}>/</Button>
              </GridItem>
              <GridItem>
                <Button width='100%' onClick={() => handleInput('4')}>4</Button>
              </GridItem>
              <GridItem>
                <Button width='100%' onClick={() => handleInput('5')}>5</Button>
              </GridItem>
              <GridItem>
                <Button width='100%' onClick={() => handleInput('6')}>6</Button>
              </GridItem>
              <GridItem>
                <Button width='100%' onClick={() => operatorHandler('*')}>x</Button>
              </GridItem>
              <GridItem>
                <Button width='100%' onClick={() => handleInput('1')}>1</Button>
              </GridItem>
              <GridItem>
                <Button width='100%' onClick={() => handleInput('2')}>2</Button>
              </GridItem>
              <GridItem>
                <Button width='100%' onClick={() => handleInput('3')}>3</Button>
              </GridItem>
              <GridItem>
                <Button width='100%' onClick={() => operatorHandler('-')}>-</Button>
              </GridItem>
              <GridItem>
                <Button width='100%' onClick={() => handleInput('.')}>.</Button>
              </GridItem>
              <GridItem>
                <Button width='100%' onClick={() => handleInput('0')}>0</Button>
              </GridItem>
              <GridItem>
                <Button width='100%' bg='blue.500' color='white' onClick={ calculateHandler }>=</Button>
              </GridItem>
              <GridItem>
                <Button width='100%' onClick={() => operatorHandler('+')}>+</Button>
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default App;

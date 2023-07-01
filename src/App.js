import {
  Box,
  Container,
  Heading,
} from "@chakra-ui/react";
import { Calculator } from "./components/Calculator";
function App() {
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
          <Calculator />
        </Box>
      </Container>
    </>
  );
}

export default App;

import React from 'react';
import { ChakraProvider, Heading, theme } from '@chakra-ui/react';
import RHForm from './components/RHForm';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Heading my="4" textAlign="center" color="#CC4E81" mb="6">
        React-Hook-Form-Example (with Yup)
      </Heading>
      <RHForm />
    </ChakraProvider>
  );
}

export default App;

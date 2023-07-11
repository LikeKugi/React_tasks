import { Container, Divider, Stack } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import TodoViewer from "./components/TodoViewer";

function App() {
  return (
    <div className="App">
      <Container mt="5" mx="auto">
        <Stack spacing={4}>
          <NewTodo />
          <TodoViewer />
          <Divider />
        </Stack>
      </Container>
    </div>
  );
}

export default App;
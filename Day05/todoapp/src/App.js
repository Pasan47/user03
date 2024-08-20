import React, { useState, useEffect } from 'react';
import { Container, Form, Button, ListGroup, InputGroup } from 'react-bootstrap';

// Firebase
import { db } from './firebase';
import {
  query,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  // Fetch todos from Firestore
  useEffect(() => {
    const q = query(collection(db, 'TestToDo'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ id: doc.id, ...doc.data() });
      });
      setTodos(todosArray);
    });

    return () => unsubscribe();
  }, []);

  // Create new todo
  const createTodo = async (e) => {
    e.preventDefault();
    if (todo.trim() === '') {
      alert('Please enter a valid todo');
      return;
    }

    await addDoc(collection(db, 'TestToDo'), {
      text: todo,
      completed: false,
    });
    setTodo('');
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'TestToDo', id));
  };

  return (
    <Container className="mt-4">
      <h1>ToDo App</h1>
      <Form onSubmit={createTodo}>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Add a new todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button variant="dark" type="submit">
            +
          </Button>
        </InputGroup>
      </Form>
      <ListGroup>
        {todos.map((item) => (
          <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
            {item.text}
            <Button variant="danger" size="sm" onClick={() => deleteTodo(item.id)}>
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default App;

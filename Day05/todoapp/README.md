// App.jsx
import React, { useState } from 'react';
import { Container, Form, Button, ListGroup, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <Container className="mt-4">
      <h1>ToDo App</h1>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Add a new todo"
          value={todo}
          onChange={handleInputChange}
        />
        <Button variant="primary" onClick={handleAddTodo}>
          Add
        </Button>
      </InputGroup>
      <ListGroup>
        {todos.map((item, index) => (
          <ListGroup.Item key={index}>{item}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default App;



===========================================

import { useState, useEffect } from 'react';
import { Container, Form, Button, ListGroup, InputGroup } from 'react-bootstrap';

//firebase
import { db } from './firebase';
import{
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc
} from 'firebase/firestore';


const App = () => {

  const [todos, setTodos] = useState("");
  const [input, setInput] = useState([]);  //To handle todo list


  //!Create todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === ''){
      alert('Pls enter a valid todo');
      return;
    }
    await addDoc(collection(db, 'TestToDo'), {
      text: input,
      completed : false,
    });
    setInput('');
  }

  //! Fetch todos from Firestore
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

  //! Update todo
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed,
    })
  }

  //! Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'TestToDo', id))
  }

  

  return (
    <Container className="mt-4">
      <h1>ToDo App</h1>
      <Form onSubmit={createTodo}>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Add a new todo"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="dark" type='submit' >
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


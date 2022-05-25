import './App.css';
import MainNavbar from './components/MainNavbar';
import MainForm from './components/MainForm';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';

import "./components/MainForm.css"


import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
} from "react-router-dom";
import ReadTodo from './components/ReadTodo';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<>
            <MainNavbar />
            <Container fluid className="p-5">
              <MainForm />

            </Container>
          </>} />
          <Route path='read-todos' element={<>
            <MainNavbar />
            <ReadTodo />
          </>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


import './App.css';

import Welcome from './arrowfunction.jsx';
import Student from './welcome.jsx';
import S1 from './props.jsx';
import Counter from './Counter.jsx';
import St1 from './fragments.jsx';

import {
  Routes,
  Route,
  Link,
  useNavigate,
  useParams
} from 'react-router-dom';

import { useState, useEffect } from 'react';

// Material UI Imports
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';


// Header Component
function Header() {
  return <h2>Online Shopping</h2>;
}


// Product Component
function Product() {
  return <p>Product: Laptop</p>;
}


// Home Component
function Home() {
  return <h2>Home Page</h2>;
}


// About Component
function About() {
  return <h2>About Page</h2>;
}


// Login Component
function Login1() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Login Page</h2>

      <button onClick={() => navigate('/home')}>
        Login
      </button>
    </div>
  );
}


// Student ID using useParams
function Stu1() {
  const { id } = useParams();

  return <h2>Student ID: {id}</h2>;
}


// useState and useEffect Component
function StateExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component loaded");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}


// Main App Component
function App() {

  // Array
  const students = ['ABC', 'DEF', 'GHI'];

  // Conditional Rendering
  const isLoggedIn = true;

  return (
    <div className="container">

      <h1>Hello World</h1>


      {/* Header Component */}
      <Header />


      {/* Product Component */}
      <Product />


      {/* Arrow Function */}
      <Welcome />


      {/* Arrow Function with Props */}
      <Welcome name="kluniversity" />


      {/* Class Component with Props */}
      <Student name="Thanishka" />


      {/* Props Component */}
      <S1 name="Ravi" />


      {/* Counter Component */}
      <Counter />


      {/* Fragment Component */}
      <St1 />


      {/* useState and useEffect */}
      <StateExample />


      {/* Student List using map() */}
      <h2>Student List</h2>

      {students.map((student, index) => (
        <p key={index}>
          Name: {student}
        </p>
      ))}


      {/* Conditional Rendering */}
      {isLoggedIn ? (
        <h2>Welcome User</h2>
      ) : (
        <h2>Please Login</h2>
      )}


      {/* React Router Navigation */}
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/login">Login</Link> |
        <Link to="/student/101">Student</Link>
      </nav>


      {/* React Router Routes */}
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login1 />} />

        <Route path="/student/:id" element={<Stu1 />} />

      </Routes>


      {/* MATERIAL UI COMPONENTS */}

      <h1>Material UI Components</h1>


      {/* 1. Material UI Button */}
      <h2>1. Material UI Button</h2>

      <div className="mui-section">

        <Button variant="contained">
          Submit
        </Button>

        <Button variant="outlined">
          Cancel
        </Button>

        <Button variant="text">
          Learn More
        </Button>

      </div>


      {/* 2. Material UI TextField */}
      <h2>2. Material UI TextField</h2>

      <div className="mui-section">

        <TextField
          label="Enter Name"
          variant="outlined"
        />

      </div>


      {/* 3. Material UI Card */}
      <h2>3. Material UI Card</h2>

      <div className="mui-section">

        <Card sx={{ maxWidth: 300 }}>

          <CardContent>

            <Typography variant="h5">
              Student Details
            </Typography>

            <Typography>
              Name: Rahul
            </Typography>

            <Typography>
              Course: React
            </Typography>

          </CardContent>

        </Card>

      </div>


      {/* 4. Material UI AppBar */}
      <h2>4. Material UI AppBar</h2>

      <AppBar position="static">

        <Toolbar>

          <Typography variant="h6">
            My React App
          </Typography>

        </Toolbar>

      </AppBar>


      {/* 5. Material UI Table */}
      <h2>5. Material UI Table</h2>

      <div className="mui-section">

        <Table>

          <TableHead>

            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>

          </TableHead>

          <TableBody>

            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>ABC</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>DEF</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>GHI</TableCell>
            </TableRow>

          </TableBody>

        </Table>

      </div>

    </div>
  );
}

export default App;

import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
function Header() {
 return <h2>Online Shopping</h2>;
}
function Product() {
 return <p>Product: Laptop</p>;
}
function App() {
 return (
 <div>
 <Header />
 <Product />
 </div>
 
 );
}
export default App;

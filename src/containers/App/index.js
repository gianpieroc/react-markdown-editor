import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import './style.css'
import logoImg from '../../logo.svg'

const App = () => (
  <div>
    <header className="header">
      <img alt="" src={logoImg} className="logo"/>
      <Link to="/" className="item">Markdown</Link>
      <Link to="/about" className="item">About Me</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </main>
  </div>
)

export default App

import React from "react";
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Heading1, Heading2, Heading3 } from './Shared/Heading'
import { Button } from './Shared/Button'
import { ShopButton } from './Shared/ShopButton'

const App = () => {
  return (
    <Router>
      <Heading1
        fontSize='extraLarge'
        color='orange'
        alignment='left'
      >Hello</Heading1>
      <Heading2
        fontSize='large'
        color='orange'
        alignment='left'
      >Hello</Heading2>
      <Heading3
        fontSize='medium'
        color='orange'
        alignment='left'
      >Hello</Heading3>
      <Button primary>Hello World</Button>
      <Button>Hello World</Button>
      <ShopButton />
    </Router>
  )
}

export default App;

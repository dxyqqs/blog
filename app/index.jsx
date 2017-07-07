import "./index.scss";
import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from 'components/header/main';
import Content from 'components/content/main';

class Page extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="page">
        <Header />
        <Content />
      </div>
    )
  }
}

render(<Page />, document.getElementById('root'))
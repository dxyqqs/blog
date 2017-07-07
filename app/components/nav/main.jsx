import React, { Component } from 'react';

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            {this.renderLinks()}
          </ul>
        </div>
      </nav>
    )
  }
  renderLinks(){
    return this.props.links.map(({text})=>(<li key={text}><a href="#" >{text}</a></li>))
  }
}
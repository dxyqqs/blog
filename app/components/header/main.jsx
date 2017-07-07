import './main.scss';
import React, { Component } from 'react';
import Nav from "components/nav/main";
import { HeaderConfig } from "pageData/data.json";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.props = props;
  }
  render() {
    return <div className="container header">
      <div className="row">
        <div className="col-sm-12">
          <Nav links={HeaderConfig} />
        </div>
      </div>
    </div>

  }
  componentWillMount() {
    document.addEventListener('click', () => {
      this.setState({ show: !this.state.show })
    }, false)
    console.log(0)
  }
  componentDidMount() {
    console.log(1)
  }
  componentWillUnmount() {
    console.log(2)
  }
}

Header.defaultProps = {
  text: 1111111,
  links: HeaderConfig
};

import "./main.scss";
import React, { Component } from 'react';
import {Articles} from "pageData/data.json";


export default class Content extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="content">
              <div className="list-group">
                {this.renderArticleLinks()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  renderArticleLinks() {

    return Articles.map(({ title },index) => (<a href="#" key={index} className="list-group-item">{title}</a>))
  }
}
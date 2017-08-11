import "./main.scss";
import React, { Component } from 'react';
import { Articles } from "pageData/data.json";
import { markdown } from 'markdown';


export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { Articles: Articles.map((e) => Object.assign({}, e, { show: false })) }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="content">
              <div className="list-group" >
                {this.renderArticleLinks()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  renderArticleLinks() {

    return this.state.Articles.map(({ title }, index) => (<div key={index} className={`list-group-item ${this.state.Articles[index].show ? 'active' : ''}`} onClick={this.showArticle.bind(this, index)}><a href="#" >{title}</a></div>))
  }
  showArticle(index) {
    this.state.Articles[index].show = !this.state.Articles[index].show
    this.setState({ Articles: this.state.Articles })
  }
  componentWillMount() {
    const md_content = "Hello.\n\n* This is markdown.\n* It is fun\n* Love it or leave it."
    console.log(markdown.toHTML(md_content))
  }
}
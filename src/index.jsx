import React from "react";
import { render } from "react-dom";
import * as $ from "jquery";
import "./babel";
import Post from "./Post";
import "./styles/styles.css";
import "./styles/less.less";
import "./styles/sass.scss";
import data from "@data/data";
import wikiLogo from "./assets/wiki-logo.png";

const App = () => (
  <div className="container">
    <h1>Webpack course</h1>
    <hr />
    <div className="logo"></div>
    <hr />
    <pre className="code"></pre>
    <div className="box">
      <h2>Less</h2>
    </div>
    <div className="card">
      <h2>Sass</h2>
    </div>
  </div>
);

render(<App />, document.getElementById("app"));

const post = new Post("Webpack Post Title", wikiLogo);
const postStr = JSON.stringify(post, null, 2);
$("pre").html(postStr);
console.log("### post: ", post.toString());
console.log("### data: ", data);

import * as $ from "jquery";
import Post from "./Post";
import "./styles/styles.css";
import "./styles/less.less";
import "./styles/sass.scss";
import data from "@data/data";
import wikiLogo from "./assets/wiki-logo.png";

const post = new Post("Webpack Post Title", wikiLogo);
const postStr = JSON.stringify(post, null, 2);
$("pre").html(postStr);
console.log("### post: ", post.toString());
console.log("### data: ", data);

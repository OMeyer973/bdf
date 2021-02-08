import { app, text } from "hyperapp";
import h from "hyperapp-jsx-pragma";
import { state } from "./state.js";

//@jsx h

const init = state();
const node = document.getElementById("app");

const imacSvg = (
  <svg class="imac-icon" width="100%" height="100%" viewBox="0 0 380 304" id="imac-symbol">
      <path d="M228,152,152,76l38-38L152,0,114,38,76,0,38,38,76,76,0,152l76,76L38,266l38,38,38-38,38,38,38-38-38-38ZM76,152l38-38,38,38-38,38Z"/>
      <polygon points="228 0 190 38 304 152 190 266 228 304 380 152 228 0"/>
  </svg>
);

// replace \n with <br/>
const MakeBrs = str =>
  str
    .split("\n")
    .map((line) => [line, <br />])
    .flat()
    .slice(0, -1);

// make a new <span> blocks at each | euncountered
const MakeSpanBlocks = str =>
  str
    .split("|")
    .map((line) => [<span>{line}</span>, " "])
    .flat();

// converts a title to an id
const MakeId = str =>
  str
    .toLowerCase()
    .replace("<wbr>", "")
    .replace("'", "")
    .replace(/ |\.|_/g, "-");

const makeWbr = str =>
  str
  .split("<wbr>")
  .map((word) => [word, <wbr />])
  .flat()
  .slice(0, -1)

const Header = (props) => (
  <header class="header" id="header">
    <div class="container">
      <div id="sticker">
        <div id="sticker-decoration"></div>
        <h1 id="sticker-text">{MakeBrs(props.title)}</h1>
      </div>
      <p class="subtitle">{MakeSpanBlocks(props.subtitle)}</p>
    </div>
  </header>
);

const ListSection = (props) => (
  <section class="page-section" id={props.id}>
    <div class="container list">
      <h2>{props.title}</h2>
      <p class="subtitle">{MakeSpanBlocks(props.subtitle)}</p>
      {props.games.map(Item)}
    </div>
  </section>
);

const Item = (props) => (
  <div class="list-item" id={MakeId(props.title)}>
    <div class="item-row">
      <div class="icon show-item-description">
        <i class="fas fa-chevron-down"></i>
      </div>
      <h3 class="item-title">
        {makeWbr(props.title)}
      </h3>
      <a class="button" href={props.url} target="_blank">
        {[
          // props.imac ? <svg class="imac-icon"><use xlinkHref="#imac-symbol" /></svg> : "",
          props.imac ? imacSvg : "",
          props.buttonText ? props.buttonText : "Jouer",
        ]}
      </a>
    </div>
    <div class="item-description hidden">
      <p>{props.description}</p>
    </div>
  </div>
);

const Footer = () => (
  <footer class="footer">
    <div class="container"></div>
  </footer>
);

const view = (state) => (
  <div class="background-image">
    <Header {...state.header} />
    {state.lists.map(ListSection)}
    <Footer />
  </div>
);

app({ init, view, node });

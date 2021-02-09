import { app, text } from "hyperapp";
import h from "hyperapp-jsx-pragma";
import { state } from "./state.js";
import produce from "immer";

//@jsx h

const init = state();
const node = document.getElementById("app");

const imacSvg = (
  <svg class="imac-icon" width="100%" height="100%" viewBox="0 0 380 304" id="imac-symbol">
      <path d="M228,152,152,76l38-38L152,0,114,38,76,0,38,38,76,76,0,152l76,76L38,266l38,38,38-38,38,38,38-38-38-38ZM76,152l38-38,38,38-38,38Z"/>
      <polygon points="228 0 190 38 304 152 190 266 228 304 380 152 228 0"/>
  </svg>
);

// ACTIONS
// really long and broken immutable version
// const ToggleItemDescription = (state, listId, itemId) => ({
//   ...state,
//   lists: [
//     ...state.lists.filter(list => list.id != listId),
//     ...state.lists.filter(list => list.id == listId).map(list => [
//       ...list.items.filter(item => item.id != itemId),
//       ...list.items.filter(item => item.id == itemId).map(item => ({
//         ...item, 
//         open: !item.open            
//       }))
//     ])
//   ].concat(console.log(state))
// })

// mutable trick using immer's produce
const ToggleItemDescription = (state, listId, itemId) =>
  produce(state, draft => {
    draft
      .lists
      .find(list => list.id === listId)
      .items
      .find(item => item.id === itemId)
      .open ^= true; 
  })

// VIEWS
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
  <section class="page-section" id={props.htmlid}>
    <div class="container list">
      <h2>{props.title}</h2>
      <p class="subtitle">{MakeSpanBlocks(props.subtitle)}</p>
      {props.items.map(itemProps => Item(itemProps, props.id))}
    </div>
  </section>
);

const Item = (props, parentId) => (
  <div class="list-item" id={MakeId(props.title)}>
    <div class="item-row">
    <div class={["icon", "show-item-description", props.open ? "upside-down" : ""]} onclick={state => ToggleItemDescription(state, parentId, props.id)}>
        <i class="fas fa-chevron-down"></i>
      </div>
      <h3 class="item-title">
        {makeWbr(props.title)}
      </h3>
      <a class="button" href={props.url} target="_blank">
        {[
          props.imac ? imacSvg : "",
          props.buttonText ? props.buttonText : "Jouer",
        ]}
      </a>
    </div>
    <div class={["item-description", props.open ? "" : "hidden"]}>
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

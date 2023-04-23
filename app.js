/*
Nested Structure in html using react
<div id="parent">
    <div id="child1">
        <h1>hello h1 reach</h1>
        <h1>hello h2 reach</h1>
    </div>
      <div id="child2">
        <h1>hello h1 reach</h1>
        <h1>hello h2 reach</h1>
    </div>
</div>
*/

const heading = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "hello h1 react"),
      React.createElement("h2", {}, "hello h2 react"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "hello h1 react"),
      React.createElement("h2", {}, "hello h2 react"),
    ]),
  ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

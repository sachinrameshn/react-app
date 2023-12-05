const heading = React.createElement("div", {}, 
React.createElement("div",{},
    [
        React.createElement("h1", {"id": "heading2"},"Heading 1"),
        React.createElement("h2", {"id": "heading"},"I am heading2")
    ]));
console.log("heading",heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// Theory: all the containers tell their children how much space they are allowed to occupy ({ width?, height? })

let expand = elements => elements.join(elements);

let makeStyleAttr = styleObj => styleObj.map(entry => `${entry[0]}:${entry[1]}`).join(";");

let makeOpenElement = (tagName, styleObj) => `<${tagName} ${makeStyleAttr(styleObj)}>`;

let makeClosedElement = (tagName, styleObj, children) => `<${tagName} ${makeStyleAttr(styleObj)}>${expand(children)}</${tagName}>`;

let makeHint = textContents => [text({ contents: textContents })];

let container = ctx => {
    let children = ctx.children || makeHint("Container");
    return makeClosedElement("div", [["display", "flex"], ["flex-direction", "column"], ["gap", "5px"]], children);
};

let padder = ctx => {
    let children = ctx.children || makeHint("Padder");
    return makeClosedElement("div", [["padding", "10px"]], children);
};

let heading = ctx => {
    let contents = ctx.contents || "Heading";
    return makeClosedElement("h1", [], [contents]);
};

let centerer = ctx => {
    let children = ctx.children || makeHint("Centerer");
    return makeClosedElement("div", [["display", "flex"], ["align-items", "center"], ["justify-content", "center"]], children);
};

let pointer = ctx => {
    let target = ctx.target || "https://example.com";
    let children = ctx.children || makeHint("Pointer");
    return makeClosedElement("a", [["href", target]], children);
};

let paragraph = ctx => {
    let contents = ctx.contents || makeHint("");
    return make // unfinished
};

let text = ctx => {
    let contents = ctx.contents || "Text";
    return makeClosedElement("span", );
};

let grid = ctx => {
    let children = ctx.children || makeHint("Pointer");
    return makeClosedElement("")
};

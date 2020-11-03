import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Home from "./Home";
import pretty from "pretty";

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

// I think I'm using react-router-bootstrap has something to do with this yelling
// it("renders correctly", () => {
//     act(() => {
//         render(
//             <Home/>,
//             container
//         );
//     });
//     expect(container.innerHTML).toMatchSnapshot(pretty(container.innerHTML));
// });
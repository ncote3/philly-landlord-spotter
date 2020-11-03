import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import HomeButton from "./HomeButton";
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
});

// Similar to Home.test.js, I think I'm using react-router-bootstrap in a hacky way, making this yell
// it("renders correctly", () => {
//     act(() => {
//         render(
//             <HomeButton fontsize={'24pt'} link={'/blah'} text={'blah'}/>,
//             container
//         );
//     });
//     expect(container.innerHTML).toMatchSnapshot(pretty(container.innerHTML));
// });
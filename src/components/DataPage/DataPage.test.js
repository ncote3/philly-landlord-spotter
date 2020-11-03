import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import DataPage from "./DataPage";
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

it("renders correctly", () => {
    act(() => {
        render(
            <DataPage/>,
            container
        );
    });
    expect(container.innerHTML).toMatchSnapshot(pretty(container.innerHTML));
});
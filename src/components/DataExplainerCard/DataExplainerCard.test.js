import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import DataExplainerCard from "./DataExplainerCard";
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

it("renders correctly with props", () => {
    act(() => {
        render(
            <DataExplainerCard title={'Title'} example={'Example'} description={'Desc'} dataReference={'Data Ref'} />,
            container
        );
    });
    expect(container.innerHTML).toMatchSnapshot(pretty(container.innerHTML));
});
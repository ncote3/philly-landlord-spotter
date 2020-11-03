import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import pretty from "pretty";
import BarChart from "./BarChart";
import {CWPropertyDist} from "../../mockedData/CWPropertyDist";
import {IWPropertyDist} from "../../mockedData/IWPropertyDist";


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

it("renders correctly with no selected zip/citywide dist", () => {
    act(() => {
        render(<BarChart height={525} width={900} zipData={CWPropertyDist}/>, container);
    });
    expect(container.innerHTML).toMatchSnapshot(pretty(container.innerHTML));
});

// @TODO Test for the zip rendering with an assert
it("renders correctly with a selected zip", () => {
    act(() => {
        render(<BarChart height={525} width={900} zipData={IWPropertyDist} selectedZip={'19104'}/>, container);
    });
    expect(container.innerHTML).toMatchSnapshot(pretty(container.innerHTML));
});
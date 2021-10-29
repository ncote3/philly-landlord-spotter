import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { render as tlRender } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CWZipCodeBarChart from "./CWZipCodeBarChart";
import pretty from "pretty";
import useAxios from "axios-hooks";
import { CWPropertyDist } from "../../mockedData/CWPropertyDist";

jest.mock("axios-hooks");

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Axios Hook Aspects", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders correctly with a loading state", () => {
    useAxios.mockReturnValue([{ data: undefined, loading: true }]);
    const { queryByTestId } = tlRender(<CWZipCodeBarChart />, container);

    expect(queryByTestId("data")).toBeNull();
    expect(queryByTestId("loading")).not.toBeNull();
    expect(queryByTestId("error")).toBeNull();
    expect(container.innerHTML).toMatchSnapshot(pretty(container.innerHTML));
  });
  it("renders correctly with an error state", () => {
    useAxios.mockReturnValue([
      { data: undefined, loading: false, error: true },
    ]);
    const { queryByTestId } = tlRender(<CWZipCodeBarChart />, container);

    expect(queryByTestId("data")).toBeNull();
    expect(queryByTestId("loading")).toBeNull();
    expect(queryByTestId("error")).not.toBeNull();
    expect(container.innerHTML).toMatchSnapshot(pretty(container.innerHTML));
  });
  it("renders correctly with data", () => {
    useAxios.mockReturnValue([
      { data: CWPropertyDist, loading: false, error: false },
    ]);
    const { queryByTestId } = tlRender(<CWZipCodeBarChart />, container);

    expect(queryByTestId("data")).not.toBeNull();
    expect(queryByTestId("loading")).toBeNull();
    expect(queryByTestId("error")).toBeNull();
    expect(container.innerHTML).toMatchSnapshot(pretty(container.innerHTML));
  });
});

import React from "react";
import { render } from "@testing-library/react";
import Comment from "./Comment";
import data from "../user.json";

describe("<Comment />", () => {
  it("matches snapshot", () => {
    const { user } = data;
    const utils = render(<Comment user={user} />);
    expect(utils.container).toMatchSnapshot();
  });
  it("checks given props and comment-contianer DOM", () => {
    const { user } = data;
    const utils = render(<Comment user={user} />);
    utils.getByTestId("comment-container");
    utils.getByAltText("profile image");
    utils.getByText("Brad");
    utils.getByText(/German/i);
    utils.getByText("21");
  });
});

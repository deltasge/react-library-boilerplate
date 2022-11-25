import React from "react";
import { Avatar } from "..";
import { render } from "@testing-library/react";

describe("Avatar Component", () => {
  it("Avatar render", () => {
    render(<Avatar />);
  });
});
import React from "react";
import { Avatar } from "..";
import { render, screen } from "@testing-library/react";

describe("Avatar Component", () => {
  it("Avatar render", () => {
    render(<Avatar />);
  });

  it("Avatar render name", () => {
    render(<Avatar displayName="Marcio Cesar Corrêa" />);
    screen.getByText(/M/i);
  });

  it("Avatar render image", () => {
    render(<Avatar displayName="Marcio Cesar Corrêa" src="https://picsum.photos/200" />);
    screen.getByAltText("Marcio Cesar Corrêa");
  });
});
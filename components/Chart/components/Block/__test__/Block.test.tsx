import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Block from "../Block";

describe("Block", () => {
  it("should render Block component", () => {
    render(<Block label='label' value={33} />);
    expect(screen.getByTestId("value-container")).toBeInTheDocument();

    const block = screen.getByTestId("block");
    expect(block).toBeInTheDocument();
    expect(block).toHaveStyle(`height: ${33 * 2}px`);

    expect(screen.getByText("label")).toBeInTheDocument();
  });

  it("should hide value by default", () => {
    render(<Block label='label' value={33} />);

    expect(screen.getByTestId("value-container")).toHaveStyle("display: none");
  });

  it("should show value when block hovered", async () => {
    render(<Block label='label' value={33} />);

    await userEvent.hover(screen.getByTestId("block"));

    expect(screen.getByTestId("value-container")).toHaveStyle("display: block");
  });
});

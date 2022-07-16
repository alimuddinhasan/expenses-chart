import { render, screen } from "@testing-library/react";
import Block from '../Block';

describe("Block", () => {
  it("should render Block component", () => {
    render(<Block label="test" value={10} />)
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});

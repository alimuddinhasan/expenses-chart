import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "../Header";

describe("Header", () => {
  it("should render Header component", () => {
    render(<Header />);
    expect(screen.getByText('My balance')).toBeInTheDocument();
    expect(screen.getByText('$921.48')).toBeInTheDocument();
    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });
});

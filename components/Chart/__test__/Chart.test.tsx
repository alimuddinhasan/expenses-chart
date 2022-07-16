import { render, screen } from "@testing-library/react";
import Chart from '../Chart';

describe("Chart", () => {
  it("should render Chart component", () => {
    render(<Chart />)
    expect(screen.getByText('Chart')).toBeInTheDocument();
  });
});

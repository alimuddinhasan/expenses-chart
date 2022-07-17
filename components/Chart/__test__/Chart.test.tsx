import { render, screen } from "@testing-library/react";
import Chart from "../Chart";

describe("Chart", () => {
  it("should render Chart component", () => {
    const data = [
      { label: "label1", value: 11 },
      { label: "label2", value: 22 },
    ];
    render(<Chart data={data} />);
    expect(screen.getByText("label1")).toBeInTheDocument();
    expect(screen.getByText("label2")).toBeInTheDocument();
  });
});

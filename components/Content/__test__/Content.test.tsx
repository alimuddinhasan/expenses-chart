import { render, screen } from "@testing-library/react";
import Content from "../Content";

describe("Content", () => {
  it("should render Content component", () => {
    const data = [{ label: "test", value: 20 }];
    render(<Content data={data} />);
    expect(screen.getByText("Spending - Last 7 days")).toBeInTheDocument();
    expect(screen.getByText("Total this month")).toBeInTheDocument();
    expect(screen.getByText("$478.33")).toBeInTheDocument();
    expect(screen.getByText("+2.4%")).toBeInTheDocument();
    expect(screen.getByText("from last month")).toBeInTheDocument();
  });
});

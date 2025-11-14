import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

// mock headshot image
vi.mock("../assets/headshot.jpg", () => ({
  default: "mocked-headshot.jpg",
}));

describe("Home Page", () => {
  it("renders the main heading", () => {
    render(<Home />);

    expect(screen.getByText(/Hi, I'm Lennart Schaeffer./i)).toBeInTheDocument();
  });

  it("renders the introduction text", () => {
    render(<Home />);

    expect(
      screen.getByText(/third year CS student at Dalhousie University/i)
    ).toBeInTheDocument();
  });

  it("renders the headshot image", () => {
    render(<Home />);

    const image = screen.getByAltText("Lennart Schaeffer headshot");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "mocked-headshot.jpg");
  });

  it("renders the lead paragraph", () => {
    render(<Home />);

    const leadText = screen.getByText(
      /passion for Software Engineering and AI\/ML/i
    );
    expect(leadText).toBeInTheDocument();
  });
});

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "../pages/About";

describe("About Page", () => {
  it("renders the page title", () => {
    render(<About />);

    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("renders the education section", () => {
    render(<About />);

    expect(screen.getByText("Education")).toBeInTheDocument();
    expect(screen.getByText("Dalhousie University")).toBeInTheDocument();
    expect(
      screen.getByText("Bachelor of Computer Science")
    ).toBeInTheDocument();
  });

  it("displays the GPA", () => {
    render(<About />);

    expect(screen.getByText(/4\.16\/4\.30/i)).toBeInTheDocument();
  });

  it("renders the experience section", () => {
    render(<About />);

    expect(screen.getByText("Experience")).toBeInTheDocument();
  });

  it("displays company names", () => {
    render(<About />);

    expect(screen.getByText("BDO Canada")).toBeInTheDocument();
    expect(screen.getByText("Jazz Aviation")).toBeInTheDocument();
    expect(screen.getByText("Ditech Testing")).toBeInTheDocument();
  });

  it("displays job titles", () => {
    render(<About />);

    expect(
      screen.getByText("Incoming Data Engineering Intern")
    ).toBeInTheDocument();
    const sweDeveloperInterns = screen.getAllByText(
      "Software Developer Intern"
    );
    expect(sweDeveloperInterns).toHaveLength(2);
  });
});

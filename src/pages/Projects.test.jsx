import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Projects from "../pages/Projects";

//mock projects images imports
vi.mock("../assets/resuralph.png", () => ({ default: "mocked-resuralph.png" }));
vi.mock("../assets/bloomwatch.png", () => ({
  default: "mocked-bloomwatch.png",
}));
vi.mock("../assets/picklepal.png", () => ({ default: "mocked-picklepal.png" }));

describe("Projects Page", () => {
  it("renders the page title", () => {
    render(<Projects />);

    expect(screen.getByText("My Projects")).toBeInTheDocument();
  });

  it("renders all project titles", () => {
    render(<Projects />);

    expect(screen.getByText("ResuRalph")).toBeInTheDocument();
    expect(screen.getByText("Bloomwatch")).toBeInTheDocument();
    expect(screen.getByText("PicklePal")).toBeInTheDocument();
  });

  it("displays section headers for each project", () => {
    render(<Projects />);

    const overviewHeaders = screen.getAllByText("Overview");
    const problemSolvedHeaders = screen.getAllByText("Problem Solved");
    const myRoleHeaders = screen.getAllByText("My Role");
    const achievementsHeaders = screen.getAllByText("Key Achievements");

    expect(overviewHeaders).toHaveLength(3);
    expect(problemSolvedHeaders).toHaveLength(3);
    expect(myRoleHeaders).toHaveLength(3);
    expect(achievementsHeaders).toHaveLength(3);
  });

  it("renders project images with correct alt text", () => {
    render(<Projects />);

    expect(screen.getByAltText("ResuRalph")).toBeInTheDocument();
    expect(screen.getByAltText("Bloomwatch")).toBeInTheDocument();
    expect(screen.getByAltText("PicklePal")).toBeInTheDocument();
  });
});

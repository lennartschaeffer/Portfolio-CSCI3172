import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

describe("Header Component", () => {
  it("renders the header with navigation links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByText("Lennart Schaeffer")).toBeInTheDocument();

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders navigation links with correct paths", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const homeLink = screen.getByRole("link", { name: /home/i });
    const aboutLink = screen.getByRole("link", { name: /about/i });
    const projectsLink = screen.getByRole("link", { name: /projects/i });
    const contactLink = screen.getByRole("link", { name: /contact/i });

    expect(homeLink).toHaveAttribute("href", "/");
    expect(aboutLink).toHaveAttribute("href", "/about");
    expect(projectsLink).toHaveAttribute("href", "/projects");
    expect(contactLink).toHaveAttribute("href", "/contact");
  });
});

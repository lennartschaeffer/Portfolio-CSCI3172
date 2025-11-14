import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App Component", () => {
  it("renders the header and footer", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Lennart Schaeffer")).toBeInTheDocument();
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });

  it("renders Home page by default", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Hi, I'm Lennart Schaeffer./i)).toBeInTheDocument();
  });

  it("renders About page when navigating to /about", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("About Me")).toBeInTheDocument();
    expect(screen.getByText("Dalhousie University")).toBeInTheDocument();
  });

  it("renders Projects page when navigating to /projects", () => {
    render(
      <MemoryRouter initialEntries={["/projects"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("My Projects")).toBeInTheDocument();
    expect(screen.getByText("ResuRalph")).toBeInTheDocument();
  });

  it("renders Contact page when navigating to /contact", () => {
    render(
      <MemoryRouter initialEntries={["/contact"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Contact Me")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("renders NotFound page for invalid routes", () => {
    render(
      <MemoryRouter initialEntries={["/invalid-route"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Page Not Found")).toBeInTheDocument();
  });
});

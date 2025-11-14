import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Contact from "../pages/Contact";

describe("Contact Page", () => {
  it("renders the page title", () => {
    render(<Contact />);

    expect(screen.getByText("Contact Me")).toBeInTheDocument();
  });

  it("displays email section", () => {
    render(<Contact />);

    expect(screen.getByText("Email")).toBeInTheDocument();
    const emailLink = screen.getByRole("link", { name: /ln546006@dal\.ca/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:ln546006@dal.ca");
  });

  it("displays LinkedIn section", () => {
    render(<Contact />);

    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    const linkedInLink = screen.getByRole("link", { name: /view profile/i });
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute("target", "_blank");
    expect(linkedInLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("has correct LinkedIn URL", () => {
    render(<Contact />);

    const linkedInLink = screen.getByRole("link", { name: /view profile/i });
    expect(linkedInLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/lennart-schaeffer-929b12247/"
    );
  });

  it("renders email icon", () => {
    render(<Contact />);

    const emailIcon = document.querySelector(".bi-envelope-fill");
    expect(emailIcon).toBeInTheDocument();
  });

  it("renders LinkedIn icon", () => {
    render(<Contact />);

    const linkedInIcon = document.querySelector(".bi-linkedin");
    expect(linkedInIcon).toBeInTheDocument();
  });
});

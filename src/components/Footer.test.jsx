import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer Component", () => {
  it("renders the footer with copyright text", () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(
        `© ${currentYear} Lennart Schaeffer. All rights reserved.`
      )
    ).toBeInTheDocument();
  });

  it("displays the correct copyright year", () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(
      /Lennart Schaeffer. All rights reserved./i
    );
    expect(copyrightText.textContent).toContain(currentYear.toString());
  });
});

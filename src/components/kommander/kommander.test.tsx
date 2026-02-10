import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Kommander } from "./kommander";

describe("Kommander", () => {
  it("renders with the default title", () => {
    const { getByText } = render(<Kommander />);

    expect(getByText("Kommander — Hello world")).toBeTruthy();
  });

  it("renders with a custom title", () => {
    const { getByText } = render(<Kommander title="My Palette" />);

    expect(getByText("My Palette — Hello world")).toBeTruthy();
  });
});

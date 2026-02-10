import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Kommander } from "./kommander";

describe("Kommander", () => {
  it("renders the hello world heading", () => {
    const { getByText } = render(<Kommander />);

    expect(getByText("Hello world")).toBeTruthy();
  });
});

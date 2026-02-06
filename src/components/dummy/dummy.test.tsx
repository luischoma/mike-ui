import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Dummy } from "./dummy";

describe("Dummy", () => {
  it("renders the provided label", () => {
    const { getByText } = render(<Dummy label="Hello Mike" />);

    expect(getByText("Hello Mike")).toBeTruthy();
  });

  it("falls back when label is empty", () => {
    const { getByText } = render(<Dummy label="   " />);

    expect(getByText("Dummy")).toBeTruthy();
  });
});

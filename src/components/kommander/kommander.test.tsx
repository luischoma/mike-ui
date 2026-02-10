import { cleanup, fireEvent, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { Kommander } from "./kommander";

const pressHotkey = () => {
  fireEvent.keyDown(window, { key: "k", metaKey: true });
};

describe("Kommander", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders nothing when closed", () => {
    const { container } = render(<Kommander />);

    expect(container.querySelector("[role='dialog']")).toBeNull();
  });

  it("opens on Cmd+K", () => {
    const { getByRole } = render(<Kommander />);

    pressHotkey();

    expect(getByRole("dialog")).toBeTruthy();
  });

  it("renders the default title when open", () => {
    const { getByText } = render(<Kommander />);

    pressHotkey();

    expect(getByText("Kommander")).toBeTruthy();
  });

  it("renders a custom title when open", () => {
    const { getByText } = render(<Kommander title="My Palette" />);

    pressHotkey();

    expect(getByText("My Palette")).toBeTruthy();
  });
});

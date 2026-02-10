import { afterEach, describe, expect, it, vi } from "vitest";

import { registerKommanderHotkey } from "./register-kommander-hotkey";

const fireKey = (key: string, modifiers: Partial<KeyboardEvent> = {}) => {
  window.dispatchEvent(
    new KeyboardEvent("keydown", { key, bubbles: true, ...modifiers }),
  );
};

describe("registerKommanderHotkey", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("calls onTrigger on Cmd+K", () => {
    const onTrigger = vi.fn();
    const cleanup = registerKommanderHotkey({ enabled: true, onTrigger });

    fireKey("k", { metaKey: true });

    expect(onTrigger).toHaveBeenCalledOnce();
    cleanup();
  });

  it("calls onTrigger on Ctrl+K", () => {
    const onTrigger = vi.fn();
    const cleanup = registerKommanderHotkey({ enabled: true, onTrigger });

    fireKey("k", { ctrlKey: true });

    expect(onTrigger).toHaveBeenCalledOnce();
    cleanup();
  });

  it("ignores K without modifier", () => {
    const onTrigger = vi.fn();
    const cleanup = registerKommanderHotkey({ enabled: true, onTrigger });

    fireKey("k");

    expect(onTrigger).not.toHaveBeenCalled();
    cleanup();
  });

  it("ignores other keys with modifier", () => {
    const onTrigger = vi.fn();
    const cleanup = registerKommanderHotkey({ enabled: true, onTrigger });

    fireKey("a", { metaKey: true });

    expect(onTrigger).not.toHaveBeenCalled();
    cleanup();
  });

  it("returns noop and does not listen when disabled", () => {
    const onTrigger = vi.fn();
    const spy = vi.spyOn(window, "addEventListener");

    const cleanup = registerKommanderHotkey({ enabled: false, onTrigger });

    expect(spy).not.toHaveBeenCalled();

    fireKey("k", { metaKey: true });

    expect(onTrigger).not.toHaveBeenCalled();
    cleanup();
  });

  it("calls preventDefault by default", () => {
    const onTrigger = vi.fn();
    const cleanup = registerKommanderHotkey({ enabled: true, onTrigger });

    const event = new KeyboardEvent("keydown", {
      key: "k",
      metaKey: true,
      cancelable: true,
    });
    const spy = vi.spyOn(event, "preventDefault");

    window.dispatchEvent(event);

    expect(spy).toHaveBeenCalledOnce();
    cleanup();
  });

  it("skips preventDefault when configured", () => {
    const onTrigger = vi.fn();
    const cleanup = registerKommanderHotkey({
      enabled: true,
      onTrigger,
      preventDefault: false,
    });

    const event = new KeyboardEvent("keydown", {
      key: "k",
      metaKey: true,
      cancelable: true,
    });
    const spy = vi.spyOn(event, "preventDefault");

    window.dispatchEvent(event);

    expect(spy).not.toHaveBeenCalled();
    cleanup();
  });

  it("removes listener on cleanup", () => {
    const onTrigger = vi.fn();
    const cleanup = registerKommanderHotkey({ enabled: true, onTrigger });

    cleanup();

    fireKey("k", { metaKey: true });

    expect(onTrigger).not.toHaveBeenCalled();
  });
});

import type { DummyProps } from "./dummy.model";
import { resolveDummyLabel } from "./dummy.util";

import "./dummy.styles.css";

export const Dummy = ({ label = "Dummy" }: DummyProps) => {
  const resolvedLabel = resolveDummyLabel({ label });

  return (
    <span className="mike-dummy" data-mike-ui="dummy">
      {resolvedLabel}
    </span>
  );
};

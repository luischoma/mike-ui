import type { KommanderProps } from "./kommander.model";

import "./kommander.styles.css";

export const Kommander = ({ title = "Kommander" }: KommanderProps) => (
  <h2>
    {title} — Hello world
  </h2>
);

export type Command = {
  id: string;
  label: string;
  run: () => void | Promise<void>;
  keywords?: string[];
  group?: string;
  shortcut?: string | string[];
  enabled?: boolean;
  hidden?: boolean;
};

export type KommanderProps = {
  commands: Command[];
  label?: string;
};

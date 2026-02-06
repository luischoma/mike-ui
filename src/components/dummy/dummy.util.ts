type ResolveDummyLabelParams = {
  label: string;
};

export const resolveDummyLabel = ({
  label,
}: ResolveDummyLabelParams): string => {
  const trimmedLabel = label.trim();

  return trimmedLabel.length > 0 ? trimmedLabel : "Dummy";
};

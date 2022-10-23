import { Text as TextNative } from "react-native";

interface IText {
  children: string;
  size?: "sm" | "md" | "lg";
  color?: string;
}

const Text: React.FC<IText> = ({ children, size, color }) => {
  const fontSize = size === "sm" ? 20 : size === "md" ? 24 : 32;

  return (
    <TextNative
      style={{
        fontSize: fontSize || 20,
        color: color || "#C4C4CC",
      }}
    >
      {children}
    </TextNative>
  );
};

export default Text;

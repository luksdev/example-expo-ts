import { Text as TextNative } from "react-native";

interface IHeading {
  children: string;
  color?: string;
}

const Heading: React.FC<IHeading> = ({ children, color }) => {
  return (
    <TextNative
      style={{ fontWeight: "bold", fontSize: 32, color: color || "#E1E1E6" }}
    >
      {children}
    </TextNative>
  );
};

export default Heading;

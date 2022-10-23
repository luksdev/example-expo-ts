import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

interface IButton extends TouchableOpacityProps {
  onPress?: () => void;
  bgColor?: string;
  color?: string;
  p?: "sm" | "md" | "lg";
  mx?: number;
  my?: number;
  w?: string;
  value: string;
}

const Button: React.FC<IButton> = ({
  onPress,
  bgColor,
  color,
  mx,
  my,
  w,
  value,
  ...props
}: IButton) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: bgColor || "#8257E5",
        paddingHorizontal: 16,
        height: 32,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: mx || 0,
        marginVertical: my || 0,
        width: w || "30%",
      }}
      {...props}
    >
      <Text
        style={{
          color: color || "#FFF",
          fontWeight: "bold",
        }}
      >
        {value.toLocaleUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

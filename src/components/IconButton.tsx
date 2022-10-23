import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface IIconButton {
  onClick?: () => void;
  bgColor?: string;
  color?: string;
  icon: string;
}

const IconButton: React.FC<IIconButton> = ({
  onClick,
  bgColor,
  color,
  icon,
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor || "#8257E5",
        width: 50,
        height: 50,
        borderRadius: 8,
      }}
    >
      <View
        style={{
          padding: 16,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name={icon} size={20} color={color || "white"} />
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;

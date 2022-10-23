import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import IconButton from "./IconButton";
import Text from "./typography/Text";

interface ITranstionsBox extends TouchableOpacityProps {
  name: string;
  date: string;
  value: string;
}

const TransitionsBox: React.FC<ITranstionsBox> = ({
  name,
  date,
  value,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      style={{
        backgroundColor: "#211e1e",
        borderRadius: 10,
        marginBottom: 20,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <IconButton icon="wikipedia" />
        <View style={{ marginLeft: 10 }}>
          <Text size="sm">{name}</Text>
          <Text size="sm">{date}</Text>
        </View>
      </View>
      <View>
        <Text size="sm">{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TransitionsBox;

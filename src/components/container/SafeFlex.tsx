import { SafeAreaView, View } from "react-native";

interface ISafeFlex {
  children: React.ReactNode;
  bgColor?: string;
  p?: "sm" | "md" | "lg";
}

const SafeFlex: React.FC<ISafeFlex> = ({ children, bgColor, p }) => {
  const padding = p === "sm" ? 20 : p === "md" ? 40 : 60;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: bgColor || "#121214",
      }}
    >
      <View
        style={{
          padding: padding || 20,
          flexDirection: "column",
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};

export default SafeFlex;

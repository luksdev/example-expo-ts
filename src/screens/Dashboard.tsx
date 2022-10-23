import SafeFlex from "../components/container/SafeFlex";
import Text from "../components/typography/Text";
import { FlatList, View } from "react-native";
import IconButton from "../components/IconButton";
import Input from "../components/Input";
import Heading from "../components/typography/Heading";
import TransitionsBox from "../components/TransitionsBox";

const Dashboard = () => {
  const data = [
    {
      name: "Netflix",
      date: "12/12/2020",
      value: "-$ 49,90",
    },
    {
      name: "Amazon",
      date: "12/12/2020",
      value: "-$ 9,90",
    },
    {
      name: "Internet",
      date: "12/12/2020",
      value: "-$ 65,00",
    },
    {
      name: "Mercado libre",
      date: "12/12/2020",
      value: "-$ 100,90",
    },
  ];

  return (
    <SafeFlex p="sm">
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text size="md">Lucas Eduardo</Text>
          <Text size="sm">Manhã de domingo ✨</Text>
        </View>
        <IconButton icon="bell" />
      </View>

      <Input placeholder="Pesquisar..." />

      <View>
        <Text size="sm">Overall balance</Text>
        <Heading>$24,000.00</Heading>
      </View>

      <View
        style={{
          marginVertical: 16,
        }}
      >
        <Text size="sm">Last transitions</Text>
      </View>

      <FlatList
        data={data}
        renderItem={(props) => (
          <TransitionsBox
            date={props.item.date}
            name={props.item.name}
            value={props.item.value}
          />
        )}
      />
    </SafeFlex>
  );
};

export default Dashboard;

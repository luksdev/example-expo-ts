import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import Button from "../components/Button";
import SafeFlex from "../components/container/SafeFlex";
import IconButton from "../components/IconButton";
import Input from "../components/Input";
import Modal from "../components/Modal";
import Heading from "../components/typography/Heading";
import Text from "../components/typography/Text";

const Home: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeFlex p="sm">
      <Heading>Título</Heading>

      <View style={{ marginVertical: 16 }}>
        <Text size="lg" color="#C4C4CC">
          Texto comum lg
        </Text>
        <Text size="md" color="#C4C4CC">
          Texto comum md
        </Text>
        <Text size="sm" color="#C4C4CC">
          Texto comum sm
        </Text>
      </View>

      <Button
        value="Button"
        bgColor="#8257E5"
        my={10}
        onPress={() => {
          Alert.alert("Button pressed");
        }}
      />
      <Button value="Entrar" bgColor="#8257E5" />
      <Button value="Cadastrar" bgColor="#8257E5" w="35%" my={10} />
      <Button
        value="Open Modal"
        onPress={() => setModalVisible(!modalVisible)}
        bgColor="#8257E5"
        w="35%"
        my={0}
      />

      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />

      <Input placeholder="Placeholder" />

      <IconButton icon="check" />
    </SafeFlex>
  );
};

export default Home;

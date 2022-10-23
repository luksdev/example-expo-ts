import {
  Alert,
  Modal as ModalNative,
  Pressable,
  View,
  StyleSheet,
} from "react-native";
import Button from "./Button";
import Text from "./typography/Text";

interface IModal {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}

const Modal: React.FC<IModal> = ({ modalVisible, setModalVisible }) => {
  return (
    <>
      <ModalNative
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text size="sm">Modal</Text>
            <Button
              value="Fechar"
              onPress={() => setModalVisible(false)}
              w="40%"
              my={10}
            />
          </View>
        </View>
      </ModalNative>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#29292E",
    borderRadius: 8,
    padding: 35,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Modal;

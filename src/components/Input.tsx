import { TextInputProps } from "react-native";
import styled from "styled-components/native";

interface IInput extends TextInputProps {
  placeholder?: string;
}

const Input: React.FC<IInput> = ({ placeholder }) => {
  return <InputText placeholder={placeholder} placeholderTextColor="#C4C4CC" />;
};

const InputText = styled.TextInput`
  height: 45px;
  background-color: #1a1a1d;
  color: #ffffff;
  border-radius: 8px;
  font-size: 16px;
  padding: 0px 16px;
  margin: 20px 0;
  border: 1px solid #8257e5;
`;

export default Input;

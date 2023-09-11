import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';

export const PrincipalView = styled.View`
  flex-direction: column;
  align-items: center;
  background-color : #F1F1F1;
  width: 100%;
  flex: 1
`;
export const FormView = styled.View`
  flex-direction: row;
  justify-content: space-between ;
  align-items: center;
  background-color : #5A6978;
  padding: 30px;
`;

export const FormInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  align-self: stretch;
  padding: 10px 12px;
  font-size: 16px;
  border: #666;
  border-radius: 4px;
  height: 44px;
  width: 90%;
  background-color : #fff;
`;
export const FormButton = styled(RectButton)`
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background: #ee4d64;
  border-radius: 6px;
  padding: 10px 12px;
  
`;

export const BotaoView = styled.View`
  flex-direction: row ;
  align-items: center;
  background-color : #FFF;
`;

export const Button = styled(RectButton)`
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background: #ee4d64;
  border-radius: 4px;
  padding: 12px;
  height: 100px;
  width: 145px;
`;

export const ButtonText = styled.Text`
  color: #eee;
  font-size: 16px;
  font-weight: bold;
`;
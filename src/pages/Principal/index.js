import React, { useState } from "react";
import {View} from "react-native";

import Mapa from "../Mapa";
import {
  FormView,
  FormInput,
  BotaoView,
  Button,
  ButtonText,
  FormButton
} from "./styles";

export default function Main ({ navigation }){
  const [destino, setDestino] = useState('');

  function handleButon(destino) {
    console.log(destino)
    navigation.navigate(destino)
  }

  return(
  <View>
    <Mapa/>
    <FormView>
      <FormInput
            placeholder="Destino"
            returnKeyType="send"
            value={destino}
            onChangeText={setDestino}
          />
        <FormButton onPress={() => handleButon("Destino")}>
          <ButtonText>Ir</ButtonText>
      </FormButton>
    </FormView>
    <BotaoView>
      <Button onPress={() => handleButon("123456")}>
          <ButtonText>Home</ButtonText>
      </Button>
      <Button onPress={() => handleButon("654321")}>
          <ButtonText>Perfil</ButtonText>
      </Button>
      <Button onPress={() => handleButon("654321")}>
          <ButtonText>Atividades</ButtonText>
      </Button>
    </BotaoView>
  </View>
  )
}
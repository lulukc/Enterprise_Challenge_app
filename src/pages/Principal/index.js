import React, { useState } from 'react';

import {
  PrincipalView,
  BoasVndas,
  ImangemRotas,
  ImangemLogo,
  LoginView,
  SubmitButton,
  SubmitButtonText,
  FormInput,
  Instrucoes
} from "./styles";

const imgRota = "../../assets/rotas.png"
const imgLogo = "../../assets/logo.png"


export default function Main ({ navigation }){

  // const dispatch = useDispatch();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function handleSubmit() {
    console.log(`usuario: ${usuario} senha: ${senha}`)
  }


 return(
  <PrincipalView>
    <ImangemRotas
      source={require(imgRota)}
    />
    <ImangemLogo
      source={require(imgLogo)}
    />
    <LoginView>
      <BoasVndas>Bem vindo!</BoasVndas>
      <Instrucoes>Insira o usuário e a senha para continuar:</Instrucoes>
      <FormInput
          placeholder="Usuário"
          returnKeyType="send"
          value={usuario}
          onChangeText={setUsuario}
        />
      <FormInput
          placeholder="Senha"
          returnKeyType="send"
          value={senha}
          onChangeText={setSenha}
        />

        <SubmitButton onPress={handleSubmit}>
          <SubmitButtonText>Entrar no sistema</SubmitButtonText>
        </SubmitButton>
    </LoginView>
    
  </PrincipalView>
  )
}
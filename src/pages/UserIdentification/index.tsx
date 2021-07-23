import React, { FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import { Button } from '../../components/Button';
import { Container, Wrapper, Content, WrapperForm, ContentForm,  SmileIcon, Title, Input, Footer } from './styles'; 

const UserIdentification: FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>('');
  const navigation = useNavigation()

  const handleInputBlur = () => {
    setIsFocused(false)
    setIsFilled(!!name)
  }

  const handleInputFocus = () => {
    setIsFocused(true)
  }

  const handleInputChange = (value: string) => {
    setIsFilled(!!value)
    setName(value)
  }

  const handleSubmit = () => {
    navigation.navigate('Confirmation')
  }


  return (
    <Container>
      <Wrapper behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <WrapperForm>
              <ContentForm>
                <SmileIcon>{ isFilled ? '😁' : '😀' }</SmileIcon>
                <Title>Como podemos {'\n'} chamar você?</Title>
              </ContentForm>

              <Input 
                placeholder="Digite um nome" 
                onBlur={handleInputBlur} 
                onFocus={handleInputFocus} 
                isFocused={isFocused}
                isFilled={isFilled}
                onChangeText={handleInputChange}
              />

              <Footer>
                <Button onPress={handleSubmit} title="Confirmar" />
              </Footer>
            </WrapperForm>
          </Content>
        </TouchableWithoutFeedback>
      </Wrapper>
    </Container>
  )
};

export { UserIdentification };

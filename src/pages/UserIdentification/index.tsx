import React, { FC } from 'react';
import { Platform } from 'react-native';
import { Button } from '../../components/Button';
import { Container, Wrapper, Content, WrapperForm, ContentForm,  SmileIcon, Title, Input, Footer } from './styles'; 

const UserIdentification: FC = () => {
  return (
    <Container>
      <Wrapper behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Content>
          <WrapperForm>
            <ContentForm>
              <SmileIcon>😁</SmileIcon>
              <Title>Como podemos {'\n'} chamar você?</Title>
            </ContentForm>

            <Input placeholder="Digite um nome" />

            <Footer>
              <Button />
            </Footer>
          </WrapperForm>
        </Content>
      </Wrapper>
    </Container>
  )
};

export { UserIdentification };

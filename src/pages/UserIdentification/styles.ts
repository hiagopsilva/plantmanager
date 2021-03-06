import styled from 'styled-components/native';
import { KeyboardAvoidingView } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Wrapper = styled(KeyboardAvoidingView)`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const WrapperForm = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 54px;
`;

export const ContentForm = styled.View`
  align-items: center;
`;

export const SmileIcon = styled.Text`
  font-size: 44px;
`;

export const Title = styled.Text`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-color: ${colors.gray};
  color: ${colors.heading};
  width: 100%;
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;

  border-color: ${props => props.isFocused || props.isFilled ? `${colors.green}` : `${colors.gray}`};
`;

export const Footer = styled.View`
  margin-top: 40px;
  width: 100%;
  padding: 0 20px;
`;

import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Wrapper = styled(RectButton)`
  height: 40px;
  width: 76px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-right: 5px;
  background: ${props => props.active ? colors.green_light : colors.shape};
`;

export const Text = styled.Text`
  font-family: ${props => props.active ? fonts.heading : fonts.text};
  color: ${props => props.active ? colors.green_dark : colors.heading};
`;

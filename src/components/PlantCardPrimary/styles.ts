import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg'

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Wrapper = styled(RectButton)`
  flex: 1;
  max-width: 45%;
  background: ${colors.shape};
  border-radius: 20px;
  padding-vertical: 10px;
  align-items: center;
  margin: 10px;
`;

export const Text = styled.Text`
  color: ${colors.green_dark};
  font-family: ${fonts.heading};
  margin-vertical: 16px;
`;

export const Image = styled(SvgFromUri).attrs({
  width: 70,
  height: 70
})``;

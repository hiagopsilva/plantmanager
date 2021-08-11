import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg'

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Wrapper = styled(RectButton)`
  width: 100%;
  padding-horizontal: 10px;
  padding-vertical: 25px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.shape};
  margin-vertical: 5px;
`;

export const Text = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-family: ${fonts.heading};
  font-size: 17px;
  color: ${colors.heading};
`;

export const Image = styled(SvgFromUri).attrs({
  width: 50,
  height: 50
})``;

export const WrapperDetails = styled.View`
  align-items: flex-end;
`;
 
export const TextTimeLabel = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${fonts.text};
  color: ${colors.body_dark};
`;
 
export const TextTime = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${fonts.heading};
  color: ${colors.body_dark};
`;

export const ButtonRemove = styled(RectButton)`
  width: 100px;
  height: 85px;
  background-color: ${colors.red};
  margin-top: 15px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 20px;
  padding-left: 15px;
`;


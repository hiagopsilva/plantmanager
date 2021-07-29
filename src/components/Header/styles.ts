import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-top: ${getStatusBarHeight()};
`;

export const Content = styled.View`
`;

export const Greeting = styled.Text`
  font-size: 32px;
  color: ${colors.heading};
  font-family: ${fonts.text};
`;

export const UserName = styled.Text`
  font-size: 32px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 40;
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 40px;
`;

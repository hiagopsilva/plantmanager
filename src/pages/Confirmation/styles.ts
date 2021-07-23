import styled from 'styled-components/native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px;
`;

export const SmileIcon = styled.Text`
  font-size: 78px;
`;

export const Title = styled.Text`
  font-size: 22px;
  line-height: 38px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  margin-top: 15px;
`;

export const SubTitle = styled.Text`
  font-family: ${fonts.text};
  text-align: center;
  font-size: 17px;
  padding: 0 10px;
  color: ${colors.heading};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 0 50px;
  margin-top: 20px;
`;

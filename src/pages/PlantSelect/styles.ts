import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Wrapper = styled.View`
  flex: 1;
  background: ${colors.background};
`;

export const Content = styled.View`
  padding-horizontal: 30px;  
`;

export const WrapperList = styled.View`
`;

export const EnvironmentList = styled(FlatList)`
  height: 45px;
  padding-bottom: 5px;
  margin-left: 32px;
  margin-vertical: 32px;
`;

export const PlantsList = styled(FlatList)``;

export const WrapperPlants = styled.View`
  flex: 1;
  padding-horizontal: 32px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 20px;
  margin-top: 15px;
`;

export const SubTitle = styled.Text`
  font-family: ${fonts.text};
  font-size: 17px;
  line-height: 20px;
  color: ${colors.heading};
`;

import styled from 'styled-components/native';
import { SvgFromUri } from 'react-native-svg';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { Button } from '../../components/Button';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${colors.shape};
`;

export const Wrapper = styled.View`
  flex: 1;
  padding-horizontal: 30px;
  padding-vertical: 50px;
  align-items: center;
  justify-content: center;
  background: ${colors.shape};
`;

export const ScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flex: 1
  }
})``;

export const Image = styled.Image`
  width: 56px;
  height: 56px;
`;

export const ImagePlant = styled(SvgFromUri).attrs({
  width: 70,
  height: 70
})``;

export const PlantName = styled.Text`
  font-family: ${fonts.heading};
  font-size: 24px;
  color: ${colors.heading};
  margin-top: 15px;
`;

export const PlantAbout = styled.Text`
  text-align: center;
  font-family: ${fonts.text};
  color: ${colors.heading};
  font-size: 17px;
  margin-top: 10px;
`;

export const WrapperController = styled.View`
  background: ${colors.white};
  padding: 20px 20px ${`${getBottomSpace()}px` || `20px`}
`;

export const TipContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${colors.blue_light};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
`;

export const TipText = styled.Text`
  flex: 1;
  margin-left: 20px;
  font-family: ${fonts.text};
  color: ${colors.blue};
  font-size: 17px;
  text-align: justify;
`;

export const AlertLabel = styled.Text`
  text-align: center;
  font-family: ${fonts.complement};
  color: ${colors.heading};
  font-size: 12px;
  margin-bottom: 5px;
`;

export const ButtonStyled = styled(Button)``;

export const DateTimePickerButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding-vertical: 40px;
`;

export const DateTimePickerText = styled.Text`
  font-family: ${fonts.text};
  color: ${colors.heading};
  font-size: 24px;
`;
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Wrapper = styled.TouchableOpacity`
  background:  ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  height: 56px;
`;

export const Text = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-family: ${fonts.heading};
`;
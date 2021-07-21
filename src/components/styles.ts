import styled from 'styled-components/native';
import colors from '../styles/colors';

export const Wrapper = styled.TouchableOpacity`
  background:  ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16;
  margin-bottom: 10;
  height: 56;
  width: 56;
`;

export const Text = styled.Text`
  color: ${colors.white};
  font-size: 24px;
`;
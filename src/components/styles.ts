import styled from 'styled-components/native';
import colors from '../styles/colors';

export const Wrapper = styled.TouchableOpacity`
  background:  ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`;

export const Text = styled.Text`
  color: ${colors.white};
  font-size: 24px;
`;
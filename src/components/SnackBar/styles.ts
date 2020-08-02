import styled from "styled-components/native";

export const Container = styled.View`
  z-index: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;

  bottom: 10px;
  width: 95%;
  background: #3b4045;
  padding: 15px;
  border-radius: 5px;
`;

export const InfoText = styled.Text`
  font-weight: bold;
  color: #ccc;
`;

export const CloseView = styled.TouchableOpacity``;

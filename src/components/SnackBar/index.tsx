import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Container, InfoText, CloseView } from "./styles";

interface Props {
  message: string;
  onClose(): void;
}

const SnackBar: React.FC<Props> = ({ message, onClose }) => {
  function handleClose() {
    onClose();
  }

  return (
    <Container>
      <InfoText numberOfLines={1}>{message}</InfoText>
      <CloseView
        onPress={handleClose}
        hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
      >
        <MaterialIcons name="close" size={24} color="#ccc" />
      </CloseView>
    </Container>
  );
};

export default SnackBar;

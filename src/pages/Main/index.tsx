import React, { useState } from "react";

import { Container, SnackButton, SnackButtonText } from "./styles";
import SnackBar from "../../components/SnackBar";

const Main: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <SnackButton onPress={() => setVisible(true)}>
        <SnackButtonText>Pressione para mostra a Snackbar</SnackButtonText>
      </SnackButton>

      {visible && (
        <SnackBar
          message="Oi, eu sou uma Snackbar"
          onClose={() => setVisible(false)}
        />
      )}
    </Container>
  );
};

export default Main;

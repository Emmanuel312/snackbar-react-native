import React, { useState } from "react";

import { Container, SnackButton } from "./styles";
import SnackBar from "../../components/SnackBar";

const Main: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <SnackButton
        title="Pressione para mostra a Snackbar"
        onPress={() => setVisible(true)}
      />

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

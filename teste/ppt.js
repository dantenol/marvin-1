      function pedra() {
        jogar("pedra");
      }

      function papel() {
        jogar("papel");
      }

      function tesoura() {
        jogar("tesoura");
      }

      function jogar(e) {
        let maq;
        const num = Math.random();
        if (num < 1 / 3) {
          maq = "papel";
        } else if (num < 2 / 3) {
          maq = "tesoura";
        } else {
          maq = "pedra";
        }
        if (maq === e) {
          document.getElementById("resultado").innerHTML =
            "O computador escolheu " + maq + ". Empate!";
        } else if (
          (maq === "papel" && e === "tesoura") ||
          (maq === "pedra" && e === "papel") ||
          (maq === "tesoura" && e === "pedra")
        ) {
          document.getElementById("resultado").innerHTML =
            "O computador escolheu " + maq + ". Voce ganhou!";
        } else {
          document.getElementById("resultado").innerHTML =
          "O computador escolheu " + maq + ". Voce perdeu!";
        }
      }
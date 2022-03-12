const handOptions = {
    "rock": "/assets/img/Rock.png",
    "paper": "/assets/img/Paper.png",
    "scissors": "/assets/img/Scissors.png"
}

let SCORE_PLAYER = 0;
let SCORE_MAQUINA=0;


const pickUserHand = (hand) => {
    // esconder a página atual
    let hands = document.querySelector(".hands");  // vamos 1º agarrar a div .hands
    hands.style.display = "none";

    // mostrar a próxima página com a mão que escolhemos
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";
    // na 1º vez q estilizamos essa div .contest, setamos "flex" para aparecer. Depois setamos "none" pra sumir. Agora, no JS, 
    // setamos "flex" para que, quando a função onclick() acontecer, aconteça TAMBÉM  o FLEX = SHOW = APARECER desta 2ª página!

    // set the user pick
    document.getElementById("userPickImage").src = handOptions[hand]; // O valor de "hand" irá nas "propriedades do objeto
    // handOptions" e pegará o valor respectivo pela url da imagem!
    
    let cpHand = pickComputerHand();

    referee(hand, cpHand);
};

const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random() * 3)];

    // set the computer pick
    document.getElementById("computerPickImage").src = handOptions[cpHand]

    return cpHand;
}

const referee = (userHand, cpHand) => {
        if (userHand === "paper" && cpHand === "scissors") {
			setDecision("Você perdeu!");
			setScoreMaquina(SCORE_MAQUINA + 1);
        }
        if (userHand === "paper" && cpHand === "rock") {
			setDecision("Você ganhou!");
			setScoreJogador(SCORE_PLAYER + 1);
        }
        if (userHand === "paper" && cpHand === "paper") {
          setDecision("Empate!");
        }
        if (userHand === "rock" && cpHand === "scissors") {
			setDecision("Você ganhou!");
			setScoreJogador(SCORE_PLAYER + 1);
        }
        if (userHand === "rock" && cpHand === "paper") {
			setDecision("Você perdeu!");
			setScoreMaquina(SCORE_MAQUINA + 1);
        }
        if (userHand === "rock" && cpHand === "rock") {
          setDecision("Empate!");
        }
        if (userHand === "scissors" && cpHand === "scissors") {
          setDecision("Empate!");
        }
        if (userHand === "scissors" && cpHand === "rock") {
          setDecision("Você perdeu!");
		  setScoreMaquina(SCORE_MAQUINA + 1);
        }
        if (userHand === "scissors" && cpHand === "paper") {
          setDecision("Você ganhou!");
          setScoreJogador(SCORE_PLAYER + 1);
        }
      };

      const restartGame = () => {
        document.querySelector(".newGame")
        
        // faremos o INVERSO da função "pickUserHand"!
        let contest = document.querySelector(".contest");
        contest.style.display = "none";

        let hands = document.querySelector(".hands");  
        hands.style.display = "flex";
      }

      const setDecision = (decision) => {   // "decision" receberá YOU WIN! ou YOU LOSE! ou It´s a tie! da função referee
          document.querySelector(".decision h1").innerText = decision;
      }

      const setScoreJogador = (scoreJogador) => {
          SCORE_PLAYER = scoreJogador;
          document.querySelector(".score-jogador h1").innerText = scoreJogador;
      }
	  const setScoreMaquina = (scoreMaquina) => {
		SCORE_MAQUINA = scoreMaquina;
		document.querySelector(".score-maquina h1").innerText = scoreMaquina;
	}
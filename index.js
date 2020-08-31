var tabuleiro = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
var jogo;
var jogadas = 0;
var vez = 1;
var fim = -1;

window.addEventListener("load", () => {
    console.log("Comecou");
    jogo = document.getElementById("tabuleiro");
    apagarTabuleiro();
    mostrarTabuleiro();
});

function apagarTabuleiro() {
    jogo.innerHTML = "";
    jogadas = 0;
    for(let linha = 0; linha < 3; linha++) {
        for(let coluna = 0; coluna < 3; coluna++) {
            tabuleiro[linha][coluna] = 0;
        }
    }
}

function mostrarTabuleiro() {
    for(let linha = 0; linha < 3; linha++) {
        for(let coluna = 0; coluna < 3; coluna++) {
            let ponto = document.createElement("div");
            ponto.addEventListener("click", () => {
                if(fim == -1) {
                    if(ponto.innerHTML == "") {
                        ponto.innerHTML = vez == 1 ? "X" : "O";
                        tabuleiro[linha][coluna] = vez;
                        jogadas++;
                        fim = finished();
                        if(fim > -1) {
                            if(fim == 0) {
                                alert("Empatou!");
                            } else {
                                alert(`${vez == 1 ? "X" : "O"} Ganhou!`);
                            }
                        }  
                        vez = vez == 1 ? 2 : 1;  
                    }
                }
            });
            ponto.className = "ponto";
            if(tabuleiro[linha][coluna] == 0) {
                ponto.innerHTML = "";
            } else {
                ponto.innerHTML = tabuleiro[linha][coluna] == 1 ? "X" : "O";
            }
            jogo.appendChild(ponto);
        }
    }
}

function finished() {
    for (let jogador = 1; jogador <= 2; jogador++) {
        for(let linha = 0; linha <= 2; linha++) {
            if(tabuleiro[linha][0] == jogador && tabuleiro[linha][1] == jogador && tabuleiro[linha][2] == jogador) {
                return jogador;
            }
        }
        
        for(let coluna = 0; coluna <= 2; coluna++) {
            if(tabuleiro[0][coluna] == jogador && tabuleiro[1][coluna] == jogador && tabuleiro[2][coluna] == jogador) {
                return jogador;
            }
        }

        if(tabuleiro[0][0] == jogador && tabuleiro[1][1] == jogador && tabuleiro[2][2] == jogador) {
            return jogador;
        }

        if(tabuleiro[0][2] == jogador && tabuleiro[1][1] == jogador && tabuleiro[2][0] == jogador) {
            return jogador;
        }
    }

    if(jogadas == 9) {
        return 0;
    }
    return -1;
}
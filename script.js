      /**
 * J'ajoute le titre Shifumi grace au terme h1
 * J'utilise select id poour faire le player 1 puis le player 2
 * Sous chaque player j'ajoute le terme option value pour pierre feuille et ciseaux
 * Je dois donner une valeur aux options sous chaque joueurs et ajouter un boutons d'envoi du joueurs
 * Je dois récupérer les valeurs
 * Comparer les valeurs
 * Afficher le résultat
 */

       document.getElementById("play").addEventListener("click", event => {
        play();
      });
      
      function play() {
        let player1 = document.getElementById ('player1').value
        let player2 = document.getElementById ('player2').value
        let result = document.getElementById ('result')
       //console.log (player1)
        if (player1 == player2)
          {
            console.log ("egality")
            result.value = "egality"
          }
        if (player1 == "stone" && player2 == "leaf")
        {
          console.log ("player2 win")
          result.value = "player2 win"
        }
        if (player1 == "scissors" && player2 == "stone")
          {
            console.log ("player2 win")
            result.value = "player2 win"
          }
        if (player1 == "leaf" && player2 == "scissors")
          {
            console.log ("player1 win")
            result.value = "player1 win"
          }
        if (player2 == "stone" && player1 == "leaf")
          {
            console.log ("player1 win")
            result.value = "player1 win"
          }
        if (player2 == "scissors" && player1 == "stone")
          {
            console.log ("player1 win")
            result.value = "player1 win"
          }
        if (player2 == "leaf" && player2 == "scissors")
          {
            console.log ("player1 win")
            result.value = "player1 win"
          }
      }
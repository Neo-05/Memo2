let tableauCarte = [
    {
      id: 0,
      idDuo : "duo1",
      imageVoiture: "image/urus.jpg",
      imageIdentique: "image/camion.jpg"
    },
    {
      id: 1,
      idDuo : "duo1",
      imageVoiture: "image/urus.jpg",
      imageIdentique: "image/camion.jpg"
    },
    {
      id: 2,
      idDuo : "duo2",
      imageVoiture: "image/veyron.jpg",
      imageIdentique: "image/camion.jpg"
    },
    {
      id: 3,
      idDuo : "duo2",
      imageVoiture: "image/veyron.jpg",
      imageIdentique: "image/camion.jpg"
    },
    {
      id: 4,
      idDuo : "duo3",
      imageVoiture: "image/jaguar.jpg",
      imageIdentique: "image/camion.jpg"
    },
    {
      id: 5,
      idDuo : "duo3",
      imageVoiture: "image/jaguar.jpg",
      imageIdentique: "image/camion.jpg"
    }
];

let melanger = (tab) => {
    tab.sort(() => Math.random() - 0.5);
}

let temps = 0;

function mettreAJourCompteur() {
    temps++;
    document.getElementById("compteur").textContent = temps + " s";
}
setInterval(mettreAJourCompteur, 1000);


melanger(tableauCarte);

let score;
let tableau = document.getElementById("tableau");
let premiereCarte = null;


for (let i = 0; i < tableauCarte.length; i++) {
    let carte = tableauCarte[i];
  
    let divCarte = document.createElement("div");

    let imgBaseInner = "<img src='" + carte.imageIdentique + "' alt='Image Identique'>";
    divCarte.innerHTML = imgBaseInner;
    
    tableau.appendChild(divCarte);

    divCarte.onclick = function()
    {
        if (premiereCarte === null)
        {
            divCarte.innerHTML = "<img src='" + carte.imageVoiture + "' alt='Image Voiture'>";
            premiereCarte = divCarte;

        }
        else
        {
            divCarte.innerHTML = "<img src='" + carte.imageVoiture + "' alt='Image Voiture'>";

            if (premiereCarte.innerHTML === divCarte.innerHTML)
            {

            // faire le test pour voir si tas gagné
            // alert("Les images correspondent !");

            }
            else
            {
                
                // premiereCarte.innerHTML = imgBaseInner;
                // divCarte.innerHTML = imgBaseInner;


                function mafonction() {premiereCarte.innerHTML = imgBaseInner; divCarte.innerHTML = imgBaseInner}
                setTimeout(mafonction, 1000); 

            }
                //je dois faire ça sinon premiereCarte se nullifie avant qu'il la fonction d'avant soit effectuée
            function mafonction() {premiereCarte = null}
            setTimeout(mafonction, 1000); 
        }
    };
}

// fonction compteur de tps
// écran acceuil plus entrer nom
// esthétique


let joueur = {
    pseudo : ""
}



let enregistrer = () => {
    joueur.pseudo = document.getElementById("pseudoCreation").value
    localStorage.setItem("joueur", JSON.stringify(joueur))
    window.location.href ="Jeu.html"
}


// 1 - Pourquoi React ?
    // Il nous permet l'utilisation de composent, réutilisable n'importe ou.
    // SPA = on load une fois toutes les données (single page application)
    // JSX = Mélange de js, html et css

// 2 =>
// import React from "react"

// export default class Reve extends React.Component{
//     Nom = "Damir";

//     render(){
//         return(
//             <>
//             <h1>Bonjour{this.props.Nom}</h1>
//             </>
//         )
//     }
// }

// 3 - A quoi sert une props ? 
    // Rafraichir nos composants
    // De customiser nos composants

// 4 - Quelle méthode peut on utiliser pour afficher une partie de chaque élément d'un tableau ?
    // On peut utiliser la methode .map pour parcourir un tableau et récupérer ce dont on a besoin.
    // filter => filtrer des elements

// 5 =>

// class Promo extends React.Component {
// 	apprenants = [
// 		{firstName: "John", lastName: "Doe"}, 
// 		{firstName: "Jane", lastName: "Roe"}, 
// 		{firstName: "Larry", lastName: "Loe"}
// 	];

// 	render() {
//         return(
//             <div>
//                 {this.apprenants.map((apprenant) => {
//                     return (
//                         <p>{apprenant.firstName} {apprenant.lastName}</p>
//                     )
//                  })
//             </div>
//         )
        
// 	}
// }

// export default Promo; 

// 6 - Dans quel cas doit on utiliser un state ? Quelles sont les différences avec les props ? 
    // On utilise un State quand on veut modifier une donnée. Les props ne sont pas modifiables, d'un certain point de vue.

// 7 - Comment peut on passer une information d'un parent à son enfant ? et d'un enfant à son parent ?
    // On peut passer une info d'un parent a un enfant via l'appel du composant avec un module.
    // On passe une info d'un enfant a un parent avec une fonction que le parent envoie a son enfant.

// 8 - Comment peut on passer une information d'un parent à son enfant ? et d'un enfant à son parent ?
    // Sur tous les éléments

// 9 =>
// import React from 'react';

// class Form extends React.Component {
// 	constructor(props) {
        // super(props);
        // this.state = {
        //     name : "",
        // }
// 			
// 	}

// 	onChange(event) {
// 		this.setState({
//      name : event.target.value,
// })
// 	}

// 	render() {
// 		return (
// 			<input value={this.state.name} onChange={this.onChange} />
// 		);
// 	}
// }

// export default Form;

// 10 - A quoi sert une fonction de callback asynchrone ?
    // 

// 11 - Quelle est la différence entre une fonction de callback et une promesse ? 

// 12 - Quelle est la différence entre une fonction de callback et une promesse ? 

// 13 =>
// import React from 'react';

// class Pokemon extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			name: ""
// 		}
// 	}

    // componentDidMount(){
    //     this.getPokemon()
    // }

//  getPokemon(){
//     fetch("https://pokeapi.co/api/v2/pokemon/17")
//     .then( response => response.json() )
//     .then( result => {
//         this.setState({
//             name : result[1].name,
//         })
//     })
//     .catch(error => console.error(error));
// }

// 	render() {
// 		return (
// 			<p>My pokemon is: {this.state.name}</p>
// 		);
// 	}
// }

// export default Pokemon;

// 14 - Comment mettre à jour le code ci dessus pour gerer une possible erreur lors de la récupération des infos du pokémon ?
    // Mettre un .catch(error => console.error(error))

// 15 - A quoi sert un Router ? 
    // Un Router sert a crée des routes avec des intersactions(switch) qui permettrent de crée des liens entre les pages et ainsi de générer des liens differents pour chaques pages.

// 16 - Quels sont les 4 principaux composants d'un Router et à quoi servent ils ? 
    // BrowserRouter, Route, Link, Switch
    // Browser est ce qui vas englober notre render
    // Route est le composant utilisé pour définir quelle route appelle quel composant
    // Switch est le composant qui nous permet de lister toutes les routes possibles de notre application
    // link est le composant que nous devront utiliser à la place des balises a, il permet de naviguer sans recharger la page
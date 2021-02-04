// 1er Partie

// 1. Quel est la différence entre une props et un state ?
//    ---La différence est que le state peut etre modifier.

// 2. Est-il possible d'avoir un state pour n'importe qu'elle composant ?
//    ---Oui
// 3. Décrivez les étapes pour faire une remontée de donnée entre un composant enfant et son parent
//    ---Il faut que le parent envoie une fonction a l'enfant, 
//       via la balise jsx, ensuite l'enfant doit l'executer pour 
//       que le parent puisse recuperer les donnée

// 2eme Partie

import React from 'react';

class Quizz extends React.Component {

    
    constructor() {
        super();
        this.click = this.click.bind(this);

        this.state = {
            list: []
        }
    }

    componentDidMount() {
        this.setState({
            list: [1,2,3,4]
        })
    }

    click() {
        console.log('Je suis clické');
        this.componentDidMount()
        // il faut que je rajoute un element number à ma list
        
    }

    fonction(
        
    )

    render() {
        return (
            <div>
                {/* afficher dans des balises ul / li tout 
                les element de la list en utilisant la fonction map}*/}
                <ul fonctionquigenere={this.fonction}>
                    
                </ul>
                
                <button onClick={this.click}>Button</button>
            </div>
        )
    }

}

export default Quizz
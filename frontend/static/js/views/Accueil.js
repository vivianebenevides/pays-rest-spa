import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('Accueil')
    }

    async getHtml(){
        return `
            <h1>Les pays du monde</h1>
            <p>Vous trouverez ici des informations sur tous les pays du monde !</p>
            <p>Commencez votre recherche dès maintenant !</p>
            <a href="/pays" data-link>Voir les pays</a>
        `
    }
}
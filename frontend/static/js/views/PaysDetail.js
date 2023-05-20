import AbstractView from "./AbstractView.js"

export default class extends AbstractView {

    constructor(params) {
        super(params)
        this.setTitle('Visualiser Article')
    }

    async getHtml() {
        //console.log(this.params.id)

        const nom = String(this.params.nom)

        async function getData(url){
            const response = await fetch(url)
            return response.json()
        }

        const data = await getData('/static/js/views/pays.json')

        const pays = data.find(item => item.name.common === nom)

        //console.log(article)

        return `
        <h1>`+pays['name']['common']+`  `+pays['flag']+`</h1>
        <p>Capital: `+pays['capital']+`</p>
        <p>Continent: `+pays['continents']+`</p>
        <p>Population: `+pays['population']+`</p>
        <p>Area: `+pays['area']+` km2</p>
        <br>
        <a href='/pays' data-link>Retourner</a>`
    }
}
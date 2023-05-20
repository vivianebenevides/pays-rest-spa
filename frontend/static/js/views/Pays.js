import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    
    constructor(params) {
        super(params);
        this.setTitle('Pays');
    }
    
    async getHtml() {

        async function getData(url) {
            const response = await fetch(url);
            return response.json();
        }
        
        const data = await getData('/static/js/views/pays.json');

        let select = '<select id="paysSelect">';
        
        data.forEach((pays) => {
            select += '<option value="' + pays['name']['common'] + '">' + pays['name']['common'] + '</option>';
        });
        
        select += "</select>";

        return `
            <h1>Pays</h1>
            ${select}
            <br>
            <button type="submit" onclick="(function() {
                const selectElement = document.getElementById('paysSelect');
                const selectedValue = selectElement.value;
                window.location.href = '/pays-detail/' + selectedValue;
            })()">Envoyer</button>
        `;
    }
}

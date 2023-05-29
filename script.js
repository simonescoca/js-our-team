// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede


// Wayne Barnett     Founder & CEO            wayne-barnett-founder-ceo.jpg
// Angela Caroll     Chief Editor             angela-caroll-chief-editor.jpg
// Walter Gordon     Office Manager           walter-gordon-office-manager.jpg
// Angela Lopez      Social Media Manager     angela-lopez-social-media-manager.jpg
// Scott Estrada     Developer                scott-estrada-developer.jpg
// Barbara Ramos     Graphic Designer         barbara-ramos-graphic-designer.jpg

const tbodyElement = document.getElementById ("tbody")

const WBmembers = [
    newWayneBarnettMember ("Wayne Barnett", "Founder & CEO", "wayne-barnett-founder-ceo.jpg"),
    newWayneBarnettMember ("Angela Carrol", "Chief Editor", "angela-caroll-chief-editor.jpg"),
    newWayneBarnettMember ("Walter Gordon", "Office Manager", "walter-gordon-office-manager.jpg"),
    newWayneBarnettMember ("Angela Lopez", "Social Media Manager", "angela-lopez-social-media-manager.jpg"),
    newWayneBarnettMember ("Scott Estrada", "Developer", "scott-estrada-developer.jpg"),
    newWayneBarnettMember ("Barbara Ramos", "Graphic Designer", "barbara-ramos-graphic-designer.jpg"),
]

for (let i = 0 ; i < WBmembers.length ; i++) {

    createsTrElement (i)

    for (let key in WBmembers[i]) {
        console.log (key + ": " + WBmembers[i][key])
        createsTdElement (i, key)
    }

    console.log ("//////////////")
}

// FUNCTIONS ///////////////////////////////////////////////////////

/**
 * Creates an object of every member of WB company containing infos about them
 * @param {string} nome His / Her name
 * @param {string} ruolo His / Her role
 * @param {string} foto A picture of Him / Her
 * @returns {object} An object containing these infos
 */

function newWayneBarnettMember (nome, ruolo, foto) {

    const member = {
        Name: nome,
        Role: ruolo,
        Picture: foto
    }
    
    return member
}

function createsTrElement (index) {
    const trElement = document.createElement ("tr")
    trElement.id = "tr" + index
    tbodyElement.appendChild (trElement)
}

function createsTdElement (index, key) {
    const tdElement = document.createElement ("td")
    tdElement.append (WBmembers[index][key])
    document.getElementById ("tr" + index).appendChild (tdElement)
}
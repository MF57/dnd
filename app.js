import {MDCTextField} from '@material/textfield';
import {MDCNotchedOutline} from '@material/notched-outline';
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';
import {MDCRipple} from '@material/ripple';

const textFieldIds = [
    "#character-name-textfield",
    "#player-name-textfield",
    "#class-textfield",
    "#level-textfield",
    "#race-textfield",
    "#character-textfield",
    "#religion-textfield",
    "#size-textfield",
    "#sex-textfield",
    "#age-textfield",
    "#height-textfield",
    "#weight-textfield",
    "#eye-textfield",
    "#hair-textfield",
    "#skin-textfield",
];

const notches = [
    "#character-name-outline",
    "#player-name-outline",
    "#class-outline",
    "#level-outline",
    "#race-outline",
    "#character-outline",
    "#religion-outline",
    "#size-outline",
    "#sex-outline",
    "#age-outline",
    "#height-outline",
    "#weight-outline",
    "#eye-outline",
    "#hair-outline",
    "#skin-outline",
];

new MDCRipple(document.querySelector('.import-button'));
new MDCRipple(document.querySelector('.export-button'));

textFieldIds.forEach(textField => new MDCTextField(document.querySelector(textField)));
notches.forEach(notch => new MDCNotchedOutline(document.querySelector(notch)));


const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
formField.input = checkbox;


let character = {};
if (sessionStorage.character) {
    character = JSON.parse(sessionStorage.character)
}


function registerCharacterInput(id, characterUpdater, characterValueGetter) {
    const input = document.getElementById(id);
    const textfield = document.getElementById(id + "-textfield");
    if (textfield) {
        const mdc = new MDCTextField(document.getElementById(id + "-textfield"));
        if (characterValueGetter(character)) {
            mdc.value = characterValueGetter(character);
        }
    } else {
        if (characterValueGetter(character)) {
            input.value = characterValueGetter(character)
        }
    }
    input.addEventListener("blur", () => {
        characterUpdater(input.value);
        sessionStorage.character = JSON.stringify(character);
        console.log(character);
    })
}

function importFile() {
    var files = document.getElementById('selectFiles').files;
    if (files.length <= 0) {
        return false;
    }

    var fr = new FileReader();

    fr.onload = function(e) {
        character = JSON.parse(e.target.result);
        sessionStorage.character = JSON.stringify(character);
        initInputs()
    };

    fr.readAsText(files.item(0));

}

function exportFile(filename) {
    const file = new Blob([JSON.stringify(character)], {type: "application/json"});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        const a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}

function initInputs() {
    registerCharacterInput("character-name", (value) => character.characterName = value, (character) => character.characterName);
    registerCharacterInput("player-name", (value) => character.playerName = value, (character) => character.playerName);
    registerCharacterInput("class", (value) => character.class = value, (character) => character.class);
    registerCharacterInput("level", (value) => character.level = value, (character) => character.level);
    registerCharacterInput("race", (value) => character.race = value, (character) => character.race);
    registerCharacterInput("size", (value) => character.size = value, (character) => character.size);
    registerCharacterInput("character", (value) => character.character = value, (character) => character.character);
    registerCharacterInput("sex", (value) => character.sex = value, (character) => character.sex);
    registerCharacterInput("age", (value) => character.age = value, (character) => character.age);
    registerCharacterInput("height", (value) => character.height = value, (character) => character.height);
    registerCharacterInput("weight", (value) => character.weight = value, (character) => character.weight);
    registerCharacterInput("eye", (value) => character.eye = value, (character) => character.eye);
    registerCharacterInput("hair", (value) => character.hair = value, (character) => character.hair);
    registerCharacterInput("skin", (value) => character.skin = value, (character) => character.skin);
    registerCharacterInput("religion", (value) => character.religion = value, (character) => character.religion);
}

document.getElementById("import-button").addEventListener("click", () => importFile());
document.getElementById("export-button").addEventListener("click", () => exportFile("character.json"));

initInputs();

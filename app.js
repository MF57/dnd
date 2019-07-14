import {MDCTextField} from '@material/textfield';
import {MDCNotchedOutline} from '@material/notched-outline';
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';
import {MDCRipple} from '@material/ripple';



/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
function mergeDeep(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                mergeDeep(target[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }

    return mergeDeep(target, ...sources);
}

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


let character = {
    baseStats: {
        strength: {},
        agility: {},
        build: {},
        inteligence: {},
        wisdom: {},
        charisma: {},
    },
    hp: {},
    armorClass: {},
    attacks: {
        melee: {},
        distance: {}
    },
    initiative: {},
    magic: {},
    defensiveThrows: {
        will: {},
        endurance: {},
        reflex: {}
    },
    weapons: {
        weapon1: {},
        weapon2: {},
        weapon3: {},
    },
    armor: {},
    shield: {},
    ammo: {}
};
if (sessionStorage.character) {
    character =  mergeDeep(character, JSON.parse(sessionStorage.character));
}


function registerCharacterInput(id, characterUpdater, characterValueGetter) {
    const input = document.getElementById(id);
    const textfield = document.getElementById(id + "-textfield");
    let newValue = "";
    try {
        newValue = characterValueGetter(character);
    } catch(e) {
        //do nothing
    }
    if (textfield) {
        const mdc = new MDCTextField(document.getElementById(id + "-textfield"));
        if (newValue) {
            mdc.value = newValue;
        }
    } else {
        if (newValue) {
            input.value = newValue
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
        character = mergeDeep(character, JSON.parse(e.target.result));
        sessionStorage.character = JSON.stringify(character);
        console.log(character);
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
    registerCharacterInput("strength-total-stat", (value) => character.baseStats.strength.total = value, (character) => character.baseStats.strength.total);
    registerCharacterInput("agility-total-stat", (value) => character.baseStats.agility.total = value, (character) => character.baseStats.agility.total);
    registerCharacterInput("build-total-stat", (value) => character.baseStats.build.total = value, (character) => character.baseStats.build.total);
    registerCharacterInput("inteligence-total-stat", (value) => character.baseStats.inteligence.total = value, (character) => character.baseStats.inteligence.total);
    registerCharacterInput("wisdom-total-stat", (value) => character.baseStats.wisdom.total = value, (character) => character.baseStats.wisdom.total);
    registerCharacterInput("charisma-total-stat", (value) => character.baseStats.charisma.total = value, (character) => character.baseStats.charisma.total);
    registerCharacterInput("strength-modifier", (value) => character.baseStats.strength.modifier = value, (character) => character.baseStats.strength.modifier);
    registerCharacterInput("agility-modifier", (value) => character.baseStats.agility.modifier = value, (character) => character.baseStats.agility.modifier);
    registerCharacterInput("build-modifier", (value) => character.baseStats.build.modifier = value, (character) => character.baseStats.build.modifier);
    registerCharacterInput("inteligence-modifier", (value) => character.baseStats.inteligence.modifier = value, (character) => character.baseStats.inteligence.modifier);
    registerCharacterInput("wisdom-modifier", (value) => character.baseStats.wisdom.modifier = value, (character) => character.baseStats.wisdom.modifier);
    registerCharacterInput("charisma-modifier", (value) => character.baseStats.charisma.modifier = value, (character) => character.baseStats.charisma.modifier);
    registerCharacterInput("strength-tmp-stat", (value) => character.baseStats.strength.tmp = value, (character) => character.baseStats.strength.tmp);
    registerCharacterInput("agility-tmp-stat", (value) => character.baseStats.agility.tmp = value, (character) => character.baseStats.agility.tmp);
    registerCharacterInput("build-tmp-stat", (value) => character.baseStats.build.tmp = value, (character) => character.baseStats.build.tmp);
    registerCharacterInput("inteligence-tmp-stat", (value) => character.baseStats.inteligence.tmp = value, (character) => character.baseStats.inteligence.tmp);
    registerCharacterInput("wisdom-tmp-stat", (value) => character.baseStats.wisdom.tmp = value, (character) => character.baseStats.wisdom.tmp);
    registerCharacterInput("charisma-tmp-stat", (value) => character.baseStats.charisma.tmp = value, (character) => character.baseStats.charisma.tmp);
    registerCharacterInput("strength-tmp-modifier", (value) => character.baseStats.strength.tmpModifier = value, (character) => character.baseStats.strength.tmpModifier);
    registerCharacterInput("agility-tmp-modifier", (value) => character.baseStats.agility.tmpModifier = value, (character) => character.baseStats.agility.tmpModifier);
    registerCharacterInput("build-tmp-modifier", (value) => character.baseStats.build.tmpModifier = value, (character) => character.baseStats.build.tmpModifier);
    registerCharacterInput("inteligence-tmp-modifier", (value) => character.baseStats.inteligence.tmpModifier = value, (character) => character.baseStats.inteligence.tmpModifier);
    registerCharacterInput("wisdom-tmp-modifier", (value) => character.baseStats.wisdom.tmpModifier = value, (character) => character.baseStats.wisdom.tmpModifier);
    registerCharacterInput("charisma-tmp-modifier", (value) => character.baseStats.charisma.tmpModifier = value, (character) => character.baseStats.charisma.tmpModifier);
    registerCharacterInput("hp-total", (value) => character.hp.total = value, (character) => character.hp.total);
    registerCharacterInput("armor-class-total", (value) => character.armorClass.total = value, (character) => character.armorClass.total);
    registerCharacterInput("touch-attack-total", (value) => character.attacks.touchTotal = value, (character) => character.attacks.touchTotal);
    registerCharacterInput("suprise-attack-total", (value) => character.attacks.supriseTotal = value, (character) => character.attacks.supriseTotal);
    registerCharacterInput("hp-current", (value) => character.hp.current = value, (character) => character.hp.current);
    registerCharacterInput("armor-class-armor-bonus", (value) => character.armorClass.armorBonus = value, (character) => character.armorClass.armorBonus);
    registerCharacterInput("armor-class-shield-bonus", (value) => character.armorClass.shieldBonus = value, (character) => character.armorClass.shieldBonus);
    registerCharacterInput("armor-class-agility-modifier", (value) => character.armorClass.agilityModifier = value, (character) => character.armorClass.agilityModifier);
    registerCharacterInput("base-attack-bonus", (value) => character.attacks.baseBonus = value, (character) => character.attacks.baseBonus);
    registerCharacterInput("initiative-total", (value) => character.initiative.total = value, (character) => character.initiative.total);
    registerCharacterInput("initiative-agility-modifier", (value) => character.initiative.agilityModifier = value, (character) => character.initiative.agilityModifier);
    registerCharacterInput("initiative-other", (value) => character.initiative.other = value, (character) => character.initiative.other);
    registerCharacterInput("bruises", (value) => character.hp.bruises = value, (character) => character.hp.bruises);
    registerCharacterInput("armor-class-size-modifier", (value) => character.armorClass.sizeModifier = value, (character) => character.armorClass.sizeModifier);
    registerCharacterInput("armor-class-natural-armor", (value) => character.armorClass.naturalArmor = value, (character) => character.armorClass.naturalArmor);
    registerCharacterInput("armor-class-other", (value) => character.armorClass.other = value, (character) => character.armorClass.other);
    registerCharacterInput("speed", (value) => character.speed = value, (character) => character.speed);
    registerCharacterInput("damage-reduction", (value) => character.armorClass.damageReduction = value, (character) => character.armorClass.damageReduction);
    registerCharacterInput("miss-chance", (value) => character.armorClass.missChance = value, (character) => character.armorClass.missChance);
    registerCharacterInput("armor-penalty", (value) => character.armorClass.armorPenalty = value, (character) => character.armorClass.armorPenalty);
    registerCharacterInput("life-dices", (value) => character.hp.lifeDices = value, (character) => character.hp.lifeDices);
    registerCharacterInput("spells-limitation", (value) => character.magic.spellsLimitation = value, (character) => character.magic.spellsLimitation);
    registerCharacterInput("magic-resistance", (value) => character.magic.resistance = value, (character) => character.magic.resistance);
    registerCharacterInput("defensive-endurance-total", (value) => character.defensiveThrows.endurance.total = value, (character) => character.defensiveThrows.endurance.total);
    registerCharacterInput("defensive-endurance-base-defense", (value) => character.defensiveThrows.endurance.baseDefense = value, (character) => character.defensiveThrows.endurance.baseDefense);
    registerCharacterInput("defensive-endurance-magic-modifier", (value) => character.defensiveThrows.endurance.magicModifier = value, (character) => character.defensiveThrows.endurance.magicModifier);
    registerCharacterInput("defensive-endurance-trait-modifier", (value) => character.defensiveThrows.endurance.traitModifier = value, (character) => character.defensiveThrows.endurance.traitModifier);
    registerCharacterInput("defensive-endurance-other", (value) => character.defensiveThrows.endurance.other = value, (character) => character.defensiveThrows.endurance.other);
    registerCharacterInput("defensive-endurance-tmp-modifier", (value) => character.defensiveThrows.endurance.tmpModifier = value, (character) => character.defensiveThrows.endurance.tmpModifier);
    registerCharacterInput("defensive-reflex-total", (value) => character.defensiveThrows.reflex.total = value, (character) => character.defensiveThrows.reflex.total);
    registerCharacterInput("defensive-reflex-base-defense", (value) => character.defensiveThrows.reflex.baseDefense = value, (character) => character.defensiveThrows.reflex.baseDefense);
    registerCharacterInput("defensive-reflex-magic-modifier", (value) => character.defensiveThrows.reflex.magicModifier = value, (character) => character.defensiveThrows.reflex.magicModifier);
    registerCharacterInput("defensive-reflex-trait-modifier", (value) => character.defensiveThrows.reflex.traitModifier = value, (character) => character.defensiveThrows.reflex.traitModifier);
    registerCharacterInput("defensive-reflex-other", (value) => character.defensiveThrows.reflex.other = value, (character) => character.defensiveThrows.reflex.other);
    registerCharacterInput("defensive-reflex-tmp-modifier", (value) => character.defensiveThrows.reflex.tmpModifier = value, (character) => character.defensiveThrows.reflex.tmpModifier);
    registerCharacterInput("defensive-will-total", (value) => character.defensiveThrows.will.total = value, (character) => character.defensiveThrows.will.total);
    registerCharacterInput("defensive-will-base-defense", (value) => character.defensiveThrows.will.baseDefense = value, (character) => character.defensiveThrows.will.baseDefense);
    registerCharacterInput("defensive-will-magic-modifier", (value) => character.defensiveThrows.will.magicModifier = value, (character) => character.defensiveThrows.will.magicModifier);
    registerCharacterInput("defensive-will-trait-modifier", (value) => character.defensiveThrows.will.traitModifier = value, (character) => character.defensiveThrows.will.traitModifier);
    registerCharacterInput("defensive-will-other", (value) => character.defensiveThrows.will.other = value, (character) => character.defensiveThrows.will.other);
    registerCharacterInput("defensive-will-tmp-modifier", (value) => character.defensiveThrows.will.tmpModifier = value, (character) => character.defensiveThrows.will.tmpModifier);
    registerCharacterInput("defensive-special-modifier", (value) => character.defensiveThrows.specialModifier = value, (character) => character.defensiveThrows.specialModifier);
    registerCharacterInput("melee-attack-total", (value) => character.attacks.melee.total = value, (character) => character.attacks.melee.total);
    registerCharacterInput("melee-attack-base-bonus", (value) => character.attacks.melee.baseBonus = value, (character) => character.attacks.melee.baseBonus);
    registerCharacterInput("melee-attack-strength-modifier", (value) => character.attacks.melee.strengthModifier = value, (character) => character.attacks.melee.strengthModifier);
    registerCharacterInput("melee-attack-size-modifier", (value) => character.attacks.melee.sizeModifier = value, (character) => character.attacks.melee.sizeModifier);
    registerCharacterInput("melee-attack-other", (value) => character.attacks.melee.other = value, (character) => character.attacks.melee.other);
    registerCharacterInput("melee-attack-tmp-modifier", (value) => character.attacks.melee.tmpModifier = value, (character) => character.attacks.melee.tmpModifier);
    registerCharacterInput("distance-attack-total", (value) => character.attacks.distance.total = value, (character) => character.attacks.distance.total);
    registerCharacterInput("distance-attack-base-bonus", (value) => character.attacks.distance.baseBonus = value, (character) => character.attacks.distance.baseBonus);
    registerCharacterInput("distance-attack-agility-modifier", (value) => character.attacks.distance.agilityModifier = value, (character) => character.attacks.distance.agilityModifier);
    registerCharacterInput("distance-attack-size-modifier", (value) => character.attacks.distance.sizeModifier = value, (character) => character.attacks.distance.sizeModifier);
    registerCharacterInput("distance-attack-other", (value) => character.attacks.distance.other = value, (character) => character.attacks.distance.other);
    registerCharacterInput("distance-attack-tmp-modifier", (value) => character.attacks.distance.tmpModifier = value, (character) => character.attacks.distance.tmpModifier);
    registerCharacterInput("weapon1-name", (value) => character.weapons.weapon1.name = value, (character) => character.weapons.weapon1.name);
    registerCharacterInput("weapon1-total-attack-bonus", (value) => character.weapons.weapon1.attackBonus = value, (character) => character.weapons.weapon1.attackBonus);
    registerCharacterInput("weapon1-damage", (value) => character.weapons.weapon1.damage = value, (character) => character.weapons.weapon1.damage);
    registerCharacterInput("weapon1-crit", (value) => character.weapons.weapon1.crit = value, (character) => character.weapons.weapon1.crit);
    registerCharacterInput("weapon1-range", (value) => character.weapons.weapon1.range = value, (character) => character.weapons.weapon1.range);
    registerCharacterInput("weapon1-weight", (value) => character.weapons.weapon1.weight = value, (character) => character.weapons.weapon1.weight);
    registerCharacterInput("weapon1-kind", (value) => character.weapons.weapon1.kind = value, (character) => character.weapons.weapon1.kind);
    registerCharacterInput("weapon1-size", (value) => character.weapons.weapon1.size = value, (character) => character.weapons.weapon1.size);
    registerCharacterInput("weapon1-special", (value) => character.weapons.weapon1.special = value, (character) => character.weapons.weapon1.special);
    registerCharacterInput("weapon2-name", (value) => character.weapons.weapon2.name = value, (character) => character.weapons.weapon2.name);
    registerCharacterInput("weapon2-total-attack-bonus", (value) => character.weapons.weapon2.attackBonus = value, (character) => character.weapons.weapon2.attackBonus);
    registerCharacterInput("weapon2-damage", (value) => character.weapons.weapon2.damage = value, (character) => character.weapons.weapon2.damage);
    registerCharacterInput("weapon2-crit", (value) => character.weapons.weapon2.crit = value, (character) => character.weapons.weapon2.crit);
    registerCharacterInput("weapon2-range", (value) => character.weapons.weapon2.range = value, (character) => character.weapons.weapon2.range);
    registerCharacterInput("weapon2-weight", (value) => character.weapons.weapon2.weight = value, (character) => character.weapons.weapon2.weight);
    registerCharacterInput("weapon2-kind", (value) => character.weapons.weapon2.kind = value, (character) => character.weapons.weapon2.kind);
    registerCharacterInput("weapon2-size", (value) => character.weapons.weapon2.size = value, (character) => character.weapons.weapon2.size);
    registerCharacterInput("weapon2-special", (value) => character.weapons.weapon2.special = value, (character) => character.weapons.weapon2.special);
    registerCharacterInput("weapon3-name", (value) => character.weapons.weapon3.name = value, (character) => character.weapons.weapon3.name);
    registerCharacterInput("weapon3-total-attack-bonus", (value) => character.weapons.weapon3.attackBonus = value, (character) => character.weapons.weapon3.attackBonus);
    registerCharacterInput("weapon3-damage", (value) => character.weapons.weapon3.damage = value, (character) => character.weapons.weapon3.damage);
    registerCharacterInput("weapon3-crit", (value) => character.weapons.weapon3.crit = value, (character) => character.weapons.weapon3.crit);
    registerCharacterInput("weapon3-range", (value) => character.weapons.weapon3.range = value, (character) => character.weapons.weapon3.range);
    registerCharacterInput("weapon3-weight", (value) => character.weapons.weapon3.weight = value, (character) => character.weapons.weapon3.weight);
    registerCharacterInput("weapon3-kind", (value) => character.weapons.weapon3.kind = value, (character) => character.weapons.weapon3.kind);
    registerCharacterInput("weapon3-size", (value) => character.weapons.weapon3.size = value, (character) => character.weapons.weapon3.size);
    registerCharacterInput("weapon3-special", (value) => character.weapons.weapon3.special = value, (character) => character.weapons.weapon3.special);
    registerCharacterInput("armor-name", (value) => character.armor.name = value, (character) => character.armor.name);
    registerCharacterInput("armor-kind", (value) => character.armor.kind = value, (character) => character.armor.kind);
    registerCharacterInput("armor-bonus", (value) => character.armor.bonus = value, (character) => character.armor.bonus);
    registerCharacterInput("armor-max-agility-bonus", (value) => character.armor.agilityBonus = value, (character) => character.armor.agilityBonus);
    registerCharacterInput("armor-test-penalty", (value) => character.armor.testPenalty = value, (character) => character.armor.testPenalty);
    registerCharacterInput("armor-spell-failure", (value) => character.armor.spellFailure = value, (character) => character.armor.spellFailure);
    registerCharacterInput("armor-speed", (value) => character.armor.speed = value, (character) => character.armor.speed);
    registerCharacterInput("armor-weight", (value) => character.armor.weight = value, (character) => character.armor.weight);
    registerCharacterInput("armor-special", (value) => character.armor.special = value, (character) => character.armor.special);
    registerCharacterInput("shield-name", (value) => character.shield.name = value, (character) => character.shield.name);
    registerCharacterInput("shield-kind", (value) => character.shield.kind = value, (character) => character.shield.kind);
    registerCharacterInput("shield-protection-bonus", (value) => character.shield.protectionBonus = value, (character) => character.shield.protectionBonus);
    registerCharacterInput("shield-max-agility-bonus", (value) => character.shield.agilityBonus = value, (character) => character.shield.agilityBonus);
    registerCharacterInput("shield-test-penalty", (value) => character.shield.testPenalty = value, (character) => character.shield.testPenalty);
    registerCharacterInput("shield-spell-failure", (value) => character.shield.spellFailure = value, (character) => character.shield.spellFailure);
    registerCharacterInput("shield-speed", (value) => character.shield.speed = value, (character) => character.shield.speed);
    registerCharacterInput("shield-weight", (value) => character.shield.weight = value, (character) => character.shield.weight);
    registerCharacterInput("shield-special", (value) => character.shield.special = value, (character) => character.shield.special);
    registerCharacterInput("ammo1", (value) => character.ammo.ammo1 = value, (character) => character.ammo.ammo1);
    registerCharacterInput("ammo2", (value) => character.ammo.ammo2 = value, (character) => character.ammo.ammo2);
    registerCharacterInput("magic-ammo1", (value) => character.ammo.magicAmmo1 = value, (character) => character.ammo.magicAmmo1);
    registerCharacterInput("magic-ammo2", (value) => character.ammo.magicAmmo2 = value, (character) => character.ammo.magicAmmo2);

}



document.getElementById("import-button").addEventListener("click", () => importFile());
document.getElementById("export-button").addEventListener("click", () => exportFile("character.json"));

initInputs();


import {MDCTextField} from '@material/textfield';
import {MDCNotchedOutline} from '@material/notched-outline';
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';

const textFields = [
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

textFields.forEach(textField => new MDCTextField(document.querySelector(textField)));
notches.forEach(notch => new MDCNotchedOutline(document.querySelector(notch)));


const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
formField.input = checkbox;



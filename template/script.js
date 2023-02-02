
function convertText() {
    const inputText = document.getElementById("convert-text-input").value;
    const languageIndex = document.getElementById("language-select").value;
    const outputText = converters[languageIndex](inputText);
    document.getElementById("convert-text-output").innerHTML = outputText;
    // コピーボタンを出現させる。
    const copyBtn = document.getElementById("copy-output-button");
    if (outputText === "") {
	copyBtn.style.display = "none";
    } else {
	copyBtn.style.display = "block";
    }
}

function copyOutput() {
    const outputText = document.getElementById("convert-text-output").innerHTML;
    navigator.clipboard.writeText(outputText).then(displayCopySuccessMessage);
}

var copyButtonTooltip = null;
function displayCopySuccessMessage() {
    if (copyButtonTooltip === null) {
	let copyBtn = document.getElementById("copy-output-button");
	copyButtonTooltip = new bootstrap.Tooltip(copyBtn);
    }
    copyButtonTooltip.show();
    window.setTimeout(() => { copyButtonTooltip.hide(); }, 2500);
}

function initializeLanguageSelect() {
    const defaultLang = window.sessionStorage.getItem("lang");
    const lang = defaultLang === null ? 0 : parseInt(defaultLang);
    const selectElt = document.getElementById("language-select");
    selectElt.value = lang;
    displayTranscriptionTable(lang);
}

function onChangeLanguage() {
    const selectElt = document.getElementById("language-select");
    const langIndex = parseInt(selectElt.value);
    displayTranscriptionTable(langIndex);
    window.sessionStorage.setItem("lang", langIndex);
}

function displayTranscriptionTable(lang) {
    const tables = document.getElementById("transcription-table-container").querySelectorAll(":scope > div");
    for (const table of tables)
	table.style.display = "none";
    tables[lang].style.display = "block";
}

let languages = {% include "language.json" %} ;
let converters = {{ converter_functions }} ;

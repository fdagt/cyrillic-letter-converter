
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
  const selectElt = document.getElementById("language-select");
  if (defaultLang === null)
      selectElt.value = "0";
  else
      selectElt.value = defaultLang;
}

function onChangeLanguage() {
    const selectElt = document.getElementById("language-select");
    const langIndex = selectElt.value;
    window.sessionStorage.setItem("lang", langIndex);
}

languages = {% include "language.json" %} ;
converters = {{ converter_functions }} ;

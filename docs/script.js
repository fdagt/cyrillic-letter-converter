function convertText(){const inputText=document.getElementById("convert-text-input").value;const languageIndex=document.getElementById("language-select").value;const outputText=converters[languageIndex](inputText);const outputElt=document.getElementById("convert-text-output");outputElt.innerHTML=outputText;outputElt.lang=languages[languageIndex].code;const copyBtn=document.getElementById("copy-output-button");if(outputText===""){copyBtn.style.display="none";}else{copyBtn.style.display="block";}}
function copyOutput(){const outputText=document.getElementById("convert-text-output").innerHTML;navigator.clipboard.writeText(outputText).then(displayCopySuccessMessage);}
var copyButtonTooltip=null;function displayCopySuccessMessage(){if(copyButtonTooltip===null){let copyBtn=document.getElementById("copy-output-button");copyButtonTooltip=new bootstrap.Tooltip(copyBtn);}
copyButtonTooltip.show();window.setTimeout(()=>{copyButtonTooltip.hide();},2500);}
function initializeLanguageSelect(){const defaultLang=window.sessionStorage.getItem("lang");const lang=defaultLang===null?0:parseInt(defaultLang);const selectElt=document.getElementById("language-select");selectElt.value=lang;displayTranscriptionTable(lang);}
function onChangeLanguage(){const selectElt=document.getElementById("language-select");const langIndex=parseInt(selectElt.value);displayTranscriptionTable(langIndex);window.sessionStorage.setItem("lang",langIndex);}
function displayTranscriptionTable(lang){const tables=document.getElementById("transcription-table-container").querySelectorAll(":scope > div");for(const table of tables)
table.style.display="none";tables[lang].style.display="block";}
let languages=[{"name":"ロシア語","code":"ru","category":"東スラブ","transcription":{"a":"а","b":"б","v":"в","g":"г","d":"д","e":"е","jo":"ё","zh":"ж","z":"з","i":"и","j":"й","k":"к","l":"л","m":"м","n":"н","o":"о","p":"п","r":"р","s":"с","t":"т","u":"у","f":"ф","kh":"х","h":"х","x":"х","ts":"ц","c":"ц","ch":"ч","sh":"ш","shch":"щ","\"":"ъ","''":"ъ","y":"ы","'":"ь","e'":"э","ju":"ю","ja":"я","|":""},"table":{"vowel":{"hard":["a","y","u","e'","o","\""],"soft":["ja","i","ju","e","jo","'"]},"consonant":{"columns":["唇","歯茎","後部歯茎","硬口蓋","軟口蓋"],"rows":["鼻","破裂","破擦","摩擦","接近","ふるえ"],"body":[["m","n",null,null,null],[["p","b"],["t","d"],null,null,["k","g"]],[null,"ts",null,"ch",null],[["f","v"],["s","z"],["sh","zh"],"shch","kh"],[null,"l",null,"j",null],[null,null,"r",null,null]]}}},{"name":"ウクライナ語","code":"uk","category":"東スラブ","transcription":{"a":"а","b":"б","v":"в","h":"г","g":"ґ","d":"д","e":"е","je":"є","zh":"ж","z":"з","y":"и","i":"і","ji":"ї","j":"й","k":"к","l":"л","m":"м","n":"н","o":"о","p":"п","r":"р","s":"с","t":"т","u":"у","f":"ф","kh":"х","x":"х","ts":"ц","c":"ц","ch":"ч","sh":"ш","shch":"щ","'":"ь","ju":"ю","ja":"я","\"":"'","''":"'","|":""},"table":{"vowel":{"hard":["a","y","u","e","o","\""],"soft":["ja",["i","ji"],"ju","je",null,"'"]},"consonant":{"columns":["唇","歯茎","後部歯茎","硬口蓋","軟口蓋","声門"],"rows":["鼻","破裂","破擦","摩擦","接近","ふるえ"],"body":[["m","n",null,null,null,null],[["p","b"],["t","d"],null,null,["k","g"],null],[null,"ts","ch",null,null,null],["f",["s","z"],["sh","zh"],"shch","kh","h"],["v","l",null,"j",null,null],[null,"r",null,null,null,null]]}}},{"name":"ベラルーシ語","code":"be","category":"東スラブ","transcription":{"a":"а","b":"б","v":"в","gh":"г","h":"г","d":"д","e":"е","jo":"ё","zh":"ж","z":"з","i":"і","j":"й","k":"к","l":"л","m":"м","n":"н","o":"о","p":"п","r":"р","s":"с","t":"т","u":"у","w":"ў","f":"ф","kh":"х","x":"х","ts":"ц","c":"ц","ch":"ч","sh":"ш","\"":"'","''":"'","y":"ы","'":"ь","e'":"э","ju":"ю","ja":"я","|":""},"table":{"vowel":{"hard":["a","y","u","e'","o","\""],"soft":["ja","i","ju","e","jo","'"]},"consonant":{"columns":["唇","歯茎","後部歯茎","硬口蓋","軟口蓋"],"rows":["鼻","破裂","破擦","摩擦","接近","ふるえ"],"body":[["m","n",null,null,null],[["p","b"],["t","d"],null,null,"k"],[null,"ts","ch",null,null],[["f","v"],["s","z"],["sh","zh"],null,["kh","gh"]],["w","l",null,"j",null],[null,"r",null,null,null]]}}},{"name":"マケドニア語","code":"mk","category":"南スラブ","transcription":{"a":"а","b":"б","v":"в","g":"г","d":"д","gj":"ѓ","e":"е","e`":"ѐ","zh":"ж","z":"з","dz":"ѕ","i":"и","i`":"ѝ","j":"ј","k":"к","l":"л","lj":"љ","m":"м","n":"н","nj":"њ","o":"о","p":"п","r":"р","s":"с","t":"т","kj":"ќ","u":"у","f":"ф","kh":"х","h":"х","x":"х","ts":"ц","c":"ц","ch":"ч","dj":"џ","sh":"ш","|":""},"table":{"vowel":{"hard":["a",["i","i`"],"u",["e","e`"],"o"],"soft":[null,null,null,null,null]},"consonant":{"columns":["唇","歯茎","後部歯茎","硬口蓋","軟口蓋"],"rows":["鼻","破裂","破擦","摩擦","接近","ふるえ"],"body":[["m","n",null,"nj",null],[["p","b"],["t","d"],null,["kj","gj"],["k","g"]],[null,["ts","dz"],["ch","dj"],null,null],[["f","v"],["s","z"],["sh","zh"],null,"kh"],[null,"l",null,"j",null],[null,"r",null,null,null]]}}},{"name":"ブルガリア語","code":"bg","category":"南スラブ","transcription":{"a":"а","b":"б","v":"в","g":"г","d":"д","e":"е","zh":"ж","z":"з","i":"и","j":"й","k":"к","l":"л","m":"м","n":"н","o":"о","p":"п","r":"р","s":"с","t":"т","u":"у","f":"ф","kh":"х","h":"х","x":"х","ts":"ц","c":"ц","ch":"ч","sh":"ш","sht":"щ","\"":"ъ","''":"ъ","'":"ь","ju":"ю","ja":"я","jo":"ьo","|":""},"table":{"vowel":{"hard":["a","i","u","e","o","\""],"soft":["ja",null,"ju",null,null,null]},"consonant":{"columns":["唇","歯茎","後部歯茎","硬口蓋","軟口蓋"],"rows":["鼻","破裂","破擦","摩擦","接近","ふるえ"],"body":[["m","n",null,null,null],[["p","b"],["t","d"],null,null,["k","g"]],[null,"ts","ch",null,null],[["f","v"],["s","z"],["sh","zh"],"sht","kh"],[null,"l",null,["j","'"],null],[null,null,"r",null,null]]}}},{"name":"セルビア語","code":"sr","category":"南スラブ","transcription":{"a":"а","b":"б","v":"в","g":"г","d":"д","dj":"ђ","e":"е","zh":"ж","z":"з","i":"и","j":"ј","k":"к","l":"л","lj":"љ","m":"м","n":"н","nj":"њ","o":"о","p":"п","r":"р","s":"с","t":"т","ch":"ћ","u":"у","f":"ф","kh":"х","h":"х","x":"х","ts":"ц","c":"ц","tsh":"ч","dzh":"џ","sh":"ш","|":""},"table":{"vowel":{"hard":["a","i","u","e","o"],"soft":[null,null,null,null,null]},"consonant":{"columns":["唇","歯茎","後部歯茎","硬口蓋","軟口蓋"],"rows":["鼻","破裂","破擦","摩擦","接近","ふるえ"],"body":[["m","n",null,"nj",null],[["p","b"],["t","d"],null,null,["k","g"]],[null,"ts",["tsh","dzh"],["ch","dj"],null],[["f","v"],["s","z"],["sh","zh"],null,"kh"],[null,"l",null,"j",null],[null,"r",null,null,null]]}}},{"name":"モンゴル語","code":"mn","category":"モンゴル","transcription":{"a":"а","b":"б","v":"в","g":"г","d":"д","je":"е","jo":"ё","zh":"ж","z":"з","i":"и","j":"й","k":"к","l":"л","m":"м","n":"н","o":"о","oe":"ө","p":"п","r":"р","s":"с","t":"т","u":"у","ue":"ү","f":"ф","kh":"х","h":"х","x":"х","ts":"ц","c":"ц","ch":"ч","sh":"ш","shch":"щ","\"":"ъ","''":"ъ","y":"ы","'":"ь","e":"э","ju":"ю","ja":"я","|":""},"table":{"vowel":{"hard":["a","o","u","ue","oe","e",["i","y"],"\""],"soft":["ja","jo","ju",null,null,"je",null,"'"]},"consonant":{"columns":["唇","歯茎","後部歯茎","硬口蓋","軟口蓋"],"rows":["鼻","破裂","破擦","摩擦","接近","ふるえ"],"body":[["m","n",null,null,null],[["b","p"],["d","t"],null,null,["g","k"]],[null,["z","ts"],["zh","ch"],null,null],["f",["s","l"],["sh","shch"],null,"kh"],["v",null,null,"j",null],[null,"r",null,null,null]]}}}];let converters=[function(inputText){let index=0,output="";topLoop:while(true){if(index>=inputText.length){output+="";break topLoop;}switch(inputText.codePointAt(index++)){case 97:output+="а";break;case 65:output+="А";break;case 98:output+="б";break;case 66:output+="Б";break;case 118:output+="в";break;case 86:output+="В";break;case 103:output+="г";break;case 71:output+="Г";break;case 100:output+="д";break;case 68:output+="Д";break;case 101:if(index>=inputText.length){output+="е";break topLoop;}switch(inputText.codePointAt(index++)){case 39:output+="э";break;default:output+="е";index--;}break;case 69:if(index>=inputText.length){output+="Е";break topLoop;}switch(inputText.codePointAt(index++)){case 39:output+="Э";break;default:output+="Е";index--;}break;case 106:if(index>=inputText.length){output+="й";break topLoop;}switch(inputText.codePointAt(index++)){case 111:output+="ё";break;case 117:output+="ю";break;case 97:output+="я";break;default:output+="й";index--;}break;case 74:if(index>=inputText.length){output+="Й";break topLoop;}switch(inputText.codePointAt(index++)){case 79:output+="Ё";break;case 111:output+="Ё";break;case 85:output+="Ю";break;case 117:output+="Ю";break;case 65:output+="Я";break;case 97:output+="Я";break;default:output+="Й";index--;}break;case 122:if(index>=inputText.length){output+="з";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="ж";break;default:output+="з";index--;}break;case 90:if(index>=inputText.length){output+="З";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Ж";break;case 104:output+="Ж";break;default:output+="З";index--;}break;case 105:output+="и";break;case 73:output+="И";break;case 107:if(index>=inputText.length){output+="к";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="х";break;default:output+="к";index--;}break;case 75:if(index>=inputText.length){output+="К";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Х";break;case 104:output+="Х";break;default:output+="К";index--;}break;case 108:output+="л";break;case 76:output+="Л";break;case 109:output+="м";break;case 77:output+="М";break;case 110:output+="н";break;case 78:output+="Н";break;case 111:output+="о";break;case 79:output+="О";break;case 112:output+="п";break;case 80:output+="П";break;case 114:output+="р";break;case 82:output+="Р";break;case 115:if(index>=inputText.length){output+="с";break topLoop;}switch(inputText.codePointAt(index++)){case 104:if(index>=inputText.length){output+="ш";break topLoop;}switch(inputText.codePointAt(index++)){case 99:if(index>=inputText.length){output+="шц";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="щ";break;default:output+="шц";index--;}break;default:output+="ш";index--;}break;default:output+="с";index--;}break;case 83:if(index>=inputText.length){output+="С";break topLoop;}switch(inputText.codePointAt(index++)){case 72:if(index>=inputText.length){output+="Ш";break topLoop;}switch(inputText.codePointAt(index++)){case 67:if(index>=inputText.length){output+="ШЦ";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Щ";break;default:output+="ШЦ";index--;}break;default:output+="Ш";index--;}break;case 104:if(index>=inputText.length){output+="Ш";break topLoop;}switch(inputText.codePointAt(index++)){case 99:if(index>=inputText.length){output+="Шц";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="Щ";break;default:output+="Шц";index--;}break;default:output+="Ш";index--;}break;default:output+="С";index--;}break;case 116:if(index>=inputText.length){output+="т";break topLoop;}switch(inputText.codePointAt(index++)){case 115:output+="ц";break;default:output+="т";index--;}break;case 84:if(index>=inputText.length){output+="Т";break topLoop;}switch(inputText.codePointAt(index++)){case 83:output+="Ц";break;case 115:output+="Ц";break;default:output+="Т";index--;}break;case 117:output+="у";break;case 85:output+="У";break;case 102:output+="ф";break;case 70:output+="Ф";break;case 104:output+="х";break;case 72:output+="Х";break;case 120:output+="х";break;case 88:output+="Х";break;case 99:if(index>=inputText.length){output+="ц";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="ч";break;default:output+="ц";index--;}break;case 67:if(index>=inputText.length){output+="Ц";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Ч";break;case 104:output+="Ч";break;default:output+="Ц";index--;}break;case 34:output+="ъ";break;case 39:if(index>=inputText.length){output+="ь";break topLoop;}switch(inputText.codePointAt(index++)){case 39:output+="ъ";break;default:output+="ь";index--;}break;case 121:output+="ы";break;case 89:output+="Ы";break;case 124:output+="";break;default:output+=inputText[index-1];}}return output;},function(inputText){let index=0,output="";topLoop:while(true){if(index>=inputText.length){output+="";break topLoop;}switch(inputText.codePointAt(index++)){case 97:output+="а";break;case 65:output+="А";break;case 98:output+="б";break;case 66:output+="Б";break;case 118:output+="в";break;case 86:output+="В";break;case 104:output+="г";break;case 72:output+="Г";break;case 103:output+="ґ";break;case 71:output+="Ґ";break;case 100:output+="д";break;case 68:output+="Д";break;case 101:output+="е";break;case 69:output+="Е";break;case 106:if(index>=inputText.length){output+="й";break topLoop;}switch(inputText.codePointAt(index++)){case 101:output+="є";break;case 105:output+="ї";break;case 117:output+="ю";break;case 97:output+="я";break;default:output+="й";index--;}break;case 74:if(index>=inputText.length){output+="Й";break topLoop;}switch(inputText.codePointAt(index++)){case 69:output+="Є";break;case 101:output+="Є";break;case 73:output+="Ї";break;case 105:output+="Ї";break;case 85:output+="Ю";break;case 117:output+="Ю";break;case 65:output+="Я";break;case 97:output+="Я";break;default:output+="Й";index--;}break;case 122:if(index>=inputText.length){output+="з";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="ж";break;default:output+="з";index--;}break;case 90:if(index>=inputText.length){output+="З";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Ж";break;case 104:output+="Ж";break;default:output+="З";index--;}break;case 121:output+="и";break;case 89:output+="И";break;case 105:output+="і";break;case 73:output+="І";break;case 107:if(index>=inputText.length){output+="к";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="х";break;default:output+="к";index--;}break;case 75:if(index>=inputText.length){output+="К";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Х";break;case 104:output+="Х";break;default:output+="К";index--;}break;case 108:output+="л";break;case 76:output+="Л";break;case 109:output+="м";break;case 77:output+="М";break;case 110:output+="н";break;case 78:output+="Н";break;case 111:output+="о";break;case 79:output+="О";break;case 112:output+="п";break;case 80:output+="П";break;case 114:output+="р";break;case 82:output+="Р";break;case 115:if(index>=inputText.length){output+="с";break topLoop;}switch(inputText.codePointAt(index++)){case 104:if(index>=inputText.length){output+="ш";break topLoop;}switch(inputText.codePointAt(index++)){case 99:if(index>=inputText.length){output+="шц";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="щ";break;default:output+="шц";index--;}break;default:output+="ш";index--;}break;default:output+="с";index--;}break;case 83:if(index>=inputText.length){output+="С";break topLoop;}switch(inputText.codePointAt(index++)){case 72:if(index>=inputText.length){output+="Ш";break topLoop;}switch(inputText.codePointAt(index++)){case 67:if(index>=inputText.length){output+="ШЦ";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Щ";break;default:output+="ШЦ";index--;}break;default:output+="Ш";index--;}break;case 104:if(index>=inputText.length){output+="Ш";break topLoop;}switch(inputText.codePointAt(index++)){case 99:if(index>=inputText.length){output+="Шц";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="Щ";break;default:output+="Шц";index--;}break;default:output+="Ш";index--;}break;default:output+="С";index--;}break;case 116:if(index>=inputText.length){output+="т";break topLoop;}switch(inputText.codePointAt(index++)){case 115:output+="ц";break;default:output+="т";index--;}break;case 84:if(index>=inputText.length){output+="Т";break topLoop;}switch(inputText.codePointAt(index++)){case 83:output+="Ц";break;case 115:output+="Ц";break;default:output+="Т";index--;}break;case 117:output+="у";break;case 85:output+="У";break;case 102:output+="ф";break;case 70:output+="Ф";break;case 120:output+="х";break;case 88:output+="Х";break;case 99:if(index>=inputText.length){output+="ц";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="ч";break;default:output+="ц";index--;}break;case 67:if(index>=inputText.length){output+="Ц";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Ч";break;case 104:output+="Ч";break;default:output+="Ц";index--;}break;case 39:if(index>=inputText.length){output+="ь";break topLoop;}switch(inputText.codePointAt(index++)){case 39:output+="'";break;default:output+="ь";index--;}break;case 34:output+="'";break;case 124:output+="";break;default:output+=inputText[index-1];}}return output;},function(inputText){let index=0,output="";topLoop:while(true){if(index>=inputText.length){output+="";break topLoop;}switch(inputText.codePointAt(index++)){case 97:output+="а";break;case 65:output+="А";break;case 98:output+="б";break;case 66:output+="Б";break;case 118:output+="в";break;case 86:output+="В";break;case 103:if(index>=inputText.length){output+="g";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="г";break;default:output+="g";index--;}break;case 71:if(index>=inputText.length){output+="G";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Г";break;case 104:output+="Г";break;default:output+="G";index--;}break;case 104:output+="г";break;case 72:output+="Г";break;case 100:output+="д";break;case 68:output+="Д";break;case 101:if(index>=inputText.length){output+="е";break topLoop;}switch(inputText.codePointAt(index++)){case 39:output+="э";break;default:output+="е";index--;}break;case 69:if(index>=inputText.length){output+="Е";break topLoop;}switch(inputText.codePointAt(index++)){case 39:output+="Э";break;default:output+="Е";index--;}break;case 106:if(index>=inputText.length){output+="й";break topLoop;}switch(inputText.codePointAt(index++)){case 111:output+="ё";break;case 117:output+="ю";break;case 97:output+="я";break;default:output+="й";index--;}break;case 74:if(index>=inputText.length){output+="Й";break topLoop;}switch(inputText.codePointAt(index++)){case 79:output+="Ё";break;case 111:output+="Ё";break;case 85:output+="Ю";break;case 117:output+="Ю";break;case 65:output+="Я";break;case 97:output+="Я";break;default:output+="Й";index--;}break;case 122:if(index>=inputText.length){output+="з";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="ж";break;default:output+="з";index--;}break;case 90:if(index>=inputText.length){output+="З";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Ж";break;case 104:output+="Ж";break;default:output+="З";index--;}break;case 105:output+="і";break;case 73:output+="І";break;case 107:if(index>=inputText.length){output+="к";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="х";break;default:output+="к";index--;}break;case 75:if(index>=inputText.length){output+="К";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Х";break;case 104:output+="Х";break;default:output+="К";index--;}break;case 108:output+="л";break;case 76:output+="Л";break;case 109:output+="м";break;case 77:output+="М";break;case 110:output+="н";break;case 78:output+="Н";break;case 111:output+="о";break;case 79:output+="О";break;case 112:output+="п";break;case 80:output+="П";break;case 114:output+="р";break;case 82:output+="Р";break;case 115:if(index>=inputText.length){output+="с";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="ш";break;default:output+="с";index--;}break;case 83:if(index>=inputText.length){output+="С";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Ш";break;case 104:output+="Ш";break;default:output+="С";index--;}break;case 116:if(index>=inputText.length){output+="т";break topLoop;}switch(inputText.codePointAt(index++)){case 115:output+="ц";break;default:output+="т";index--;}break;case 84:if(index>=inputText.length){output+="Т";break topLoop;}switch(inputText.codePointAt(index++)){case 83:output+="Ц";break;case 115:output+="Ц";break;default:output+="Т";index--;}break;case 117:output+="у";break;case 85:output+="У";break;case 119:output+="ў";break;case 87:output+="Ў";break;case 102:output+="ф";break;case 70:output+="Ф";break;case 120:output+="х";break;case 88:output+="Х";break;case 99:if(index>=inputText.length){output+="ц";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="ч";break;default:output+="ц";index--;}break;case 67:if(index>=inputText.length){output+="Ц";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Ч";break;case 104:output+="Ч";break;default:output+="Ц";index--;}break;case 34:output+="'";break;case 39:if(index>=inputText.length){output+="ь";break topLoop;}switch(inputText.codePointAt(index++)){case 39:output+="'";break;default:output+="ь";index--;}break;case 121:output+="ы";break;case 89:output+="Ы";break;case 124:output+="";break;default:output+=inputText[index-1];}}return output;},function(inputText){let index=0,output="";topLoop:while(true){if(index>=inputText.length){output+="";break topLoop;}switch(inputText.codePointAt(index++)){case 97:output+="а";break;case 65:output+="А";break;case 98:output+="б";break;case 66:output+="Б";break;case 118:output+="в";break;case 86:output+="В";break;case 103:if(index>=inputText.length){output+="г";break topLoop;}switch(inputText.codePointAt(index++)){case 106:output+="ѓ";break;default:output+="г";index--;}break;case 71:if(index>=inputText.length){output+="Г";break topLoop;}switch(inputText.codePointAt(index++)){case 74:output+="Ѓ";break;case 106:output+="Ѓ";break;default:output+="Г";index--;}break;case 100:if(index>=inputText.length){output+="д";break topLoop;}switch(inputText.codePointAt(index++)){case 122:output+="ѕ";break;case 106:output+="џ";break;default:output+="д";index--;}break;case 68:if(index>=inputText.length){output+="Д";break topLoop;}switch(inputText.codePointAt(index++)){case 90:output+="Ѕ";break;case 122:output+="Ѕ";break;case 74:output+="Џ";break;case 106:output+="Џ";break;default:output+="Д";index--;}break;case 101:if(index>=inputText.length){output+="е";break topLoop;}switch(inputText.codePointAt(index++)){case 96:output+="ѐ";break;default:output+="е";index--;}break;case 69:if(index>=inputText.length){output+="Е";break topLoop;}switch(inputText.codePointAt(index++)){case 96:output+="Ѐ";break;default:output+="Е";index--;}break;case 122:if(index>=inputText.length){output+="з";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="ж";break;default:output+="з";index--;}break;case 90:if(index>=inputText.length){output+="З";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Ж";break;case 104:output+="Ж";break;default:output+="З";index--;}break;case 105:if(index>=inputText.length){output+="и";break topLoop;}switch(inputText.codePointAt(index++)){case 96:output+="ѝ";break;default:output+="и";index--;}break;case 73:if(index>=inputText.length){output+="И";break topLoop;}switch(inputText.codePointAt(index++)){case 96:output+="Ѝ";break;default:output+="И";index--;}break;case 106:output+="ј";break;case 74:output+="Ј";break;case 107:if(index>=inputText.length){output+="к";break topLoop;}switch(inputText.codePointAt(index++)){case 106:output+="ќ";break;case 104:output+="х";break;default:output+="к";index--;}break;case 75:if(index>=inputText.length){output+="К";break topLoop;}switch(inputText.codePointAt(index++)){case 74:output+="Ќ";break;case 106:output+="Ќ";break;case 72:output+="Х";break;case 104:output+="Х";break;default:output+="К";index--;}break;case 108:if(index>=inputText.length){output+="л";break topLoop;}switch(inputText.codePointAt(index++)){case 106:output+="љ";break;default:output+="л";index--;}break;case 76:if(index>=inputText.length){output+="Л";break topLoop;}switch(inputText.codePointAt(index++)){case 74:output+="Љ";break;case 106:output+="Љ";break;default:output+="Л";index--;}break;case 109:output+="м";break;case 77:output+="М";break;case 110:if(index>=inputText.length){output+="н";break topLoop;}switch(inputText.codePointAt(index++)){case 106:output+="њ";break;default:output+="н";index--;}break;case 78:if(index>=inputText.length){output+="Н";break topLoop;}switch(inputText.codePointAt(index++)){case 74:output+="Њ";break;case 106:output+="Њ";break;default:output+="Н";index--;}break;case 111:output+="о";break;case 79:output+="О";break;case 112:output+="п";break;case 80:output+="П";break;case 114:output+="р";break;case 82:output+="Р";break;case 115:if(index>=inputText.length){output+="с";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="ш";break;default:output+="с";index--;}break;case 83:if(index>=inputText.length){output+="С";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Ш";break;case 104:output+="Ш";break;default:output+="С";index--;}break;case 116:if(index>=inputText.length){output+="т";break topLoop;}switch(inputText.codePointAt(index++)){case 115:output+="ц";break;default:output+="т";index--;}break;case 84:if(index>=inputText.length){output+="Т";break topLoop;}switch(inputText.codePointAt(index++)){case 83:output+="Ц";break;case 115:output+="Ц";break;default:output+="Т";index--;}break;case 117:output+="у";break;case 85:output+="У";break;case 102:output+="ф";break;case 70:output+="Ф";break;case 104:output+="х";break;case 72:output+="Х";break;case 120:output+="х";break;case 88:output+="Х";break;case 99:if(index>=inputText.length){output+="ц";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="ч";break;default:output+="ц";index--;}break;case 67:if(index>=inputText.length){output+="Ц";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Ч";break;case 104:output+="Ч";break;default:output+="Ц";index--;}break;case 124:output+="";break;default:output+=inputText[index-1];}}return output;},function(inputText){let index=0,output="";topLoop:while(true){if(index>=inputText.length){output+="";break topLoop;}switch(inputText.codePointAt(index++)){case 97:output+="а";break;case 65:output+="А";break;case 98:output+="б";break;case 66:output+="Б";break;case 118:output+="в";break;case 86:output+="В";break;case 103:output+="г";break;case 71:output+="Г";break;case 100:output+="д";break;case 68:output+="Д";break;case 101:output+="е";break;case 69:output+="Е";break;case 122:if(index>=inputText.length){output+="з";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="ж";break;default:output+="з";index--;}break;case 90:if(index>=inputText.length){output+="З";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Ж";break;case 104:output+="Ж";break;default:output+="З";index--;}break;case 105:output+="и";break;case 73:output+="И";break;case 106:if(index>=inputText.length){output+="й";break topLoop;}switch(inputText.codePointAt(index++)){case 117:output+="ю";break;case 97:output+="я";break;case 111:output+="ьo";break;default:output+="й";index--;}break;case 74:if(index>=inputText.length){output+="Й";break topLoop;}switch(inputText.codePointAt(index++)){case 85:output+="Ю";break;case 117:output+="Ю";break;case 65:output+="Я";break;case 97:output+="Я";break;case 79:output+="ЬO";break;case 111:output+="ЬO";break;default:output+="Й";index--;}break;case 107:if(index>=inputText.length){output+="к";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="х";break;default:output+="к";index--;}break;case 75:if(index>=inputText.length){output+="К";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Х";break;case 104:output+="Х";break;default:output+="К";index--;}break;case 108:output+="л";break;case 76:output+="Л";break;case 109:output+="м";break;case 77:output+="М";break;case 110:output+="н";break;case 78:output+="Н";break;case 111:output+="о";break;case 79:output+="О";break;case 112:output+="п";break;case 80:output+="П";break;case 114:output+="р";break;case 82:output+="Р";break;case 115:if(index>=inputText.length){output+="с";break topLoop;}switch(inputText.codePointAt(index++)){case 104:if(index>=inputText.length){output+="ш";break topLoop;}switch(inputText.codePointAt(index++)){case 116:output+="щ";break;default:output+="ш";index--;}break;default:output+="с";index--;}break;case 83:if(index>=inputText.length){output+="С";break topLoop;}switch(inputText.codePointAt(index++)){case 72:if(index>=inputText.length){output+="Ш";break topLoop;}switch(inputText.codePointAt(index++)){case 84:output+="Щ";break;default:output+="Ш";index--;}break;case 104:if(index>=inputText.length){output+="Ш";break topLoop;}switch(inputText.codePointAt(index++)){case 116:output+="Щ";break;default:output+="Ш";index--;}break;default:output+="С";index--;}break;case 116:if(index>=inputText.length){output+="т";break topLoop;}switch(inputText.codePointAt(index++)){case 115:output+="ц";break;default:output+="т";index--;}break;case 84:if(index>=inputText.length){output+="Т";break topLoop;}switch(inputText.codePointAt(index++)){case 83:output+="Ц";break;case 115:output+="Ц";break;default:output+="Т";index--;}break;case 117:output+="у";break;case 85:output+="У";break;case 102:output+="ф";break;case 70:output+="Ф";break;case 104:output+="х";break;case 72:output+="Х";break;case 120:output+="х";break;case 88:output+="Х";break;case 99:if(index>=inputText.length){output+="ц";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="ч";break;default:output+="ц";index--;}break;case 67:if(index>=inputText.length){output+="Ц";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Ч";break;case 104:output+="Ч";break;default:output+="Ц";index--;}break;case 34:output+="ъ";break;case 39:if(index>=inputText.length){output+="ь";break topLoop;}switch(inputText.codePointAt(index++)){case 39:output+="ъ";break;default:output+="ь";index--;}break;case 124:output+="";break;default:output+=inputText[index-1];}}return output;},function(inputText){let index=0,output="";topLoop:while(true){if(index>=inputText.length){output+="";break topLoop;}switch(inputText.codePointAt(index++)){case 97:output+="а";break;case 65:output+="А";break;case 98:output+="б";break;case 66:output+="Б";break;case 118:output+="в";break;case 86:output+="В";break;case 103:output+="г";break;case 71:output+="Г";break;case 100:if(index>=inputText.length){output+="д";break topLoop;}switch(inputText.codePointAt(index++)){case 106:output+="ђ";break;case 122:if(index>=inputText.length){output+="дз";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="џ";break;default:output+="дз";index--;}break;default:output+="д";index--;}break;case 68:if(index>=inputText.length){output+="Д";break topLoop;}switch(inputText.codePointAt(index++)){case 74:output+="Ђ";break;case 106:output+="Ђ";break;case 90:if(index>=inputText.length){output+="ДЗ";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Џ";break;default:output+="ДЗ";index--;}break;case 122:if(index>=inputText.length){output+="Дз";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="Џ";break;default:output+="Дз";index--;}break;default:output+="Д";index--;}break;case 101:output+="е";break;case 69:output+="Е";break;case 122:if(index>=inputText.length){output+="з";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="ж";break;default:output+="з";index--;}break;case 90:if(index>=inputText.length){output+="З";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Ж";break;case 104:output+="Ж";break;default:output+="З";index--;}break;case 105:output+="и";break;case 73:output+="И";break;case 106:output+="ј";break;case 74:output+="Ј";break;case 107:if(index>=inputText.length){output+="к";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="х";break;default:output+="к";index--;}break;case 75:if(index>=inputText.length){output+="К";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Х";break;case 104:output+="Х";break;default:output+="К";index--;}break;case 108:if(index>=inputText.length){output+="л";break topLoop;}switch(inputText.codePointAt(index++)){case 106:output+="љ";break;default:output+="л";index--;}break;case 76:if(index>=inputText.length){output+="Л";break topLoop;}switch(inputText.codePointAt(index++)){case 74:output+="Љ";break;case 106:output+="Љ";break;default:output+="Л";index--;}break;case 109:output+="м";break;case 77:output+="М";break;case 110:if(index>=inputText.length){output+="н";break topLoop;}switch(inputText.codePointAt(index++)){case 106:output+="њ";break;default:output+="н";index--;}break;case 78:if(index>=inputText.length){output+="Н";break topLoop;}switch(inputText.codePointAt(index++)){case 74:output+="Њ";break;case 106:output+="Њ";break;default:output+="Н";index--;}break;case 111:output+="о";break;case 79:output+="О";break;case 112:output+="п";break;case 80:output+="П";break;case 114:output+="р";break;case 82:output+="Р";break;case 115:if(index>=inputText.length){output+="с";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="ш";break;default:output+="с";index--;}break;case 83:if(index>=inputText.length){output+="С";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Ш";break;case 104:output+="Ш";break;default:output+="С";index--;}break;case 116:if(index>=inputText.length){output+="т";break topLoop;}switch(inputText.codePointAt(index++)){case 115:if(index>=inputText.length){output+="ц";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="ч";break;default:output+="ц";index--;}break;default:output+="т";index--;}break;case 84:if(index>=inputText.length){output+="Т";break topLoop;}switch(inputText.codePointAt(index++)){case 83:if(index>=inputText.length){output+="Ц";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Ч";break;default:output+="Ц";index--;}break;case 115:if(index>=inputText.length){output+="Ц";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="Ч";break;default:output+="Ц";index--;}break;default:output+="Т";index--;}break;case 99:if(index>=inputText.length){output+="ц";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="ћ";break;default:output+="ц";index--;}break;case 67:if(index>=inputText.length){output+="Ц";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Ћ";break;case 104:output+="Ћ";break;default:output+="Ц";index--;}break;case 117:output+="у";break;case 85:output+="У";break;case 102:output+="ф";break;case 70:output+="Ф";break;case 104:output+="х";break;case 72:output+="Х";break;case 120:output+="х";break;case 88:output+="Х";break;case 124:output+="";break;default:output+=inputText[index-1];}}return output;},function(inputText){let index=0,output="";topLoop:while(true){if(index>=inputText.length){output+="";break topLoop;}switch(inputText.codePointAt(index++)){case 97:output+="а";break;case 65:output+="А";break;case 98:output+="б";break;case 66:output+="Б";break;case 118:output+="в";break;case 86:output+="В";break;case 103:output+="г";break;case 71:output+="Г";break;case 100:output+="д";break;case 68:output+="Д";break;case 106:if(index>=inputText.length){output+="й";break topLoop;}switch(inputText.codePointAt(index++)){case 101:output+="е";break;case 111:output+="ё";break;case 117:output+="ю";break;case 97:output+="я";break;default:output+="й";index--;}break;case 74:if(index>=inputText.length){output+="Й";break topLoop;}switch(inputText.codePointAt(index++)){case 69:output+="Е";break;case 101:output+="Е";break;case 79:output+="Ё";break;case 111:output+="Ё";break;case 85:output+="Ю";break;case 117:output+="Ю";break;case 65:output+="Я";break;case 97:output+="Я";break;default:output+="Й";index--;}break;case 122:if(index>=inputText.length){output+="з";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="ж";break;default:output+="з";index--;}break;case 90:if(index>=inputText.length){output+="З";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Ж";break;case 104:output+="Ж";break;default:output+="З";index--;}break;case 105:output+="и";break;case 73:output+="И";break;case 107:if(index>=inputText.length){output+="к";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="х";break;default:output+="к";index--;}break;case 75:if(index>=inputText.length){output+="К";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Х";break;case 104:output+="Х";break;default:output+="К";index--;}break;case 108:output+="л";break;case 76:output+="Л";break;case 109:output+="м";break;case 77:output+="М";break;case 110:output+="н";break;case 78:output+="Н";break;case 111:if(index>=inputText.length){output+="о";break topLoop;}switch(inputText.codePointAt(index++)){case 101:output+="ө";break;default:output+="о";index--;}break;case 79:if(index>=inputText.length){output+="О";break topLoop;}switch(inputText.codePointAt(index++)){case 69:output+="Ө";break;case 101:output+="Ө";break;default:output+="О";index--;}break;case 112:output+="п";break;case 80:output+="П";break;case 114:output+="р";break;case 82:output+="Р";break;case 115:if(index>=inputText.length){output+="с";break topLoop;}switch(inputText.codePointAt(index++)){case 104:if(index>=inputText.length){output+="ш";break topLoop;}switch(inputText.codePointAt(index++)){case 99:if(index>=inputText.length){output+="шц";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="щ";break;default:output+="шц";index--;}break;default:output+="ш";index--;}break;default:output+="с";index--;}break;case 83:if(index>=inputText.length){output+="С";break topLoop;}switch(inputText.codePointAt(index++)){case 72:if(index>=inputText.length){output+="Ш";break topLoop;}switch(inputText.codePointAt(index++)){case 67:if(index>=inputText.length){output+="ШЦ";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Щ";break;default:output+="ШЦ";index--;}break;default:output+="Ш";index--;}break;case 104:if(index>=inputText.length){output+="Ш";break topLoop;}switch(inputText.codePointAt(index++)){case 99:if(index>=inputText.length){output+="Шц";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="Щ";break;default:output+="Шц";index--;}break;default:output+="Ш";index--;}break;default:output+="С";index--;}break;case 116:if(index>=inputText.length){output+="т";break topLoop;}switch(inputText.codePointAt(index++)){case 115:output+="ц";break;default:output+="т";index--;}break;case 84:if(index>=inputText.length){output+="Т";break topLoop;}switch(inputText.codePointAt(index++)){case 83:output+="Ц";break;case 115:output+="Ц";break;default:output+="Т";index--;}break;case 117:if(index>=inputText.length){output+="у";break topLoop;}switch(inputText.codePointAt(index++)){case 101:output+="ү";break;default:output+="у";index--;}break;case 85:if(index>=inputText.length){output+="У";break topLoop;}switch(inputText.codePointAt(index++)){case 69:output+="Ү";break;case 101:output+="Ү";break;default:output+="У";index--;}break;case 102:output+="ф";break;case 70:output+="Ф";break;case 104:output+="х";break;case 72:output+="Х";break;case 120:output+="х";break;case 88:output+="Х";break;case 99:if(index>=inputText.length){output+="ц";break topLoop;}switch(inputText.codePointAt(index++)){case 104:output+="ч";break;default:output+="ц";index--;}break;case 67:if(index>=inputText.length){output+="Ц";break topLoop;}switch(inputText.codePointAt(index++)){case 72:output+="Ч";break;case 104:output+="Ч";break;default:output+="Ц";index--;}break;case 34:output+="ъ";break;case 39:if(index>=inputText.length){output+="ь";break topLoop;}switch(inputText.codePointAt(index++)){case 39:output+="ъ";break;default:output+="ь";index--;}break;case 121:output+="ы";break;case 89:output+="Ы";break;case 101:output+="э";break;case 69:output+="Э";break;case 124:output+="";break;default:output+=inputText[index-1];}}return output;},];
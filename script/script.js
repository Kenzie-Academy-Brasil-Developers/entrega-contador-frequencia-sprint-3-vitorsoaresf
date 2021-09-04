const textarea = document.querySelector('#textInput');
const bt_contFreq = document.getElementById('countButton');
const container_letter = document.getElementById('lettersDiv');
const container_word = document.getElementById('wordsDiv');

let arrWords = [];
let arrLetter = [];
let arrLetterAll = [];
let arrWordsAll = [];

//OBSERVER
bt_contFreq.addEventListener('click', () => {
   textarea.value = textarea.value.toLowerCase();
   textarea.value = textarea.value.replace(/[^a-z'\s]+/g, "");

   // PARA ZERAR O ARRAY SEMPRE QUE O EVENTO ACONTECER
   arrWords = [];
   arrLetter = [];
   arrLetterAll = textarea.value.split('');
   arrWordsAll = textarea.value.split(' ')

   // CONTAGEM CARACATER POR CARACTER
   for (let i = 0; i < arrLetterAll.length; i++) {
      let newLetter = new Object();
      newLetter['letter'] = arrLetterAll[i];
      newLetter['count'] = 1;

      if (arrLetter.length === 0) {
         arrLetter.push(newLetter);
      }
      else {
         let arrLetterHasElement = false;
         for (let i = 0; i < arrLetter.length; i++) {
            if (arrLetter[i]['letter'] === newLetter['letter']) {
               arrLetter[i]['count'] += newLetter['count'];
               arrLetterHasElement = true;
               break;
            }
         }

         if (arrLetterHasElement === false) {
            arrLetter.push(newLetter);
         }
      }
   }

   // CONTAGEM PALAVRA POR PALAVRA
   for (let i = 0; i < arrWordsAll.length; i++) {
      let newWord = new Object();
      newWord['word'] = arrWordsAll[i];
      newWord['count'] = 1;

      if (arrWords.length === 0) {
         arrWords.push(newWord);
      }
      else {
         let arrWordsHasElement = false;
         for (let i = 0; i < arrWords.length; i++) {
            if (arrWords[i]['word'] === newWord['word']) {
               arrWords[i]['count'] += newWord['count'];
               arrWordsHasElement = true;
               break;
            }
         }

         if (arrWordsHasElement === false) {
            arrWords.push(newWord);
         }
      }
   }
   console.log(arrLetter);
   console.log(arrWords);
   // APPEND NOS CONTAINER DE EXIBICAO DE FREQUENCIA DE LETRAS
   const divLetter = document.createElement('div');
   let strLetter = '';
   for (let i = 0; i < arrLetter.length; i++) {
      strLetter += '' + arrLetter[i]['letter'] + ':' + arrLetter[i]['count'] + ',';
   }

   container_letter.innerText = '';
   divLetter.innerText = strLetter;
   container_letter.appendChild(divLetter);

   // APPEND NOS CONTAINER DE EXIBICAO DE FREQUENCIA DE PALAVRAS
   const divWord = document.createElement('div');
   let strWord = '';
   for (let i = 0; i < arrWords.length; i++) {
      strWord += '' + arrWords[i]['word'] + ':' + arrWords[i]['count'] + ',';
   }
   
   container_word.innerText = '';
   divWord.innerText = strWord;
   container_word.appendChild(divWord);
});
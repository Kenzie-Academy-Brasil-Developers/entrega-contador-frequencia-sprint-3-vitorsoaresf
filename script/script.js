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
   textarea.value = textarea.value.replace(/[\n]/g, ' ');

   if (textarea.value === '') {
      alert('Digite alguma coisa');
      container_letter.innerText = 'Resultado da frequência de cada letra';
      container_word.innerText = 'Resultado da frequência de cada palavra';
   } else {


      // PARA ZERAR O ARRAY SEMPRE QUE O EVENTO ACONTECER
      arrWords = [];
      arrLetter = [];
      arrLetterAll = textarea.value.split('');
      arrWordsAll = textarea.value.split(' ');

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

      // APPEND NOS CONTAINER DE EXIBICAO DE FREQUENCIA DE LETRAS
      container_letter.innerText = '';
      for (let i = 0; i < arrLetter.length; i++) {
         const divLetter = document.createElement('div');
         divLetter.innerText = '' + arrLetter[i]['letter'] + ':' + arrLetter[i]['count'] + ',';
         divLetter.style.display = 'inline-block';
         divLetter.style.width = '50px';
         container_letter.appendChild(divLetter);

      }

      // APPEND NOS CONTAINER DE EXIBICAO DE FREQUENCIA DE PALAVRAS
      container_word.innerText = '';
      for (let i = 0; i < arrWords.length; i++) {
         const divWord = document.createElement('div');
         divWord.innerText = '' + arrWords[i]['word'] + ':' + arrWords[i]['count'] + ',';
         divWord.style.display = 'inline-block';
         divWord.style.width = '100px';
         divWord.style.padding = '5px'
         container_word.appendChild(divWord);
      }

   }
});
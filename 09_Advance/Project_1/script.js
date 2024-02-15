const url="https://api.dictionaryapi.dev/api/v2/entries/en/"

const fecthed = document.querySelector(".fetched");
const sound = document.querySelector("#sound");
const button = document.querySelector(".search-button")

const getWords = () => {
    let inputWord = document.querySelector("#put-word").value;
    fetch(`${url}${inputWord}`)
    .then((res) => res.json())
    .then(data => {
        fecthed.innerHTML= `
        <div class="word">
        <h3>${inputWord}</h3>
        </div>
        <div class="others">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>${data[0].phonetic}</p>
        </div>
        <p class="w-meaning">
          <b>Definition:</b>  ${data[0].meanings[0].definitions[0].definition}
        </p>
        <p class="w-explain">
       <b>Example:</b> ${data[0].meanings[0].definitions[0].example}
        </p>
        <p class="w-explain">
        `
        })
    .catch(()=> {
        fecthed.innerHTML = `<h2>word not found</h2>`
    });
}

button.addEventListener("click", getWords);

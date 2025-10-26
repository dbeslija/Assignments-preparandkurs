charRemove("!", "Hej!")

function charRemove(character, text) {
    console.log(character, text)
    const result = text.replaceAll(character, "")
    console.log(result)
    return result;
}

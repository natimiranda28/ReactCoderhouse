export function ReorganizarNombre (Palabra) {
    const wordLowerCase = Palabra.toLowerCase();
    return wordLowerCase.charAt(0).toUpperCase() + wordLowerCase.slice(1)
}
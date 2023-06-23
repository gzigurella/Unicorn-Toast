import { five_char_words } from './words';

const cache = new Set<string>();

export function getNextWord() {
    //Get random word from list
    const randomIndex = Math.floor(Math.random() * five_char_words.length);
    const word = five_char_words[randomIndex];
    // Check if word has already been used
    if (cache.has(word)) {
        return getNextWord();
    }

    // Add word to cache, evict oldest word if cache is full
    if (cache.size >= 10) {
        const oldestWord = cache.values().next().value;
        cache.delete(oldestWord);
    }

    cache.add(word);
    return word;
}
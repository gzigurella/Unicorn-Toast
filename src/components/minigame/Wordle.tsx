'use client';

import useKeyPress, { KeyPressCallback } from '@/components/customHooks/useKeyPress';
import { getNextWord } from '@/services/minigame/Wordle';
import React, {useEffect, useState} from 'react';
import LetterBox from './LetterBox';
import LostPopUp from './LostPopUp';
import ConfettiExplosion from 'react-confetti-explosion';

export default function Wordle() {
    const [hasLost, setHasLost] = useState(false); // track if the player has lost
    const [word, setWord] = useState(getNextWord()); // track the current word
    const [guessIndex, setGuessIndex] = useState(0); // track the current guess index
    const [wordIndex, setWordIndex] = useState(0); // track the current letter index in the word
    const [initialGuesses, setInitialGuesses] = useState(Array(6).fill('_____'));
    const [isExploding, setIsExploding] = useState(false); // track if the current guess is correct
    const [guess, setGuess] = useState('_____');

    const handleChangeLastCharacter = (key: string) => {
        // substitute the letter in the guess, we can use wordIndex to determine which letter to replace
        const newGuess = guess.split('');
        newGuess[wordIndex] = key;
        setGuess(newGuess.join(''));
        setWordIndex(wordIndex + 1);
    }

    const handleDeleteLastCharacter = () => {
        // substitute the letter in the guess, we can use wordIndex to determine which letter to replace
        const newGuess = guess.split('');
        newGuess[wordIndex - 1] = '_';
        setGuess(newGuess.join(''));
        setWordIndex(wordIndex - 1);
    }

    const hardReset = () => {
        setWord(getNextWord());
        setGuessIndex(0);
        setWordIndex(0);
        setInitialGuesses(Array(6).fill('_____'));
        setIsExploding(false);
        setHasLost(false);
        setGuess('_____');
    }

    useEffect(() => {
        if (isExploding) {
            setTimeout(hardReset, 3000);
        }
    }, [isExploding]);

    useEffect(() => {
        if (hasLost) {
            setTimeout(hardReset, 3000);
        }
    }, [hasLost]);

    const handleSubmitGuess = () => {
        const newInitialGuesses = initialGuesses;
        newInitialGuesses[guessIndex] = guess;
        setInitialGuesses(newInitialGuesses);
        setGuessIndex(guessIndex + 1);
        setWordIndex(0);
        setGuess('_____');
        if (guess === word) {
            setIsExploding(true);
        } else if (guessIndex === 5) {
            setHasLost(true);
        }
    }

    const handleKeyPress: KeyPressCallback = (key: string) => {
        console.log(key);
        if (key === 'Backspace' && wordIndex > 0 && guess.replaceAll('_', '').length < word.length) {
            console.log('deleted!');
            handleDeleteLastCharacter();
        }
        if (key === 'Enter' && guess.replaceAll('_', '').length === word.length && guessIndex < 6) {
            console.log('submitted!');
            handleSubmitGuess();
        }
        if (key.length === 1 && /^[a-z]$/i.test(key) && guess.replaceAll('_', '').length < word.length) {
            console.log('added!');
            handleChangeLastCharacter(key);
        }
        console.log('skipped!');
        return;
    };
    
    useKeyPress(handleKeyPress);

    return (
        <div>
            <div className="flex flex-col items-center justify-center h-1/2">
                {isExploding && <ConfettiExplosion />}
                {hasLost && <LostPopUp word={word} />}
                <div className="flex flex-row items-center justify-center gap-2 mb-10 mt-6">
                    {guess.split('').map((letter: string, idx: number) => {
                        if(idx < 5) {
                            return <LetterBox key={`wordle_guess_${idx}_letter`} 
                            letter={letter} word={word} index={idx} anon={true}/>;
                        }
                        return null;
                    })}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-1/2 gap-6">
                {initialGuesses.map((initialGuess: string, index: number) => (
                    <div key={initialGuesses[index] + index}>
                        <div className="flex flex-row items-center justify-center gap-2">
                            {initialGuess.split('').map((initialGuess: string, idx: number) => {
                                if(idx < 5) {
                                    return <LetterBox key={`wordle_initial_${idx}_letter`} 
                                    letter={initialGuess} word={word} index={idx} anon={false}/>;
                                }
                                return null;
                            })}
                        </div>
                </div>
                ))}
            </div>
        </div>
    );
}
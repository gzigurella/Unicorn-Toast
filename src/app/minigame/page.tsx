import Wordle from '@/components/minigame/Wordle';

export default function Page() {
    return (
        <div className='flex flex-col items-center justify-center w-full h-full'>
                <div className="text-4xl font-bold text-slate-50 mt-10">Wordle</div>
                <div className="text-sm text-slate-50">Guess the word!</div>
            <div className='flex items-center justify-center w-full h-full gap-36'>
                <Wordle />
                <div className='flex flex-col text-md text-slate-50 w-1/3 mt-10 gap-6'>
                <p>
                    <span className='text-lg text-yellow-300'>Wordle</span> is a popular online word-guessing game that challenges players to guess a five-letter word within a limited number of attempts.
                </p>
                <p><span>The objective</span> of the game is to guess the target word by entering different words, and the game provides feedback on the correctness of each guess.</p>
                <p>
                    The player begins by entering a word of their choice, and the game responds with color-coded feedback to indicate the accuracy of the guess. A <span className='text-green-200'>green square represents a correct letter in the correct position</span>, <span className='text-yellow-200'>a yellow square indicates a correct letter but in the wrong position</span>, and a gray square means that the letter is not present in the target word.
                </p>
                <p>
                    The game continues until the player successfully guesses the word or exhausts their allowed number of attempts, usually six.
                </p>
                <p>
                    Since I really enjoy playing this game, I decided to create a clone of it using React and TailwindCSS.
                </p>
                </div>
            </div>
        </div>
    );
}
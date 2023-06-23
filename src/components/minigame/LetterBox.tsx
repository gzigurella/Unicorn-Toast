interface LetterBoxProps {
    letter: string;
    word: string;
    index: number;
    anon: boolean;
}

export default function LetterBox({letter, word, index, anon}: LetterBoxProps) {
    let bgColor = '';

    if (anon) {
        bgColor = 'bg-slate-300';
    } else if (letter === '_') {
        bgColor = 'bg-slate-600';
    } else if (word.includes(letter)) {
        if(word[index] === letter){
            bgColor = 'bg-green-200';
        } else {
            bgColor = 'bg-yellow-200';
        }
    } else {
        bgColor = 'bg-slate-300';
    }

    return (
        <div className={`w-12 h-12 flex items-center justify-center ${bgColor} outline-gray-700 rounded-lg`}>
            <span className="text-2xl">{letter}</span>
        </div>
    )
}
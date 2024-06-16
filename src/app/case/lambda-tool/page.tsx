import { FaPython } from "react-icons/fa6";

export default function Page() {
    return (<div className="flex flex-col items-center content-start min-h-screen min-w-screen h-screen w-screen text-gray-800">
        <div className="text-4xl font-semibold">
        Lambda
            </div>
            <div className='flex flex-col gap-y-6 w-3/4 ml-2 mt-2'>
            <div>
                <div className="text-xl font-medium text-gray-500 flex items-center gap-x-2">
                    <FaPython/> λ: a Pythonic GNU AWK replacement
                </div>
                <div className='text-base font-light'>
                    <div>Source code of the tool is available <a href="https://github.com/gzigurella/lambda" className='text-purple-500 hover:text-purple-500 hover:font-semibold underline'>here</a>.</div>
                    <div className="mt-4">Like all developers, I'm lazy. Which means I want to get most out of less possible work, and as a System Administrator ad home I really enjoy automating stuff with Python, so much I wanted to automate even working with small outputs from CLI utilities.
                        <br/>That's when I remember all the days of hell spent learning AWK syntax, some of you may enjoy it (you old dinosaurs), I unfortunately cannot get to like it.
                        <br/>But you know what I like? Short elegant syntax of one of the most used interpreted languages of the World: <span className="font-semibold">Python</span></div>
                    <div className="mt-4">Developing the tool has been easy, I wanted to maintain the expressiveness of Python Lambdas while make full use of the large ecosystem Python has to offers. It took me around 17 hours to fully implement it and now I use it on day-to-day basis and I'm starting to use it even at work.</div>
                </div>
            </div>
            </div> 
    </div>);
}
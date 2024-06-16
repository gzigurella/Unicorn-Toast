import { Fa0, Fa1, Fa2 } from 'react-icons/fa6'

export default function Page() {
    return (
        <div className="flex flex-col gap-y-6 items-start mx-8 content-start min-h-screen min-w-screen h-screen w-screen text-gray-800">
            <div className="text-4xl font-semibold">
                Should you learn a Quantum Computing Framework today?
            </div>
            <div className='flex flex-col gap-y-6 w-3/4 ml-2'>
                <div>
                    <div className="text-xl font-medium text-gray-500 flex items-center gap-x-2">
                        <Fa0 /> The state of Quantum Computing
                    </div>
                    <div className='text-base font-light'>
                        <p>Currently we are in the NISQ era, NISQ stands for <span className='font-medium'>Noisy intermediate-scale quantum</span> and is characterized by Quantum Computers not large enough to achieve Quantum Advantage nor fault-tolerant.</p>
                        <p>This means that current Quantum Computers are much sensible to noise from the environment, and therefore prone to decoherence.</p>
                    </div>
                </div>
                <div>
                    <div className="text-xl font-medium text-gray-500 flex items-center gap-x-2">
                        <Fa1 /> Why learn Quantum Computing?
                    </div>
                    <div className='text-base font-light'>
                        <p>Even though today we do not have ready-to-operate quantum computers it will be the future of Computing, why? There are some crucial reasons.</p>
                        <p>First of all a Quantum Computer can do everythinig a Classical Computer does, sometimes even better as seen in some fields of mathematic and economic.</p>
                        <p>Our second point of interest is that even though Quantum Computers are not ready to use, it doesn't mean they are not used. Since 2017 over 200+ Papers have been published about Quantum Computing.<br />
                            I started from Qiskit framework during the University and nowadays free courses about it offered from IBM are available!
                        </p>
                    </div>
                </div>
                <div>
                    <div className="text-xl font-medium text-gray-500 flex items-center gap-x-2">
                        <Fa2 /> What are actual applications?
                    </div>
                    <div className='text-base font-light'>
                        <p>There are two main focus as today, due to the <span className='font-medium'>noisy</span> state of quantum computers, and both leverage the noise from their environment.<br />
                            <span className='font-medium'>Quantum Machine Learning (QML)</span> is an example where instead of measuring a discrete solution you search for a probability, therefore code about <a href="/blog/01-QML" className='text-purple-500 hover:text-purple-500 hover:font-semibold underline'>Quantum Machine Learning is usable even with noisy systems</a>.<br />
                            <span className='font-medium'>Quantum Montecarlo Methods (QMC)</span> is another case where the probability is the key result and is obtained through multiple iterations, and in this case those iterations can be parallelized through <a href="/blog/02-QMC" className='text-purple-500 hover:text-purple-500 hover:font-semibold underline'>Quantum Parallelism</a>!
                        </p>
                    </div>
                </div>
            </div>
        </div>);
}
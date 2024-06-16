import { Fa0, Fa1, Fa2 } from 'react-icons/fa6'

export default function Page() {
    return (
        <div className="flex flex-col items-start mx-8 content-start min-h-screen min-w-screen h-screen w-screen text-gray-800">
            <div className="text-4xl font-semibold">
                Finding probabilities through Quantum Montecarlo Methods
            </div>
            <div className='flex flex-col gap-y-6 w-3/4 ml-2'>
                <div>
                    <div className="text-xl font-medium text-gray-500 flex items-center gap-x-2">
                        <Fa0 /> Papers that inspired our work
                    </div>
                    <div className='text-base font-light'>
                        <div>Two papers inspired our work at QuantumX.<br />
                            <ul className='ml-4'>
                                <li><a href="https://arxiv.org/pdf/2206.10431" className='text-purple-500 hover:text-purple-500 hover:font-semibold underline'>1. Quantum Computing Quantum Monte Carlo</a></li>
                                <li><a href="https://arxiv.org/pdf/1806.06893" className='text-purple-500 hover:text-purple-500 hover:font-semibold underline'>2. Quantum Risk Analysis</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-xl font-medium text-gray-500 flex items-center gap-x-2">
                        <Fa1 /> Quantum Montecarlo
                    </div>
                    <div className='text-base font-light'>
                        <p>We started by researching how to implement Quantum Montecarlo methods through QIFT (Quantum Inverse Fourier Transformation).
                            <br/>Our main goal was to use algorithms from the family of Montecarlo Methods to simulate financial asset indexes (VaR, RoE, RoI, etc.).
                            <br/>Later we moved to another quantum circuit described in the second paper, due to the enormous speedup it promises.</p>
                    </div>
                </div>
                <div>
                    <div className="text-xl font-medium text-gray-500 flex items-center gap-x-2">
                        <Fa2 /> Quantum Risk Analysis
                    </div>
                    <div className='text-base font-light'>
                        <p>Later, I found the paper about Quantum Risk Analysis and I started to work on it to simulate the Value at Risk and the Conditional Value at Risk of a financial asset. And although for small samples the algorithm has a larger estimation error, as samples grow it shrinks much faster than Montecarlo ones, therefore making it for a suitable real use product.</p>
                    </div>
                </div>
            </div>
        </div>
        );
}
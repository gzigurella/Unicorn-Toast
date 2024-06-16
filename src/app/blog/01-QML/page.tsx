import { Fa0, Fa1, Fa2 } from 'react-icons/fa6'

export default function Page() {
    return (
        <div className="flex flex-col items-start mx-8 content-start min-h-screen min-w-screen h-screen w-screen text-gray-800">
            <div className="text-4xl font-semibold">
                How we achieved Quantum Machine Learning @ QuantumX Srl
            </div>
            <div className='flex flex-col gap-y-6 w-3/4 ml-2'>
            <div>
                <div className="text-xl font-medium text-gray-500 flex items-center gap-x-2">
                    <Fa0 /> Papers that inspired our work
                </div>
                <div className='text-base font-light'>
                    <div>Two papers inspired our work at QuantumX.<br />
                        <ul className='ml-4'>
                            <li><a href="https://arxiv.org/pdf/2212.06691" className='text-purple-500 hover:text-purple-500 hover:font-semibold underline'>1. Quantum Clustering with k-Means: a Hybrid Approach</a></li>
                            <li><a href="https://arxiv.org/pdf/2007.00280" className='text-purple-500 hover:text-purple-500 hover:font-semibold underline'>2. Quantum Spectral Clustering</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="text-xl font-medium text-gray-500 flex items-center gap-x-2">
                    <Fa1 /> Q-Means an Hybrid Approach
                </div>
                <div className='text-base font-light'>
                    <p>We started by implementing an Hybrid Algorithm based on K-Means that leverages the easy way of computing Euclidean Distance on Quantum Computers to measure the closest cluster.<br/>We where first able to reproduce the paper experiment, later we faced problems with larger clusters of data and focused on a faster path, less sensible to quantum decoherence.<br/>I invite you to check out the end of the first paper to check the probability of obtaining "good" (usable) results.</p>
                </div>
            </div>
            <div>
                <div className="text-xl font-medium text-gray-500 flex items-center gap-x-2">
                    <Fa2 /> Leveraging the Hilbert Space through Gaussian Filtering
                </div>
                <div className='text-base font-light'>
                    <p>Later, thanks to an insight from the University of Pisa, we noticed that we could use a faster approach to solve quantum decoherence and that was applying a gaussian filter through Featuer Maps!<br/>
                        For those of you that do not know what a Feature Map is, let's pretend it's just a way to <span className='italic'>map</span> a feature on a Qubit through Qubit amplitude. This enabled us to perform various labeling at a fraction of the time compared to the Hybrid Approach, for two reasons.
                        First there was no need to move back and forth between the classical and quantum machines since the algorithm was entirely built for the Quantum System. As a consequence of this, result accuracy was much better, although we discovered that IBM didn't support anymore many features and basically we had to fork Qiskit to re-implement some circuits to be ISA-standard.
                        <br/><br/>ISA standard is the Standard of Quantum Circuit executed on IBM Quantum Computers.
                    </p>
                </div>
            </div>
            </div> 
        </div>);
}
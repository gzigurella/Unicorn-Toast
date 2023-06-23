import { redirect } from 'next/navigation';
import Loading from '../loading';

export default function Page() {
    redirect('https://gzigurella.bearblog.dev/');
    return (
        <div className='flex items-center justify-center mt-48'>
            <div className="lds-grid">
                <div id="r1c1"></div>
                <div id="r1c2"></div>
                <div id="r1c3"></div>
                <div id="r2c1"></div>
                <div id="r2c2"></div>
                <div id="r2c3"></div>
                <div id="r3c1"></div>
                <div id="r3c2"></div>
                <div id="r3c3"></div>
            </div>
        </div>
    );
}
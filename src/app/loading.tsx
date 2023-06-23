import '../styles/loading.css'

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return  (
        <div className='flex items-center justify-center min-h-screen min-w-screen h-screen w-screen'>
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
import Typewriter from 'typewriter-effect';

export default function(){
    const words = ['“The disruptive potential of <b>quantum technology</b> will make the change of<br/>the Internet era look like a small bump in the road!” - <i>Kevin Coleman</i>'];

    return (<div>
        <span className={`text-3xl md:text-5xl lg:text-7xl font-bold`}>Delivering the future...</span>
        <div id="typewriter-hero" className={`w-screen md:max-w-fit lg:ml-10 mt-3 flex text-md md:text-lg lg:text-xl h-6 font-light text-center text-gray-600`}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.changeDelay(50).typeString(words[0]).start().pauseFor(Number.MAX_SAFE_INTEGER);
            }}

            options={{ cursor: "" }}
          />
        </div>
      </div>);
}
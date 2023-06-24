import React, {useState, useEffect} from 'react';
import { useWindowSize } from 'usehooks-ts';

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    const { width, height } = useWindowSize();
    
    useEffect(() => {
        if(width < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [width, height]);

    return isMobile;
}
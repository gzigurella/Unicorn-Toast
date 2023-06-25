import AWS from '../../public/technologies/AWS Logo.svg';
import BASH from '../../public/technologies/Bash Logo.svg';
import Docker from '../../public/technologies/Docker Logo.webp';
import GoogleCloud from '../../public/technologies/Google Cloud Logo.svg';
import Java from '../../public/technologies/Java Logo.svg';
import Liferay from '../../public/technologies/Liferay Logo.png';
import OpenShift from '../../public/technologies/OpenShift Logo.svg';
import Python from '../../public/technologies/Python Logo.svg';
import NextJS from '../../public/technologies/NextJS Logo.svg';
import ReactJS from '../../public/technologies/React Logo.svg';
import Quarkus from '../../public/technologies/Quarkus Logo.svg';
import Scala from '../../public/technologies/Scala Logo.svg';
import Groovy from '../../public/technologies/Groovy Logo.svg';
import TypeScript from '../../public/technologies/TS Logo.svg';

export interface ImageType {
    url: string;
    caption: string;
    inverted?: boolean;
}

export const IMAGES: ImageType[][] = [
    [
        {url: ReactJS, caption: 'ReactJS', inverted: true},
        {url: TypeScript, caption: 'TypeScript', inverted: true},
    ], 
    [
        {url: Liferay, caption: 'Liferay', inverted: true},
        {url: NextJS, caption: 'NextJS', inverted: true}, 
    ],
    [
        {url: Java, caption: 'Java', inverted: true},
        {url: Quarkus, caption: 'Quarkus', inverted: true},
        {url: Scala, caption: 'Scala', inverted: true},
    ],
    [
        {url: BASH, caption: 'BASH', inverted: true},
        {url: Groovy, caption: 'Groovy', inverted: true},
        {url: Python, caption: 'Python', inverted: true},
    ],
    [
        {url: AWS, caption: 'AWS', inverted: true},
        {url: Docker, caption: 'Docker', inverted: true},
        {url: OpenShift, caption: 'OpenShift', inverted: true},
        {url: GoogleCloud, caption: 'Google Cloud', inverted: true},
    ],
];
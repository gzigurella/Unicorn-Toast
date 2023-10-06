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
import { CardProps } from '@/components/Card';

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

export const CARDS: CardProps[] = [
    {title: 'That\'s all folks!', image: undefined, description: 'I\'m always learning new things, so this list will keep growing.'},
    {title: 'Google Cloud', image: GoogleCloud, description: 'Google Cloud Platform is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail, file storage, and YouTube.'},
    {title: 'OpenShift', image: OpenShift, description: 'Red Hat containerization flagship product, an on-premises platform as a service built around linux containers on a foundation of Red Hat Enterprise Linux.'},
    {title: 'AWS', image: AWS, description: 'Amazon Web Services is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.'},
    {title: 'Docker', image: Docker, description: 'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.'},
    {title: 'BASH', image: BASH, description: 'Bash is a Unix shell and command language written by Brian Fox for the GNU Project as a free software replacement for the Bourne shell.'},
    {title: 'Python', image: Python, description: 'Python is an interpreted, high-level and general-purpose programming language.'},
    {title: 'Groovy', image: Groovy, description: 'Groovy is an object-oriented programming language for the Java platform.'},
    {title: 'Scala', image: Scala, description: 'Scala is a general-purpose programming language providing support for functional programming and a strong static type system.'},
    {title: 'Quarkus', image: Quarkus, description: 'Quarkus is a full-stack, Kubernetes-native Java framework made for Java virtual machines (JVMs) and native compilation, optimizing Java specifically for containers and enabling it to become an effective platform for serverless, cloud, and Kubernetes environments.'},
    {title: 'Java', image: Java, description: 'Java is a general-purpose, class-based, object-oriented programming language designed for having lesser implementation dependencies.'},
    {title: 'Liferay', image: Liferay, description: 'Liferay is a portal framework that simplifies building resource intensive web applications.'},
    {title: 'Next JS', image: NextJS, description: 'Next.js is a React framework that allows you to build server-side rendered React applications.'},
    {title: 'React JS', image: ReactJS, description: 'React is a JavaScript library for building user interfaces.'},
    {title: 'TypeScript', image: TypeScript, description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'},
];
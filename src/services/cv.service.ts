const getWorkExperience = () => {
    const nextmind = {
        title: 'Nextmind S.r.l.',
        subtitle: 'Software Engineer',
        date: '2022-02 | Today',
        description: `A small company that is bootstrapping the fintech development of Italian state-owned company.
        I'm working on the development of many platform for the fintech world, using Liferay DXP/CE and React.js as the main front-end for the user and Spring Boot, along with Quarkus for the back-end of the business logic.
        I'm currently responsible to handle the whole IT Infrastructure and CI/CD pipeline for the company's applications, using BitBucket, BitBucket pipeline, SonarQube, Docker and Google Cloud Platform.`
    };

    const axait_consultant = {
        title: 'AXA S.p.a.',
        subtitle: 'Software Developer & IT Consultant',
        date: '2022-04 | Today',
        description: `I'm working as a consultant for AXA S.p.a. in the IT department.
        Tasks revolve around the development of new features for the company's main application, using Java and React.js as the main technologies.
        Among other things, I'm usually working with the Pipeline team, which is in charge of the development of the CI/CD pipeline for the company's applications.
        In particular I'm working with Jenkins, Gitlab, OpenShift, Docker, Elasticsearch and Kibana.`
    };

    const mediulanum_bank = {
        title: 'Mediolanum Bank S.p.a.',
        subtitle: 'IT Consultant',
        date: '2022-12 | 2023-03',
        description: `I worked as a consultant for Mediolanum Bank S.p.a. 
        in the IT department for the development of the company's main application.
        I was working on the migration of the application from a Liferay 6.2 to Liferay 7.3
        and the maintenance for the application, using Java and React.js as the main technologies.`
    };

    const bkn301 = {
        title: 'BKN301 S.p.a.',
        subtitle: 'Blockchain & Cloud Architect',
        date: '2022-07 | 2022-12',
        description: `I designed the CI/CD and cloud architecture for the main product of BKN301 S.p.a.
        My work was focused on the development of the CI/CD pipeline for the company's applications, using GitHub, Docker, SonarQube, SauceLab and Doppler.
        The cloud architecture was built with Hashicorp's Terraform and Google Cloud Platform.`
    };

    return [axait_consultant, nextmind, mediulanum_bank, bkn301];
}

const getEducation = () => {
    const university = {
        title: 'University of Pisa',
        subtitle: 'Computer Science',
        date: '2019-01 | 2022-09',
        description: 'Nothing special to see here, just an ordinary Computer Science bachelor course. You know it, algorithms, lot of mathematics, cryptography, programming languages, and more mathematics.'
    }

    const vespucci = {
        title: 'ITC A. Vespucci',
        subtitle: 'RDBMS for Company Management',
        date: '2014-09 | 2019-06',
        description: 'Here is where I started to learn the basics of programming. I learned the basics of SQL, HTML, CSS, JavaScript, PHP and more.'
    }

    return [university, vespucci];
}

const getExperience = () => {
    const KA2 = {
        title: 'Aastha Ltd.',
        subtitle: 'Erasmus KA2+',
        date: '2018-05 | 2018-06',
        description: `I've been able to take part of the project Erasmus KA2+ in the city of London, United Kingdom. Here I started to fall in love with the whole IT infrastructure, CI/CD pipelines and cloud architecture.`
    }

    const CopilotPreview = {
        title: 'Github',
        subtitle: 'Copilot Preview',
        date: '2021-01 | 2021-08',
        description: `I got the pleasure to work with some of the most specialized minds in Artificial Intelligence research, and I was able to take part of the Copilot Preview program as API tester while learning about how the Artificial Intelligence behind it works.`
    }

    const freelance = {
        title: 'Freelance',
        subtitle: 'Full Stack Developer',
        date: '2019-01 | 2022-03',
        description: `I've been working as a freelance for many years now, working on many projects, from small websites to big applications. It was a great experience, I learned a lot about how to work with clients and how to manage a project. I'm not working anymore as a freelance, but I'm still working on some personal projects in my free time.`
    }

    return [freelance, CopilotPreview, KA2];
}

export {getWorkExperience, getEducation, getExperience};
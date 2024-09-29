export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Amir Akhavan Masoumi, PhD',
      position: 'Professor at Umass Dartmouth',
      img: 'assets/stock.svg',
      review:
        'Shashank HV has been an outstanding student under my supervision, showcasing exceptional dedication and technical prowess. His ability to quickly grasp complex concepts and consistently deliver high-quality work is truly impressive.',
    },
    {
      id: 2,
      name: 'Ashokkumar Patel',
      position: 'Professor at Umass Dartmouth',
      img: 'assets/stock.svg',
      review:
        'I had the opportunity to guide Shashank HV during his capstone project, and his innovative thinking and commitment to excellence were evident throughout. He consistently proved himself to be a resourceful and diligent developer.',
    },
    {
      id: 3,
      name: 'Zunder Lekshmanan',
      position: 'CEO at OpenTurf Technologies',
      img: 'assets/stock.svg',
      review:
        'During his time at OpenTurf Technologies, Shashank HV displayed a strong work ethic and high professionalism. His quick adaptability to new technologies and positive attitude made a significant impact on our team’s success.',
    },
    {
      id: 4,
      name: 'Rajesh Kumar',
      position: 'Freelance Client - ATS',
      img: 'assets/stock.svg',
      review:
        'Shashank HV was hired to design and build a website from the ground up, and he delivered with great creativity and technical expertise. The final product was not only on time but also exceeded our expectations in every aspect.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Recipe Diary - Your Personal Recipe Manager',
      desc: 
      'Recipe Diary is a web application designed for managing and sharing your favorite recipes. It features a user-friendly interface, allowing users to save, categorize, and access their recipes easily from anywhere.',
      subdesc:
        'Built using ReactJS, MongoDB, and TypeScript, Recipe Diary offers real-time data updates, user authentication, and cloud storage for a seamless experience in managing your culinary creations.',
      href: 'https://shashankhv.github.io/recipe-diary-frontend/',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/recipe-diary-logo.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'NodeJs',
          path: 'assets/nodejs.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'MongoDB',
          path: '/assets/mongodb.png',
        },
      ],
    },
    {
      title: 'Fairshare - Bill Splitting & Expense Management App',
      desc: 'Fairshare is a comprehensive app designed to make bill splitting and expense management effortless for groups. With advanced features like real-time receipt scanning and intuitive expense tracking, Fairshare ensures transparency and accuracy for all users.',
      subdesc:
        'Built using React Native, Firebase, and Redux, Fairshare offers a seamless experience for tracking shared expenses and managing payments among friends, family, or colleagues.',
      href: 'https://www.youtube.com/watch?v=your-fairshare-demo-link', // Replace this with your actual Fairshare video demo link
      texture: '/textures/project/fairshare.mp4', // Replace this with the actual path to your Fairshare video texture
      logo: '/assets/fairshare-logo.png', // Replace with the actual path to your Fairshare logo
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/fairshare-spotlight.png', // Replace this with the actual path to your Fairshare spotlight image
      tags: [
        {
          id: 1,
          name: 'React',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Expo',
          path: '/assets/expo.png',
        },
        {
          id: 3,
          name: 'Redux',
          path: '/assets/redux.png',
        },
        {
          id: 4,
          name: 'Node',
          path: '/assets/nodejs.png',
        },
      ],
    }
    
      ]
  
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'University of Massachusetts',
      pos: 'Teaching Assistant and Grading Assistant (Part-Time)',
      duration: '08/2022 - 05/2024',
      title: "Led lab sessions and provided personalized tutoring for Database Design courses, resulting in a 15% increase in student performance. Developed interactive learning modules, enhancing participation by 20%.",
      icon: '/assets/umass.svg', // Replace with the correct icon path
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Accenture',
      pos: 'Associate Software Engineer',
      duration: '11/2020 - 01/2022',
      title: "Engineered and optimized full-stack applications using React, Redux, and Node.js, improving user experience and system performance by 20%. Implemented CI/CD pipelines with Docker and Git, reducing deployment time by 25%.",
      icon: '/assets/accenture.svg', // Replace with the correct icon path
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Open Turf',
      pos: 'Junior Software Developer and Intern',
      duration: '09/2019 - 10/2020',
      title: "Refactored legacy codebases and managed code repositories, leading to a 15% reduction in maintenance costs. Improved design consistency and project workflows by 10% using React, Redux, and other tools.",
      icon: '/assets/openturf.svg', // Replace with the correct icon path
      animation: 'salute',
    },
  ];
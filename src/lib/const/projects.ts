export const projects = [
  {
    id: 1,
    slug: 'portfolio',
    date: '11/10/2021',
    title: 'Portfolio',
    description: 'Dive into my personal musings on life, technology, and continuous learning.',
    details:
      'This blog is a testament to my journey as a developer and thinker. Built with the sleek SvelteKit for a reactive experience and styled by TailwindCSS for visual appeal. SEO optimizations ensure my voice is heard far and wide.',
    concepts: ['User-friendly UI', 'Intuitive Navigation', 'Engaging Content'],
    stack: ['SvelteKit', 'TailwindCSS', 'SEO Auditing Tools'],
    libraries: ['DaisyUI', 'Chart.js'],
    roadmap: [
      {
        version: 'v2',
        description: 'Interactive Features',
        status: 'In Progress',
        releaseDate: '06/30/2023',
        progress: 60,
        isExpanded: false,
        developmentJourney:
          'The focus for Version 2.0 is on enhancing user engagement through interactive features. This phase involves integrating a real-time commenting system, introducing user polls, and improving the overall user experience based on feedback from Version 1.0.',
        featureFocus: ['Real-Time Commenting System', 'User Polls', 'Performance Optimization'],
        technicalChallenges:
          'Key challenges include implementing real-time features without compromising website performance and maintaining user privacy.',
        skillsLearned:
          'Currently enhancing skills in real-time web technologies and learning about user data protection and privacy laws.'
      },
      {
        version: 'v1',
        description: 'Initial Launch',
        status: 'Completed',
        releaseDate: '01/02/2022',
        progress: 100,
        isExpanded: false,
        developmentJourney:
          'Version 1.0 marked the official launch of the blog. The primary focus was on establishing a solid foundation with essential blogging functionalities. The journey involved extensive planning, UI/UX design iterations, and initial SEO setup.',
        featureFocus: ['Basic Blogging Functionality', 'Responsive Design', 'SEO Foundations'],
        technicalChallenges:
          'Challenges included ensuring cross-browser compatibility and implementing a responsive design that adapts to various screen sizes.',
        skillsLearned:
          'Gained proficiency in SvelteKit and TailwindCSS, along with a deeper understanding of SEO principles.'
      }
    ],
    imgUrl: 'https://source.unsplash.com/random/600x400/?website',
    repoUrl: 'https://github.com/Paintersrp/portfolio',
    repoName: 'portfolio',
    isExpanded: false,
    liveDemo: 'https://portfolio.com'
  },
  {
    id: 2,
    slug: 'blog',
    date: '11/10/2021',
    title: 'Blog',
    description: 'Dive into my personal musings on life, technology, and continuous learning.',
    details:
      'This blog is a testament to my journey as a developer and thinker. Built with the sleek SvelteKit for a reactive experience and styled by TailwindCSS for visual appeal. SEO optimizations ensure my voice is heard far and wide.',
    concepts: ['User-friendly UI', 'Intuitive Navigation', 'Engaging Content'],
    stack: ['SvelteKit', 'TailwindCSS', 'SEO Auditing Tools'],
    libraries: ['DaisyUI', 'Chart.js'],
    roadmap: [
      {
        version: 'v2',
        description: 'Interactive Features',
        status: 'In Progress',
        releaseDate: '06/30/2023',
        progress: 60,
        isExpanded: false,
        developmentJourney:
          'The focus for Version 2.0 is on enhancing user engagement through interactive features. This phase involves integrating a real-time commenting system, introducing user polls, and improving the overall user experience based on feedback from Version 1.0.',
        featureFocus: ['Real-Time Commenting System', 'User Polls', 'Performance Optimization'],
        technicalChallenges:
          'Key challenges include implementing real-time features without compromising website performance and maintaining user privacy.',
        skillsLearned:
          'Currently enhancing skills in real-time web technologies and learning about user data protection and privacy laws.'
      },
      {
        version: 'v1',
        description: 'Initial Launch',
        status: 'Completed',
        releaseDate: '01/02/2022',
        progress: 100,
        isExpanded: false,
        developmentJourney:
          'Version 1.0 marked the official launch of the blog. The primary focus was on establishing a solid foundation with essential blogging functionalities. The journey involved extensive planning, UI/UX design iterations, and initial SEO setup.',
        featureFocus: ['Basic Blogging Functionality', 'Responsive Design', 'SEO Foundations'],
        technicalChallenges:
          'Challenges included ensuring cross-browser compatibility and implementing a responsive design that adapts to various screen sizes.',
        skillsLearned:
          'Gained proficiency in SvelteKit and TailwindCSS, along with a deeper understanding of SEO principles.'
      }
    ],
    imgUrl: 'https://source.unsplash.com/random/600x400/?blog',
    repoUrl: 'https://github.com/Paintersrp/portfolio',
    repoName: 'portfolio',
    isExpanded: false,
    liveDemo: 'https://blog.com'
  },
  {
    id: 3,
    slug: 'predictor',
    date: '11/11/2021',
    title: 'Predictor',
    description:
      'Harnessing the power of machine learning to forecast sports event results with enhanced accuracy.',
    details:
      'A sophisticated machine learning model trained on a rich dataset of historical sports statistics. It combines Scikit-learn’s robust algorithms with Python’s computing power to predict game outcomes, providing insights to sports enthusiasts and bettors.',
    concepts: ['Data Analysis', 'Predictive Modeling', 'Machine Learning Optimization'],
    stack: ['Python', 'Scikit-learn', 'Pandas'],
    libraries: ['NumPy', 'Matplotlib', 'Seaborn'],
    roadmap: [
      {
        version: 'v1.0',
        description: 'Initial Model Development',
        status: 'Completed',
        releaseDate: '12/01/2021',
        progress: 100,
        isExpanded: false,
        developmentJourney: 'The initial phase focused on developing a base predictive model...',
        featureFocus: ['Initial Model Training', 'Data Gathering', 'Baseline Accuracy'],
        technicalChallenges: 'Challenges in data preprocessing and feature selection...',
        skillsLearned: 'Advanced data analysis techniques and model optimization...'
      }
    ],
    imgUrl: 'https://source.unsplash.com/random/600x400/?predictor',
    repoUrl: 'https://github.com/yourusername/sports-predictor',
    repoName: 'sports-predictor',
    isExpanded: false,
    liveDemo: 'https://predictor.com'
  },
  {
    id: 4,
    slug: 'forecaster',
    date: '11/12/2021',
    title: 'Forecaster',
    description: 'Optimize your inventory with our AI-powered sales forecasting tool.',
    details:
      'Designed to assist businesses in predicting future sales, managing inventory, and optimizing supply chain operations. It leverages state-of-the-art machine learning algorithms to analyze sales data and make precise demand forecasts.',
    concepts: ['Inventory Forecasting', 'Sales Data Analysis', 'Supply Chain Optimization'],
    stack: ['TensorFlow', 'Keras', 'NumPy', 'Matplotlib'],
    libraries: ['Pandas', 'Scikit-learn'],
    roadmap: [
      {
        version: 'v1.0',
        description: 'Initial Algorithm Development',
        status: 'Completed',
        releaseDate: '01/15/2022',
        progress: 100,
        isExpanded: false,
        developmentJourney: 'Initial phase focusing on developing the forecasting algorithm...',
        featureFocus: ['Algorithm Design', 'Data Integration', 'Initial Testing'],
        technicalChallenges: 'Handling large datasets and integrating diverse data sources...',
        skillsLearned: 'Deep learning techniques for time series forecasting...'
      }
    ],
    imgUrl: 'https://source.unsplash.com/random/600x400/?forecast',
    repoUrl: 'https://github.com/yourusername/sales-forecaster',
    repoName: 'sales-forecaster',
    isExpanded: false,
    liveDemo: 'https://forecaster.com'
  },
  {
    id: 5,
    slug: 'gateway',
    date: '11/13/2021',
    title: 'API Gateway',
    description: 'A robust API gateway to streamline your services and data flow.',
    details:
      'Central hub for managing, routing, and scaling microservices. It includes advanced anomaly detection to safeguard against unexpected traffic spikes and potential threats, ensuring reliable and secure service operations.',
    concepts: ['Microservices Management', 'Traffic Routing', 'Security and Reliability'],
    stack: ['Node.js', 'Express', 'Elasticsearch'],
    libraries: ['Redis', 'JWT', 'Axios'],
    roadmap: [
      {
        version: 'v1.0',
        description: 'Core Gateway Functionality',
        status: 'Completed',
        releaseDate: '02/20/2022',
        progress: 100,
        isExpanded: false,
        developmentJourney: 'Focused on establishing core gateway functionalities...',
        featureFocus: ['Request Routing', 'Load Balancing', 'Security Implementation'],
        technicalChallenges: 'Implementing efficient load balancing and secure data routing...',
        skillsLearned: 'Node.js performance optimization and advanced security techniques...'
      }
    ],
    imgUrl: 'https://source.unsplash.com/random/600x400/?api',
    repoUrl: 'https://github.com/yourusername/api-gateway',
    repoName: 'api-gateway',
    isExpanded: false,
    liveDemo: 'https://apigateway.com'
  },
  {
    id: 6,
    slug: 'reddit-clone',
    date: '11/26/2023',
    title: 'Reddit Clone',
    description: '',
    details: '',
    concepts: [],
    stack: [],
    libraries: [],
    roadmap: [
      {
        version: '1',
        description: '',
        status: '',
        releaseDate: '11/26/2023',
        progress: 0,
        isExpanded: false,
        developmentJourney: '',
        featureFocus: [],
        technicalChallenges: '',
        skillsLearned: ''
      }
    ],
    imgUrl: 'https://source.unsplash.com/random/600x400/?reddit',
    repoUrl: 'https://github.com/Paintersrp/reddit-clone',
    repoName: 'reddit-clone',
    isExpanded: false,
    liveDemo: '/'
  }
];

// {
//   id: 6,
//   slug: 'reddit-clone',
//   date: '11/26/2023',
//   title: 'Reddit Clone',
//   description: '',
//   details: '',
//   concepts: [],
//   stack: [],
//   libraries: [],
//   roadmap: [
//     {
//       version: '1',
//       description: '',
//       status: '',
//       releaseDate: '11/26/2023',
//       progress: 0,
//       isExpanded: false,
//       developmentJourney: '',
//       featureFocus: [],
//       technicalChallenges: '',
//       skillsLearned: ''
//     }
//   ],
//   imgUrl: 'https://source.unsplash.com/random/600x400/?reddit',
//   repoUrl: 'https://github.com/Paintersrp/reddit-clone',
//   repoName: 'reddit-clone',
//   isExpanded: false,
//   liveDemo: '/'
// }

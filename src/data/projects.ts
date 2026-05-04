import { Project, TimelineItem } from '../types';

export const projects: Project[] = [
  {
    id: 'ai-vision-system',
    title: 'Artificial Intelligence',
    category: 'Artificial Intelligence',
    tagline: 'Deep Learning based real-time object detection and classification.',
    description: 'A comprehensive AI project focusing on real-time computer vision capabilities using Python and TensorFlow.',
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'Keras'],
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    features: ['Real-time object mapping', 'Anomalous behavior detection', 'High-accuracy classification'],
    problem: 'Traditional detection systems were slow and often failed in low-light conditions.',
    solution: 'Implemented a custom YOLOv8 model optimized for edge devices, significantly reducing latency.',
    githubUrl: 'https://github.com/ArdyStudio',
  },
  {
    id: 'cyber-portfolio',
    title: 'Frontend Development',
    category: 'Frontend Development',
    tagline: 'A glassmorphic, high-performance web experience for developers.',
    description: 'This very portfolio website, built with React, Tailwind CSS, and Motion for smooth interactions.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Motion'],
    thumbnail: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=800&auto=format&fit=crop',
    features: ['Smooth route transitions', 'Custom neon theme', 'Fully responsive design'],
    problem: 'Standard portfolios lack the technical "wow" factor needed for specialized roles.',
    solution: 'Designed a unique technical aesthetic using brutalist and hardware-inspired design principles.',
    githubUrl: 'https://github.com/ArdyStudio',
    liveUrl: '#',
  },
  {
    id: 'ar-city-guide',
    title: 'Augmented Reality',
    category: 'Augmented Reality',
    tagline: 'Immersive augmented reality experience for urban exploration.',
    description: 'An AR application built with Unity and Vuforia to provide interactive guides for city landmarks.',
    techStack: ['Unity', 'Vuforia SDK', 'C#', 'Blender'],
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop',
    features: ['Interactive 3D overlays', 'Location-based markers', 'Blender-crafted assets'],
    problem: 'Static maps are difficult to follow in complex urban environments.',
    solution: 'Leveraged Unity and AR markers to overlay directional paths directly on the user\'s camera feed.',
    githubUrl: 'https://github.com/ArdyStudio',
  },
];

export const timeline: TimelineItem[] = [
  {
    year: '2021',
    title: 'Start Computer Science',
    description: 'Universitas Esa Unggul',
    details: 'Began the journey in Teknik Informatika, focusing on the fundamentals of programming and logic.',
  },
  {
    year: '2023',
    title: 'Fokus AI & Computer Vision',
    description: 'Research & Development',
    details: 'Shifted focus towards artificial intelligence, specifically exploring neural networks and image processing.',
  },
  {
    year: '2024',
    title: 'Build AR Experiences',
    description: 'Unity & Vuforia',
    details: 'Started combining software engineering with immersive technology, building AR tools for real-world applications.',
  },
];

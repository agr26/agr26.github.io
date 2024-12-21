import React, { useState } from 'react';
import { 
  Code, Brain, Microscope, ChartLine, 
  NetworkIcon, Database, Dna 
} from 'lucide-react';

const PortfolioSite = () => {
  const [activeSection, setActiveSection] = useState('about');

  const sections = {
    about: {
      title: 'About Me',
      icon: <Brain className="w-10 h-10 text-blue-600" />,
      content: (
        <div className="space-y-4">
          <p>
            I'm a multidisciplinary student at the University of Washington, 
            passionate about bridging biology, data science, and neural engineering. 
            My academic journey combines rigorous scientific research with cutting-edge 
            computational techniques.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Biology (Physiology)</h3>
              <p>Exploring intricate biological systems and their complex interactions.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Informatics (Data Science)</h3>
              <p>Transforming complex data into meaningful insights and solutions.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Neural Computation</h3>
              <p>Investigating neural circuits and computational brain models.</p>
            </div>
          </div>
        </div>
      )
    },
    research: {
      title: 'Research Experience',
      icon: <Microscope className="w-10 h-10 text-green-600" />,
      content: (
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-xl mb-2">Undergraduate Researcher | Seattle Children's</h3>
            <p>
              Investigating neuromodulatory circuits using advanced molecular, synaptic, 
              and behavioral analysis techniques. Applying machine learning to process 
              single-cell RNA sequencing data and utilizing cutting-edge neural circuit 
              investigation methods.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-xl mb-2">Neuroscience Reading Program</h3>
            <p>
              Collaborated on groundbreaking research exploring brain-region organoids 
              and Parkinson's disease mechanisms, developing expertise in experimental 
              design and scientific literature analysis.
            </p>
          </div>
        </div>
      )
    },
    projects: {
      title: 'Key Projects',
      icon: <Code className="w-10 h-10 text-purple-600" />,
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-xl mb-2">NovaNest Health Monitoring Device</h3>
            <p>
              Leading cross-functional team in developing a wireless health monitoring 
              device. Developing analytical models to process and interpret health 
              monitoring signals while ensuring compliance with healthcare standards.
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-xl mb-2">Solace Mental Health Analytics Platform</h3>
            <p>
              Developed full-stack mental wellness application using React and Firebase. 
              Implemented secure database architecture and created data visualization 
              components for mental health metrics tracking.
            </p>
          </div>
        </div>
      )
    },
    skills: {
      title: 'Technical Skills',
      icon: <Database className="w-10 h-10 text-red-600" />,
      content: (
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold mb-2">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'R', 'SQL', 'JavaScript', 'MATLAB', 'React.js'].map(skill => (
                <span key={skill} className="bg-gray-200 px-2 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-2">Data Analysis Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['Pandas', 'Seaborn', 'Matplotlib', 'PowerBI', 'Machine Learning'].map(tool => (
                <span key={tool} className="bg-gray-200 px-2 py-1 rounded-full text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-2">Healthcare Specialties</h3>
            <div className="flex flex-wrap gap-2">
              {['Single-cell RNA Analysis', 'Neural Circuit Analysis', 'Clinical Data Analytics'].map(specialty => (
                <span key={specialty} className="bg-gray-200 px-2 py-1 rounded-full text-sm">
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        </div>
      )
    },
    interests: {
      title: 'Future Interests',
      icon: <NetworkIcon className="w-10 h-10 text-teal-600" />,
      content: (
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Biomedical Informatics',
            'Biomedical Engineering',
            'Clinical Data Analytics',
            'Neural Engineering',
            'Spinal Cord Stimulation Treatments'
          ].map(interest => (
            <div key={interest} className="bg-teal-50 p-3 rounded-lg flex items-center">
              <Dna className="mr-3 text-teal-600" />
              <span>{interest}</span>
            </div>
          ))}
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 bg-blue-600 text-white">
          <h1 className="text-3xl font-bold">Anirudh "Ani" Ramadurai</h1>
          <p className="text-blue-100">Biology | Informatics | Neural Computation</p>
        </div>
        
        <div className="flex border-b">
          {Object.keys(sections).map(key => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`flex items-center p-4 ${
                activeSection === key 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              {sections[key].icon}
              <span className="ml-2 font-medium">{sections[key].title}</span>
            </button>
          ))}
        </div>
        
        <div className="p-6">
          {sections[activeSection].content}
        </div>
        
        <div className="p-6 bg-gray-50 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">Contact</p>
            <p>agr26@uw.edu | +1 (650) 762-6457</p>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com/in/aniramadurai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSite;
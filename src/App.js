import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin, ArrowRightCircle, ExternalLink } from "lucide-react";

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 py-16 sm:py-20">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6 text-white">{title}</h2>
      <div className="grid gap-6">{children}</div>
    </div>
  </section>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm leading-6 bg-gray-800/80 backdrop-blur border-gray-600 text-gray-200">
    {children}
  </span>
);

const Card = ({ children }) => (
  <div className="rounded-2xl border border-gray-700 bg-gray-800/50 backdrop-blur shadow-sm hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 p-6">{children}</div>
);

export default function App() {
  const handleHireMeClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:seifeldeen303@gmail.com';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-gray-900/90 border-b border-gray-700">
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-white hover:text-indigo-400 transition-colors">Seif Eldeen Naser</a>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a className="hover:text-indigo-400 transition-colors" href="#about">About</a>
            <a className="hover:text-indigo-400 transition-colors" href="#education">Education</a>
            <a className="hover:text-indigo-400 transition-colors" href="#skills">Skills</a>
            <a className="hover:text-indigo-400 transition-colors" href="#work">Work Experience</a>
            <a className="hover:text-indigo-400 transition-colors" href="#services">Services</a>
            <a className="hover:text-indigo-400 transition-colors" href="#projects">Projects</a>
            <a className="hover:text-indigo-400 transition-colors" href="#achievements">Achievements</a>
            <a className="hover:text-indigo-400 transition-colors" href="#testimonials">Testimonials</a>
            <a className="hover:text-indigo-400 transition-colors" href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      {/* Cover */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-black" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-600/10 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              AI & Machine Learning Engineer
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300">
              Python developer focused on Generative AI, NLP, and end-to-end ML systems. Building practical, production-ready AI—fast.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge><MapPin className="w-4 h-4 mr-2"/>Maadi, Cairo, Egypt</Badge>
              <Badge>Generative AI & LLMs</Badge>
              <Badge>NLP • CV • MLOps</Badge>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button 
                onClick={handleHireMeClick} 
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-3 text-sm font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                Hire Me <ArrowRightCircle className="w-5 h-5"/>
              </button>
              <button 
                onClick={handleEmailClick} 
                className="inline-flex items-center gap-2 rounded-xl border border-gray-600 px-5 py-3 text-sm font-medium hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
              >
                <Mail className="w-5 h-5"/> Email
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-indigo-900/30 via-gray-800/50 to-purple-900/30 border border-gray-600 shadow-2xl backdrop-blur flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
              <div className="p-6 text-center relative z-10">
                <p className="text-sm uppercase tracking-widest text-gray-400">Portfolio</p>
                <p className="mt-2 text-xl font-semibold text-white">Seif Eldeen Naser</p>
                <p className="mt-2 text-gray-300">AI & Machine Learning Engineer • Python Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About Me">
        <Card>
          <p className="text-gray-300 leading-relaxed">
           I’m an AI & Machine Learning Engineer with hands-on experience in Python, deep learning, and NLP.
            I specialize in building intelligent systems end-to-end—designing data pipelines, training models, and deploying fast, production-ready APIs.
             My expertise spans Transformers, CNNs/RNNs, and classical ML approaches, and I enjoy translating research ideas into real-world products that drive business value.
             So Abracadabra!!!
             Think of me as the genie of AI—using my skills in machine learning, I turn complex challenges into smart, tailored solutions. From idea to deployment,I make AI work like magic for your needs.
          </p>
        </Card>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <Card>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <p className="font-medium text-white">B.Sc. in Artificial Intelligence</p>
              <p className="text-gray-400">Faculty of AI, Menoufia University</p>
            </div>
          </div>
        </Card>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <p className="font-medium mb-3 text-white">Core</p>
            <ul className="grid grid-cols-2 gap-2 text-gray-300">
              <li>Python</li>
              <li>C++</li>
              <li>SQL / PL-SQL</li>
              <li>Data Structures</li>
              <li>Algorithms</li>
            </ul>
          </Card>
          <Card>
            <p className="font-medium mb-3 text-white">Machine Learning & DL</p>
            <ul className="grid grid-cols-2 gap-2 text-gray-300">
              <li>Regression / Classification</li>
              <li>Clustering</li>
              <li>CNNs</li>
              <li>RNNs / LSTMs / GRUs</li>
              <li>Transformers</li>
            </ul>
          </Card>
          <Card>
            <p className="font-medium mb-3 text-white">NLP</p>
            <ul className="grid grid-cols-2 gap-2 text-gray-300">
              <li>HuggingFace Transformers</li>
              <li>spaCy / NLTK</li>
              <li>Text Classification</li>
              <li>Sentiment Analysis</li>
              <li>Information Extraction</li>
            </ul>
          </Card>
          <Card>
            <p className="font-medium mb-3 text-white">Frameworks & Ops</p>
            <ul className="grid grid-cols-2 gap-2 text-gray-300">
              <li>TensorFlow / Keras</li>
              <li>Scikit-learn</li>
              <li>FastAPI</li>
              <li>Streamlit</li>
              <li>Docker</li>
              <li>MySQL / Oracle</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Work Experience */}
      <Section id="work" title="Work Experience">
        <Card>
          <p className="text-gray-400">No work experience listed yet. Add relevant jobs or internships here.</p>
        </Card>
      </Section>

      {/* Services */}
      <Section id="services" title="Services Offered">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <p className="font-medium text-white">Generative AI & LLM Solutions</p>
            <p className="text-gray-300 mt-2">Custom LLM apps, RAG pipelines, summarization, semantic search, and chatbots.</p>
          </Card>
          <Card>
            <p className="font-medium text-white">End-to-End ML Systems</p>
            <p className="text-gray-300 mt-2">From data prep and model training to API deployment and monitoring.</p>
          </Card>
          <Card>
            <p className="font-medium text-white">NLP Applications</p>
            <p className="text-gray-300 mt-2">Text classification, sentiment analysis, entity extraction, CV/job matching.</p>
          </Card>
          <Card>
            <p className="font-medium text-white">Computer Vision</p>
            <p className="text-gray-300 mt-2">Image classification and detection with CNNs; practical, production-ready pipelines.</p>
          </Card>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects ">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-white">AI Meeting Assistant (LLM-based)</h3>
                <p className="text-gray-300 mt-1">Generative AI assistant for meeting transcription, summarization, and note-taking. Transformers + FastAPI.</p>
              </div>
              <a 
                className="shrink-0 hover:text-indigo-400 transition-colors text-gray-400" 
                href="https://github.com/seifnasser879/AI-MEETING-ASSISTANT.git" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="GitHub AI Meeting Assistant"
              >
                <ExternalLink className="w-5 h-5"/>
              </a>
            </div>
          </Card>
          <Card>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-white">AI CV Matcher (LLM-based)</h3>
                <p className="text-gray-300 mt-1">Ranks resumes against job descriptions using Transformer embeddings for semantic matching.</p>
              </div>
              <a 
                className="shrink-0 hover:text-indigo-400 transition-colors text-gray-400" 
                href="https://github.com/seifnasser879/Ai-cv-matcher-.git" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="GitHub AI CV Matcher"
              >
                <ExternalLink className="w-5 h-5"/>
              </a>
            </div>
          </Card>
          <Card>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-white">Titanic Survival Prediction</h3>
                <p className="text-gray-300 mt-1">Machine learning model predicting passenger survival using classification algorithms and feature engineering.</p>
              </div>
              <a 
                className="shrink-0 hover:text-indigo-400 transition-colors text-gray-400" 
                href="https://github.com/seifnasser879/Titanic-Survival-Prediction-" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="GitHub Titanic Survival Prediction"
              >
                <ExternalLink className="w-5 h-5"/>
              </a>
            </div>
          </Card>
        </div>
      </Section>

      {/* Achievements */}
      <Section id="achievements" title="Achievements">
        <div className="grid gap-6">
          <Card>
            <p className="text-gray-400">No achievements listed yet. Add awards, recognitions, or publications here.</p>
          </Card>
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" title="Testimonials">
        <Card>
          <p className="text-gray-400">Add short quotes from clients/classmates/mentors to build trust. Example: "Delivered a high-quality NLP prototype ahead of schedule."</p>
        </Card>
      </Section>

      {/* Contact / CTA */}
      <Section id="contact" title="Call to Action & Contact">
        <Card>
          <div className="grid sm:grid-cols-2 gap-6 items-start">
            <div className="space-y-3">
              <a href="mailto:seifeldeen303@gmail.com" className="flex items-center gap-3 hover:text-indigo-400 transition-colors text-gray-300">
                <Mail className="w-5 h-5"/> seifeldeen303@gmail.com
              </a>
              <a href="tel:+201003668634" className="flex items-center gap-3 hover:text-indigo-400 transition-colors text-gray-300">
                <Phone className="w-5 h-5"/> +20 100 366 8634
              </a>
              <a href="https://github.com/seifnasser879" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-indigo-400 transition-colors text-gray-300">
                <Github className="w-5 h-5"/> github.com/seifnasser879
              </a>
              <a href="https://www.linkedin.com/in/seifnasser/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-indigo-400 transition-colors text-gray-300">
                <Linkedin className="w-5 h-5"/> linkedin.com/in/seif-nasser
              </a>
            </div>
          </div>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 text-sm text-gray-400 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Seif Eldeen Naser. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-indigo-400 transition-colors" href="mailto:seifeldeen303@gmail.com">Contact</a>
            <a className="hover:text-indigo-400 transition-colors" href="#projects">Projects</a>
            <a className="hover:text-indigo-400 transition-colors" href="#services">Services</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
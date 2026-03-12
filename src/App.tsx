/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Mail, 
  MapPin, 
  GraduationCap, 
  Code2, 
  Cpu, 
  MessageSquare, 
  Users, 
  Lightbulb, 
  Github, 
  Linkedin,
  ChevronRight,
  ShieldCheck,
  Trophy,
  Award,
  Activity
} from 'lucide-react';
import { motion } from 'motion/react';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
    <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
    {children}
  </h2>
);

const SkillBadge = ({ name, icon: Icon }: { name: string, icon: any }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <Icon className="w-4 h-4 text-indigo-600" />
    <span className="text-slate-700 font-medium">{name}</span>
  </div>
);

const EducationCard = ({ 
  institution, 
  degree, 
  period, 
  location, 
  details 
}: { 
  institution: string, 
  degree: string, 
  period: string, 
  location: string,
  details?: string 
}) => (
  <div className="relative pl-8 pb-12 last:pb-0">
    <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200"></div>
    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-indigo-600 ring-4 ring-indigo-50"></div>
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-slate-900">{institution}</h3>
        <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
          {period}
        </span>
      </div>
      <p className="text-slate-600 font-medium mb-1">{degree}</p>
      <div className="flex items-center gap-1 text-slate-400 text-sm mb-3">
        <MapPin className="w-3 h-3" />
        {location}
      </div>
      {details && <p className="text-slate-500 text-sm leading-relaxed">{details}</p>}
    </div>
  </div>
);

const AchievementCard = ({ title, organization, icon: Icon }: { title: string, organization: string, icon: any }) => (
  <div className="flex items-start gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all group">
    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
      <p className="text-sm text-slate-500">{organization}</p>
    </div>
  </div>
);

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 scroll-smooth">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xl font-bold tracking-tight text-indigo-600 cursor-pointer">SVJ.</button>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <button onClick={() => scrollToSection('about')} className="hover:text-indigo-600 transition-colors cursor-pointer">About</button>
            <button onClick={() => scrollToSection('education')} className="hover:text-indigo-600 transition-colors cursor-pointer">Education</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-indigo-600 transition-colors cursor-pointer">Skills</button>
            <button onClick={() => scrollToSection('achievements')} className="hover:text-indigo-600 transition-colors cursor-pointer">Achievements</button>
            <button onClick={() => scrollToSection('contact')} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer">Get in touch</button>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-24">
        {/* Hero Section */}
        <section id="about" className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-4">
              Available for Opportunities
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Shrinithi <span className="text-indigo-600">V J</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Dedicated B.sc IT student and Cybersecurity enthusiast currently pursuing a 
              Bachelor's degree at Sankara College. As a State Runner in Volleyball and a State-level Gymnast, 
              I bring a disciplined, team-oriented approach to my academic pursuits and competitive 
              problem-solving. I am passionate about leveraging technology to build secure 
              and efficient digital solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:Shrinithivjbscit2025@sankara.ac.in" 
                className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
              >
                <Mail className="w-4 h-4" />
                Email Me
              </a>
              <div className="flex items-center gap-3">
                <a href="https://github.com/vjshri2575-prog" target="_blank" rel="noopener noreferrer" className="p-3 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/shrinithi-v-j-452ba637b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="p-3 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative z-10 aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-slate-200 p-3 bg-white">
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-[#0d9488] flex items-center justify-center relative">
                {/* Background pattern for the photo area */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                
                <img 
                  src="./aa38155e-67bc-464e-a0f7-98a935608713.jpg" 
                  alt="Shrinithi V J" 
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Premium Decorative Elements with Teal Accents */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-indigo-500/20 via-teal-500/20 to-emerald-500/20 rounded-[3rem] blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-indigo-600/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -top-10 -left-10 w-56 h-56 bg-teal-600/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            
            {/* Floating Badge with Teal Theme */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 top-12 z-20 bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl p-4 border border-teal-100 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-teal-500 uppercase tracking-widest">Achievement</p>
                  <p className="text-sm font-extrabold text-slate-900">State Runner</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-32">
          <SectionTitle>Education</SectionTitle>
          <div className="max-w-3xl">
            <EducationCard 
              institution="Sankara College Of Science And Commerce"
              degree="Bachelor of Science in Information Technology (Bharathiyar University)"
              period="2026 - Present"
              location="Coimbatore, Tamil Nadu"
              details="Currently in 1st Year. Focusing on foundational computer science principles, programming paradigms, and information systems."
            />
            <EducationCard 
              institution="Suburban Higher Secondary School"
              degree="Higher Secondary Education"
              period="Completed 2025"
              location="Ramnagar, Coimbatore"
              details="Strong academic background with a focus on Science and Mathematics."
            />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <SectionTitle>Skills & Expertise</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Technical Stack</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="Python" icon={Code2} />
                <SkillBadge name="C++ Programming" icon={Code2} />
                <SkillBadge name="Java Development" icon={Cpu} />
                <SkillBadge name="Data Structures" icon={Lightbulb} />
                <SkillBadge name="Cyber Security" icon={ShieldCheck} />
                <SkillBadge name="Information Security" icon={ShieldCheck} />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Soft Skills & Interests</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="Communication" icon={MessageSquare} />
                <SkillBadge name="Team Collaboration" icon={Users} />
                <SkillBadge name="Problem Solving" icon={Lightbulb} />
                <SkillBadge name="Volleyball Player" icon={Activity} />
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="mb-32">
          <SectionTitle>Certifications & Sports</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            <AchievementCard 
              title="Volleyball State Runner"
              organization="State Level Championship"
              icon={Trophy}
            />
            <AchievementCard 
              title="Gymnastics State Level"
              organization="State Level Competition"
              icon={Activity}
            />
            <AchievementCard 
              title="Volleyball Winner (District Level)"
              organization="Annual Sports Day - Sankara College (2025-26)"
              icon={Trophy}
            />
            <AchievementCard 
              title="Python for Data Science"
              organization="Saylor Academy (Jan 2026)"
              icon={Award}
            />
            <AchievementCard 
              title="Data Structures & Algorithms in Python"
              organization="Simplilearn SkillUp (Feb 2026)"
              icon={Award}
            />
            <AchievementCard 
              title="Cyber Threat Hunting"
              organization="Infosys Springboard (Nov 2025)"
              icon={ShieldCheck}
            />
            <AchievementCard 
              title="Fundamentals of Information Security"
              organization="Infosys Springboard (Nov 2025)"
              icon={ShieldCheck}
            />
            <AchievementCard 
              title="Introduction to Cyber Security"
              organization="Infosys Springboard (Nov 2025)"
              icon={ShieldCheck}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-32">
          <div className="bg-indigo-600 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to collaborate?</h2>
              <p className="text-indigo-100 mb-10 max-w-xl mx-auto text-lg">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <a 
                  href="mailto:Shrinithivjbscit2025@sankara.ac.in" 
                  className="w-full md:w-auto px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Send an Email
                </a>
                <a 
                  href="https://www.linkedin.com/in/shrinithi-v-j-452ba637b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto px-8 py-4 bg-indigo-700 text-white rounded-xl font-bold hover:bg-indigo-800 transition-all flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            © 2026 Shrinithi V J. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

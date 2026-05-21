import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, icon, children }) => {
  return (
    <section id={id} className="py-20 scroll-mt-24">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl mb-4 shadow-sm ring-1 ring-indigo-100">
          {icon}
        </div>
        <h2 className="text-4xl font-black tracking-tight text-slate-900 mb-2">
          {title}
        </h2>
        {subtitle && (
          <p className="text-slate-500 font-medium max-w-lg mx-auto">
            {subtitle}
          </p>
        )}
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-6" />
      </div>
      
      <div className="glass-card rounded-3xl p-8 md:p-12 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(79,70,229,0.1)] group">
        {children}
      </div>
    </section>
  );
};

export default Section;

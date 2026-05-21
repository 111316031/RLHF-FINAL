import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  badge?: string;
  subtitle?: string;
  icon?: React.ReactNode; // Keeping icon for compatibility
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, badge, subtitle, children }) => {
  return (
    <section id={id} className="py-32 scroll-mt-20 first:pt-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col mb-16 items-start text-left">
          {badge && (
            <span className="text-[10px] font-black tracking-[0.3em] text-indigo-600 uppercase mb-4 bg-indigo-50 px-2 py-1 rounded-sm">
              {badge}
            </span>
          )}
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-none tracking-tighter">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl leading-tight">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="bg-white rounded-[3rem] p-10 md:p-20 card-shadow border border-slate-100/50 transition-all duration-700 hover:border-indigo-100">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;

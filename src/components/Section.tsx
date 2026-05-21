import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  badge?: string;
  subtitle?: string;
  isAlt?: boolean;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, badge, subtitle, isAlt, children }) => {
  return (
    <div id={id} className={isAlt ? "hh-section-alt" : "hh-section-container"}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col mb-16">
          {badge && (
            <span className="text-[13px] font-black tracking-[0.3em] text-[--honhai-red] uppercase mb-4">
              {badge}
            </span>
          )}
          <h2 className="leading-none">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-8 text-xl text-slate-500 font-medium max-w-4xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="mt-12 bg-white p-8 md:p-16 border border-slate-100 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 left-0 w-1.5 h-full bg-[--honhai-red]" />
           {children}
        </div>
      </div>
    </div>
  );
};

export default Section;

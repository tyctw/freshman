import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

interface NextStepProps {
  steps: {
    title: string;
    desc: string;
    link: string;
    color: string;
    borderColor: string;
    icon: string;
  }[];
}

export default function NextSteps({ steps }: NextStepProps) {
  return (
    <div className="mt-20 sm:mt-24 max-w-5xl mx-auto px-4">
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-1 flex-1 bg-slate-200 rounded-full hidden sm:block"></div>
        <h3 className="text-2xl font-black text-center flex items-center justify-center gap-2 px-4">
          <span className="text-3xl">👀</span> 繼續探索
        </h3>
        <div className="h-1 flex-1 bg-slate-200 rounded-full hidden sm:block"></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="h-full"
          >
            <HashLink
              smooth
              to={step.link}
              className={`block h-full bg-white border-4 ${step.borderColor} rounded-3xl p-6 shadow-[6px_6px_0px_0px_var(--tw-shadow-color)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_var(--tw-shadow-color)] transition-all group`}
              style={{ '--tw-shadow-color': step.borderColor.replace('border-', '') } as any}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`text-3xl sm:text-4xl ${step.color} bg-slate-50 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center border-2 border-slate-200 group-hover:scale-110 transition-transform`}>
                  {step.icon}
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#FBBF24] transition-colors border-2 border-transparent group-hover:border-[#78350F]">
                  <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-[#78350F] group-hover:stroke-[3]" />
                </div>
              </div>
              <h4 className="text-xl font-black text-slate-800 mb-2">{step.title}</h4>
              <p className="font-bold text-slate-600 leading-relaxed text-sm sm:text-base">{step.desc}</p>
            </HashLink>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

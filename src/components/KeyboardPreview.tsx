import { motion } from 'framer-motion';
import { useConfiguratorStore } from '../store/useConfiguratorStore';
import { KEYBOARD_DATA } from '../data/products';

const getOptionData = (categoryId: string, optionId: string) => {
  const category = KEYBOARD_DATA.find((c) => c.id === categoryId);
  return category?.options.find((o) => o.id === optionId);
};

export const KeyboardPreview = () => {
  const { selectedOptions } = useConfiguratorStore();

  const caseData = getOptionData('case', selectedOptions.case);
  const keycapsData = getOptionData('keycaps', selectedOptions.keycaps);
  const switchData = getOptionData('switches', selectedOptions.switches);

  const caseColor = caseData?.color || '#e2e8f0';
  const keycapColor = keycapsData?.color || '#f8fafc';
  const switchColor = switchData?.color || '#94a3b8';

  const rows = [
    14,
    14,
    13,
    12,
    8,
  ];

  return (
    <div className="relative w-full max-w-3xl flex items-center justify-center perspective-1000">
      
      <motion.div
        initial={false}
        animate={{ 
          backgroundColor: caseColor,
          boxShadow: `0px 20px 50px -10px ${caseColor}66`
        }}
        transition={{ duration: 0.5 }}
        className="relative p-4 rounded-[2rem] shadow-2xl w-full border-b-8 border-black/10"
      >
        
        <div className="bg-black/20 p-2 rounded-xl">
          
          <div className="flex flex-col gap-2">
            {rows.map((keyCount, rowIndex) => (
              <div key={rowIndex} className="flex justify-center gap-2">
                {Array.from({ length: keyCount }).map((_, keyIndex) => {
                  const isSpacebar = rowIndex === 4 && keyIndex === 3; 
                  
                  return (
                    <Keycap 
                      key={`${rowIndex}-${keyIndex}`}
                      color={keycapColor}
                      width={isSpacebar ? 'w-64' : 'w-10 sm:w-12'}
                      legend={isSpacebar ? '' : ''}
                    />
                  );
                })}
              </div>
            ))}
          </div>

        </div>

        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-16 h-2 bg-black/20 rounded-t-lg blur-[1px]" />

      </motion.div>

      <motion.div 
        animate={{ opacity: 0.5, backgroundColor: switchColor }}
        className="absolute -z-10 w-full h-full blur-[100px] opacity-20"
      />
    </div>
  );
};

const Keycap = ({ color, width, legend }: { color: string, width: string, legend?: string }) => (
  <motion.div
    initial={false}
    animate={{ backgroundColor: color }}
    transition={{ duration: 0.3 }}
    className={`${width} h-10 sm:h-12 rounded-lg shadow-[0_4px_0_rgba(0,0,0,0.2)] active:shadow-none active:translate-y-[4px] transition-transform cursor-pointer flex items-center justify-center relative overflow-hidden`}
  >
    <div className="absolute top-1 left-1 right-1 h-1/2 bg-white/10 rounded-t-md" />
    <span className="text-xs font-bold text-slate-400/80 select-none">{legend}</span>
  </motion.div>
);
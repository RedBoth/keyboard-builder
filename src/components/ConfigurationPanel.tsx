import { Check } from 'lucide-react';
import { KEYBOARD_DATA } from '../data/products';
import { useConfiguratorStore } from '../store/useConfiguratorStore';
import { clsx } from 'clsx';

export const ConfigurationPanel = () => {
  const { selectedOptions, selectOption, totalPrice } = useConfiguratorStore();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20 h-full flex flex-col">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Keyboard Configurator</h2>
        <p className="text-slate-500 text-sm">Build your perfect typing machine</p>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 space-y-8 custom-scrollbar">
        {KEYBOARD_DATA.map((category) => (
          <div key={category.id}>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 pl-1">
              {category.name}
            </h3>
            
            <div className="grid grid-cols-1 gap-3">
              {category.options.map((option) => {
                const isSelected = selectedOptions[category.id] === option.id;
                
                return (
                  <button
                    key={option.id}
                    onClick={() => selectOption(category.id, option.id)}
                    className={clsx(
                      "group relative flex items-center justify-between p-3 rounded-xl border-2 transition-all duration-200 text-left",
                      isSelected
                        ? "border-blue-600 bg-blue-50/50 shadow-sm"
                        : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      {option.color && (
                        <div 
                          className="w-8 h-8 rounded-full border border-slate-200 shadow-inner"
                          style={{ backgroundColor: option.color }} 
                        />
                      )}
                      
                      <div>
                        <div className={clsx("font-semibold text-sm", isSelected ? "text-blue-900" : "text-slate-700")}>
                          {option.name}
                        </div>
                        {option.description && (
                          <div className="text-xs text-slate-500 mt-0.5">{option.description}</div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {option.price > 0 && (
                        <span className="text-xs font-medium text-slate-400 group-hover:text-blue-500">
                          +{formatPrice(option.price)}
                        </span>
                      )}
                      {isSelected && (
                        <div className="bg-blue-600 text-white rounded-full p-0.5">
                          <Check size={12} strokeWidth={3} />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-slate-200">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-sm text-slate-500 font-medium">Total Estimated</span>
            <div className="text-3xl font-black text-slate-900 tracking-tight">
              {formatPrice(totalPrice)}
            </div>
          </div>
          <button className="bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-transform active:scale-95 shadow-lg shadow-black/20">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
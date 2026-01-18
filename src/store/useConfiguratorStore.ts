import { create } from 'zustand';
import { KEYBOARD_DATA, BASE_PRICE, type CategoryId } from '../data/products';

interface ConfiguratorState {
  selectedOptions: Record<CategoryId, string>; // Ej: { case: 'case-blue', switches: 'sw-red' }
  totalPrice: number;
  selectOption: (category: CategoryId, optionId: string) => void;
}

export const useConfiguratorStore = create<ConfiguratorState>((set) => {
  
  const initialOptions: Record<CategoryId, string> = {} as Record<CategoryId, string>;
  let initialPrice = BASE_PRICE;

  KEYBOARD_DATA.forEach((category) => {
    const defaultOption = category.options[0];
    initialOptions[category.id] = defaultOption.id;
    initialPrice += defaultOption.price;
  });

  return {
    selectedOptions: initialOptions,
    totalPrice: initialPrice,

    selectOption: (categoryId, optionId) => {
      set((state) => {
        const newSelected = { ...state.selectedOptions, [categoryId]: optionId };

        let newPrice = BASE_PRICE;

        KEYBOARD_DATA.forEach((cat) => {
          const selectedOptionId = newSelected[cat.id];
          const optionData = cat.options.find((opt) => opt.id === selectedOptionId);
          
          if (optionData) {
            newPrice += optionData.price;
          }
        });

        return {
          selectedOptions: newSelected,
          totalPrice: newPrice,
        };
      });
    },
  };
});
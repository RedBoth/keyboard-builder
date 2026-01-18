import { ConfigurationPanel } from './components/ConfigurationPanel';
import { KeyboardPreview } from './components/KeyboardPreview'; // <--- Importar

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 lg:p-8 font-sans">
      
      <div className="w-full max-w-7xl h-auto lg:h-[85vh] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        
        <div className="flex-1 bg-slate-100 relative flex items-center justify-center p-4 lg:p-10 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
            
            <KeyboardPreview />
        </div>

        <div className="w-full lg:w-[450px] bg-white h-full border-l border-slate-100 overflow-hidden">
          <ConfigurationPanel />
        </div>

      </div>
    </div>
  );
}

export default App;
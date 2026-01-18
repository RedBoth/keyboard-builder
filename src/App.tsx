import { ConfigurationPanel } from './components/ConfigurationPanel';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 lg:p-8 font-sans">
      
      <div className="w-full max-w-7xl h-[85vh] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        
        <div className="flex-1 bg-slate-200 relative flex items-center justify-center p-10">
          <div className="text-center">
            <h1 className="text-4xl font-black text-slate-300 mb-4">PREVIEW AREA</h1>
            <p className="text-slate-400">Aquí renderizaremos el teclado visualmente</p>
          </div>
        </div>

        <div className="w-full lg:w-[450px] bg-white h-full border-l border-slate-100">
          <ConfigurationPanel />
        </div>

      </div>
    </div>
  );
}

export default App;
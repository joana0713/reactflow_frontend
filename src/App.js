// App.js

import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-subtle">

      {/* Header */}
      <header className="bg-surface border-b border-edge shadow-panel">
        <div className="px-6 py-3 max-w-full">
          <h1 className="text-xl font-semibold tracking-tight text-slate-800">
            Pipeline Builder
          </h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Drag nodes onto the canvas and connect them to build your pipeline.
          </p>
        </div>
      </header>

      {/* Toolbar */}
      <PipelineToolbar />

      {/* Canvas Area – min-h-0 lets flex child get a real height so h-full works */}
      <main className="flex-1 min-h-0 px-6 py-3 flex flex-col">
        <div className="flex-1 min-h-0 bg-surface rounded-card shadow-panel-elevated border border-edge overflow-hidden">
          <PipelineUI />
        </div>
      </main>

      {/* Submit */}
      <footer className="py-4 bg-surface-subtle border-t border-edge">
        <SubmitButton />
      </footer>
    </div>
  );
}

export default App;
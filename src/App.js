// App.js

import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-4 shadow-sm">
        <h1 className="text-lg font-semibold text-gray-700">
          Pipeline Builder
        </h1>
      </header>

      {/* Toolbar */}
      <PipelineToolbar />

      {/* Canvas Area */}
      <div className="flex-1 px-8 py-6">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <PipelineUI />
        </div>
      </div>

      {/* Submit */}
      <div className="pb-8">
        <SubmitButton />
      </div>

    </div>
  );
}

export default App;
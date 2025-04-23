import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Bagian Logo dan Counter */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
        <div className="flex gap-4 mb-6">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="h-16 hover:scale-110 transition-transform" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="h-16 hover:scale-110 transition-transform" alt="React logo" />
          </a>
        </div>

        <h1 className="text-4xl font-bold text-blue-600 underline mb-4">
          Vite + React
        </h1>

        <div className="card bg-white p-6 rounded-lg shadow-md text-center">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            count is {count}
          </button>
          <p className="mt-4 text-sm text-gray-600">
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Click on the Vite and React logos to learn more
        </p>
      </div>

      {/* Tambahan Hello World */}
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600 underline">
          Hello world!
        </h1>
      </div>
    </>
  )
}

export default App

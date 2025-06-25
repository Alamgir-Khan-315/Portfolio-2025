export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex space-x-3">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse [animation-delay:0ms]"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse [animation-delay:200ms]"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse [animation-delay:100ms]"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse [animation-delay:600ms]"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse [animation-delay:800ms]"></div>
      </div>
    </div>
  )
} 
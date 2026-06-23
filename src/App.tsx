import BuilderColumn from './components/BuilderColumn/BuilderColumn'
import ReviewColumn from './components/ReviewColumn/ReviewColumn'

const App = () => {
  return (
    <div className="bg-white flex justify-center items-center">
      <div className="flex min-h-screen w-full max-w-350 flex-row justify-center gap-7.25 p-5">
        <BuilderColumn />
        <ReviewColumn />
      </div>
    </div>
  )
}

export default App

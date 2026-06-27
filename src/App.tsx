import BuilderColumn from './components/BuilderColumn/BuilderColumn'
import ReviewColumn from './components/ReviewColumn/ReviewColumn'

const App = () => {
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="flex flex-col min-h-screen w-full max-w-350 xl:flex-row xl:justify-center gap-7.25 p-5">
        <BuilderColumn />
        <ReviewColumn />
      </div>
    </div>
  )
}

export default App

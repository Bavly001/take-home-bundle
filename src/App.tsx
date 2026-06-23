import BuilderColumn from './components/BuilderColumn/BuilderColumn'
import ReviewColumn from './components/ReviewColumn/ReviewColumn'

const App = () => {
  return (
    <div className="flex min-h-screen w-full flex-row justify-center gap-5 bg-white">
      <BuilderColumn />
      <ReviewColumn />
    </div>
  )
}

export default App

import BuilderColumn from './components/BuilderColumn/BuilderColumn'
import ReviewColumn from './components/ReviewColumn/ReviewColumn'
import Toast from './components/Toast'
import { useSystemBootstrap } from './hooks/useSystemBootstrap'

const App = () => {
  useSystemBootstrap()

  return (
    <div className="flex items-center justify-center bg-white">
      <div className="flex min-h-screen w-full max-w-350 flex-col gap-7.25 p-5 xl:flex-row xl:justify-center">
        <BuilderColumn />
        <ReviewColumn />
      </div>
      <Toast />
    </div>
  )
}

export default App

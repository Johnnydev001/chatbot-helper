import './App.css'
import {CustomCanvas} from "./ui/components/customCanvas/CustomCanvas.tsx";
import {Loader} from "@react-three/drei";

function App() {
  return (
      <>
        <Loader/>
        <CustomCanvas/>
      </>
  )
}

export default App

import Navbar from "./Components/Navbar"
import NewsBoarder from "./Components/NewsBoard"
const App = () => {
  const [category,setcategory] = usestate("general")
  return (
    <div>
      <Navbar setcategory={setcategory} />
      <NewsBoarder category={category}/>
    </div>
  )
}

export default App

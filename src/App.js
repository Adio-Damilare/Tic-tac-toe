import { useState } from "react"
import Form from "./component/Form";
import Modal from "./component/Modal";
const App = () => {
  const [firstPlayerName, setFirstPlayerName] = useState("")
  const [firstPlayerSymbol, setFirstPlayerSymbol] = useState("")
  const [secondPlayerName, setSecondPlayerName] = useState("")
  const [secondPlayerSymbol, setSecondPlayerSymbol] = useState("")
  const [color1, setColor1] = useState("")
  const [color2, setColor2] = useState("")

  const submit = (t) => {
    setFirstPlayerName(t.players.firstPlayer.firstPlayerName)
    setFirstPlayerSymbol(t.players.firstPlayer.firstPlayerSymbol)
    setSecondPlayerName(t.players.secondPlayer.secondPlayerName)
    setSecondPlayerSymbol(t.players.secondPlayer.secondPlayerSymbol)
    setColor1(t.players.firstPlayer.color1)
    setColor2(t.players.secondPlayer.color2)
    
  }

  return (
    < >
      <div className="row  ps-4">
        <Form submit={submit} />

      </div>
      <Modal firstPlayer={{ firstPlayerName, firstPlayerSymbol,color1 }} secondPlayer={{ secondPlayerName, secondPlayerSymbol,color2 }} />



    </>
  )
}
export default App;
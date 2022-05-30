import React from 'react'
import { useState, useEffect } from "react"

function Form({ submit }) {
  const [firstPlayerName, setFirstPlayerName] = useState("")
  const [firstPlayerSymbol, setFirstPlayerSymbol] = useState("")
  const [secondPlayerName, setSecondPlayerName] = useState("")
  const [secondPlayerSymbol, setSecondPlayerSymbol] = useState("")
  const [fill, setfill] = useState("")
  const [btnDisabled, setBtnDisabled] = useState(false)
  const [color1, setColor1] = useState("blue")
  const [color2, setColor2] = useState("yellow")
  const checkTheInputs = () => {

    if ((firstPlayerName == " ") || (secondPlayerName == " ") || (secondPlayerSymbol == " ") || (firstPlayerSymbol == " ")) {
      setBtnDisabled(true)
      setfill("Fill the form ")
    } else {
      setBtnDisabled(false)
    }
  }

  const send = () => {
    if ((firstPlayerName == "") || (secondPlayerName == "") || (secondPlayerSymbol == "") || (firstPlayerSymbol == "")) {
      setBtnDisabled(true)
      setfill("Fill the form ")
    }
    else if (secondPlayerSymbol == firstPlayerSymbol) {
      setBtnDisabled(true)
      setfill("You cannot select the same symbol")

    }
    else if (color2 == color1) {
      setBtnDisabled(true)
      setfill("You cannot select the same color  ")

    }
    else {
      setfill("")
      setBtnDisabled(false)

    }


  }


  return (
    <div className="col-lg-12 row px-3 card">
      <div className=" col-12 row">
        <div className="col-12 text-center"> TIC-TAC-TOE</div>
        <div className='col-12 text-center text-danger'>{fill}</div>
      </div>

      <div className="col-11 row mt-4 ms-lg-none ms-sm-3 ms-md-2">
        <div className="col-lg-12 row">
          <div className="col-lg-5">
            <div className='pe-lg-5'>
              <div className='pe-lg-5'>
                <div className='pe-lg-5'>
                  <label>Firstplayer name</label>
                  <input className="form-control" maxLength={8} onKeyPress={checkTheInputs} onChange={(event) => setFirstPlayerName(event.target.value)} placeholder="Firstplayer name" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pt-3 row">

            <div className='col-6'>
              <label> symbol</label>
              <div className='pe-lg-2'></div>
              <input className="form-control "
                placeholder="Firstplayer symbol" maxLength={2} onKeyPress={checkTheInputs} onChange={(event) => setFirstPlayerSymbol(event.target.value)} />


            </div>
            <div className='col-6'>
              <label>Choose color </label><br />
              <select onKeyPress={checkTheInputs} onChange={(event) => setColor1(event.target.value)}>
                <option >  </option>
                <option > red </option>
                <option> yellow </option>
                <option> Blue </option>
                <option> black </option>
                <option> grey </option>
              </select>
            </div>
          </div>


        </div>
      </div>
      <div className="col-11 row mt-4  ms-lg-none ms-sm-3 ms-md-2 pt-5">
        <div className="col-lg-12 pb-2 row">
          <div className="col-lg-5 pb-2 ">
            <div className='pe-lg-5'>
              <div className='pe-lg-5'>
                <div className='pe-lg-5'>
                  <label>Secondplayer name</label>
                  <input className="form-control " maxLength={8} onKeyPress={checkTheInputs} onChange={(event) => setSecondPlayerName(event.target.value)} placeholder="Secondplayer name" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pt-sm-3 row">
            <div className='col-6'>

              <label> symbol</label>
              <input className="form-control" maxLength={2} onKeyPress={checkTheInputs} onChange={(event) => setSecondPlayerSymbol(event.target.value)} placeholder="Secondplayer symbol" />
            </div>
            <div className='col-6'>
              <label >Choose color </label><br />
              <select onKeyPress={checkTheInputs} onChange={(event) => setColor2(event.target.value)}>
                <option > </option>
                <option > red </option>
                <option> yellow </option>
                <option> Blue </option>
                <option> black </option>
                <option> grey </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-lg-5 mt-lg-4 mt-sm-5 mt-md-3  col-12 ">

        <div className="mx-lg-5">

          <div className="mx-lg-5">

            <div className="mx-lg-5">

              <div className="mx-lg-5 pt-5">

                <div className="mx-lg-5">

                  <div className="mx-lg-5">

                    <div className="px-lg-5">
                      <div className="px-5">
                        <button className="btn btn-block btn-info"
                          type="button"
                          disabled={btnDisabled}
                          data-bs-toggle="modal"
                          data-bs-target="#fullscreenModal" onMouseOver={send}
                          onClick={() => submit({ "players": { "firstPlayer": { firstPlayerName, firstPlayerSymbol, color1, setFirstPlayerName }, "secondPlayer": { secondPlayerName, secondPlayerSymbol, color2, setSecondPlayerName } } })}>GET STARTED</button>
                      </div>
                    </div>
                    <div className="mx-lg-5">

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Form
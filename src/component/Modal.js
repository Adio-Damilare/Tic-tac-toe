import React from 'react'
import { useState, useEffect } from 'react'

function Modal({ firstPlayer, secondPlayer }) {

    let col1 = "#FF5500"
    let col2 = "#FF5500"
    let col3 = "#FF5500"
    let col4 = "#FF5500"
    let col5 = "#FF5500"
    let col6 = "#FF5500"
    let col7 = "#FF5500"
    let col8 = "#FF5500"
    let col9 = "#FF5500"
    let col10="black"

    const [btnOne, setBtnOne] = useState("")
    const [btnTwo, setBtnTwo] = useState("")
    const [btnThree, setBtnThree] = useState("")
    const [btnFour, setBtnFour] = useState("")
    const [btnFive, setBtnFive] = useState("")
    const [btnSix, setBtnSix] = useState("")
    const [btnSeven, setBtnSeven] = useState("")
    const [btnEight, setBtnEight] = useState("")
    const [btnNine, setBtnNine] = useState("")
    const [playerOne, setPlayerOne] = useState([])
    const [btn1, setBtn1] = useState(false)
    const [btn2, setBtn2] = useState(false)
    const [btn3, setBtn3] = useState(false)
    const [btn4, setBtn4] = useState(false)
    const [btn5, setBtn5] = useState(false)
    const [btn6, setBtn6] = useState(false)
    const [btn7, setBtn7] = useState(false)
    const [btn8, setBtn8] = useState(false)
    const [btn9, setBtn9] = useState(false)
    const [restart, setRestart] = useState(true)
    const [continu, setContinu] = useState(true)
    const [win, setWin] = useState("")
    const [firstPlayerScore, setfirstPlayerScore] = useState(0)
    const [secondPlayerScore, setSecondPlayerScore] = useState(0)



    useEffect(() => {
        if (((btnOne !== "") && (btnTwo !== "") && (btnThree !== "")) || ((btnFour !== "") && (btnFive !== "") && (btnSix !== "")) || ((btnSeven !== "") && (btnEight !== "") && (btnNine !== "")) || ((btnOne !== "") && (btnFour !== "") && (btnSeven !== "")) || ((btnOne !== "") && (btnFive !== "") && (btnNine !== "")) || ((btnTwo !== "") && (btnFive !== "") && (btnEight !== "")) || ((btnThree !== "") && (btnSix !== "") && (btnNine !== "")) || ((btnThree !== "") && (btnFive !== "") && (btnSeven !== ""))) {

            winner()
        }
    }, [btnOne, btnTwo, btnThree, btnFour, btnFive, btnSix, btnSeven, btnEight, btnNine])
    let firstPlayerSymbol = firstPlayer.firstPlayerSymbol
    let secondPlayerSymbol = secondPlayer.secondPlayerSymbol
    let color1 = firstPlayer.color1
    let color = secondPlayer.color2
    let py = 0;
    if (playerOne.length >= 1) {
        py = playerOne.length - 1
    }

    let first = [...playerOne, firstPlayerSymbol]
    let second = [...playerOne, secondPlayerSymbol]
    if (btnOne == firstPlayerSymbol) {
        col1 = color1
    } else if (btnOne == secondPlayerSymbol) {
        col1 = color
    }
    if (btnTwo == firstPlayerSymbol) {
        col2 = color1
    } else if (btnTwo == secondPlayerSymbol) {
        col2 = color
    }
    if (btnThree == firstPlayerSymbol) {
        col3 = color1
    } else if (btnThree == secondPlayerSymbol) {
        col3 = color
    }
    if (btnFour == firstPlayerSymbol) {
        col4 = color1
    } else if (btnFour == secondPlayerSymbol) {
        col4 = color
    }
    if (btnFive == firstPlayerSymbol) {
        col5 = color1
    } else if (btnFive == secondPlayerSymbol) {
        col5 = color
    }
    if (btnSix == firstPlayerSymbol) {
        col6 = color1
    } else if (btnSix == secondPlayerSymbol) {
        col6 = color
    }
    if (btnSeven == firstPlayerSymbol) {
        col7 = color1
    } else if (btnSeven == secondPlayerSymbol) {
        col7 = color
    }
    if (btnEight == firstPlayerSymbol) {
        col8 = color1
    } else if (btnEight == secondPlayerSymbol) {
        col8 = color
    }
    if (btnNine == firstPlayerSymbol) {
        col9 = color1
    } else if (btnNine == secondPlayerSymbol) {
        col9 = color
    }


    const one = () => {

        if (playerOne[py] == firstPlayerSymbol) {
            // alert("two  ")
            setPlayerOne(second)
            setBtnOne(secondPlayerSymbol)
            setBtn1(true)
        } else {
            setPlayerOne(first)
            setBtnOne(firstPlayerSymbol)
            setBtn1(true)
            // alert("hsd")
        }



    }

    const two = () => {
        if (playerOne[py] == firstPlayerSymbol) {
            setPlayerOne(second)
            setBtnTwo(secondPlayerSymbol)
            setBtn2(true)
        } else {
            setPlayerOne(first)
            setBtnTwo(firstPlayerSymbol)
            setBtn2(true)
        }

    }

    const three = () => {
        if (playerOne[py] != firstPlayerSymbol) {
            setPlayerOne(first)
            setBtnThree(firstPlayerSymbol)
            setBtn3(true)
        } else {
            setPlayerOne(second)
            setBtnThree(secondPlayerSymbol)
            setBtn3(true)
        }

    }

    const four = () => {
        if (playerOne[py] != firstPlayerSymbol) {
            setPlayerOne(first)
            setBtnFour(firstPlayerSymbol)
            setBtn4(true)
        } else {
            setPlayerOne(second)
            setBtnFour(secondPlayerSymbol)
            setBtn4(true)
        }

    }
    const five = () => {
        if (playerOne[py] != firstPlayerSymbol) {
            setPlayerOne(first)
            setBtnFive(firstPlayerSymbol)
            setBtn5(true)
        } else {
            setPlayerOne(second)
            setBtnFive(secondPlayerSymbol)
            setBtn5(true)
        }

    }
    const six = () => {
        if (playerOne[py] != firstPlayerSymbol) {
            setPlayerOne(first)
            setBtnSix(firstPlayerSymbol)
            setBtn6(true)
        } else {
            setPlayerOne(second)
            setBtnSix(secondPlayerSymbol)
            setBtn6(true)
        }


    }
    const seven = () => {
        if (playerOne[py] != firstPlayerSymbol) {
            setPlayerOne(first)
            setBtnSeven(firstPlayerSymbol)
            setBtn7(true)
        } else {
            setPlayerOne(second)
            setBtnSeven(secondPlayerSymbol)
            setBtn7(true)
        }

    }
    const eight = () => {
        if (playerOne[py] != firstPlayerSymbol) {
            setPlayerOne(first)
            setBtnEight(firstPlayerSymbol)
            setBtn8(true)
        } else {
            setPlayerOne(second)
            setBtnEight(secondPlayerSymbol)
            setBtn8(true)
        }

    }
    const nine = () => {
        if (playerOne[py] != firstPlayerSymbol) {
            setPlayerOne(first)
            setBtnNine(firstPlayerSymbol)
            setBtn9(true)
        } else {
            setPlayerOne(second)
            setBtnNine(secondPlayerSymbol)
            setBtn9(true)
        }
    }

    const bg1 = {
        backgroundColor: col1
    }
    const bg2 = {
        backgroundColor: col2
    }
    const bg3 = {
        backgroundColor: col3
    }
    const bg4 = {
        backgroundColor: col4
    }
    const bg5 = {
        backgroundColor: col5
    }
    const bg6 = {
        backgroundColor: col6
    }
    const bg7 = {
        backgroundColor: col7
    }
    const bg8 = {
        backgroundColor: col8
    }
    const bg9 = {
        backgroundColor: col9
    }
    const winner = () => {
        if (((btnOne == firstPlayerSymbol) && (btnTwo == firstPlayerSymbol) && (btnThree == firstPlayerSymbol)) || ((btnFour == firstPlayerSymbol) && (btnFive == firstPlayerSymbol) && (btnSix == firstPlayerSymbol)) || ((btnSeven == firstPlayerSymbol) && (btnEight == firstPlayerSymbol) && (btnNine == firstPlayerSymbol)) || ((btnOne == firstPlayerSymbol) && (btnFour == firstPlayerSymbol) && (btnSeven == firstPlayerSymbol)) || ((btnOne == firstPlayerSymbol) && (btnFive == firstPlayerSymbol) && (btnNine == firstPlayerSymbol)) || ((btnTwo == firstPlayerSymbol) && (btnFive == firstPlayerSymbol) && (btnEight == firstPlayerSymbol)) || ((btnThree == firstPlayerSymbol) && (btnSix == firstPlayerSymbol) && (btnNine == firstPlayerSymbol)) || ((btnThree == firstPlayerSymbol) && (btnFive == firstPlayerSymbol) && (btnSeven == firstPlayerSymbol))) {
            setBtn1(true)
            setBtn2(true)
            setBtn3(true)
            setBtn4(true)
            setBtn5(true)
            setBtn6(true)
            setBtn7(true)
            setBtn8(true)
            setBtn9(true)
            setWin(firstPlayer.firstPlayerName + " " + "Won")
            col10=color1;
            let first = firstPlayerScore + 1
            setfirstPlayerScore(first)
            setRestart(false)
            setContinu(false)

        }
        else if (((btnOne == secondPlayerSymbol) && (btnTwo == secondPlayerSymbol) && (btnThree == secondPlayerSymbol)) || ((btnFour == secondPlayerSymbol) && (btnFive == secondPlayerSymbol) && (btnSix == secondPlayerSymbol)) || ((btnSeven == secondPlayerSymbol) && (btnEight == secondPlayerSymbol) && (btnNine == secondPlayerSymbol)) || ((btnOne == secondPlayerSymbol) && (btnFour == secondPlayerSymbol) && (btnSeven == secondPlayerSymbol)) || ((btnOne == secondPlayerSymbol) && (btnFive == secondPlayerSymbol) && (btnNine == secondPlayerSymbol)) || ((btnTwo == secondPlayerSymbol) && (btnFive == secondPlayerSymbol) && (btnEight == secondPlayerSymbol)) || ((btnThree == secondPlayerSymbol) && (btnSix == secondPlayerSymbol) && (btnNine == secondPlayerSymbol)) || ((btnThree == secondPlayerSymbol) && (btnFive == secondPlayerSymbol) && (btnSeven == secondPlayerSymbol))) {
            setBtn1(true)
            setBtn2(true)
            setBtn3(true)
            setBtn4(true)
            setBtn5(true)
            setBtn6(true)
            setBtn7(true)
            setBtn8(true)
            col10=color
             let firs = secondPlayerScore + 1
            setSecondPlayerScore(firs)
            setRestart(false)
            setContinu(false)
            setWin(secondPlayer.secondPlayerName + " " + "Won")


        }
        else if (btnOne != "" && btnTwo != "" && btnThree != "" && btnFour != "" && btnFive != "" && btnSix != "" && btnSeven != "" && btnEight != "" && btnNine != "") {
            setBtn1(true)
            setBtn2(true)
            setBtn3(true)
            setBtn4(true)
            setBtn5(true)
            setBtn6(true)
            setBtn7(true)
            setBtn8(true)
            setBtn9(true)
            setRestart(false)
            setContinu(false)
            setWin("You draw")
        }
    }

    const cont = () => {

        setBtnOne("")
        setBtnTwo("")
        setBtnThree("")
        setBtnFour("")
        setBtnFive("")
        setBtnSix("")
        setBtnSeven("")
        setBtnEight("")
        setBtnNine("")
        setBtn1(false)
        setBtn2(false)
        setBtn3(false)
        setBtn4(false)
        setBtn5(false)
        setBtn6(false)
        setBtn7(false)
        setBtn8(false)
        setBtn9(false)
        setRestart(true)
        setContinu(true)
        setWin("")

    }
    const winSt={
    color:col10
    }

    const start = () => {
        window.location.reload()

    }
    return (
        <div className="col-lg-4 col-md-6">
            <div className="mt-3">

                <div className="modal fade" id="fullscreenModal" tabindex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h5 className="modal-title text-center" id="modalFullTitle">TIC-TAC-TOE</h5>

                            </div>
                            <div className="modal-body">
                                <div className='row'>


                                    <div className='col-lg-6'>

                                        <div className=''>
                                            <div className='pt-lg-5'>
                                                <div className='pt-lg-5 '>
                                                    <div className='pt-lg-5'>

                                                        <div className='table-responsive text-nowrap'>
                                                            <table className='table table-striped table-bordered    '>
                                                                <thead>
                                                                    <tr className='table-active'>
                                                                        <th>S/N</th>
                                                                        <th>Players names</th>
                                                                        <th>Symbol</th>
                                                                        <th>Score</th>
                                                                        <th>Color</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className='table-warning'>
                                                                        <td>1</td>
                                                                        <td>{firstPlayer.firstPlayerName}</td>
                                                                        <td>{firstPlayer.firstPlayerSymbol}</td>
                                                                        <td>{firstPlayerScore}</td>
                                                                        <td>{color1}</td>
                                                                    </tr>
                                                                    <tr className='table-info'>
                                                                        <td>2</td>
                                                                        <td>{secondPlayer.secondPlayerName}</td>
                                                                        <td>{secondPlayer.secondPlayerSymbol}</td>
                                                                        <td>{secondPlayerScore}</td>
                                                                        <td>{color}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>


                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                    <div className='col-lg-4 ms-lg-4' >
                                        <div className='ps-5'>

                                            <div className='ps-5 pb-4 pt-4'>
                                                <div className='ps-5 fs-2' style={winSt}>{win}</div>

                                            </div>
                                        </div>
                                        <div className='card'>
                                            <div>
                                                <table className='table table-border-bottom-0'>
                                                    <tbody className='table-border-bottom-0'>
                                                        <tr className=''>
                                                            <td>
                                                                <button className='btn border w-100  fs-1' onClick={one} disabled={btn1} style={bg1} id='tick'>{btnOne}</button>
                                                            </td>
                                                            <td>
                                                                <button className='btn border w-100 fs-1' onClick={two} id='tick' style={bg2} disabled={btn2}>{btnTwo}</button>
                                                            </td>
                                                            <td>
                                                                <button className='btn border w-100 fs-1' onClick={three} id='tick' style={bg3} disabled={btn3}>{btnThree}</button>
                                                            </td>

                                                        </tr>
                                                        <tr className=''>
                                                            <td>
                                                                <button className='btn border w-100 fs-1' onClick={four} id='tick' style={bg4} disabled={btn4}>{btnFour}</button>
                                                            </td>
                                                            <td>
                                                                <button className='btn border w-100 fs-1' onClick={five} id='tick' style={bg5} disabled={btn5}>{btnFive}</button>
                                                            </td>
                                                            <td>
                                                                <button className='btn border w-100 fs-1' onClick={six} id='tick' style={bg6} disabled={btn6}>{btnSix}</button>
                                                            </td>

                                                        </tr>
                                                        <tr className=''>
                                                            <td>
                                                                <button className='btn border w-100 fs-1' disabled={btn7} onClick={seven} style={bg7} id='tick'>{btnSeven}</button>
                                                            </td>
                                                            <td>
                                                                <button className='btn border w-100 fs-1' disabled={btn8} onClick={eight} style={bg8} id='tick'>{btnEight}</button>
                                                            </td>
                                                            <td>
                                                                <button className='btn border w-100 fs-1' disabled={btn9} onClick={nine} style={bg9} id='tick'>{btnNine}</button>
                                                            </td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='ps-lg-5'>

                                        <div className='ps-lg-5'>

                                            <div className='ps-lg-5'>
                                                <button hidden={restart} onClick={start} className="btn border btn-danger w-25" data-bs-dismiss="modal" >Restart</button>
                                                <button hidden={continu} onClick={cont} className="btn border btn-info w-25 ms-2" >Continue</button>

                                            </div>
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

export default Modal
import React, {useState} from "react";
import Text from "../card_list";
import "./Tabledata.css";
import Confeti from "./Confeti";

const Tabledata= ()=>{
    
    const [cards, setCards] = useState([]);
    const [turn, setTurn] = useState("1")
    const [cells, setCells] = useState(Array(25).fill(''))
    const [winner, setWinner] =useState()
    const [show, setShow] = useState(false)
    const [btnStart, setBtnStart] = useState(true)
   
  

    // handle winner
    const CheckForWinner = (squares) => {
        let combos = {
            across: [
                    [0, 1, 2, 3, 4],
                    [5, 6, 7, 8, 9],
                    
                    [15, 16, 17, 18, 19],
                    [20, 21, 22, 23, 24]
                ],

            down: [
                    [0, 5, 10, 15, 20],
                    [1, 6, 11, 16, 21,], 
                    [3, 8, 13, 18, 23],
                    [4, 9, 14, 19, 24]
                 ],

            diagnal: [
                    [0, 6, 18, 24],
                    [4, 8, 16, 20],
                    [2, 7, 17, 22],
                    [10, 11, 13, 14],
                    ]
        }
       
        for (let combo in combos){
            combos[combo].forEach((pattern) => {
                if (pattern.length===5){
                    if (squares[pattern[0]] === '' ||
                        squares[pattern[1]]=== ''||
                        squares[pattern[2]] === ''||
                        squares[pattern[3]] === ''||
                        squares[pattern[4]] === ''

                        )
                    {
                        // do nothing
                    }else if (squares[pattern[0]] === squares[pattern[1]] && 
                        squares[pattern[1]] === squares[pattern[2]] &&
                        squares[pattern[2]] === squares[pattern[3]]&&
                        squares[pattern[3]] === squares[pattern[4]]
                        )
                    {
                        setWinner(squares[pattern[0]])
                        setShow(!show)
                        
                    
                    }
                }else if (pattern.length===4){
                    if (squares[pattern[0]] === '' ||
                        squares[pattern[1]]=== ''||
                        squares[pattern[2]] === ''||
                        squares[pattern[3]] === ''
                        )
                    {
                        // do nothing
                    }else if (squares[pattern[0]] === squares[pattern[1]] && 
                        squares[pattern[1]] === squares[pattern[2]] &&
                        squares[pattern[2]] === squares[pattern[3]]
                        
                        )
                    {
                        setWinner(squares[pattern[0]])
                        setShow(!show)
                        
                    }
                }
               
            
            });
        }

    }

    // handle Cell Click
    const handleClickCell = (num, id)=>{
        if (id === 12){
            return
        }
        if (cells[num] !== ''){
            alert("Already clicked")
            return
        }

        let squares = [...cells]

        if (turn === "1"){
            squares[num] = "1"
            setTurn("2")
        }
        else {
            squares[num] = "2"
            setTurn("1")
        }
        setCells(squares)
        CheckForWinner(squares)
    }
    
    // handle shuffel the card arrays
    const suffleCards= () => {
        const shuffledCards = [...Text].sort(()=> Math.random()-0.5)
        setCards(shuffledCards)
        setWinner(null)
        setCells(Array(25).fill(''))
        setTurn("1")
    }

    const Cell= ({item, num, id})=>{
        let style = {}
        if (cells[num] === "1"){
            style = {
                backgroundColor: "#E3AFBC",
                textDecorationLine: 'line-through',
                
            }
        }else if (cells[num]==="2"){
            style ={
                backgroundColor: "#5CDB95",
                textDecorationLine: 'line-through',
                
            }
        }
      
        return (
            <td style={style} onClick={() =>handleClickCell(num, id)}>{item}{id && <span className="emoji">&#127773;</span>}</td>
            )

        }
        
    // handle start button
    const handleStartButton =() =>{
        suffleCards()
        setShow(!show)
        setBtnStart(!btnStart)
    }
    
    return (
        <div>
            <h1>BINGO GAME</h1>
            {btnStart && <button onClick={()=>handleStartButton()}>Start playing...</button>}
            
            {show &&<button onClick={()=>(suffleCards())}> Restart Game</button>}

            {winner && <Confeti />}
            
            {winner && (
                <div>
                    <span>Player {winner} is the winner </span> 
                </div>)
            }
            
            
            {show &&
            <div className="container">
                
                <table>
                    <tbody>
                        <tr>
                            <Cell item={cards[0]} num={0}/>
                            <Cell item={cards[1]} num={1}/>
                            <Cell item={cards[2]} num={2}/>
                            <Cell item={cards[3]} num={3}/>
                            <Cell item={cards[4]} num={4}/>
                        </tr>
                        <tr>
                            <Cell item={cards[5]} num={5}/>
                            <Cell item={cards[6]} num={6}/>
                            <Cell item={cards[7]} num={7}/>
                            <Cell item={cards[8]} num={8}/>
                            <Cell item={cards[9]} num={9}/>
                        </tr>   
                        <tr>
                            <Cell item={cards[10]} num={10}/>
                            <Cell item={cards[11]} num={11}/>
                            <Cell id={12}/>
                            <Cell item={cards[12]} num={13}/>
                            <Cell item={cards[13]} num={14}/>
                        </tr>   
                        <tr>
                            <Cell item={cards[14]} num={15}/>
                            <Cell item={cards[15]} num={16}/>
                            <Cell item={cards[16]} num={17}/>
                            <Cell item={cards[17]} num={18}/>
                            <Cell item={cards[18]} num={19}/>
                        </tr>   
                        <tr>
                            <Cell item={cards[19]} num={20}/>
                            <Cell item={cards[20]} num={21}/>
                            <Cell item={cards[21]} num={22}/>
                            <Cell item={cards[22]} num={23}/>
                            <Cell item={cards[23]} num={24}/>
                        </tr>      
                    </tbody> 
                </table>
                
            </div>
        }
        {show && (
                <>
                <span>Player {turn} turn</span> 
                </>)
                }
        </div>
    )
}
export default Tabledata;
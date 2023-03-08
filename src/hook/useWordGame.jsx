import  { useState, useEffect, useRef } from 'react'

function useWordGame(startTime = 10){
  
  const [text, setText] = useState('')
  const [remainedTime, setRemainedTime] = useState(startTime)
  const [timeRunning, setTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textRef = useRef(null)



  const calculateWordCount = (words) => {
    let wordsArr = words.trim().split(' ')
    return wordsArr.filter(word => word !== "").length
  }

  const startGame = () => {
    setRemainedTime(startTime)
    setTimeRunning(true)
    setText("")
    textRef.current.disabled = false
    textRef.current.focus()
  }

  const handleChange = (e) =>{
     setText(e.target.value)
  }

  const endGame = () => {
    setTimeRunning(false)
    setWordCount(calculateWordCount(text))
  }

  useEffect(() => {
    if (timeRunning && remainedTime > 0) {
      setTimeout(() => {
        setRemainedTime(time => time - 1)
      }, 1000)
    } else if (remainedTime === 0) {
      endGame()
    }
  }, [remainedTime, timeRunning])
return {timeRunning, text, textRef, remainedTime, startGame, wordCount, handleChange}
}

export default useWordGame
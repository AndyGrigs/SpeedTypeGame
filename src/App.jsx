import React, { useState, useEffect, useRef } from 'react'
import useWordGame from './hook/useWordGame'
import './App.css'

export default function App() {
const {timeRunning, text, textRef, remainedTime, startGame, wordCount, handleChange} = useWordGame(5)
  
  return (
    <main>
      <h1>How fast do you type?</h1>
      <textarea
        disabled={!timeRunning}
        value={text}
        onChange={handleChange}
        ref={textRef}
      />
      <h4>Time remaining: {remainedTime}</h4>
      <button
        onClick={startGame}
        disabled={timeRunning}
      >Start</button>
      <h4>Word count: {wordCount}</h4>
    </main>
  )
}

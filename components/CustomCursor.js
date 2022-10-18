import React from "react";
import { useState, useEffect, useRef } from "react";


export default function CustomCursor() {
  const cursorRef = useRef(null)
  useEffect(() => {
    document.documentElement.style.setProperty('--x',-100 +'px');
    document.documentElement.style.setProperty('--y',-100+'px');

    if (cursorRef.current == null || cursorRef == null)
        return;
    document.addEventListener('mousemove', e => {
        if (cursorRef.current == null)
              return;
        document.documentElement.style.setProperty('--x',(e.clientX)+'px');
        document.documentElement.style.setProperty('--y',(e.clientY)+'px');
              
    })
    document.addEventListener('click', () => {
    if (cursorRef.current == null)
        return;
    cursorRef.current.classList.add("expand");
    
    setTimeout(() => {
        if (cursorRef.current == null)
              return;
        cursorRef.current.classList.remove("expand");
    }, 300)
    
    })
  }, [])
  return (
  <div className='cursor' ref={cursorRef}>
    
  </div>
  )
  }
  
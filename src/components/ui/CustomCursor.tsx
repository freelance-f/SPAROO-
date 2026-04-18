"use client"

import { useEffect } from 'react'
import { animate } from 'animejs'

export default function CustomCursor() {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')

    const moveCursor = (e: MouseEvent) => {
      if (dot) {
        animate(dot, {
          translateX: e.clientX,
          translateY: e.clientY,
          duration: 0,
          easing: 'linear'
        })
      }

      if (ring) {
        animate(ring, {
          translateX: e.clientX,
          translateY: e.clientY,
          duration: 100,
          easing: 'out-quad'
        })
      }
    }

    const hoverStart = () => {
      if (ring) {
        animate(ring, {
          scale: 1.5,
          duration: 200,
          easing: 'out-quad'
        })
      }
    }

    const hoverEnd = () => {
      if (ring) {
        animate(ring, {
          scale: 1,
          duration: 200,
          easing: 'out-quad'
        })
      }
    }

    window.addEventListener('mousemove', moveCursor)
    
    const clickables = document.querySelectorAll('a, button, .clickable')
    clickables.forEach(el => {
      el.addEventListener('mouseenter', hoverStart)
      el.addEventListener('mouseleave', hoverEnd)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      clickables.forEach(el => {
        el.removeEventListener('mouseenter', hoverStart)
        el.removeEventListener('mouseleave', hoverEnd)
      })
    }
  }, [])

  return null
}

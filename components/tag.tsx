"use client"

import { useState } from "react"

interface TagProps {
  text: string
}

export default function Tag({ text }: TagProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        px-3 py-1 rounded-full text-xs
        transition-all duration-300 ease-out
        ${isHovered ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-400"}
      `}
    >
      {text}
    </div>
  )
}

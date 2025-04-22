"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ActionButtonProps {
  name: string
  url: string
}

export default function ActionButton({ name, url }: ActionButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={url}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative w-full py-3 px-4 rounded-xl
        flex items-center justify-between
        bg-gray-800 hover:bg-gray-700
        transition-all duration-200 ease-in-out
        overflow-hidden group
        ${isHovered ? "shadow-glow-sm" : ""}
      `}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-full text-center relative z-10">
        <span className="font-medium text-white">{name}</span>
      </div>

      <ArrowRight
        className={`
        absolute right-4
        w-5 h-5 text-gray-400 group-hover:text-white
        transition-all duration-200 ease-in-out pointer-events-none
        ${isHovered ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}
      `}
      />

      {/* Background animation */}
      <div
        className={`
        absolute top-0 left-0 h-full
        bg-gradient-to-r from-gray-700/0 via-gray-700/20 to-gray-700/0
        transition-all duration-300 ease-in-out pointer-events-none
        ${isHovered ? "w-full translate-x-full" : "w-0 translate-x-0"}
      `}
      />
    </Link>
  )
}

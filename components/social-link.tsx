"use client"

import { useState } from "react"
import Link from "next/link"
import { Globe, Linkedin, Github, Send, Mail, type LucideIcon } from "lucide-react"
import XIcon from "./x-icon"

interface SocialLinkProps {
  name: string
  icon: string
  url: string
}

export default function SocialLink({ name, icon, url }: SocialLinkProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Map icon string to Lucide icon component
  const getIcon = (iconName: string): LucideIcon => {
    switch (iconName.toLowerCase()) {
      case "globe":
        return Globe
      case "twitter":
        return XIcon
      case "linkedin":
        return Linkedin
      case "github":
        return Github
      case "send":
        return Send
      case "mail":
        return Mail
      default:
        return Globe
    }
  }

  const IconComponent = getIcon(icon)

  return (
    <Link
      href={url}
      aria-label={name}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div
        className={`
        w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center
        transition-all duration-300 ease-out
        hover:bg-gray-700 hover:scale-110
        ${isHovered ? "shadow-glow" : ""}
      `}
      >
        <IconComponent
          className={`
            w-5 h-5 text-gray-300
            transition-all duration-300
            group-hover:text-white
          `}
        />
      </div>

      {/* Tooltip */}
      <span
        className={`
        absolute -bottom-8 left-1/2 -translate-x-1/2
        text-xs bg-gray-800 text-white px-2 py-1 rounded
        transition-all duration-200
        ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
      `}
      >
        {name}
      </span>
    </Link>
  )
}

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import SocialLink from "@/components/social-link"
import ActionButton from "@/components/action-button"
import Tag from "@/components/tag"

export default function Home() {
  // Social links data
  const socialLinks = [
    { name: "Website", icon: "globe", url: "https://www.jmmlabs.xyz/" },
    { name: "X", icon: "twitter", url: "https://x.com/Jacob___Meyer" },
    { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/jacobmeyer/" },
    { name: "GitHub", icon: "github", url: "https://github.com/jacobmeyer" },
    { name: "Telegram", icon: "send", url: "https://t.me/Jacob_Meyer" },
    { name: "Email", icon: "mail", url: "mailto:jacob@jmmlabs.xyz" },
  ]

  // Action buttons data
  const actionButtons = [
    { name: "JMM Labs", url: "https://www.jmmlabs.xyz/" },
    { name: "See My Projects", url: "https://www.jmmlabs.xyz/" },
    { name: "See My Resume", url: "https://www.jmmlabs.xyz/" },
    {
      name: "On-Chain Activity",
      url: "https://intel.arkm.com/visualizer/entity/0x7B75BC70b928472856047FDEf0D08D5B5816AEFD?flow=all&positions=%7B%7D&sortDir=desc&sortKey=time&usdGte=0.1",
    },
    { name: "Book A Meeting", url: "https://app.usemotion.com/meet/jacobmeyer/gm" },
  ]

  // Tags data
  const tags = ["Product Manager", "Founder", "AI", "Web3"]

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center pb-20">
      {/* Banner Image */}
      <div className="w-full h-48 sm:h-64 md:h-80 relative overflow-hidden">
        <Image src="/jmmlabsheader.png" alt="Banner" fill priority className="object-cover animate-fade-in" />
      </div>

      {/* Profile Section */}
      <div className="w-full max-w-md px-4 -mt-16 flex flex-col items-center animate-slide-up">
        {/* Profile Picture */}
        <div className="w-32 h-32 rounded-full border-4 border-black overflow-hidden relative">
          <div>
            <Image src="/profpic.jpeg" alt="Jacob Meyer" fill className="object-cover" />
          </div>
        </div>

        {/* Name and Description */}
        <h1 className="mt-4 text-2xl font-bold text-center">Jacob Meyer</h1>
        <p className="mt-2 text-center text-gray-300 text-xs max-w-xs">
          Web3 product leader building products people love
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {socialLinks.map((link) => (
            <SocialLink key={link.name} name={link.name} icon={link.icon} url={link.url} />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="w-full mt-8 space-y-3">
          {actionButtons.map((button) => (
            <ActionButton key={button.name} name={button.name} url={button.url} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-xs text-gray-500 flex items-center justify-center">
          <span>© {new Date().getFullYear()} Jacob Meyer</span>
        </div>
      </div>
    </main>
  )
}

import type { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface SolutionCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  className?: string
}

export function SolutionCard({ icon: Icon, title, description, href, className }: SolutionCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block rounded-xl border border-border-ui bg-white p-8 shadow-sm transition-all duration-500",
        "hover:shadow-xl hover:shadow-intelliwan-mint/50 hover:-translate-y-1",
        "before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-intelliwan-mint",
        "before:opacity-0 before:transition-all before:duration-500",
        "hover:before:opacity-100 hover:before:shadow-[0_0_20px_rgba(232,255,246,0.8),inset_0_0_20px_rgba(232,255,246,0.4)]",
        "after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-br after:from-intelliwan-mint/10 after:via-transparent after:to-transparent",
        "after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100",
        className,
      )}
    >
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-intelliwan-mint transition-all duration-500 group-hover:bg-intelliwan-mint group-hover:shadow-[0_0_20px_rgba(232,255,246,0.8)] group-hover:scale-110">
          <Icon
            className="h-7 w-7 text-intelliwan transition-transform duration-500 group-hover:scale-110"
            strokeWidth={1.5}
          />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-text-primary transition-colors duration-300 group-hover:text-intelliwan">
          {title}
        </h3>
        <p className="mt-3 leading-relaxed text-text-secondary">{description}</p>

        {/* Link */}
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-intelliwan transition-all duration-300 group-hover:gap-3">
          En savoir plus
          <ArrowRight className="h-4 w-4 transition-all duration-500 group-hover:translate-x-2 group-hover:scale-125" />
        </div>

        {/* Bottom accent bar with neon effect */}
        <div className="absolute inset-x-0 bottom-0 h-1 rounded-b-xl bg-gradient-to-r from-intelliwan-mint via-intelliwan to-intelliwan-mint opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:shadow-[0_0_15px_rgba(232,255,246,0.9)]" />
      </div>
    </Link>
  )
}

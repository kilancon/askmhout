"use client"
import React from "react"
import { motion } from "framer-motion"

type Props = {
  children: React.ReactNode
}

export default function ThemedCard({ children }: Props) {
  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative w-full rounded-3xl shadow-2xl"
    >
      {/* Visual card with shadow preserved */}
      <div className="bg-gradient-to-b from-white/90 to-pink-50/70 border border-pink-100 rounded-3xl">
        {/* Decorative top bars (absolute) */}
        <div className="absolute -top-8 left-6 right-6 flex justify-between items-center pointer-events-none">
          <div className="h-2 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full w-1/3 opacity-60" />
          <div className="h-2 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full w-1/3 opacity-60" />
        </div>

        {/* Content area. It no longer scrolls internally; the page may scroll instead. */}
        <div className="relative z-10 rounded-3xl p-6 md:p-10">
          {children}
        </div>

        <div className="absolute inset-x-6 bottom-4 h-1 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 opacity-60" />
      </div>
    </motion.div>
  )
}

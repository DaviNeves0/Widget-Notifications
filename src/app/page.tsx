'use client'
import React from "react";
import { Widget } from "@/components/Widget";
import { Bell } from 'lucide-react'


export default function Home() {
  const [open, setOpen] = React.useState(false)

  return (
    <main className="h-screen bg-zinc-50 dark:bg-black flex items-center justify-center flex-col text-zinc-800 dark:text-zinc-50">
      <button 
      className="h-[50px] w-[50px] rounded-full bg-violet-600 text-zinc-100 font-bold mb-2 hover:bg-violet-700 flex items-center justify-center"
      onClick={()=> setOpen(!open)} 
      ><Bell /></button>
      {open && <Widget />}
    </main>
  )
}

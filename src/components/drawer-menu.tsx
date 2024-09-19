import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"
import { X, Menu } from 'lucide-react';

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Navbar } from "./navbar";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]

export function DrawerDemo() {
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="border-0 bg-transparent hover:bg-transparent md:hidden"><Menu /></Button>
      </DrawerTrigger>
      <DrawerContent className="text-dark dark:text-white md:hidden">
            <DrawerClose asChild className="relative">
              <Button variant="outline" className="border-0 bg-transparent hover:bg-transparent w-6 p-0 absolute right-2 top-1"><X /></Button>
            </DrawerClose>
              <Navbar />
      </DrawerContent>
    </Drawer>
  )
}

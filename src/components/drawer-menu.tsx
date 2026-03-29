import * as React from "react"
import { X, Menu } from 'lucide-react';

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Navbar } from "./navbar";

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="border-0 bg-transparent hover:bg-transparent md:hidden">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-surface-1 text-foreground md:hidden">
            <DrawerClose asChild className="relative">
              <Button variant="outline" className="border-0 bg-transparent hover:bg-transparent w-6 p-0 absolute right-4 top-4">
                <X />
              </Button>
            </DrawerClose>
              <Navbar />
      </DrawerContent>
    </Drawer>
  )
}

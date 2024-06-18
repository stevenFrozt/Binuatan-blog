import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 ">
      <h3 className="hidden md:">BINUATAN</h3>
      <h3 className="md:hidden">BINUATAN</h3>

      <DropdownMenu>
        <DropdownMenuTrigger className="hidden md:inline-block">
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Button asChild variant={"link"} className="w-full p-4 ">
              <Link href={""}>Home</Link>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button asChild variant={"link"} className="w-full p-4 ">
              <Link href={""}>Products</Link>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button asChild variant={"link"} className="w-full p-4 ">
              <Link href={""}>About Us</Link>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button asChild variant={"link"} className="w-full p-4 ">
              <Link href={""}>News</Link>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button asChild variant={"link"} className="w-full p-4 ">
              <Link href={""}>Contact Us</Link>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Drawer>
        <DrawerTrigger className="md:hidden">
          <Menu />
        </DrawerTrigger>

        <DrawerContent>
          <div className="py-8">
            <Button asChild variant={"link"} className="w-full p-4 ">
              <Link href={""}>Home</Link>
            </Button>
            <Button asChild variant={"link"} className="w-full p-4 ">
              <Link href={""}>Products</Link>
            </Button>
            <Button asChild variant={"link"} className="w-full p-4 ">
              <Link href={""}>About Us</Link>
            </Button>
            <Button asChild variant={"link"} className="w-full p-4 ">
              <Link href={""}>News</Link>
            </Button>
            <Button asChild variant={"link"} className="w-full p-4 ">
              <Link href={""}>Contact Us</Link>
            </Button>
          </div>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </nav>
  );
}

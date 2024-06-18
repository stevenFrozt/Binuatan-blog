"use client"
import React from "react"

import { Button } from "../ui/button"
import Link from "next/link"
import NavBurgerMobile from "./navBurgerMobile"

export default function Navbar() {
	return (
		<nav className="flex justify-between items-center bg-white px-6 lg:px-28 py-4 lg:py-4 border">
			<h3 className="font-medium text-black text-xl tracking-[.5rem]">
				BINUATAN
			</h3>
			<div className="lg:flex gap-8 hidden">
				<Button asChild variant={"link"} className="p-4 w-full">
					<Link href={"/"}>Home</Link>
				</Button>
				<Button asChild variant={"link"} className="p-4 w-full">
					<Link href={"products"}>Products</Link>
				</Button>
				<Button asChild variant={"link"} className="p-4 w-full">
					<Link href={"about"}>About Us</Link>
				</Button>
				<Button asChild variant={"link"} className="p-4 w-full">
					<Link href={"news"}>News</Link>
				</Button>
				<Button asChild variant={"link"} className="p-4 w-full">
					<Link href={"contact"}>Contact Us</Link>
				</Button>
			</div>

			<NavBurgerMobile />
		</nav>
	)
}

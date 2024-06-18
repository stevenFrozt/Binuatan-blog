import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerTrigger
} from "@/components/ui/drawer"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "../ui/button"

export default function NavBurgerMobile() {
	return (
		<Drawer>
			<DrawerTrigger className="lg:hidden">
				<Menu />
			</DrawerTrigger>

			<DrawerContent>
				<div className="py-8">
					<Button
						asChild
						variant={"link"}
						className="p-4 w-full"
					>
						<Link href={""}>Home</Link>
					</Button>
					<Button
						asChild
						variant={"link"}
						className="p-4 w-full"
					>
						<Link href={""}>Products</Link>
					</Button>
					<Button
						asChild
						variant={"link"}
						className="p-4 w-full"
					>
						<Link href={""}>About Us</Link>
					</Button>
					<Button
						asChild
						variant={"link"}
						className="p-4 w-full"
					>
						<Link href={""}>News</Link>
					</Button>
					<Button
						asChild
						variant={"link"}
						className="p-4 w-full"
					>
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
	)
}

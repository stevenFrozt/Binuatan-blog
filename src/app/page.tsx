import Card from "@/components/custom/Card"

export default function Home() {
	return (
		<main className="px-6 lg:px-52 p-4">
			{/* LANDING PAGE */}
			<section className="border min-h-[100vh]">
				LANDING AKO
			</section>
			{/* PRODUCT GRID show only 6 */}
			<section>
				<div className="gap-8 grid grid-cols-3 w-full">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					{/* TODO: View More */}
				</div>
			</section>
		</main>
	)
}

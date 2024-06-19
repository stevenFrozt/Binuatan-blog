import React from "react"

export default function Card() {
	return (
		<div className="bg-white hover:shadow-lg p-4 w-full transition-all hover:-translate-y-1 duration-300 cursor-pointer">
			<div className="bg-gray-500 rounded-sm w-full h-40"></div>
			<div className="py-4">
				<div className="flex text-xs">
					<h5 className="font-medium">Business travel</h5>
					<span className="text-gray-400">
						- July 2, 2020
					</span>
				</div>
				{/* TITLE */}
				<h4 className="py-2 font-bold">
					Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Explicabo, repudiandae.
				</h4>
				{/* DESCRIPTION */}
				<p className="text-gray-400 text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Dolores ad impedit numquam asperiores
					nostrum eaque harum at inventore, aliquam dolorem!
				</p>
			</div>
		</div>
	)
}

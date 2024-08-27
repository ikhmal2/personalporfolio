'use client';
import { useState } from "react";

export default function Flashlight() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	if (typeof window !== "undefined") {
		window.addEventListener('mousemove', function (event: MouseEvent) {
			setX(event.x)
			setY(event.y)
		});
	}
	return (
		// <div id="spotlight"></div>
		<div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style={{ background: `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)` }}></div>
	)
}
import Content from "@/components/content";
import Flashlight from "@/components/flashlight";
import Header from "@/components/header";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<Flashlight />
			<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
				<a href="#content" className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">Skip to Content</a>
				<div className="lg:flex lg:justify-between lg:gap-4">
					<Header />
					<Content />
				</div>
			</div>
		</main>
	);
}

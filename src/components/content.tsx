import Experience from "./experience"
import Projects from "./projects"

export default function Content() {
	return (
		<>
			<main id="content" className="pt-24 lg:w-1/2 lg:py-24">
				<section
					id="about"
					className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
					aria-label="About me"
				>
					<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
						<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
							About
						</h2>
					</div>
					<div>
						<p className="mb-4">
							In 2022, I wrapped up my studies in Computer Science and, after my finals, chose to dive straight into the job market rather than pursuing further education. It wasn't a smooth start—I faced over 50 rejections, whether it was failed interviews, ignored emails, or resumes tossed aside. But persistence paid off, and I eventually secured a position at a <a className="font-bold text-white hover:text-purple-400 focus-visible:text-purple-400" href="https://www.dentsucreative.com/location/malaysia" target="_blank"> creative agency</a>.
						</p>
						<p className="mb-4">
							Fast forward to today, I'm focused on building accessible user interfaces for  <a className="font-bold text-white hover:text-purple-400 focus-visible:text-purple-400" href="https://www.aia.com.my/" target="_blank">AIA Malaysia</a>. I take pride in crafting web apps that strike the perfect balance between thoughtful design and robust engineering—clean, simple visuals with a strong technical foundation. When I'm not coding, you'll find me exploring new programming languages and paradigms.
						</p>
						<p className="mb-4">
							And when I'm away from the screen, I make valiant attempts at healthy habits like reading or, as the kids say, "touching grass"—it’s a work in progress.
						</p>
					</div>
				</section>
				<Experience />
				<Projects />
			</main>
		</>
	)
}
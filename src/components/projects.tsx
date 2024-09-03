import Image from "next/image"
import Honda from "@/assets/Honda.png"
import AIA from "@/assets/AIA.png"
import Pavilion from "@/assets/Pavilion.png"
import Portfolio from "@/assets/Portfolio.png"
import Ambank from "@/assets/Ambank.png"

export default function Projects() {

	interface imgSrc {
		src: string | undefined | any,
		// width: number | undefined,
		// quality: number | undefined,
	}

	// const imageLoader = ({ src, width, quality }: imgSrc | any) => {
	// 	return `https://ikhmal2.github.io/personalporfolio/${src}?w=${width}&q=${quality || 75}`
	// }
	const imageLoader = ({ src }: imgSrc): any => {
		return `@/assets/${src}`
	}

	return (
		<section
			id="projects"
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			aria-label="Selected projects"
		>
			<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
					Projects
				</h2>
			</div>
			<div>
				<ul className="group/list">
					<li className="mb-12">
						<div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
							<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
							<div className="z-10 sm:order-2 sm:col-span-6">
								<h3>
									<a
										className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
										href="https://www.aia.com.my/"
										target="_blank"
										rel="noreferrer noopener"
										aria-label="AIA Malaysia (opens in a new tab)"
									>
										<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
										<span>
											AIA Malaysia{/* */}{" "}
											<span className="inline-block">

												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
														clipRule="evenodd"
													/>
												</svg>
											</span>
										</span>
									</a>
								</h3>
								<p className="mt-2 text-sm leading-normal">
									A web application utilized by customers, agents, and staff at AIA Malaysia to digitize previously paper-based transactions. This digital transformation enables a higher volume of transactions to be processed more efficiently, significantly reducing turnaround times from submission to completion.</p>
								<ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
											VueJs
										</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
											Tailwind CSS
										</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
											Adobe Experience Manager (AEM)
										</div>
									</li>
								</ul>
							</div>
							<Image className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" src={AIA} width={200} height={48} alt="AIA Malaysia" placeholder="blur" />
						</div>
					</li>
					<li className="mb-12">
						<div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
							<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
							<div className="z-10 sm:order-2 sm:col-span-6">
								<h3>
									<a
										className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
										href="https://www.honda.com.my/"
										target="_blank"
										rel="noreferrer noopener"
										aria-label="Honda Malaysia (opens in a new tab)"
									>
										<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
										<span>
											Honda{/* */}{" "}
											<span className="inline-block">
												Malaysia
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
														clipRule="evenodd"
													/>
												</svg>
											</span>
										</span>
									</a>
								</h3>
								<p className="mt-2 text-sm leading-normal">
									A corporate website designed to showcase monthly content and detailed car information, including specifications and pricing. It is built with a customized CMS, allowing administrators to efficiently add and remove content in accordance with the client’s requirements.
								</p>
								<ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
											Laravel
										</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
											jQuery
										</div>
									</li>

								</ul>
							</div>
							<Image className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" src={Honda} width={200} height={48} alt="Honda Malaysia" placeholder="blur" />
						</div>
					</li>
					<li className="mb-12">
						<div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
							<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
							<div className="z-10 sm:order-2 sm:col-span-6">
								<h3>
									<a
										className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
										href="https://paviliondamansaraheights.com/"
										target="_blank"
										rel="noreferrer noopener"
										aria-label="Pavilion Damansara Heights (opens in a new tab)"
									>
										<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
										<span>
											Pavilion{/* */}{" "}
											<span className="inline-block">
												Damansara Heights
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
														clipRule="evenodd"
													/>
												</svg>
											</span>
										</span>
									</a>
								</h3>
								<p className="mt-2 text-sm leading-normal">
									Showcases their mall and residential offerings. The site, built using WordPress and jQuery, highlights the property's features and amenities, providing a seamless experience for potential visitors and residents.
								</p>
								<ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
											Wordpress
										</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
											jQuery
										</div>
									</li>
								</ul>
							</div>
							<Image className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" src={Pavilion} width={200} height={48} alt="Pavilion Damansara Heights" placeholder="blur" />
						</div>
					</li>
					<li className="mb-12">
						<div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
							<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
							<div className="z-10 sm:order-2 sm:col-span-6">
								<h3>
									<a
										className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
										href="https://ambankspot.com/"
										target="_blank"
										rel="noreferrer noopener"
										aria-label="AmbankSpot (opens in a new tab)"
									>
										<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
										<span>
											AmbankSpot{/* */}{" "}
											<span className="inline-block">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
														clipRule="evenodd"
													/>
												</svg>
											</span>
										</span>
									</a>
								</h3>
								<p className="mt-2 text-sm leading-normal">
									A website developed for users to view the latest deals and promotions available to cardholders. The platform integrates with MasterCard and Visa APIs to retrieve and display current offers seamlessly.</p>
								<ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
											WordPress
										</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
											jQuery
										</div>
									</li>
								</ul>
							</div>
							<Image className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" src={Ambank} width={200} height={48} alt="AmbankSpot" placeholder="blur" />
						</div>
					</li>
					<li className="mb-12">
						<div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
							<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
							<div className="z-10 sm:order-2 sm:col-span-6">
								<h3>
									<a
										className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
										href="https://github.com/ikhmal2/personalporfolio"
										target="_blank"
										rel="noreferrer noopener"
										aria-label="Ikhmal's Portfolio (opens in a new tab)"
									>
										<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
										<span>
											Ikhmal's Portfolio{/* */}{" "}
											<span className="inline-block">
												(v2)
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
														clipRule="evenodd"
													/>
												</svg>
											</span>
										</span>
									</a>
								</h3>
								<p className="mt-2 text-sm leading-normal">
									A personal portfolio website, recently revamped to achieve a professional and minimalist design. The updated site features a clean, streamlined layout that effectively showcases work and skills, with a focus on readability and user experience.
								</p>
							</div>
							<Image className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" src={Portfolio} width={200} height={48} alt="Ikhmal's Portfolio" placeholder="blur" />
						</div>
					</li>

				</ul>
			</div>
		</section>

	)
};

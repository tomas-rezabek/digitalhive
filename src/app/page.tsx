import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { ArrowDownToLineIcon, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLineIcon,
    description: "Get your assests delivered to your email in secods and download them right away",
  },
  {
    name: "Guarenteed Quality",
    Icon: CheckCircle,
    description: "Our platfrom is verified by our team to ensure our highest quality",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description: "We've pledge 1% of slaes to the preservation and restoration of the nature.",
  }
]

export default function Home() {
	return (
		<>
			<MaxWidthWrapper>
				<div className="py-56 mx-auto text-center flex flex-col items-center max-w-3xl sm:text-3xl">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900">
						Your Place for high-quality {""}
						<span className="text-green-600">digital features</span>.
					</h1>
					<p className="mt-6 text-lg max-w-prose">
						Welcome to{" "}
						<span className="text-yellow-400 font-bold">DigitalHive</span>
					</p>
					<div className="flex flex-col sm:flex-row gap-4 mt-6">
						<Link href="/products" className={buttonVariants()}>
							Browse Trending
						</Link>
						<Button variant="ghost">Our quality promise &rarr;</Button>
					</div>
				</div>

				{/* TODO: List products */}
			</MaxWidthWrapper>
			<section className="border-t border-gray-200 bg-gray-50">
				<MaxWidthWrapper className="py-20">
					<div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
						{perks.map((perk) => (
							<div
								key={perk.name}
								className="text-center md:flex md:items-start md:text-left lg:block lg:text-center justify-center items-center"
							>
								<div className="md:flex-shrink-0 flex justify-center">
									<div className="h-16 w-16 flex rounded-full mr-2 items-center justify-center bg-green-100 text-green-900">
										{<perk.Icon className=""></perk.Icon>}
									</div>
								</div>
								<div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
									<h3 className="text-base font-medium text-gray-900">
										{perk.name}
									</h3>
									<p className="mt-3 text-sm text-muted-foreground">
										{perk.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</MaxWidthWrapper>
			</section>
		</>
	);
}

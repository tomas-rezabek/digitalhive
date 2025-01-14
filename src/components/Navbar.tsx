import MaxWidthWrapper from "./MaxWidthWrapper"
import Link from "next/link"
import { Icons } from "./Icons"
import NavItems from "./NavItems"

const Navbar = () => {
  return (
    <div className="sticky bg-white z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">

              {/* TODO: Mobile nav */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Icons.logo className="h-10 -w10"></Icons.logo>
                </Link>
              </div>

              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}

export default Navbar
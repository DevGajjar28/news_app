import { Dialog, Popover } from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { useRef, useState } from "react";

const products = [
  {
    name: "Become-One",
    description: "Get a better understanding of your traffic",
    href: "/Contribute",
    icon: ChartPieIcon,
  },
  {
    name: "Collection",
    description: "Speak directly to your customers",
    href: "/Collection",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "History",
    description: "Your customers’ data will be safe and secure",
    href: "/History",
    icon: FingerPrintIcon,
  },
  {
    name: "About us",
    description: "Connect with third-party tools",
    href: "/About",
    icon: SquaresPlusIcon,
  },
  // { name: 'Need Help', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <header className="bg-gray-400">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <span className="text-xl lg:text-2xl font-bold text-gray-900">
              Vortex
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <a
              href="/"
              className="text-lm font-semibold leading-6 text-gray-900"
            >
              Home
            </a>
            <a
              href="/"
              className="text-lm font-semibold leading-6 text-gray-900"
            >
              Blog
            </a>
            <a
              href="/"
              className="text-lm font-semibold leading-6 text-gray-900"
            >
              Your Artical
            </a>
          </Popover.Group>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex justify-center lg:flex-1">
            <a href="/Home" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <span className="text-xl lg:text-2xl font-bold text-gray-900">
                Vortex
              </span>
            </a>
          </div>
          <div className="mt-12 flow-root text-center">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Details
                </a>
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  YourArticals
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

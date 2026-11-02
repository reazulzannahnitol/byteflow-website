import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-5 py-10 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:items-center lg:px-10">
        {/* Logo and tagline */}
        <div className="flex flex-col gap-3">
          <Link href="/" aria-label="ByteFlow home" className="w-40">
            <Image
              src="/byteflow-logo.png"
              alt="ByteFlow Global IT"
              width={1060}
              height={326}
              className="h-auto w-full"
            />
          </Link>
          <p className="text-xs text-muted">Ideas → Code → Global impact.</p>
        </div>

        {/* Contact information */}
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-white">Contact Us</h3>

          <a
            href="tel:+8801885533374"
            className="text-xs text-muted hover:text-cyan-400"
          >
            +88 01885533374
          </a>

          <a
            href="https://wa.me/8801670872403"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted hover:text-cyan-400"
          >
            +88 01670872403 (WhatsApp)
          </a>

          <a
            href="mailto:byteflowglobalit@gmail.com"
            className="text-xs text-muted hover:text-cyan-400"
          >
            byteflowglobalit@gmail.com
          </a>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-white">Our Address</h3>

          <p className="text-xs leading-6 text-muted">
            House #202, Road #2, Baridhara DOHS, Dhaka-1206, Bangladesh
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col gap-2 lg:items-end">
          <p className="text-xs text-muted lg:text-right">
            © {new Date().getFullYear()} ByteFlow Global IT.
          </p>
          <p className="text-xs text-muted">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

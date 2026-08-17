export default function Footer({ brandName = "CHZMODEL" }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-white border-t border-neutral-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4" data-aos="fade-up">
        
        {/* Brand Copyright */}
        <p className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
          © {currentYear} {brandName}. All rights reserved. <span className="mx-1">•</span> Developed by RIC ®
        </p>

        {/* Index counter / Back to top */}
        <div className="flex items-center space-x-6">
          <span className="text-xs font-mono text-neutral-400 font-bold">
            CHZMODEL
          </span>
          <a
            href="#content-focus"
            className="text-xs text-neutral-600 hover:text-black uppercase tracking-widest font-semibold transition-colors"
          >
            Back to Top ↑
          </a>
        </div>

      </div>
    </footer>
  )
}

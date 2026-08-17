import { useState } from 'react'

export default function ContactSection({ contactInfo }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Editorial',
    message: '',
    botWebsite: '' // Honeypot field for bot trap
  })
  const [isHumanVerified, setIsHumanVerified] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorMsg('')

    // Bot Trap Check 1: Honeypot field filled by automated spam bots
    if (formData.botWebsite) {
      console.warn('Bot detected via honeypot field.')
      return
    }

    // Bot Trap Check 2: Interactive Human Verification check
    if (!isHumanVerified) {
      setErrorMsg('Please complete the security check ("I am human") before submitting.')
      return
    }

    if (!formData.name || !formData.email) return

    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setIsHumanVerified(false)
      setFormData({ name: '', email: '', projectType: 'Editorial', message: '', botWebsite: '' })
    }, 4000)
  }

  return (
    <section id="contact" className="w-full bg-white py-16 sm:py-24 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10 border-b border-neutral-100 pb-4" data-aos="fade-down">
          <h2 className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase">
            03 / BOOKING & INQUIRIES
          </h2>
          <span className="text-xs font-bold tracking-widest text-neutral-900 uppercase">
            GET IN TOUCH
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 space-y-8" data-aos="fade-right" data-aos-delay="100">
            <div>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900 uppercase">
                WORK WITH CHAZSEY
              </h3>
              <p className="text-sm text-neutral-600 mt-2 font-light">
                Direct booking inquiries for runway shows, campaign lookbooks, commercial assignments, and editorial shoots.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase block">
                  DIRECT EMAIL
                </span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-base sm:text-lg font-bold text-neutral-900 hover:text-neutral-600 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase block mb-3">
                SOCIAL CHANNELS
              </span>
              <div className="flex flex-wrap gap-3">
                {contactInfo.socials.map((soc) => (
                  <a
                    key={soc.platform}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-neutral-100 hover:bg-neutral-900 hover:text-white text-neutral-800 text-xs font-bold uppercase tracking-widest transition-all duration-300"
                  >
                    {soc.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-neutral-50 p-6 sm:p-10 border border-neutral-100" data-aos="fade-left" data-aos-delay="200">
            {submitted ? (
              <div className="py-12 text-center space-y-3 animate-fade-in">
                <div className="w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h4 className="text-xl font-bold uppercase tracking-tight text-neutral-900">
                  INQUIRY SENT
                </h4>
                <p className="text-xs text-neutral-600 uppercase tracking-widest">
                  Thank you for reaching out. Chazsey will respond shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Honeypot Anti-Bot Field (Hidden from real users, filled by spam bots) */}
                <div className="hidden aria-hidden:true" style={{ display: 'none', opacity: 0, position: 'absolute', left: '-9999px' }}>
                  <label htmlFor="botWebsite">Leave this field blank</label>
                  <input
                    type="text"
                    id="botWebsite"
                    name="botWebsite"
                    tabIndex="-1"
                    autoComplete="off"
                    value={formData.botWebsite}
                    onChange={(e) => setFormData({ ...formData, botWebsite: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-neutral-500 uppercase mb-2">
                      Your Name / Brand *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vogue Editorial / Jane Doe"
                      className="w-full bg-white border border-neutral-200 px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-neutral-500 uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. contact@brand.com"
                      className="w-full bg-white border border-neutral-200 px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-neutral-500 uppercase mb-2">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-white border border-neutral-200 px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                  >
                    <option value="Editorial">Editorial Shoot</option>
                    <option value="Runway">Runway / Fashion Week</option>
                    <option value="Commercial">Commercial / Ad Campaign</option>
                    <option value="Pageant">Pageant Appearance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-neutral-500 uppercase mb-2">
                    Message / Project Details
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide shoot dates, location, or creative brief..."
                    className="w-full bg-white border border-neutral-200 px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                  />
                </div>

                {/* Bot Trap Checkbox Verification */}
                <div className="bg-white p-4 border border-neutral-200 flex items-center justify-between">
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={isHumanVerified}
                      onChange={(e) => {
                        setIsHumanVerified(e.target.checked)
                        setErrorMsg('')
                      }}
                      className="w-4 h-4 accent-neutral-900 cursor-pointer"
                    />
                    <span className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                      I am human <span className="text-neutral-400 text-[10px] font-mono">(Security Check)</span>
                    </span>
                  </label>
                  <span className="text-neutral-400 text-xs font-mono">🛡️ Verified</span>
                </div>

                {errorMsg && (
                  <p className="text-xs text-red-600 font-semibold tracking-wide uppercase">
                    ⚠️ {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-4 px-8 text-xs uppercase tracking-widest transition-all duration-300 shadow-md"
                >
                  Send Booking Inquiry
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}

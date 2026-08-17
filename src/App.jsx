import { useState, useEffect } from 'react'
import AOS from 'aos'
import Header from './components/common/Header'
import LoadingScreen from './components/common/LoadingScreen'
import ContentFocusGrid from './components/hero/ContentFocusGrid'
import AboutBio from './components/profile/AboutBio'
import AchievementsSection from './components/profile/AchievementsSection'
import PortfolioGallery from './components/gallery/PortfolioGallery'
import VideoPromotionsSection from './components/promotions/VideoPromotionsSection'
import LightboxModal from './components/common/LightboxModal'
import ContactSection from './components/contact/ContactSection'
import Footer from './components/common/Footer'
import {
  heroData,
  modelProfileData,
  achievementsData,
  videoPromotionsData,
  galleryCategories,
  portfolioGalleryItems,
  contactData
} from './data/portfolioData'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [lightboxState, setLightboxState] = useState({ isOpen: false, index: 0, customItem: null })

  // Initialize AOS after loading screen finishes
  useEffect(() => {
    if (!isLoading) {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 60,
        disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
      })
    }
  }, [isLoading])

  const handleOpenLightbox = (index) => {
    setLightboxState({ isOpen: true, index, customItem: null })
  }

  const handleOpenHeroLightbox = (customItem) => {
    setLightboxState({ isOpen: true, index: 0, customItem })
  }

  const handleCloseLightbox = () => {
    setLightboxState({ isOpen: false, index: 0, customItem: null })
  }

  const handlePrevLightbox = () => {
    if (lightboxState.customItem) return
    setLightboxState((prev) => ({
      ...prev,
      index: (prev.index - 1 + portfolioGalleryItems.length) % portfolioGalleryItems.length
    }))
  }

  const handleNextLightbox = () => {
    if (lightboxState.customItem) return
    setLightboxState((prev) => ({
      ...prev,
      index: (prev.index + 1) % portfolioGalleryItems.length
    }))
  }

  const activeLightboxItem = lightboxState.customItem || portfolioGalleryItems[lightboxState.index]

  return (
    <>
      {/* Initial Loading Screen */}
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}

      {!isLoading && (
        <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans antialiased selection:bg-neutral-900 selection:text-white">
          {/* Header Navigation */}
          <Header
            brandName={heroData.header.name}
            roleTitle={heroData.header.role}
            navLinks={heroData.header.navLinks}
          />

          {/* Main Content Area */}
          <main className="flex-1 w-full">
            {/* Hero Section */}
            <ContentFocusGrid data={heroData} onImageClick={handleOpenHeroLightbox} />

            {/* Model Profile & Specifications */}
            <AboutBio profile={modelProfileData} />

            {/* Pageant Titles & Runway Fashion Shows */}
            <AchievementsSection achievements={achievementsData} />

            {/* Interactive Gallery */}
            <PortfolioGallery
              items={portfolioGalleryItems}
              categories={galleryCategories}
              onOpenLightbox={handleOpenLightbox}
            />

            {/* Video Promotions & Campaigns */}
            <VideoPromotionsSection promotions={videoPromotionsData} />

            {/* Contact & Booking Section */}
            <ContactSection contactInfo={contactData} />
          </main>

          {/* Footer */}
          <Footer brandName={heroData.header.name} />

          {/* Lightbox Detail Modal */}
          <LightboxModal
            item={activeLightboxItem}
            isOpen={lightboxState.isOpen}
            onClose={handleCloseLightbox}
            onPrev={handlePrevLightbox}
            onNext={handleNextLightbox}
          />
        </div>
      )}
    </>
  )
}

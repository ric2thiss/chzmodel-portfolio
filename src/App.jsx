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
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    itemsList: [],
    currentIndex: 0
  })

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

  const handleOpenLightbox = (itemsList, index) => {
    setLightboxState({
      isOpen: true,
      itemsList: Array.isArray(itemsList) ? itemsList : [itemsList],
      currentIndex: typeof index === 'number' ? index : 0
    })
  }

  const handleOpenHeroLightbox = (customItem) => {
    setLightboxState({
      isOpen: true,
      itemsList: [customItem],
      currentIndex: 0
    })
  }

  const handleCloseLightbox = () => {
    setLightboxState({
      isOpen: false,
      itemsList: [],
      currentIndex: 0
    })
  }

  const handlePrevLightbox = () => {
    if (lightboxState.itemsList.length <= 1) return
    setLightboxState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.itemsList.length) % prev.itemsList.length
    }))
  }

  const handleNextLightbox = () => {
    if (lightboxState.itemsList.length <= 1) return
    setLightboxState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.itemsList.length
    }))
  }

  const activeLightboxItem = lightboxState.itemsList[lightboxState.currentIndex]

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

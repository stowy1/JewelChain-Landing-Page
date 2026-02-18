import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import VideoSection from '@/components/VideoSection'
import ProblemSection from '@/components/ProblemSection'
import FeatureGrid from '@/components/FeatureGrid'
import HowItWorks from '@/components/HowItWorks'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import { designerContent } from '@/lib/content'

export default function DesignerHomePage() {
  return (
    <main className="min-h-screen">
      <Navbar currentAudience="designer" />
      
      <Hero
        headline={designerContent.hero.headline}
        subtext={designerContent.hero.subtext}
        primaryCta={designerContent.hero.primaryCta}
        variant={designerContent.hero.variant}
      />

      {process.env.NEXT_PUBLIC_SHOW_VSL === 'true' && (
        <VideoSection
          title={designerContent.vsl.title}
          subtitle={designerContent.vsl.subtitle}
          primaryCta={designerContent.vsl.primaryCta}
        />
      )}
      
      <ProblemSection
        title={designerContent.problems.title}
        subtitle={designerContent.problems.subtitle}
        problems={designerContent.problems.problems}
      />
      
      <FeatureGrid title="Jewel Chain — The Solution" subtitle="Replace manual sourcing with structured production infrastructure." features={designerContent.features} />
      
      <HowItWorks
        title={designerContent.howItWorks.sectionTitle}
        sectionTagline={designerContent.howItWorks.sectionTagline}
        twoWaysToSource={designerContent.howItWorks.twoWaysToSource}
        steps={designerContent.howItWorks.steps}
      />
      
      <CTA
        headline={designerContent.cta.headline}
        cta={designerContent.cta.cta}
      />
      
      <Footer />
    </main>
  )
}

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import VideoSection from '@/components/VideoSection'
import ProblemSection from '@/components/ProblemSection'
import FeatureGrid from '@/components/FeatureGrid'
import HowItWorks from '@/components/HowItWorks'
import OutcomeSection from '@/components/OutcomeSection'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import { manufacturerContent } from '@/lib/content'

export default function ManufacturerHomePage() {
  return (
    <main className="min-h-screen">
      <Navbar currentAudience="manufacturer" />
      
      <Hero
        headline={manufacturerContent.hero.headline}
        subtext={manufacturerContent.hero.subtext}
        primaryCta={manufacturerContent.hero.primaryCta}
        secondaryCtaNote={manufacturerContent.hero.secondaryCtaNote}
        variant={manufacturerContent.hero.variant}
      />
      
      <TrustStrip text={manufacturerContent.trustStrip.text} />
      
      {process.env.NEXT_PUBLIC_SHOW_VSL === 'true' && (
        <VideoSection
          title={manufacturerContent.vsl.title}
          subtitle={manufacturerContent.vsl.subtitle}
          primaryCta={manufacturerContent.vsl.primaryCta}
          secondaryCtaNote={manufacturerContent.vsl.secondaryCtaNote}
        />
      )}
      
      <ProblemSection
        title={manufacturerContent.problems.title}
        subtitle={manufacturerContent.problems.subtitle}
        problems={manufacturerContent.problems.problems}
      />
      
      <FeatureGrid title="What Jewel Chain Offers" subtitle="Purpose-built tools for manufacturers who compete on structure, not price." features={manufacturerContent.features} />
      
      <HowItWorks steps={manufacturerContent.howItWorks.steps} />
      
      <OutcomeSection
        title={manufacturerContent.outcomes.title}
        outcomes={manufacturerContent.outcomes.outcomes}
      />
      
      <CTA
        headline={manufacturerContent.cta.headline}
        cta={manufacturerContent.cta.cta}
      />
      
      <Footer />
    </main>
  )
}

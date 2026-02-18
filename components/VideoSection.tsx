import Section from './Section'
import Button from './Button'

interface VideoSectionProps {
  title: string
  subtitle: string
  primaryCta: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
  secondaryCtaNote?: string
}

export default function VideoSection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  secondaryCtaNote
}: VideoSectionProps) {
  return (
    <Section id="vsl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          {title}
        </h2>
        <p className="text-lg text-text-secondary mb-8 text-center">
          {subtitle}
        </p>
        
        {/* Video placeholder */}
        <div className="aspect-video bg-surface-elevated rounded-lg mb-8 flex items-center justify-center border border-border">
          <div className="text-text-muted text-sm">Video placeholder (16:9)</div>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href={primaryCta.href} variant="primary">
              {primaryCta.text}
            </Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="outline">
                {secondaryCta.text}
              </Button>
            )}
          </div>
          {secondaryCtaNote && (
            <p className="text-sm text-text-muted text-center">{secondaryCtaNote}</p>
          )}
        </div>
      </div>
    </Section>
  )
}

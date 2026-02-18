import Button from './Button'

interface HeroProps {
  headline: string
  subtext: string
  primaryCta: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
  secondaryCtaNote?: string
  variant?: 'default' | 'tight'
}

export default function Hero({
  headline,
  subtext,
  primaryCta,
  secondaryCta,
  secondaryCtaNote,
  variant = 'default'
}: HeroProps) {
  const containerClass = variant === 'tight' 
    ? 'max-w-4xl mx-auto text-center'
    : 'max-w-5xl mx-auto text-center'

  return (
    <section className="w-full pt-32 pb-24 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className={`w-full ${containerClass}`}>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-center">
          {headline}
        </h1>
        <p className="text-lg sm:text-xl text-text-secondary mb-10 max-w-3xl mx-auto text-center">
          {subtext}
        </p>
        <div className="flex flex-col items-center gap-4 w-full">
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
            <p className="text-sm text-text-muted text-center w-full">{secondaryCtaNote}</p>
          )}
        </div>
      </div>
    </section>
  )
}

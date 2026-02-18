import Section from './Section'
import Button from './Button'

interface CTAProps {
  headline: string
  cta: { text: string; href: string }
}

export default function CTA({ headline, cta }: CTAProps) {
  return (
    <Section variant="surface">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          {headline}
        </h2>
        <Button href={cta.href} variant="primary" className="text-lg px-8 py-4">
          {cta.text}
        </Button>
      </div>
    </Section>
  )
}

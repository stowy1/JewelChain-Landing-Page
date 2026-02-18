import Section from './Section'

interface Feature {
  title: string
  description: string
}

interface FeatureGridProps {
  title?: string
  subtitle?: string
  features: Feature[]
}

export default function FeatureGrid({
  title,
  subtitle,
  features
}: FeatureGridProps) {
  if (!features || features.length === 0) {
    return null
  }

  return (
    <Section>
      <div className="max-w-6xl mx-auto">
        {title && (
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-lg text-text-secondary mb-12 text-center max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-surface-elevated p-6 rounded-lg border border-border"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

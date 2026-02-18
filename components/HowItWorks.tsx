import Section from './Section'

export interface Step {
  number: string
  title: string
  description: string
  bullets?: string[]
}

export interface TwoWaysToSource {
  title: string
  left: { title: string; description: string }
  right: { title: string; description: string }
}

interface HowItWorksProps {
  title?: string
  sectionTagline?: string
  steps: Step[]
  twoWaysToSource?: TwoWaysToSource
}

function StepCard({ step, className = '' }: { step: Step; className?: string }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-start gap-4 text-left">
        <div className="w-12 h-12 rounded-full bg-gold text-background flex items-center justify-center font-bold text-lg shrink-0">
          {step.number}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
          <p className="text-text-secondary text-sm mb-3">{step.description}</p>
          {step.bullets && step.bullets.length > 0 && (
            <ul className="text-text-secondary text-sm space-y-1 list-disc list-inside">
              {step.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default function HowItWorks({ title, sectionTagline, steps, twoWaysToSource }: HowItWorksProps) {
  const hasBrandLayout = twoWaysToSource != null

  return (
    <Section variant="surface">
      <div className="max-w-6xl mx-auto">
        {title && (
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-center">
            {title}
          </h2>
        )}
        {sectionTagline && (
          <p className="text-lg text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            {sectionTagline}
          </p>
        )}
        {!sectionTagline && title && <div className="mb-12" />}

        {hasBrandLayout ? (
          <>
            {/* Steps 01 & 02 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
              <StepCard step={steps[0]} />
              <StepCard step={steps[1]} />
            </div>

            {/* Two Ways to Source */}
            <div className="mb-14">
              <h3 className="text-2xl font-bold text-center mb-8">
                {twoWaysToSource.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-surface-elevated border border-border rounded-lg p-6 text-center">
                  <h4 className="text-lg font-semibold mb-3">{twoWaysToSource.left.title}</h4>
                  <p className="text-text-secondary text-sm">{twoWaysToSource.left.description}</p>
                </div>
                <div className="bg-surface-elevated border border-border rounded-lg p-6 text-center">
                  <h4 className="text-lg font-semibold mb-3">{twoWaysToSource.right.title}</h4>
                  <p className="text-text-secondary text-sm">{twoWaysToSource.right.description}</p>
                </div>
              </div>
            </div>

            {/* Steps 03–06 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.slice(2, 6).map((step, index) => (
                <StepCard key={index} step={step} />
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gold text-background flex items-center justify-center font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-text-secondary text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-border transform translate-x-4">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-border border-t-4 border-t-transparent border-b-4 border-b-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  )
}

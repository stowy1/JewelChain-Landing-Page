import Section from './Section'

interface Outcome {
  text: string
}

interface OutcomeSectionProps {
  title: string
  outcomes: Outcome[]
}

export default function OutcomeSection({
  title,
  outcomes
}: OutcomeSectionProps) {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          {title}
        </h2>
        <ul className="space-y-4">
          {outcomes.map((outcome, index) => (
            <li
              key={index}
              className="flex items-start gap-4 text-lg text-text-secondary"
            >
              <span className="text-gold mt-1">•</span>
              <span>{outcome.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

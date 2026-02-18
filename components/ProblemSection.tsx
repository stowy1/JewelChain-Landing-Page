import Section from './Section'

interface ProblemCard {
  title: string
  description: string
}

interface ProblemSectionProps {
  title: string
  subtitle: string
  problems: ProblemCard[]
}

export default function ProblemSection({
  title,
  subtitle,
  problems
}: ProblemSectionProps) {
  return (
    <Section variant="surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          {title}
        </h2>
        <p className="text-lg text-text-secondary mb-12 text-center max-w-3xl mx-auto">
          {subtitle}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-surface-elevated p-6 rounded-lg border border-border"
            >
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-text-secondary">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

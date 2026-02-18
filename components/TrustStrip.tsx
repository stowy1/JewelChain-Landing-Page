interface TrustStripProps {
  text: string
}

export default function TrustStrip({ text }: TrustStripProps) {
  return (
    <div className="border-y border-border bg-surface py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-text-secondary">
          {text}
        </p>
      </div>
    </div>
  )
}

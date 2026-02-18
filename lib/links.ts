/**
 * Builds a link with UTM parameters preserved from current URL
 */
export function buildLinkWithUtm(baseUrl: string, currentSearchParams?: string): string {
  if (!currentSearchParams) {
    return baseUrl
  }

  const params = new URLSearchParams(currentSearchParams)
  const utmParams: string[] = []
  
  // Preserve UTM parameters
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
  utmKeys.forEach(key => {
    const value = params.get(key)
    if (value) {
      utmParams.push(`${key}=${encodeURIComponent(value)}`)
    }
  })

  if (utmParams.length === 0) {
    return baseUrl
  }

  const separator = baseUrl.includes('?') ? '&' : '?'
  return `${baseUrl}${separator}${utmParams.join('&')}`
}

/**
 * Gets UTM parameters from search params string
 */
export function getUtmParams(searchParams: string): Record<string, string> {
  const params = new URLSearchParams(searchParams)
  const utmParams: Record<string, string> = {}
  
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
  utmKeys.forEach(key => {
    const value = params.get(key)
    if (value) {
      utmParams[key] = value
    }
  })

  return utmParams
}

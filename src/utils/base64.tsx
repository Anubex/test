export function parseDataUrl(dataUrl: string) {
  const matchResult = dataUrl.match(/^data:(.+);base64,(.*)$/)
  if (!matchResult) {
    throw new Error('Invalid Data URL')
  }
  const contentType = matchResult[1]
  const base64Data = matchResult[2]
  return { contentType, base64Data }
}

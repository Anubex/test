import { useCallback, useState } from 'react'

interface CardRatioParams {
  height: number
  width: number
}

type UseCardRatioReturn = [number, (height: number, width: number) => void]

export function useCardRatio(
  initialParams: CardRatioParams,
): UseCardRatioReturn {
  const [aspectRatio, setAspectRatio] = useState<number>(
    initialParams.width / initialParams.height,
  )

  const calculateRatio = useCallback((height: number, width: number) => {
    if (height && width) {
      const isLandscape = height <= width
      const ratio = isLandscape ? width / height : height / width

      setAspectRatio(ratio)
    }
  }, [])

  return [aspectRatio, calculateRatio]
}

import { useColor } from './useColor'

let sharedColorInstance: ReturnType<typeof useColor> | null = null

export const useSharedColor = () => {
  if (!sharedColorInstance) {
    sharedColorInstance = useColor()
  }
  return sharedColorInstance
}

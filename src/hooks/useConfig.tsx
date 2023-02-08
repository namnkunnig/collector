const useConfig = () => {
  const rate = import.meta.env.VITE_FEATURE_YEARLY_RATE
  return { rate }
}

export default useConfig

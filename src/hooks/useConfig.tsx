const useConfig = () => {
  const rate = parseInt(import.meta.env.VITE_FEATURE_YEARLY_RATE)
  const minAmount = parseInt(import.meta.env.VITE_FEATURE_MIN_AMOUNT)
  const maxAmount = parseInt(import.meta.env.VITE_FEATURE_MAX_AMOUNT)
  const stepAmount = parseInt(import.meta.env.VITE_FEATURE_STEP_AMOUNT)
  const defaultAmount = parseInt(import.meta.env.VITE_FEATURE_DEFAULT_AMOUNT)
  const minLength = parseInt(import.meta.env.VITE_FEATURE_MIN_LENGTH)
  const maxLength = parseInt(import.meta.env.VITE_FEATURE_MAX_LENGTH)
  const stepLength = parseInt(import.meta.env.VITE_FEATURE_STEP_LENGTH)
  const defaultLength = parseInt(import.meta.env.VITE_FEATURE_DEFAULT_LENGTH)
  return { rate, minAmount, maxAmount, minLength, maxLength, stepAmount, stepLength, defaultAmount, defaultLength }
}

export default useConfig

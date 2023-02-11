import { useEffect, useRef, useState } from 'react'

export default function RangedInput({ min, max, step, unit, defaultValue, callback }: RangedInput) {
  const buttonRef = useRef(null)
  const sliderRef = useRef(null)
  const inputRef = useRef(null)

  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    updateSlider(defaultValue)
  }, [])

  return (
    <div ref={inputRef} className="w-full relative h-16">
      <input type="range" min={0} max={max} step={step} defaultValue={defaultValue} className="w-full slider appearance-none" onInput={inputHandler} />
      <div ref={buttonRef} className="h-12 w-12 absolute top-[-8px] z-20 bg-violet rounded-full border-2 border-solid border-white">
        <div className="flex flex-col justify-center h-full w-32 pr-4 text-right -ml-32">
          <div className={`text-white whitespace-nowrap`}>
            {value.toLocaleString('sv-SE')} {unit}
          </div>
        </div>
      </div>
      <div ref={sliderRef} className={`w-0 h-8 bg-violet absolute box-border rounded-l-full text-right text-white pt-[0.8px] pr-12 pl-2 z-10 rounded-none`}></div>
      <div className={`border-[1px] border-solid border-slate-600 h-8 box-border w-full rounded-full absolute mr-[148px] text-right text-black pr-8`}>
        <span className={`align-middle`}>
          {max.toLocaleString('sv-SE')} {unit}
        </span>
      </div>
    </div>
  )

  function inputHandler(e: React.MouseEvent<HTMLInputElement>) {
    const value = parseInt(e.currentTarget?.value)
    if (value < min) {
      e.preventDefault()
      return
    }
    setValue(value)
    callback(value)
    updateSlider(value)
  }

  function updateSlider(value: number) {
    const currentButton = buttonRef.current
    const currentProgress = sliderRef.current
    const currentInput = inputRef.current
    if (!(currentButton && currentProgress && currentInput)) return
    const button = currentButton as HTMLDivElement
    const slider = currentProgress as HTMLDivElement
    const input = currentInput as HTMLDivElement

    const adjust = (input.clientWidth - 48) / input.clientWidth
    const adjust2 = (input.clientWidth - 6) / input.clientWidth

    button.style.left = (value / (max / 100)) * adjust + '%'
    slider.style.width = (value / (max / 100)) * adjust2 + '%'
  }
}

interface RangedInput {
  min: number
  max: number
  step: number
  unit: string
  defaultValue: number
  callback: (value: number) => void
}

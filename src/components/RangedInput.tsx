import { useRef, useState } from 'react'

export default function RangedInput({ min, max, step, unit, defaultValue }: RangedInput) {
  const buttonRef = useRef(null)
  const sliderRef = useRef(null)
  const [value, setValue] = useState(defaultValue)

  return (
    <div className="w-full relative h-12">
      <input type="range" min={min} max={max} step={step} defaultValue={0} className="w-full slider" onInput={inputHandler} />
      <div ref={buttonRef} className="h-12 w-12 absolute top-[-9px] z-20 bg-collector rounded-full border-2 border-solid border-white"></div>
      <div
        ref={sliderRef}
        className={`w-0 h-8 bg-collector absolute box-border rounded-l-full ml-5 text-right text-white pt-[0.8px] pr-8 z-10 rounded-none ${value === min ? 'hidden' : ''}`}
      >
        <span className={`align-middle ${value >= min * 1 ? '' : 'hidden'}`}>
          {value} {unit}
        </span>
      </div>
      <div className={`border-[1px] border-solid border-slate-600 h-8 box-border rounded-full absolute w-[96%] ml-5 mr-[148px] text-right text-black pr-8`}>
        <span className={`align-middle`}>
          {max} {unit}
        </span>
      </div>
    </div>
  )

  function inputHandler(e: React.MouseEvent<HTMLInputElement>) {
    const value = parseInt(e.currentTarget?.value)
    setValue(value)
    const currentButton = buttonRef.current
    const currentProgress = sliderRef.current
    if (!currentButton || !currentProgress) return
    const button = currentButton as HTMLDivElement
    const slider = currentProgress as HTMLDivElement
    button.style.left = ((value - min) / ((max - min) / 100)) * 0.96 + '%'
    slider.style.width = ((value - min) / ((max - min) / 100)) * 0.96 + '%'
  }
}

interface RangedInput {
  min: number
  max: number
  step: number
  unit: string
  defaultValue: number
}

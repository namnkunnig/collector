import { useRef } from 'react'

export default function RangedInput() {
  const buttonRef = useRef(null)
  const sliderRef = useRef(null)
  return (
    <div className="w-full relative">
      <input type="range" min="0" max="1000" step="100" id="slider" defaultValue={0} className="w-full" onInput={InputHandler} />
      <div ref={buttonRef} className="h-[48px] w-[48px] absolute top-[-12px] z-[2]">
        <div className="h-[48px] w-[48px]  bg-collector rounded-full border-2 border-solid border-white absolute"></div>
      </div>
      <div
        ref={sliderRef}
        className="w-0 h-[32px] bg-collector absolute top-0 left-0 rounded-l-full mt-[-4px] ml-[20px] text-right text-white pr-[40px] pt-[4px] z-[1] rounded-none"
      >
        1000 kr
      </div>
      <div className="border-[1px] border-solid border-black height-[32px] rounded-full absolute top-[-4px] left-0 w-[96%] ml-[20px] mr-[148px] text-right text-black pr-[30px] pt-[3px]">
        200 000 kr
      </div>
    </div>
  )

  function InputHandler(e: React.MouseEvent<HTMLInputElement>) {
    const currentButton = buttonRef.current
    const currentProgress = sliderRef.current
    if (!currentButton || !currentProgress) return
    const button = currentButton as HTMLDivElement
    const slider = currentProgress as HTMLDivElement
    button.style.left = (parseInt(e.currentTarget?.value) / 10) * 0.96 + '%'
    slider.style.width = (parseInt(e.currentTarget?.value) / 10) * 0.96 + '%'
  }
}

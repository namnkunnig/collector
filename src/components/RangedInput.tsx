import { useRef } from 'react'

export default function RangedInput() {
  const buttonRef = useRef(null)
  const sliderRef = useRef(null)
  return (
    <div className="w-full relative">
      <input type="range" min="0" max="1000" step="100" id="slider" defaultValue={0} className="w-full" onInput={InputHandler} />
      <div ref={buttonRef} className="h-12 w-12 absolute top-[-9px] z-20 bg-collector rounded-full border-2 border-solid border-white"></div>
      <div ref={sliderRef} className="w-0 h-8 bg-collector absolute box-border rounded-l-full ml-5 text-right text-white pt-[0.8px] pr-10 z-10 rounded-none">
        <span className="align-middle">1000 kr</span>
      </div>
      <div className="border-[1px] border-solid border-slate-600 h-8 box-border rounded-full absolute w-[96%] ml-5 mr-[148px] text-right text-black pr-8">
        <span className="align-middle">200 000 kr</span>
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

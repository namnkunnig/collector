export default function RangedInput() {
  return (
    <div className="w-full relative">
      <input type="range" min="0" max="1000" step="100" id="slider" defaultValue={0} className="w-full" onInput={InputHandler} />
      <div id="selector">
        <div id="button"></div>
      </div>
      <div id="progress">1000 kr</div>
      <div id="background">200 000 kr</div>
    </div>
  )

  function InputHandler(e: React.MouseEvent<HTMLInputElement>) {
    const button = document.getElementById('selector')
    const progress = document.getElementById('progress')
    if (!button || !progress) return
    button.style.left = (parseInt(e.currentTarget?.value) / 10) * 0.96 + '%'
    progress.style.width = (parseInt(e.currentTarget?.value) / 10) * 0.96 + '%'
  }
}

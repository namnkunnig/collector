import RangedInput from '../components/RangedInput'
import ToolTip from '../components/ToolTip'

export default function CalculatorPage() {
  return (
    <div className="flex w-full justify-center">
      <main className="w-[1000px] py-10">
        <div className="flex justify-between">
          <h1 className="text-xl mb-8 font-semibold">Lånekalkyl</h1>
          <ToolTip text={'12345 SEK / mån'}></ToolTip>
        </div>
        <h2 className="text-lg font-semibold mb-2">Lånebelopp</h2>
        <RangedInput defaultValue={100000} min={20000} max={200000} step={10000} unit="kr"></RangedInput>
        <h2 className="text-lg font-semibold mb-2">Lånetid</h2>
        <RangedInput defaultValue={7} min={2} max={10} step={1} unit="år"></RangedInput>
      </main>
    </div>
  )
}

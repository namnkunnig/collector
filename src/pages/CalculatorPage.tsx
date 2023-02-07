import RangedInput from '../components/RangedInput'

export default function CalculatorPage() {
  return (
    <div className="flex w-full justify-center">
      <main className="w-[1200px] py-10">
        <h1 className="text-xl mb-8 font-semibold">Lånekalkyl</h1>
        <h2 className="text-lg font-semibold mb-2">Lånebelopp</h2>
        <RangedInput defaultValue={100000} min={20000} max={200000} step={10000} unit="kr"></RangedInput>
        <h2 className="text-lg font-semibold mb-2">Lånetid</h2>
        <RangedInput defaultValue={7} min={2} max={10} step={1} unit="år"></RangedInput>
      </main>
    </div>
  )
}

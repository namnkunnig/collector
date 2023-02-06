import RangedInput from '../components/RangedInput'

export default function CalculatorPage() {
  return (
    <div className="flex w-full justify-center">
      <main className="w-[1200px] py-10">
        <h1 className="text-xl mb-3">Beräkna din månadskostnad</h1>
        <RangedInput></RangedInput>
      </main>
    </div>
  )
}

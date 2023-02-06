export default function CalculatorPage() {
  return (
    <div className="flex w-full justify-center">
      <main className="w-[1200px] py-10">
        <h1 className="text-xl mb-3">Beräkna din månadskostnad</h1>
        <div className="">
          <input id="slider" type="range" min="20000" max="200000" step="10000" className="w-full appearance-none h-7 bg-transparent rounded-full" />
        </div>
      </main>
    </div>
  )
}

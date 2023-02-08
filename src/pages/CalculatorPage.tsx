import { useEffect, useState } from 'react'
import RangedInput from '../components/RangedInput'
import ToolTip from '../components/ToolTip'
import useConfig from '../hooks/useConfig'

export default function CalculatorPage() {
  const [amount, setAmount] = useState(100000)
  const [length, setLength] = useState(7)
  const [monthlyCost, setMonthlyCost] = useState(0)

  useEffect(() => {
    const cost = calculateMonthlyCost()
    setMonthlyCost(cost)
  }, [amount, length])

  return (
    <div className="flex w-full justify-center">
      <main className="w-[1000px] py-10">
        <div className="flex justify-between">
          <h1 className="text-xl mb-8 font-semibold">Lånekalkyl</h1>
          <ToolTip text={`${monthlyCost} SEK / mån`}></ToolTip>
        </div>
        <h2 className="text-lg font-semibold mb-2">Lånebelopp</h2>
        <RangedInput defaultValue={100000} min={20000} max={200000} step={10000} unit="kr" callback={(amount: number) => setAmount(amount)}></RangedInput>
        <h2 className="text-lg font-semibold mb-2">Lånetid</h2>
        <RangedInput defaultValue={7} min={2} max={10} step={1} unit="år" callback={(length: number) => setLength(length)}></RangedInput>
        <div className="flex justify-end">
          <button className="rounded mt-4 bg-green p-3 text-white font-semibold" onClick={() => console.log(`/loan-application/?amount=${amount}&months=${length * 12}`)}>
            Till ansökan
          </button>
        </div>
      </main>
    </div>
  )

  function calculateMonthlyCost() {
    const { rate } = useConfig()
    const monthlyInterestRate = rate / 1200
    const numberOfMonths = length * 12

    const monthlyCost = (amount * monthlyInterestRate * ((1 + monthlyInterestRate) ^ numberOfMonths)) / (((1 + monthlyInterestRate) ^ numberOfMonths) - 1)
    return Math.round(monthlyCost)
  }
}

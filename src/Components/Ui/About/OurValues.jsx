import ValueItem from "./ValueItem.jsx"
import  valuesData  from "../Home/ValuesData.js"
export default function OurValues() {
  return (
    <section className="border-y border-base-border bg-base-soft py-20">
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="mb-16 text-center">
      <h2 className="mb-4 flex items-center justify-center gap-3 text-3xl font-bold text-white md:text-4xl">
        <span className="shrink-0 h-8 w-1.5 rounded-full bg-linear-to-b from-orange-500 to-yellow-500"></span>

        قيمنا

        <span className="shrink-0 h-8 w-1.5 rounded-full bg-linear-to-b from-yellow-500 to-orange-500"></span>
      </h2>

      <p className="mx-auto max-w-2xl text-lg text-neutral-400">
        المبادئ التي توجه كل ما نقوم بإنشائه
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {valuesData.map((item, id) => (
          <ValueItem key={id} value={item}/>
      ))}    
    </div>
  </div>
</section>
  )
}

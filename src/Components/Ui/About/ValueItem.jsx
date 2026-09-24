export default function ValueItem({value:{icon,title,description,gradient}}) {
    console.log(icon);
  return (
   <div className="group relative overflow-hidden rounded-2xl border border-base-border bg-base-card p-6 text-center transition-all duration-300 hover:border-orange-500/30">
  <div
    className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
  ></div>

  <div className="relative">
    <i className={`${icon} mb-4 block text-4xl text-orange-500`}></i>

    <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-orange-500">
      {title}
    </h3>

    <p className="text-sm text-neutral-400">
      {description}
    </p>
  </div>
</div>
  )
}

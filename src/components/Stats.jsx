 
 const STATS = [
  { value: 99, label: "Smooth Interaction" },
  { value: 95, label: "Responsive Design" },
  { value: 90, label: "Creative Experience" },
  ];

function Stats() {
  return (
    <div className="stats-wrap mx-auto grid w-full max-w-3xl grid-cols-3 gap-2 sm:gap-4">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="stat-card rounded-xl border border-cyan-300/20 bg-black/40 p-3 text-center backdrop-blur-md sm:p-5" >
          
          <h2
            className="stat-value text-2xl font-bold text-cyan-300 sm:text-4xl"
            data-value={stat.value} >
            0%

          </h2>
          <p className="mt-1 text-[9px] uppercase tracking-widest text-neutral-300 sm:text-xs">
            {stat.label}
          </p>

        </div>
      ))}
    </div>
  );
 }

   export default Stats;

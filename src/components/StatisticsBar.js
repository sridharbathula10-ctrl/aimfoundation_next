import { FiGrid, FiHeart, FiMapPin } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const statistics = [
  { figure: 2, label: "State Governments", icon: FiMapPin },
  { figure: 3, label: "Programmes", icon: FiGrid },
  { figure: 100, prefix: "₹", label: "Cost Per Beneficiary, Janani Mitra", icon: FiHeart },
];

function StatisticValue({ value, prefix = "" }) { return <p className="font-serif text-[clamp(52px,5.5vw,78px)] font-semibold leading-[.82]  text-[#50308d]">{prefix}{value}</p>; }

export default function StatisticsBar() {
  return (
    <section className="overflow-hidden bg-white py-8 text-[#402f5a] md:py-10" aria-label="AIM Foundation at a glance">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {statistics.map(({ figure, prefix, label, icon: Icon }, index) => (
          <ScrollReveal className="group relative min-h-[155px] overflow-hidden rounded-xl border border-[#ded0e7] bg-[#f7f1fa] p-5 shadow-[0_10px_25px_#8c6b9b12] transition duration-300 hover:-translate-y-1 hover:border-[#a987bc] hover:shadow-[0_18px_32px_#8c6b9b20]" delay={index * 120} key={label}>
            <div className="flex items-start justify-between"><span className="grid h-9 w-9 place-items-center rounded-xl bg-white shadow-[0_4px_10px_#50308d14]"><Icon aria-hidden="true" className="text-[17px] text-[#50308d]" /></span><span className="rounded-full bg-[#50308d] px-2.5 py-1 font-mono text-[10px] font-bold tracking-[.1em] !text-white">0{index + 1}</span></div>
            <div className="mt-5"><StatisticValue value={figure} prefix={prefix} /><p className="mt-2 max-w-[250px] text-[15px] font-semibold leading-[1.35] tracking-[-.02em] text-[#3f3049] md:text-[16px]">{label}</p></div>
          </ScrollReveal>
        ))}
        </div>
      </div>
    </section>
  );
}

import { FiGrid, FiHeart, FiMapPin } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const statistics = [
  { figure: 2, label: "State Governments", icon: FiMapPin },
  { figure: 3, label: "Programmes", icon: FiGrid },
  { figure: 100, prefix: "₹", label: "Cost Per Beneficiary, Janani Mitra", icon: FiHeart },
];

function StatisticValue({ value, prefix = "" }) { return <p className="statistic-card__value font-serif text-[clamp(46px,5vw,68px)] font-semibold leading-[.82]">{prefix}{value}</p>; }

export default function StatisticsBar() {
  return (
    <section className="overflow-hidden bg-white py-8 text-[#402f5a] md:py-10" aria-label="AIM Foundation at a glance">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {statistics.map(({ figure, prefix, label, icon: Icon }, index) => (
          <ScrollReveal className="statistic-card group relative min-h-[122px] overflow-hidden p-5 transition duration-300" delay={index * 120} key={label}>
            <div className="mt-2"><StatisticValue value={figure} prefix={prefix} /><p className="mt-2 text-[15px] font-semibold leading-[1.35] tracking-[-.02em] md:text-[16px]">{label}</p></div>
          </ScrollReveal>
        ))}
        </div>
      </div>
    </section>
  );
}

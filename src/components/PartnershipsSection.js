import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionEyebrow from "./SectionEyebrow";

const partners = [
  {
    name: "Government of Andhra Pradesh",
    logo: "/images/ap-government.webp",
  },
  {
    name: "Government of Telangana",
    logo: "/images/telangana-government.webp",
  },
  {
    name: "AIG Hospitals",
    logo: "",
  },
  {
    name: "Indian School of Business",
    logo: "/images/isb.webp",
  },
  {
    name: "IIT Delhi",
    logo: "/images/iit-delhi.webp",
  },
  {
    name: "IIIT Hyderabad",
    logo: "/images/iiit-hyderabad.webp",
  },
  {
    name: "Ratan Tata Innovation Hub",
    logo: "",
  },
  {
    name: "Stanford Mussallem Center",
    logo: "",
  },
  {
    name: "Biodesign Australia",
    logo: "",
  },
  {
    name: "Biodesign Israel",
    logo: "",
  },
];

export default function PartnershipsSection() {
  return (
    <section className="bg-[#F7F5F8] py-24 px-6 md:px-12">
      <div className="mx-auto max-w-[1304px]">

        <ScrollReveal>
          <SectionEyebrow>Operational Relationships</SectionEyebrow>

          <h2 className="mt-8 max-w-[760px] text-[clamp(42px,5vw,68px)] font-medium leading-[0.94]  text-[#4E2D91]">
            In Partnership With
          </h2>

          <p className="mt-8 max-w-[720px] text-lg leading-8 text-[#65566D]">
            Governments, hospitals, universities and innovation organisations
            working together to strengthen healthcare delivery.
          </p>
        </ScrollReveal>

        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner, index) => (
            <ScrollReveal key={partner.name} delay={index * 70}>
              <div className="group flex h-44 items-center justify-center rounded-[28px] border border-[#E8E1EF] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#4E2D91] hover:shadow-xl">

                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={180}
                    height={80}
                    className="max-h-20 w-auto object-contain grayscale transition duration-500 group-hover:grayscale-0"
                  />
                ) : (
                  <h3 className="text-center text-lg font-medium leading-7 text-[#2E2644] transition-colors group-hover:text-[#4E2D91]">
                    {partner.name}
                  </h3>
                )}

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

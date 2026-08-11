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
     logo: "/images/aig.jpeg",
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
   logo: "/images/rtiv.jpeg",
  },
  {
    name: "Stanford Mussallem Center",
    logo: "/images/st.png",
  },
  {
    name: "Biodesign Australia",
     logo: "/images/bid.png",
  },
  {
    name: "Biodesign Israel",
     logo: "/images/bii.png",
  },
];

export default function PartnershipsSection() {
  return (
    <section className="bg-[#F7F5F8] py-24 px-6 md:px-12">
      <div className="mx-auto max-w-[1304px]">

        <ScrollReveal>
          <SectionEyebrow>Operational Relationships</SectionEyebrow>

          <h2 className="mt-4 max-w-[760px] text-[clamp(42px,5vw,68px)] font-medium leading-[0.94] text-[#4E2D91]">
            In Partnership With
          </h2>

          <p className="mt-4 max-w-[720px] text-lg leading-8 text-[#65566D]">
            Governments, hospitals, universities and innovation organisations
            working together to strengthen healthcare delivery.
          </p>
        </ScrollReveal>

        <div className="partnerships-grid mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner, index) => (
            <ScrollReveal key={partner.name} delay={index * 70}>
              <div className="group flex h-32 items-center justify-center rounded-[14px] bg-white p-5 transition-transform duration-300 hover:-translate-y-2">

                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={180}
                    height={80}
                    className="max-h-20 w-auto object-contain"
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

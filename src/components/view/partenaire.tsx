import type { Logo } from "../parties/type";

const logos: Logo[] = [
  { src: "https://mhaecal.github.io/frontend/img/company/google.svg", alt: "Company 1" },
  { src: "https://mhaecal.github.io/frontend/img/company/netflix.svg", alt: "Company 2" },
  { src: "https://mhaecal.github.io/frontend/img/company/airbnb.svg", alt: "Company 3" },
  { src: "https://mhaecal.github.io/frontend/img/company/amazon.svg", alt: "Company 4" },
  { src: "https://mhaecal.github.io/frontend/img/company/facebook.svg", alt: "Company 5" },
  { src: "https://mhaecal.github.io/frontend/img/company/grab.svg", alt: "Company 6" },
];
export default function Partenaires() {
  return (
    <div className="container space-y-4 ">
      <h2 className="text-center">Trusted by 5,000+ Companies Worldwide</h2>
      <div className="grid lg:grid-cols-6 grid-cols-3 gap-10 w-100" >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            className="rounded-xl  w-full h-full object-cover"
            alt={logo.alt}
          />
        ))}
      </div>
    </div>
  );
}
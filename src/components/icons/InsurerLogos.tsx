import Image from "next/image";

const insurerLogos = [
  { name: "Star Assurance", src: "/insurers/starassurance.png" },
  { name: "Enterprise Insurance", src: "/insurers/enterpriseinsurance.png" },
  { name: "SIC Insurance", src: "/insurers/sicinsurance.webp" },
  { name: "Hollard Insurance", src: "/insurers/hollardinsurance.png" },
  { name: "Sanlam Allianz", src: "/insurers/sanlamallianz.png" },
  { name: "Unique Insurance", src: "/insurers/uniqueinsurance.png" },
  { name: "Glico General", src: "/insurers/glicoinsurance.png" },
  { name: "Priority Insurance", src: "/insurers/priorityinsurance.jpeg" },
  { name: "Vanguard Assurance", src: "/insurers/vanguardinsurance.png" },
  { name: "Activa International", src: "/insurers/activainsurance.png" },
];

export function InsurerLogoGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {insurerLogos.map(({ name, src }) => (
        <div
          key={name}
          className="bg-white rounded-xl px-6 py-5 flex items-center justify-center border border-gray-100 hover:border-asanti-green/30 hover:shadow-md transition-all"
        >
          <Image
            src={src}
            alt={name}
            width={120}
            height={48}
            className="h-10 w-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export default insurerLogos;

interface LogoProps {
  className?: string;
}

export function StarAssuranceLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="20,5 23,17 36,17 25,24 29,36 20,28 11,36 15,24 4,17 17,17" fill="#D4A017" />
      <text x="42" y="32" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#1B3A5C">Star</text>
      <text x="70" y="32" fontFamily="Arial, sans-serif" fontSize="14" fill="#1B3A5C">Assurance</text>
    </svg>
  );
}

export function EnterpriseInsuranceLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="10" width="28" height="30" rx="2" fill="#003366" />
      <rect x="9" y="16" width="6" height="6" rx="1" fill="#FFD700" />
      <rect x="19" y="16" width="6" height="6" rx="1" fill="#FFD700" />
      <rect x="9" y="26" width="6" height="6" rx="1" fill="#FFD700" />
      <rect x="19" y="26" width="6" height="6" rx="1" fill="#FFD700" />
      <text x="38" y="28" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="bold" fill="#003366">Enterprise</text>
      <text x="38" y="40" fontFamily="Arial, sans-serif" fontSize="9" fill="#666">Insurance</text>
    </svg>
  );
}

export function SICInsuranceLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="25" r="16" fill="#006B3F" />
      <text x="8" y="30" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="white">SIC</text>
      <text x="40" y="28" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#006B3F">SIC</text>
      <text x="62" y="28" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">Insurance</text>
    </svg>
  );
}

export function HollardInsuranceLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 25 Q18 8 28 25 Q18 42 8 25Z" fill="#E31937" />
      <text x="35" y="30" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#E31937">Hollard</text>
    </svg>
  );
}

export function AllianzInsuranceLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="25" r="16" fill="#003781" />
      <path d="M10 30 L18 14 L26 30 Z" fill="none" stroke="white" strokeWidth="2" />
      <line x1="13" y1="26" x2="23" y2="26" stroke="white" strokeWidth="1.5" />
      <text x="40" y="30" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#003781">Allianz</text>
    </svg>
  );
}

export function UniqueInsuranceLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="10" width="30" height="30" rx="15" fill="#FF6600" />
      <text x="12" y="30" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white">U</text>
      <text x="40" y="28" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#FF6600">Unique</text>
      <text x="40" y="40" fontFamily="Arial, sans-serif" fontSize="9" fill="#666">Insurance</text>
    </svg>
  );
}

export function GlicoGeneralLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="12" width="28" height="26" rx="4" fill="#1A237E" />
      <text x="7" y="30" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="bold" fill="#FFD700">GLiCO</text>
      <text x="38" y="26" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="bold" fill="#1A237E">Glico</text>
      <text x="38" y="38" fontFamily="Arial, sans-serif" fontSize="9" fill="#666">General Insurance</text>
    </svg>
  );
}

export function PriorityInsuranceLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 35 L18 10 L30 35 Z" fill="#8B0000" />
      <text x="38" y="26" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="bold" fill="#8B0000">Priority</text>
      <text x="38" y="38" fontFamily="Arial, sans-serif" fontSize="9" fill="#666">Insurance</text>
    </svg>
  );
}

export function VanguardAssuranceLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12 L18 38 L30 12" fill="none" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
      <text x="36" y="26" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="#2E7D32">Vanguard</text>
      <text x="36" y="38" fontFamily="Arial, sans-serif" fontSize="9" fill="#666">Assurance</text>
    </svg>
  );
}

export function ActivaInsuranceLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="25" r="14" fill="none" stroke="#E65100" strokeWidth="3" />
      <circle cx="18" cy="25" r="6" fill="#E65100" />
      <text x="38" y="26" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="bold" fill="#E65100">Activa</text>
      <text x="38" y="38" fontFamily="Arial, sans-serif" fontSize="8" fill="#666">International</text>
    </svg>
  );
}

const insurerLogos = [
  { name: "Star Assurance", Component: StarAssuranceLogo },
  { name: "Enterprise Insurance", Component: EnterpriseInsuranceLogo },
  { name: "SIC Insurance", Component: SICInsuranceLogo },
  { name: "Hollard Insurance", Component: HollardInsuranceLogo },
  { name: "Allianz Insurance", Component: AllianzInsuranceLogo },
  { name: "Unique Insurance", Component: UniqueInsuranceLogo },
  { name: "Glico General", Component: GlicoGeneralLogo },
  { name: "Priority Insurance", Component: PriorityInsuranceLogo },
  { name: "Vanguard Assurance", Component: VanguardAssuranceLogo },
  { name: "Activa International", Component: ActivaInsuranceLogo },
];

export default insurerLogos;

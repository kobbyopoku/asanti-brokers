interface IllustrationProps {
  className?: string;
}

export function MotorIllustration({ className }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Road */}
      <rect x="0" y="155" width="280" height="45" rx="6" fill="#E8F5E9" />
      <rect x="30" y="170" width="40" height="4" rx="2" fill="#C8E6C9" />
      <rect x="120" y="170" width="40" height="4" rx="2" fill="#C8E6C9" />
      <rect x="210" y="170" width="40" height="4" rx="2" fill="#C8E6C9" />
      {/* Car body */}
      <rect x="55" y="108" width="170" height="50" rx="12" fill="#2DB574" />
      <path d="M90 108 L110 70 H170 L190 108" fill="#1E8A56" />
      {/* Windows */}
      <path d="M96 105 L112 75 H138 V105 Z" fill="#B2DFDB" />
      <path d="M144 75 H168 L184 105 H144 Z" fill="#B2DFDB" />
      {/* Wheels */}
      <circle cx="100" cy="158" r="18" fill="#333" />
      <circle cx="100" cy="158" r="10" fill="#666" />
      <circle cx="100" cy="158" r="4" fill="#999" />
      <circle cx="180" cy="158" r="18" fill="#333" />
      <circle cx="180" cy="158" r="10" fill="#666" />
      <circle cx="180" cy="158" r="4" fill="#999" />
      {/* Headlights */}
      <rect x="218" y="118" width="12" height="8" rx="3" fill="#FFE082" />
      <rect x="50" y="118" width="12" height="8" rx="3" fill="#FFE082" />
      {/* Shield overlay */}
      <path d="M220 20 Q240 20 240 40 V55 Q240 80 220 90 Q200 80 200 55 V40 Q200 20 220 20Z" fill="#2DB574" fillOpacity="0.15" stroke="#2DB574" strokeWidth="2" />
      <path d="M212 52 L218 58 L230 44" stroke="#2DB574" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Sun */}
      <circle cx="40" cy="35" r="15" fill="#FFE082" fillOpacity="0.5" />
      <circle cx="40" cy="35" r="8" fill="#FFD54F" />
    </svg>
  );
}

export function PropertyIllustration({ className }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ground */}
      <rect x="0" y="165" width="280" height="35" rx="6" fill="#E8F5E9" />
      {/* House body */}
      <rect x="60" y="90" width="160" height="75" rx="4" fill="#FFF8E1" stroke="#2DB574" strokeWidth="2" />
      {/* Roof */}
      <path d="M45 95 L140 30 L235 95" fill="#2DB574" />
      <path d="M55 95 L140 38 L225 95" fill="#1E8A56" />
      {/* Door */}
      <rect x="120" y="120" width="40" height="45" rx="4" fill="#0D3B2E" />
      <circle cx="152" cy="145" r="3" fill="#FFD54F" />
      {/* Windows */}
      <rect x="75" y="105" width="30" height="25" rx="2" fill="#B2DFDB" stroke="#2DB574" strokeWidth="1.5" />
      <line x1="90" y1="105" x2="90" y2="130" stroke="#2DB574" strokeWidth="1" />
      <line x1="75" y1="117" x2="105" y2="117" stroke="#2DB574" strokeWidth="1" />
      <rect x="175" y="105" width="30" height="25" rx="2" fill="#B2DFDB" stroke="#2DB574" strokeWidth="1.5" />
      <line x1="190" y1="105" x2="190" y2="130" stroke="#2DB574" strokeWidth="1" />
      <line x1="175" y1="117" x2="205" y2="117" stroke="#2DB574" strokeWidth="1" />
      {/* Chimney */}
      <rect x="180" y="40" width="20" height="30" fill="#795548" />
      {/* Tree */}
      <rect x="245" y="130" width="8" height="35" fill="#795548" />
      <circle cx="249" cy="115" r="20" fill="#2DB574" fillOpacity="0.6" />
      <circle cx="240" cy="125" r="14" fill="#2DB574" fillOpacity="0.4" />
      {/* Shield */}
      <path d="M30 30 Q45 25 45 40 V52 Q45 70 30 78 Q15 70 15 52 V40 Q15 25 30 30Z" fill="#2DB574" fillOpacity="0.2" stroke="#2DB574" strokeWidth="2" />
      <path d="M23 48 L28 53 L38 42" stroke="#2DB574" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BusinessIllustration({ className }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ground */}
      <rect x="0" y="170" width="280" height="30" rx="6" fill="#E8F5E9" />
      {/* Building 1 */}
      <rect x="30" y="60" width="70" height="110" rx="4" fill="#2DB574" />
      <rect x="40" y="72" width="15" height="12" rx="2" fill="#B2DFDB" />
      <rect x="60" y="72" width="15" height="12" rx="2" fill="#B2DFDB" />
      <rect x="80" y="72" width="10" height="12" rx="2" fill="#B2DFDB" />
      <rect x="40" y="92" width="15" height="12" rx="2" fill="#B2DFDB" />
      <rect x="60" y="92" width="15" height="12" rx="2" fill="#B2DFDB" />
      <rect x="80" y="92" width="10" height="12" rx="2" fill="#B2DFDB" />
      <rect x="40" y="112" width="15" height="12" rx="2" fill="#B2DFDB" />
      <rect x="60" y="112" width="15" height="12" rx="2" fill="#B2DFDB" />
      <rect x="55" y="140" width="25" height="30" rx="3" fill="#0D3B2E" />
      {/* Building 2 (taller) */}
      <rect x="110" y="35" width="60" height="135" rx="4" fill="#1E8A56" />
      <rect x="120" y="48" width="12" height="10" rx="2" fill="#B2DFDB" />
      <rect x="138" y="48" width="12" height="10" rx="2" fill="#B2DFDB" />
      <rect x="156" y="48" width="8" height="10" rx="2" fill="#B2DFDB" />
      <rect x="120" y="65" width="12" height="10" rx="2" fill="#B2DFDB" />
      <rect x="138" y="65" width="12" height="10" rx="2" fill="#B2DFDB" />
      <rect x="120" y="82" width="12" height="10" rx="2" fill="#B2DFDB" />
      <rect x="138" y="82" width="12" height="10" rx="2" fill="#B2DFDB" />
      <rect x="120" y="99" width="12" height="10" rx="2" fill="#B2DFDB" />
      <rect x="138" y="99" width="12" height="10" rx="2" fill="#B2DFDB" />
      <rect x="130" y="140" width="25" height="30" rx="3" fill="#0D3B2E" />
      {/* Building 3 */}
      <rect x="180" y="80" width="70" height="90" rx="4" fill="#2DB574" fillOpacity="0.7" />
      <rect x="190" y="92" width="15" height="12" rx="2" fill="#B2DFDB" />
      <rect x="210" y="92" width="15" height="12" rx="2" fill="#B2DFDB" />
      <rect x="190" y="112" width="15" height="12" rx="2" fill="#B2DFDB" />
      <rect x="210" y="112" width="15" height="12" rx="2" fill="#B2DFDB" />
      <rect x="200" y="140" width="25" height="30" rx="3" fill="#0D3B2E" />
      {/* Briefcase */}
      <rect x="215" y="20" width="40" height="30" rx="5" fill="#0D3B2E" />
      <rect x="225" y="14" width="20" height="10" rx="4" fill="none" stroke="#0D3B2E" strokeWidth="3" />
      <line x1="235" y1="30" x2="235" y2="38" stroke="#2DB574" strokeWidth="2" />
      <circle cx="235" cy="40" r="3" fill="#2DB574" />
    </svg>
  );
}

export function TravelIllustration({ className }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sky */}
      <circle cx="230" cy="40" r="20" fill="#FFE082" fillOpacity="0.4" />
      <circle cx="230" cy="40" r="12" fill="#FFD54F" fillOpacity="0.6" />
      {/* Clouds */}
      <ellipse cx="60" cy="35" rx="30" ry="12" fill="#E8F5E9" />
      <ellipse cx="80" cy="30" rx="20" ry="10" fill="#E8F5E9" />
      <ellipse cx="160" cy="50" rx="25" ry="10" fill="#E8F5E9" />
      {/* Airplane */}
      <path d="M80 80 L140 70 L160 65 L140 75 L200 72 L140 80 L160 85 L140 78 L80 88 Z" fill="#2DB574" />
      <path d="M120 70 L130 55 L138 68" fill="#1E8A56" />
      {/* Suitcase */}
      <rect x="50" y="120" width="55" height="45" rx="6" fill="#2DB574" />
      <rect x="60" y="112" width="35" height="12" rx="5" fill="none" stroke="#2DB574" strokeWidth="3" />
      <line x1="77" y1="132" x2="77" y2="152" stroke="white" strokeWidth="2" />
      <circle cx="77" cy="155" r="3" fill="white" />
      {/* Passport */}
      <rect x="130" y="125" width="40" height="55" rx="4" fill="#0D3B2E" />
      <circle cx="150" cy="145" r="8" fill="none" stroke="#FFD54F" strokeWidth="1.5" />
      <text x="137" y="167" fontFamily="Arial" fontSize="6" fill="#FFD54F">GHANA</text>
      {/* Globe */}
      <circle cx="220" cy="140" r="30" fill="#B2DFDB" fillOpacity="0.5" stroke="#2DB574" strokeWidth="2" />
      <ellipse cx="220" cy="140" rx="12" ry="30" fill="none" stroke="#2DB574" strokeWidth="1" />
      <line x1="190" y1="140" x2="250" y2="140" stroke="#2DB574" strokeWidth="1" />
      <path d="M195 125 Q220 130 245 125" fill="none" stroke="#2DB574" strokeWidth="1" />
      <path d="M195 155 Q220 150 245 155" fill="none" stroke="#2DB574" strokeWidth="1" />
    </svg>
  );
}

export function FirePerilsIllustration({ className }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ground */}
      <rect x="0" y="170" width="280" height="30" rx="6" fill="#E8F5E9" />
      {/* Building */}
      <rect x="80" y="70" width="120" height="100" rx="4" fill="#FFF8E1" stroke="#E0E0E0" strokeWidth="1.5" />
      <rect x="95" y="85" width="20" height="18" rx="2" fill="#B2DFDB" />
      <rect x="130" y="85" width="20" height="18" rx="2" fill="#B2DFDB" />
      <rect x="165" y="85" width="20" height="18" rx="2" fill="#B2DFDB" />
      <rect x="95" y="115" width="20" height="18" rx="2" fill="#B2DFDB" />
      <rect x="130" y="140" width="22" height="30" rx="3" fill="#795548" />
      <rect x="165" y="115" width="20" height="18" rx="2" fill="#B2DFDB" />
      {/* Shield protecting */}
      <path d="M140 15 Q170 10 170 35 V55 Q170 85 140 100 Q110 85 110 55 V35 Q110 10 140 15Z" fill="#2DB574" fillOpacity="0.15" stroke="#2DB574" strokeWidth="2.5" />
      <path d="M128 50 L136 58 L154 38" stroke="#2DB574" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Fire icon */}
      <path d="M40 160 Q40 130 55 120 Q50 140 60 135 Q55 150 65 140 Q60 160 50 165 Q40 170 40 160Z" fill="#FF6B35" fillOpacity="0.6" />
      <path d="M45 158 Q48 140 55 135 Q52 150 58 145 Q55 158 50 162 Q45 165 45 158Z" fill="#FFB74D" fillOpacity="0.7" />
      {/* Lightning */}
      <path d="M230 25 L220 55 L232 50 L218 85" fill="none" stroke="#FFB74D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MarineIllustration({ className }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Water */}
      <path d="M0 140 Q35 130 70 140 Q105 150 140 140 Q175 130 210 140 Q245 150 280 140 V200 H0 Z" fill="#B2DFDB" fillOpacity="0.4" />
      <path d="M0 155 Q35 145 70 155 Q105 165 140 155 Q175 145 210 155 Q245 165 280 155 V200 H0 Z" fill="#B2DFDB" fillOpacity="0.3" />
      {/* Ship */}
      <path d="M60 130 L80 90 H200 L220 130 Z" fill="#0D3B2E" />
      <rect x="110" y="55" width="60" height="40" rx="3" fill="#2DB574" />
      <rect x="120" y="62" width="15" height="12" rx="2" fill="#B2DFDB" />
      <rect x="145" y="62" width="15" height="12" rx="2" fill="#B2DFDB" />
      {/* Mast */}
      <line x1="140" y1="20" x2="140" y2="55" stroke="#795548" strokeWidth="3" />
      {/* Flag */}
      <rect x="140" y="20" width="25" height="15" rx="2" fill="#FFD54F" />
      {/* Containers */}
      <rect x="85" y="100" width="30" height="22" rx="2" fill="#2DB574" />
      <rect x="120" y="100" width="30" height="22" rx="2" fill="#1E8A56" />
      <rect x="155" y="100" width="30" height="22" rx="2" fill="#FF6B35" fillOpacity="0.7" />
      {/* Crane */}
      <line x1="240" y1="40" x2="240" y2="130" stroke="#666" strokeWidth="3" />
      <line x1="200" y1="40" x2="260" y2="40" stroke="#666" strokeWidth="3" />
      <line x1="210" y1="40" x2="210" y2="80" stroke="#999" strokeWidth="1.5" strokeDasharray="4 2" />
    </svg>
  );
}

export function AccidentIllustration({ className }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Person */}
      <circle cx="140" cy="50" r="22" fill="#8D6E63" />
      <rect x="120" y="75" width="40" height="55" rx="8" fill="#2DB574" />
      {/* Arms */}
      <rect x="90" y="80" width="30" height="12" rx="6" fill="#8D6E63" />
      <rect x="160" y="80" width="30" height="12" rx="6" fill="#8D6E63" />
      {/* Legs */}
      <rect x="122" y="128" width="14" height="40" rx="6" fill="#333" />
      <rect x="144" y="128" width="14" height="40" rx="6" fill="#333" />
      {/* Heart */}
      <path d="M130 90 Q130 84 136 84 Q140 84 140 90 Q140 84 144 84 Q150 84 150 90 Q150 100 140 108 Q130 100 130 90Z" fill="#FF6B6B" />
      {/* Shield */}
      <path d="M220 40 Q245 35 245 55 V72 Q245 98 220 108 Q195 98 195 72 V55 Q195 35 220 40Z" fill="#2DB574" fillOpacity="0.15" stroke="#2DB574" strokeWidth="2.5" />
      <text x="211" y="78" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#2DB574">+</text>
      {/* Medical cross */}
      <rect x="40" y="100" width="50" height="50" rx="8" fill="white" stroke="#2DB574" strokeWidth="2" />
      <rect x="57" y="110" width="16" height="30" rx="2" fill="#2DB574" />
      <rect x="49" y="118" width="32" height="14" rx="2" fill="#2DB574" />
    </svg>
  );
}

export function GroupBenefitsIllustration({ className }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* People */}
      <circle cx="90" cy="60" r="18" fill="#8D6E63" />
      <rect x="72" y="82" width="36" height="45" rx="8" fill="#2DB574" />
      <circle cx="140" cy="50" r="20" fill="#A1887F" />
      <rect x="120" y="74" width="40" height="50" rx="8" fill="#1E8A56" />
      <circle cx="190" cy="60" r="18" fill="#6D4C41" />
      <rect x="172" y="82" width="36" height="45" rx="8" fill="#2DB574" fillOpacity="0.8" />
      {/* Umbrella over them */}
      <path d="M60 55 Q140 -10 220 55" fill="#2DB574" fillOpacity="0.15" stroke="#2DB574" strokeWidth="2" />
      <line x1="140" y1="10" x2="140" y2="35" stroke="#2DB574" strokeWidth="2" />
      {/* Chart / growth */}
      <rect x="40" y="145" width="200" height="40" rx="6" fill="#E8F5E9" />
      <rect x="55" y="155" width="20" height="25" rx="3" fill="#2DB574" fillOpacity="0.4" />
      <rect x="85" y="148" width="20" height="32" rx="3" fill="#2DB574" fillOpacity="0.6" />
      <rect x="115" y="152" width="20" height="28" rx="3" fill="#2DB574" fillOpacity="0.5" />
      <rect x="145" y="145" width="20" height="35" rx="3" fill="#2DB574" fillOpacity="0.7" />
      <rect x="175" y="140" width="20" height="40" rx="3" fill="#2DB574" />
      <rect x="205" y="135" width="20" height="45" rx="3" fill="#1E8A56" />
    </svg>
  );
}

const policyIllustrations = {
  motor: MotorIllustration,
  property: PropertyIllustration,
  business: BusinessIllustration,
  travel: TravelIllustration,
  fire: FirePerilsIllustration,
  marine: MarineIllustration,
  accident: AccidentIllustration,
  group: GroupBenefitsIllustration,
};

export default policyIllustrations;

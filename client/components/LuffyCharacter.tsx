export function LuffyCharacter() {
  return (
    <div className="relative w-48 h-48">
      {/* Simplified Luffy character using SVG */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Straw Hat */}
        <ellipse cx="100" cy="60" rx="45" ry="20" fill="#F59E0B" />
        <rect x="85" y="45" width="30" height="8" fill="#DC2626" />
        <circle cx="100" cy="49" r="4" fill="#DC2626" />

        {/* Head */}
        <circle cx="100" cy="80" r="25" fill="#FED7AA" />

        {/* Scar under left eye */}
        <rect x="88" y="75" width="2" height="12" fill="#DC2626" />

        {/* Eyes */}
        <circle cx="92" cy="78" r="3" fill="#000" />
        <circle cx="108" cy="78" r="3" fill="#000" />

        {/* Big smile */}
        <path
          d="M 85 90 Q 100 105 115 90"
          stroke="#000"
          strokeWidth="3"
          fill="none"
        />

        {/* Body (red vest) */}
        <rect x="80" y="105" width="40" height="50" fill="#DC2626" rx="5" />

        {/* Arms */}
        <ellipse cx="65" cy="120" rx="8" ry="20" fill="#FED7AA" />
        <ellipse cx="135" cy="120" rx="8" ry="20" fill="#FED7AA" />

        {/* Right arm pointing up */}
        <ellipse
          cx="150"
          cy="90"
          rx="8"
          ry="25"
          fill="#FED7AA"
          transform="rotate(45 150 90)"
        />

        {/* Fist */}
        <circle cx="165" cy="70" r="8" fill="#FED7AA" />

        {/* Blue shorts */}
        <rect x="85" y="155" width="30" height="25" fill="#2563EB" rx="3" />

        {/* Legs */}
        <rect x="88" y="180" width="8" height="20" fill="#FED7AA" />
        <rect x="104" y="180" width="8" height="20" fill="#FED7AA" />

        {/* Sandals */}
        <ellipse cx="92" cy="200" rx="6" ry="3" fill="#8B4513" />
        <ellipse cx="108" cy="200" rx="6" ry="3" fill="#8B4513" />
      </svg>
    </div>
  );
}

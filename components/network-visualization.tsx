export function NetworkVisualization() {
  return (
    <div className="relative w-full max-w-2xl -mt-12">
      <svg viewBox="0 0 450 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E8FFF6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#E8FFF6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#E8FFF6" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="greenPulse" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E8FFF6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#E8FFF6" stopOpacity="0" />
          </radialGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="neonGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx="225" cy="190" r="40" fill="url(#greenPulse)">
          <animate attributeName="r" values="40;80;40" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="225" cy="190" r="60" fill="url(#greenPulse)">
          <animate attributeName="r" values="60;120;60" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="225" cy="190" r="80" fill="url(#greenPulse)">
          <animate attributeName="r" values="80;160;80" dur="5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="5s" repeatCount="indefinite" />
        </circle>

        {/* Background glow */}
        <circle cx="225" cy="190" r="120" fill="url(#centerGlow)" />

        <circle cx="225" cy="190" r="175" stroke="#D9E2EA" strokeWidth="1" strokeDasharray="6 6" opacity="0.5" />
        <circle cx="225" cy="190" r="130" stroke="#D9E2EA" strokeWidth="1" strokeDasharray="5 5" opacity="0.5" />
        <circle cx="225" cy="190" r="85" stroke="#D9E2EA" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />

        <line
          x1="225"
          y1="190"
          x2="330"
          y2="70"
          stroke="#004467"
          strokeWidth="2"
          strokeOpacity="0.3"
          filter="url(#glow)"
        >
          <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
        </line>
        <line
          x1="225"
          y1="190"
          x2="100"
          y2="90"
          stroke="#004467"
          strokeWidth="2"
          strokeOpacity="0.3"
          filter="url(#glow)"
        >
          <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="3.5s" repeatCount="indefinite" />
        </line>
        <line
          x1="225"
          y1="190"
          x2="95"
          y2="280"
          stroke="#004467"
          strokeWidth="2"
          strokeOpacity="0.3"
          filter="url(#glow)"
        >
          <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="3.2s" repeatCount="indefinite" />
        </line>
        <line
          x1="225"
          y1="190"
          x2="340"
          y2="295"
          stroke="#004467"
          strokeWidth="2"
          strokeOpacity="0.3"
          filter="url(#glow)"
        >
          <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="3.8s" repeatCount="indefinite" />
        </line>
        <line
          x1="225"
          y1="190"
          x2="225"
          y2="55"
          stroke="#004467"
          strokeWidth="2"
          strokeOpacity="0.3"
          filter="url(#glow)"
        >
          <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="3.3s" repeatCount="indefinite" />
        </line>
        <line
          x1="225"
          y1="190"
          x2="365"
          y2="175"
          stroke="#004467"
          strokeWidth="2"
          strokeOpacity="0.3"
          filter="url(#glow)"
        >
          <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="3.6s" repeatCount="indefinite" />
        </line>
        <line
          x1="225"
          y1="190"
          x2="80"
          y2="185"
          stroke="#004467"
          strokeWidth="2"
          strokeOpacity="0.3"
          filter="url(#glow)"
        >
          <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="3.4s" repeatCount="indefinite" />
        </line>

        <circle cx="225" cy="190" r="28" fill="#E8FFF6" opacity="0.6">
          <animate attributeName="r" values="28;32;28" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.8;0.6" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="225" cy="190" r="22" fill="#004467" filter="url(#neonGlow)" />
        <circle cx="225" cy="190" r="15" fill="#E8FFF6" />
        <circle cx="225" cy="190" r="6" fill="#004467" />

        <g filter="url(#neonGlow)">
          <circle cx="330" cy="70" r="14" fill="#004467" opacity="0.3" />
          <circle cx="330" cy="70" r="12" fill="#F2F7FB" stroke="#004467" strokeWidth="2" />
          <circle cx="330" cy="70" r="4" fill="#004467">
            <animate attributeName="r" values="4;5;4" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>
        <g filter="url(#neonGlow)">
          <circle cx="100" cy="90" r="12" fill="#004467" opacity="0.3" />
          <circle cx="100" cy="90" r="10" fill="#F2F7FB" stroke="#004467" strokeWidth="2" />
          <circle cx="100" cy="90" r="3" fill="#004467">
            <animate attributeName="r" values="3;4;3" dur="2.2s" repeatCount="indefinite" />
          </circle>
        </g>
        <g filter="url(#neonGlow)">
          <circle cx="95" cy="280" r="14" fill="#004467" opacity="0.3" />
          <circle cx="95" cy="280" r="12" fill="#F2F7FB" stroke="#004467" strokeWidth="2" />
          <circle cx="95" cy="280" r="4" fill="#004467">
            <animate attributeName="r" values="4;5;4" dur="2.4s" repeatCount="indefinite" />
          </circle>
        </g>
        <g filter="url(#neonGlow)">
          <circle cx="340" cy="295" r="12" fill="#004467" opacity="0.3" />
          <circle cx="340" cy="295" r="10" fill="#F2F7FB" stroke="#004467" strokeWidth="2" />
          <circle cx="340" cy="295" r="3" fill="#004467">
            <animate attributeName="r" values="3;4;3" dur="2.6s" repeatCount="indefinite" />
          </circle>
        </g>
        <g filter="url(#neonGlow)">
          <circle cx="225" cy="55" r="12" fill="#004467" opacity="0.3" />
          <circle cx="225" cy="55" r="10" fill="#F2F7FB" stroke="#004467" strokeWidth="2" />
          <circle cx="225" cy="55" r="3" fill="#004467">
            <animate attributeName="r" values="3;4;3" dur="2.8s" repeatCount="indefinite" />
          </circle>
        </g>
        <g filter="url(#neonGlow)">
          <circle cx="365" cy="175" r="12" fill="#004467" opacity="0.3" />
          <circle cx="365" cy="175" r="10" fill="#F2F7FB" stroke="#004467" strokeWidth="2" />
          <circle cx="365" cy="175" r="3" fill="#004467">
            <animate attributeName="r" values="3;4;3" dur="3s" repeatCount="indefinite" />
          </circle>
        </g>
        <g filter="url(#neonGlow)">
          <circle cx="80" cy="185" r="12" fill="#004467" opacity="0.3" />
          <circle cx="80" cy="185" r="10" fill="#F2F7FB" stroke="#004467" strokeWidth="2" />
          <circle cx="80" cy="185" r="3" fill="#004467">
            <animate attributeName="r" values="3;4;3" dur="3.2s" repeatCount="indefinite" />
          </circle>
        </g>

        <circle cx="280" cy="120" r="3" fill="#004467" fillOpacity="0.5" filter="url(#glow)">
          <animate attributeName="fill-opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
          <animate attributeName="r" values="3;4;3" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="160" cy="130" r="3" fill="#004467" fillOpacity="0.5" filter="url(#glow)">
          <animate attributeName="fill-opacity" values="0.3;0.7;0.3" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="r" values="3;4;3" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="270" cy="250" r="3" fill="#004467" fillOpacity="0.5" filter="url(#glow)">
          <animate attributeName="fill-opacity" values="0.3;0.7;0.3" dur="3.2s" repeatCount="indefinite" />
          <animate attributeName="r" values="3;4;3" dur="3.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="175" cy="240" r="3" fill="#004467" fillOpacity="0.5" filter="url(#glow)">
          <animate attributeName="fill-opacity" values="0.3;0.7;0.3" dur="3.8s" repeatCount="indefinite" />
          <animate attributeName="r" values="3;4;3" dur="3.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="295" cy="210" r="3" fill="#004467" fillOpacity="0.5" filter="url(#glow)">
          <animate attributeName="fill-opacity" values="0.3;0.7;0.3" dur="3.3s" repeatCount="indefinite" />
          <animate attributeName="r" values="3;4;3" dur="3.3s" repeatCount="indefinite" />
        </circle>
        <circle cx="150" cy="200" r="3" fill="#004467" fillOpacity="0.5" filter="url(#glow)">
          <animate attributeName="fill-opacity" values="0.3;0.7;0.3" dur="3.6s" repeatCount="indefinite" />
          <animate attributeName="r" values="3;4;3" dur="3.6s" repeatCount="indefinite" />
        </circle>
      </svg>

      <div className="absolute left-0 top-[38%] rounded-md border border-border-ui bg-white/90 px-3.5 py-2 shadow-sm backdrop-blur-sm">
        <p className="text-xs font-semibold text-intelliwan">Communications unifiées</p>
      </div>
      <div className="absolute right-4 top-[6%] rounded-md border border-border-ui bg-white/90 px-3.5 py-2 shadow-sm backdrop-blur-sm">
        <p className="text-xs font-semibold text-intelliwan">Téléphonie grands systèmes</p>
      </div>
      <div className="absolute right-0 top-[36%] rounded-md border border-border-ui bg-white/90 px-3.5 py-2 shadow-sm backdrop-blur-sm">
        <p className="text-xs font-semibold text-intelliwan">Centres de contact</p>
      </div>
      <div className="absolute bottom-[18%] right-[8%] rounded-md border border-border-ui bg-white/90 px-3.5 py-2 shadow-sm backdrop-blur-sm">
        <p className="text-xs font-semibold text-intelliwan">Gestion de crise & alertes</p>
      </div>
      <div className="absolute bottom-[12%] left-[6%] rounded-md border border-border-ui bg-white/90 px-3.5 py-2 shadow-sm backdrop-blur-sm">
        <p className="text-xs font-semibold text-intelliwan">Continuité de service</p>
      </div>
      <div className="absolute left-2 top-[18%] rounded-md border border-border-ui bg-white/90 px-3.5 py-2 shadow-sm backdrop-blur-sm">
        <p className="text-xs font-semibold text-intelliwan">Téléphonie hébergée</p>
      </div>
      <div className="absolute top-[32%] left-[20%] rounded-md border border-intelliwan-mint bg-intelliwan-mint/80 px-3.5 py-2 shadow-sm backdrop-blur-sm">
        <p className="text-xs font-semibold text-intelliwan">Systèmes de communication complexes</p>
      </div>
      <div className="absolute top-[55%] right-[22%] rounded-md border border-border-ui bg-white/90 px-3.5 py-2 shadow-sm backdrop-blur-sm">
        <p className="text-xs font-semibold text-intelliwan">Accompagnement & support</p>
      </div>
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 rounded-md border border-border-ui bg-white/90 px-3.5 py-2 shadow-sm backdrop-blur-sm">
        <p className="text-xs font-semibold text-intelliwan">Audit télécom</p>
      </div>
      <div className="absolute bottom-[36%] right-[2%] rounded-md border border-border-ui bg-white/90 px-3.5 py-2 shadow-sm backdrop-blur-sm">
        <p className="text-xs font-semibold text-intelliwan">Intégration télécom</p>
      </div>
      <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 rounded-md border border-border-ui bg-white/90 px-3.5 py-2 shadow-sm backdrop-blur-sm">
        <p className="text-xs font-semibold text-intelliwan">Conseil & architecture</p>
      </div>
    </div>
  )
}

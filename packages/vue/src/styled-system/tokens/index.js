const tokens = {
  "aspectRatios.square": {
    "value": "1 / 1",
    "variable": "var(--chakra-aspect-ratios-square)"
  },
  "aspectRatios.landscape": {
    "value": "4 / 3",
    "variable": "var(--chakra-aspect-ratios-landscape)"
  },
  "aspectRatios.portrait": {
    "value": "3 / 4",
    "variable": "var(--chakra-aspect-ratios-portrait)"
  },
  "aspectRatios.wide": {
    "value": "16 / 9",
    "variable": "var(--chakra-aspect-ratios-wide)"
  },
  "aspectRatios.ultrawide": {
    "value": "18 / 5",
    "variable": "var(--chakra-aspect-ratios-ultrawide)"
  },
  "aspectRatios.golden": {
    "value": "1.618 / 1",
    "variable": "var(--chakra-aspect-ratios-golden)"
  },
  "animations.spin": {
    "value": "spin 1s linear infinite",
    "variable": "var(--chakra-animations-spin)"
  },
  "animations.ping": {
    "value": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    "variable": "var(--chakra-animations-ping)"
  },
  "animations.pulse": {
    "value": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    "variable": "var(--chakra-animations-pulse)"
  },
  "animations.bounce": {
    "value": "bounce 1s infinite",
    "variable": "var(--chakra-animations-bounce)"
  },
  "blurs.none": {
    "value": " ",
    "variable": "var(--chakra-blurs-none)"
  },
  "blurs.sm": {
    "value": "4px",
    "variable": "var(--chakra-blurs-sm)"
  },
  "blurs.md": {
    "value": "8px",
    "variable": "var(--chakra-blurs-md)"
  },
  "blurs.lg": {
    "value": "12px",
    "variable": "var(--chakra-blurs-lg)"
  },
  "blurs.xl": {
    "value": "16px",
    "variable": "var(--chakra-blurs-xl)"
  },
  "blurs.2xl": {
    "value": "24px",
    "variable": "var(--chakra-blurs-2xl)"
  },
  "blurs.3xl": {
    "value": "40px",
    "variable": "var(--chakra-blurs-3xl)"
  },
  "blurs.4xl": {
    "value": "64px",
    "variable": "var(--chakra-blurs-4xl)"
  },
  "borders.xs": {
    "value": "0.5px solid",
    "variable": "var(--chakra-borders-xs)"
  },
  "borders.sm": {
    "value": "1px solid",
    "variable": "var(--chakra-borders-sm)"
  },
  "borders.md": {
    "value": "2px solid",
    "variable": "var(--chakra-borders-md)"
  },
  "borders.lg": {
    "value": "4px solid",
    "variable": "var(--chakra-borders-lg)"
  },
  "borders.xl": {
    "value": "8px solid",
    "variable": "var(--chakra-borders-xl)"
  },
  "colors.transparent": {
    "value": "transparent",
    "variable": "var(--chakra-colors-transparent)"
  },
  "colors.current": {
    "value": "currentColor",
    "variable": "var(--chakra-colors-current)"
  },
  "colors.black": {
    "value": "#09090B",
    "variable": "var(--chakra-colors-black)"
  },
  "colors.white": {
    "value": "#FFFFFF",
    "variable": "var(--chakra-colors-white)"
  },
  "colors.whiteAlpha.50": {
    "value": "rgba(255, 255, 255, 0.04)",
    "variable": "var(--chakra-colors-white-alpha-50)"
  },
  "colors.whiteAlpha.100": {
    "value": "rgba(255, 255, 255, 0.06)",
    "variable": "var(--chakra-colors-white-alpha-100)"
  },
  "colors.whiteAlpha.200": {
    "value": "rgba(255, 255, 255, 0.08)",
    "variable": "var(--chakra-colors-white-alpha-200)"
  },
  "colors.whiteAlpha.300": {
    "value": "rgba(255, 255, 255, 0.16)",
    "variable": "var(--chakra-colors-white-alpha-300)"
  },
  "colors.whiteAlpha.400": {
    "value": "rgba(255, 255, 255, 0.24)",
    "variable": "var(--chakra-colors-white-alpha-400)"
  },
  "colors.whiteAlpha.500": {
    "value": "rgba(255, 255, 255, 0.36)",
    "variable": "var(--chakra-colors-white-alpha-500)"
  },
  "colors.whiteAlpha.600": {
    "value": "rgba(255, 255, 255, 0.48)",
    "variable": "var(--chakra-colors-white-alpha-600)"
  },
  "colors.whiteAlpha.700": {
    "value": "rgba(255, 255, 255, 0.64)",
    "variable": "var(--chakra-colors-white-alpha-700)"
  },
  "colors.whiteAlpha.800": {
    "value": "rgba(255, 255, 255, 0.80)",
    "variable": "var(--chakra-colors-white-alpha-800)"
  },
  "colors.whiteAlpha.900": {
    "value": "rgba(255, 255, 255, 0.92)",
    "variable": "var(--chakra-colors-white-alpha-900)"
  },
  "colors.whiteAlpha.950": {
    "value": "rgba(255, 255, 255, 0.95)",
    "variable": "var(--chakra-colors-white-alpha-950)"
  },
  "colors.blackAlpha.50": {
    "value": "rgba(0, 0, 0, 0.04)",
    "variable": "var(--chakra-colors-black-alpha-50)"
  },
  "colors.blackAlpha.100": {
    "value": "rgba(0, 0, 0, 0.06)",
    "variable": "var(--chakra-colors-black-alpha-100)"
  },
  "colors.blackAlpha.200": {
    "value": "rgba(0, 0, 0, 0.08)",
    "variable": "var(--chakra-colors-black-alpha-200)"
  },
  "colors.blackAlpha.300": {
    "value": "rgba(0, 0, 0, 0.16)",
    "variable": "var(--chakra-colors-black-alpha-300)"
  },
  "colors.blackAlpha.400": {
    "value": "rgba(0, 0, 0, 0.24)",
    "variable": "var(--chakra-colors-black-alpha-400)"
  },
  "colors.blackAlpha.500": {
    "value": "rgba(0, 0, 0, 0.36)",
    "variable": "var(--chakra-colors-black-alpha-500)"
  },
  "colors.blackAlpha.600": {
    "value": "rgba(0, 0, 0, 0.48)",
    "variable": "var(--chakra-colors-black-alpha-600)"
  },
  "colors.blackAlpha.700": {
    "value": "rgba(0, 0, 0, 0.64)",
    "variable": "var(--chakra-colors-black-alpha-700)"
  },
  "colors.blackAlpha.800": {
    "value": "rgba(0, 0, 0, 0.80)",
    "variable": "var(--chakra-colors-black-alpha-800)"
  },
  "colors.blackAlpha.900": {
    "value": "rgba(0, 0, 0, 0.92)",
    "variable": "var(--chakra-colors-black-alpha-900)"
  },
  "colors.blackAlpha.950": {
    "value": "rgba(0, 0, 0, 0.95)",
    "variable": "var(--chakra-colors-black-alpha-950)"
  },
  "colors.gray.50": {
    "value": "#fafafa",
    "variable": "var(--chakra-colors-gray-50)"
  },
  "colors.gray.100": {
    "value": "#f4f4f5",
    "variable": "var(--chakra-colors-gray-100)"
  },
  "colors.gray.200": {
    "value": "#e4e4e7",
    "variable": "var(--chakra-colors-gray-200)"
  },
  "colors.gray.300": {
    "value": "#d4d4d8",
    "variable": "var(--chakra-colors-gray-300)"
  },
  "colors.gray.400": {
    "value": "#a1a1aa",
    "variable": "var(--chakra-colors-gray-400)"
  },
  "colors.gray.500": {
    "value": "#71717a",
    "variable": "var(--chakra-colors-gray-500)"
  },
  "colors.gray.600": {
    "value": "#52525b",
    "variable": "var(--chakra-colors-gray-600)"
  },
  "colors.gray.700": {
    "value": "#3f3f46",
    "variable": "var(--chakra-colors-gray-700)"
  },
  "colors.gray.800": {
    "value": "#27272a",
    "variable": "var(--chakra-colors-gray-800)"
  },
  "colors.gray.900": {
    "value": "#18181b",
    "variable": "var(--chakra-colors-gray-900)"
  },
  "colors.gray.950": {
    "value": "#111111",
    "variable": "var(--chakra-colors-gray-950)"
  },
  "colors.red.50": {
    "value": "#fef2f2",
    "variable": "var(--chakra-colors-red-50)"
  },
  "colors.red.100": {
    "value": "#fee2e2",
    "variable": "var(--chakra-colors-red-100)"
  },
  "colors.red.200": {
    "value": "#fecaca",
    "variable": "var(--chakra-colors-red-200)"
  },
  "colors.red.300": {
    "value": "#fca5a5",
    "variable": "var(--chakra-colors-red-300)"
  },
  "colors.red.400": {
    "value": "#f87171",
    "variable": "var(--chakra-colors-red-400)"
  },
  "colors.red.500": {
    "value": "#ef4444",
    "variable": "var(--chakra-colors-red-500)"
  },
  "colors.red.600": {
    "value": "#dc2626",
    "variable": "var(--chakra-colors-red-600)"
  },
  "colors.red.700": {
    "value": "#991919",
    "variable": "var(--chakra-colors-red-700)"
  },
  "colors.red.800": {
    "value": "#511111",
    "variable": "var(--chakra-colors-red-800)"
  },
  "colors.red.900": {
    "value": "#300c0c",
    "variable": "var(--chakra-colors-red-900)"
  },
  "colors.red.950": {
    "value": "#1f0808",
    "variable": "var(--chakra-colors-red-950)"
  },
  "colors.orange.50": {
    "value": "#fff7ed",
    "variable": "var(--chakra-colors-orange-50)"
  },
  "colors.orange.100": {
    "value": "#ffedd5",
    "variable": "var(--chakra-colors-orange-100)"
  },
  "colors.orange.200": {
    "value": "#fed7aa",
    "variable": "var(--chakra-colors-orange-200)"
  },
  "colors.orange.300": {
    "value": "#fdba74",
    "variable": "var(--chakra-colors-orange-300)"
  },
  "colors.orange.400": {
    "value": "#fb923c",
    "variable": "var(--chakra-colors-orange-400)"
  },
  "colors.orange.500": {
    "value": "#f97316",
    "variable": "var(--chakra-colors-orange-500)"
  },
  "colors.orange.600": {
    "value": "#ea580c",
    "variable": "var(--chakra-colors-orange-600)"
  },
  "colors.orange.700": {
    "value": "#92310a",
    "variable": "var(--chakra-colors-orange-700)"
  },
  "colors.orange.800": {
    "value": "#6c2710",
    "variable": "var(--chakra-colors-orange-800)"
  },
  "colors.orange.900": {
    "value": "#3b1106",
    "variable": "var(--chakra-colors-orange-900)"
  },
  "colors.orange.950": {
    "value": "#220a04",
    "variable": "var(--chakra-colors-orange-950)"
  },
  "colors.yellow.50": {
    "value": "#fefce8",
    "variable": "var(--chakra-colors-yellow-50)"
  },
  "colors.yellow.100": {
    "value": "#fef9c3",
    "variable": "var(--chakra-colors-yellow-100)"
  },
  "colors.yellow.200": {
    "value": "#fef08a",
    "variable": "var(--chakra-colors-yellow-200)"
  },
  "colors.yellow.300": {
    "value": "#fde047",
    "variable": "var(--chakra-colors-yellow-300)"
  },
  "colors.yellow.400": {
    "value": "#facc15",
    "variable": "var(--chakra-colors-yellow-400)"
  },
  "colors.yellow.500": {
    "value": "#eab308",
    "variable": "var(--chakra-colors-yellow-500)"
  },
  "colors.yellow.600": {
    "value": "#ca8a04",
    "variable": "var(--chakra-colors-yellow-600)"
  },
  "colors.yellow.700": {
    "value": "#845209",
    "variable": "var(--chakra-colors-yellow-700)"
  },
  "colors.yellow.800": {
    "value": "#713f12",
    "variable": "var(--chakra-colors-yellow-800)"
  },
  "colors.yellow.900": {
    "value": "#422006",
    "variable": "var(--chakra-colors-yellow-900)"
  },
  "colors.yellow.950": {
    "value": "#281304",
    "variable": "var(--chakra-colors-yellow-950)"
  },
  "colors.green.50": {
    "value": "#f0fdf4",
    "variable": "var(--chakra-colors-green-50)"
  },
  "colors.green.100": {
    "value": "#dcfce7",
    "variable": "var(--chakra-colors-green-100)"
  },
  "colors.green.200": {
    "value": "#bbf7d0",
    "variable": "var(--chakra-colors-green-200)"
  },
  "colors.green.300": {
    "value": "#86efac",
    "variable": "var(--chakra-colors-green-300)"
  },
  "colors.green.400": {
    "value": "#4ade80",
    "variable": "var(--chakra-colors-green-400)"
  },
  "colors.green.500": {
    "value": "#22c55e",
    "variable": "var(--chakra-colors-green-500)"
  },
  "colors.green.600": {
    "value": "#16a34a",
    "variable": "var(--chakra-colors-green-600)"
  },
  "colors.green.700": {
    "value": "#116932",
    "variable": "var(--chakra-colors-green-700)"
  },
  "colors.green.800": {
    "value": "#124a28",
    "variable": "var(--chakra-colors-green-800)"
  },
  "colors.green.900": {
    "value": "#042713",
    "variable": "var(--chakra-colors-green-900)"
  },
  "colors.green.950": {
    "value": "#03190c",
    "variable": "var(--chakra-colors-green-950)"
  },
  "colors.teal.50": {
    "value": "#f0fdfa",
    "variable": "var(--chakra-colors-teal-50)"
  },
  "colors.teal.100": {
    "value": "#ccfbf1",
    "variable": "var(--chakra-colors-teal-100)"
  },
  "colors.teal.200": {
    "value": "#99f6e4",
    "variable": "var(--chakra-colors-teal-200)"
  },
  "colors.teal.300": {
    "value": "#5eead4",
    "variable": "var(--chakra-colors-teal-300)"
  },
  "colors.teal.400": {
    "value": "#2dd4bf",
    "variable": "var(--chakra-colors-teal-400)"
  },
  "colors.teal.500": {
    "value": "#14b8a6",
    "variable": "var(--chakra-colors-teal-500)"
  },
  "colors.teal.600": {
    "value": "#0d9488",
    "variable": "var(--chakra-colors-teal-600)"
  },
  "colors.teal.700": {
    "value": "#0c5d56",
    "variable": "var(--chakra-colors-teal-700)"
  },
  "colors.teal.800": {
    "value": "#114240",
    "variable": "var(--chakra-colors-teal-800)"
  },
  "colors.teal.900": {
    "value": "#032726",
    "variable": "var(--chakra-colors-teal-900)"
  },
  "colors.teal.950": {
    "value": "#021716",
    "variable": "var(--chakra-colors-teal-950)"
  },
  "colors.blue.50": {
    "value": "#eff6ff",
    "variable": "var(--chakra-colors-blue-50)"
  },
  "colors.blue.100": {
    "value": "#dbeafe",
    "variable": "var(--chakra-colors-blue-100)"
  },
  "colors.blue.200": {
    "value": "#bfdbfe",
    "variable": "var(--chakra-colors-blue-200)"
  },
  "colors.blue.300": {
    "value": "#a3cfff",
    "variable": "var(--chakra-colors-blue-300)"
  },
  "colors.blue.400": {
    "value": "#60a5fa",
    "variable": "var(--chakra-colors-blue-400)"
  },
  "colors.blue.500": {
    "value": "#3b82f6",
    "variable": "var(--chakra-colors-blue-500)"
  },
  "colors.blue.600": {
    "value": "#2563eb",
    "variable": "var(--chakra-colors-blue-600)"
  },
  "colors.blue.700": {
    "value": "#173da6",
    "variable": "var(--chakra-colors-blue-700)"
  },
  "colors.blue.800": {
    "value": "#1a3478",
    "variable": "var(--chakra-colors-blue-800)"
  },
  "colors.blue.900": {
    "value": "#14204a",
    "variable": "var(--chakra-colors-blue-900)"
  },
  "colors.blue.950": {
    "value": "#0c142e",
    "variable": "var(--chakra-colors-blue-950)"
  },
  "colors.cyan.50": {
    "value": "#ecfeff",
    "variable": "var(--chakra-colors-cyan-50)"
  },
  "colors.cyan.100": {
    "value": "#cffafe",
    "variable": "var(--chakra-colors-cyan-100)"
  },
  "colors.cyan.200": {
    "value": "#a5f3fc",
    "variable": "var(--chakra-colors-cyan-200)"
  },
  "colors.cyan.300": {
    "value": "#67e8f9",
    "variable": "var(--chakra-colors-cyan-300)"
  },
  "colors.cyan.400": {
    "value": "#22d3ee",
    "variable": "var(--chakra-colors-cyan-400)"
  },
  "colors.cyan.500": {
    "value": "#06b6d4",
    "variable": "var(--chakra-colors-cyan-500)"
  },
  "colors.cyan.600": {
    "value": "#0891b2",
    "variable": "var(--chakra-colors-cyan-600)"
  },
  "colors.cyan.700": {
    "value": "#0c5c72",
    "variable": "var(--chakra-colors-cyan-700)"
  },
  "colors.cyan.800": {
    "value": "#134152",
    "variable": "var(--chakra-colors-cyan-800)"
  },
  "colors.cyan.900": {
    "value": "#072a38",
    "variable": "var(--chakra-colors-cyan-900)"
  },
  "colors.cyan.950": {
    "value": "#051b24",
    "variable": "var(--chakra-colors-cyan-950)"
  },
  "colors.purple.50": {
    "value": "#faf5ff",
    "variable": "var(--chakra-colors-purple-50)"
  },
  "colors.purple.100": {
    "value": "#f3e8ff",
    "variable": "var(--chakra-colors-purple-100)"
  },
  "colors.purple.200": {
    "value": "#e9d5ff",
    "variable": "var(--chakra-colors-purple-200)"
  },
  "colors.purple.300": {
    "value": "#d8b4fe",
    "variable": "var(--chakra-colors-purple-300)"
  },
  "colors.purple.400": {
    "value": "#c084fc",
    "variable": "var(--chakra-colors-purple-400)"
  },
  "colors.purple.500": {
    "value": "#a855f7",
    "variable": "var(--chakra-colors-purple-500)"
  },
  "colors.purple.600": {
    "value": "#9333ea",
    "variable": "var(--chakra-colors-purple-600)"
  },
  "colors.purple.700": {
    "value": "#641ba3",
    "variable": "var(--chakra-colors-purple-700)"
  },
  "colors.purple.800": {
    "value": "#4a1772",
    "variable": "var(--chakra-colors-purple-800)"
  },
  "colors.purple.900": {
    "value": "#2f0553",
    "variable": "var(--chakra-colors-purple-900)"
  },
  "colors.purple.950": {
    "value": "#1a032e",
    "variable": "var(--chakra-colors-purple-950)"
  },
  "colors.pink.50": {
    "value": "#fdf2f8",
    "variable": "var(--chakra-colors-pink-50)"
  },
  "colors.pink.100": {
    "value": "#fce7f3",
    "variable": "var(--chakra-colors-pink-100)"
  },
  "colors.pink.200": {
    "value": "#fbcfe8",
    "variable": "var(--chakra-colors-pink-200)"
  },
  "colors.pink.300": {
    "value": "#f9a8d4",
    "variable": "var(--chakra-colors-pink-300)"
  },
  "colors.pink.400": {
    "value": "#f472b6",
    "variable": "var(--chakra-colors-pink-400)"
  },
  "colors.pink.500": {
    "value": "#ec4899",
    "variable": "var(--chakra-colors-pink-500)"
  },
  "colors.pink.600": {
    "value": "#db2777",
    "variable": "var(--chakra-colors-pink-600)"
  },
  "colors.pink.700": {
    "value": "#a41752",
    "variable": "var(--chakra-colors-pink-700)"
  },
  "colors.pink.800": {
    "value": "#6d0e34",
    "variable": "var(--chakra-colors-pink-800)"
  },
  "colors.pink.900": {
    "value": "#45061f",
    "variable": "var(--chakra-colors-pink-900)"
  },
  "colors.pink.950": {
    "value": "#2c0514",
    "variable": "var(--chakra-colors-pink-950)"
  },
  "durations.fastest": {
    "value": "50ms",
    "variable": "var(--chakra-durations-fastest)"
  },
  "durations.faster": {
    "value": "100ms",
    "variable": "var(--chakra-durations-faster)"
  },
  "durations.fast": {
    "value": "150ms",
    "variable": "var(--chakra-durations-fast)"
  },
  "durations.moderate": {
    "value": "200ms",
    "variable": "var(--chakra-durations-moderate)"
  },
  "durations.slow": {
    "value": "300ms",
    "variable": "var(--chakra-durations-slow)"
  },
  "durations.slower": {
    "value": "400ms",
    "variable": "var(--chakra-durations-slower)"
  },
  "durations.slowest": {
    "value": "500ms",
    "variable": "var(--chakra-durations-slowest)"
  },
  "easings.ease-in": {
    "value": "cubic-bezier(0.42, 0, 1, 1)",
    "variable": "var(--chakra-easings-ease-in)"
  },
  "easings.ease-out": {
    "value": "cubic-bezier(0, 0, 0.58, 1)",
    "variable": "var(--chakra-easings-ease-out)"
  },
  "easings.ease-in-out": {
    "value": "cubic-bezier(0.42, 0, 0.58, 1)",
    "variable": "var(--chakra-easings-ease-in-out)"
  },
  "easings.ease-in-smooth": {
    "value": "cubic-bezier(0.32, 0.72, 0, 1)",
    "variable": "var(--chakra-easings-ease-in-smooth)"
  },
  "fonts.heading": {
    "value": "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
    "variable": "var(--chakra-fonts-heading)"
  },
  "fonts.body": {
    "value": "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
    "variable": "var(--chakra-fonts-body)"
  },
  "fonts.mono": {
    "value": "SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace",
    "variable": "var(--chakra-fonts-mono)"
  },
  "fontSizes.2xs": {
    "value": "0.625rem",
    "variable": "var(--chakra-font-sizes-2xs)"
  },
  "fontSizes.xs": {
    "value": "0.75rem",
    "variable": "var(--chakra-font-sizes-xs)"
  },
  "fontSizes.sm": {
    "value": "0.875rem",
    "variable": "var(--chakra-font-sizes-sm)"
  },
  "fontSizes.md": {
    "value": "1rem",
    "variable": "var(--chakra-font-sizes-md)"
  },
  "fontSizes.lg": {
    "value": "1.125rem",
    "variable": "var(--chakra-font-sizes-lg)"
  },
  "fontSizes.xl": {
    "value": "1.25rem",
    "variable": "var(--chakra-font-sizes-xl)"
  },
  "fontSizes.2xl": {
    "value": "1.5rem",
    "variable": "var(--chakra-font-sizes-2xl)"
  },
  "fontSizes.3xl": {
    "value": "1.875rem",
    "variable": "var(--chakra-font-sizes-3xl)"
  },
  "fontSizes.4xl": {
    "value": "2.25rem",
    "variable": "var(--chakra-font-sizes-4xl)"
  },
  "fontSizes.5xl": {
    "value": "3rem",
    "variable": "var(--chakra-font-sizes-5xl)"
  },
  "fontSizes.6xl": {
    "value": "3.75rem",
    "variable": "var(--chakra-font-sizes-6xl)"
  },
  "fontSizes.7xl": {
    "value": "4.5rem",
    "variable": "var(--chakra-font-sizes-7xl)"
  },
  "fontSizes.8xl": {
    "value": "6rem",
    "variable": "var(--chakra-font-sizes-8xl)"
  },
  "fontSizes.9xl": {
    "value": "8rem",
    "variable": "var(--chakra-font-sizes-9xl)"
  },
  "fontWeights.thin": {
    "value": "100",
    "variable": "var(--chakra-font-weights-thin)"
  },
  "fontWeights.extralight": {
    "value": "200",
    "variable": "var(--chakra-font-weights-extralight)"
  },
  "fontWeights.light": {
    "value": "300",
    "variable": "var(--chakra-font-weights-light)"
  },
  "fontWeights.normal": {
    "value": "400",
    "variable": "var(--chakra-font-weights-normal)"
  },
  "fontWeights.medium": {
    "value": "500",
    "variable": "var(--chakra-font-weights-medium)"
  },
  "fontWeights.semibold": {
    "value": "600",
    "variable": "var(--chakra-font-weights-semibold)"
  },
  "fontWeights.bold": {
    "value": "700",
    "variable": "var(--chakra-font-weights-bold)"
  },
  "fontWeights.extrabold": {
    "value": "800",
    "variable": "var(--chakra-font-weights-extrabold)"
  },
  "fontWeights.black": {
    "value": "900",
    "variable": "var(--chakra-font-weights-black)"
  },
  "letterSpacings.tighter": {
    "value": "-0.05em",
    "variable": "var(--chakra-letter-spacings-tighter)"
  },
  "letterSpacings.tight": {
    "value": "-0.025em",
    "variable": "var(--chakra-letter-spacings-tight)"
  },
  "letterSpacings.wide": {
    "value": "0.025em",
    "variable": "var(--chakra-letter-spacings-wide)"
  },
  "letterSpacings.wider": {
    "value": "0.05em",
    "variable": "var(--chakra-letter-spacings-wider)"
  },
  "letterSpacings.widest": {
    "value": "0.1em",
    "variable": "var(--chakra-letter-spacings-widest)"
  },
  "lineHeights.shorter": {
    "value": 1.25,
    "variable": "var(--chakra-line-heights-shorter)"
  },
  "lineHeights.short": {
    "value": 1.375,
    "variable": "var(--chakra-line-heights-short)"
  },
  "lineHeights.moderate": {
    "value": 1.5,
    "variable": "var(--chakra-line-heights-moderate)"
  },
  "lineHeights.tall": {
    "value": 1.625,
    "variable": "var(--chakra-line-heights-tall)"
  },
  "lineHeights.taller": {
    "value": 2,
    "variable": "var(--chakra-line-heights-taller)"
  },
  "radii.none": {
    "value": "0",
    "variable": "var(--chakra-radii-none)"
  },
  "radii.2xs": {
    "value": "0.0625rem",
    "variable": "var(--chakra-radii-2xs)"
  },
  "radii.xs": {
    "value": "0.125rem",
    "variable": "var(--chakra-radii-xs)"
  },
  "radii.sm": {
    "value": "0.25rem",
    "variable": "var(--chakra-radii-sm)"
  },
  "radii.md": {
    "value": "0.375rem",
    "variable": "var(--chakra-radii-md)"
  },
  "radii.lg": {
    "value": "0.5rem",
    "variable": "var(--chakra-radii-lg)"
  },
  "radii.xl": {
    "value": "0.75rem",
    "variable": "var(--chakra-radii-xl)"
  },
  "radii.2xl": {
    "value": "1rem",
    "variable": "var(--chakra-radii-2xl)"
  },
  "radii.3xl": {
    "value": "1.5rem",
    "variable": "var(--chakra-radii-3xl)"
  },
  "radii.4xl": {
    "value": "2rem",
    "variable": "var(--chakra-radii-4xl)"
  },
  "radii.full": {
    "value": "9999px",
    "variable": "var(--chakra-radii-full)"
  },
  "spacing.1": {
    "value": "0.25rem",
    "variable": "var(--chakra-spacing-1)"
  },
  "spacing.2": {
    "value": "0.5rem",
    "variable": "var(--chakra-spacing-2)"
  },
  "spacing.3": {
    "value": "0.75rem",
    "variable": "var(--chakra-spacing-3)"
  },
  "spacing.4": {
    "value": "1rem",
    "variable": "var(--chakra-spacing-4)"
  },
  "spacing.5": {
    "value": "1.25rem",
    "variable": "var(--chakra-spacing-5)"
  },
  "spacing.6": {
    "value": "1.5rem",
    "variable": "var(--chakra-spacing-6)"
  },
  "spacing.7": {
    "value": "1.75rem",
    "variable": "var(--chakra-spacing-7)"
  },
  "spacing.8": {
    "value": "2rem",
    "variable": "var(--chakra-spacing-8)"
  },
  "spacing.9": {
    "value": "2.25rem",
    "variable": "var(--chakra-spacing-9)"
  },
  "spacing.10": {
    "value": "2.5rem",
    "variable": "var(--chakra-spacing-10)"
  },
  "spacing.11": {
    "value": "2.75rem",
    "variable": "var(--chakra-spacing-11)"
  },
  "spacing.12": {
    "value": "3rem",
    "variable": "var(--chakra-spacing-12)"
  },
  "spacing.14": {
    "value": "3.5rem",
    "variable": "var(--chakra-spacing-14)"
  },
  "spacing.16": {
    "value": "4rem",
    "variable": "var(--chakra-spacing-16)"
  },
  "spacing.20": {
    "value": "5rem",
    "variable": "var(--chakra-spacing-20)"
  },
  "spacing.24": {
    "value": "6rem",
    "variable": "var(--chakra-spacing-24)"
  },
  "spacing.28": {
    "value": "7rem",
    "variable": "var(--chakra-spacing-28)"
  },
  "spacing.32": {
    "value": "8rem",
    "variable": "var(--chakra-spacing-32)"
  },
  "spacing.36": {
    "value": "9rem",
    "variable": "var(--chakra-spacing-36)"
  },
  "spacing.40": {
    "value": "10rem",
    "variable": "var(--chakra-spacing-40)"
  },
  "spacing.44": {
    "value": "11rem",
    "variable": "var(--chakra-spacing-44)"
  },
  "spacing.48": {
    "value": "12rem",
    "variable": "var(--chakra-spacing-48)"
  },
  "spacing.52": {
    "value": "13rem",
    "variable": "var(--chakra-spacing-52)"
  },
  "spacing.56": {
    "value": "14rem",
    "variable": "var(--chakra-spacing-56)"
  },
  "spacing.60": {
    "value": "15rem",
    "variable": "var(--chakra-spacing-60)"
  },
  "spacing.64": {
    "value": "16rem",
    "variable": "var(--chakra-spacing-64)"
  },
  "spacing.72": {
    "value": "18rem",
    "variable": "var(--chakra-spacing-72)"
  },
  "spacing.80": {
    "value": "20rem",
    "variable": "var(--chakra-spacing-80)"
  },
  "spacing.96": {
    "value": "24rem",
    "variable": "var(--chakra-spacing-96)"
  },
  "spacing.0.5": {
    "value": "0.125rem",
    "variable": "var(--chakra-spacing-0\\.5)"
  },
  "spacing.1.5": {
    "value": "0.375rem",
    "variable": "var(--chakra-spacing-1\\.5)"
  },
  "spacing.2.5": {
    "value": "0.625rem",
    "variable": "var(--chakra-spacing-2\\.5)"
  },
  "spacing.3.5": {
    "value": "0.875rem",
    "variable": "var(--chakra-spacing-3\\.5)"
  },
  "spacing.4.5": {
    "value": "1.125rem",
    "variable": "var(--chakra-spacing-4\\.5)"
  },
  "sizes.1": {
    "value": "0.25rem",
    "variable": "var(--chakra-sizes-1)"
  },
  "sizes.2": {
    "value": "0.5rem",
    "variable": "var(--chakra-sizes-2)"
  },
  "sizes.3": {
    "value": "0.75rem",
    "variable": "var(--chakra-sizes-3)"
  },
  "sizes.4": {
    "value": "1rem",
    "variable": "var(--chakra-sizes-4)"
  },
  "sizes.5": {
    "value": "1.25rem",
    "variable": "var(--chakra-sizes-5)"
  },
  "sizes.6": {
    "value": "1.5rem",
    "variable": "var(--chakra-sizes-6)"
  },
  "sizes.7": {
    "value": "1.75rem",
    "variable": "var(--chakra-sizes-7)"
  },
  "sizes.8": {
    "value": "2rem",
    "variable": "var(--chakra-sizes-8)"
  },
  "sizes.9": {
    "value": "2.25rem",
    "variable": "var(--chakra-sizes-9)"
  },
  "sizes.10": {
    "value": "2.5rem",
    "variable": "var(--chakra-sizes-10)"
  },
  "sizes.11": {
    "value": "2.75rem",
    "variable": "var(--chakra-sizes-11)"
  },
  "sizes.12": {
    "value": "3rem",
    "variable": "var(--chakra-sizes-12)"
  },
  "sizes.14": {
    "value": "3.5rem",
    "variable": "var(--chakra-sizes-14)"
  },
  "sizes.16": {
    "value": "4rem",
    "variable": "var(--chakra-sizes-16)"
  },
  "sizes.20": {
    "value": "5rem",
    "variable": "var(--chakra-sizes-20)"
  },
  "sizes.24": {
    "value": "6rem",
    "variable": "var(--chakra-sizes-24)"
  },
  "sizes.28": {
    "value": "7rem",
    "variable": "var(--chakra-sizes-28)"
  },
  "sizes.32": {
    "value": "8rem",
    "variable": "var(--chakra-sizes-32)"
  },
  "sizes.36": {
    "value": "9rem",
    "variable": "var(--chakra-sizes-36)"
  },
  "sizes.40": {
    "value": "10rem",
    "variable": "var(--chakra-sizes-40)"
  },
  "sizes.44": {
    "value": "11rem",
    "variable": "var(--chakra-sizes-44)"
  },
  "sizes.48": {
    "value": "12rem",
    "variable": "var(--chakra-sizes-48)"
  },
  "sizes.52": {
    "value": "13rem",
    "variable": "var(--chakra-sizes-52)"
  },
  "sizes.56": {
    "value": "14rem",
    "variable": "var(--chakra-sizes-56)"
  },
  "sizes.60": {
    "value": "15rem",
    "variable": "var(--chakra-sizes-60)"
  },
  "sizes.64": {
    "value": "16rem",
    "variable": "var(--chakra-sizes-64)"
  },
  "sizes.72": {
    "value": "18rem",
    "variable": "var(--chakra-sizes-72)"
  },
  "sizes.80": {
    "value": "20rem",
    "variable": "var(--chakra-sizes-80)"
  },
  "sizes.96": {
    "value": "24rem",
    "variable": "var(--chakra-sizes-96)"
  },
  "sizes.3xs": {
    "value": "14rem",
    "variable": "var(--chakra-sizes-3xs)"
  },
  "sizes.2xs": {
    "value": "16rem",
    "variable": "var(--chakra-sizes-2xs)"
  },
  "sizes.xs": {
    "value": "20rem",
    "variable": "var(--chakra-sizes-xs)"
  },
  "sizes.sm": {
    "value": "24rem",
    "variable": "var(--chakra-sizes-sm)"
  },
  "sizes.md": {
    "value": "28rem",
    "variable": "var(--chakra-sizes-md)"
  },
  "sizes.lg": {
    "value": "32rem",
    "variable": "var(--chakra-sizes-lg)"
  },
  "sizes.xl": {
    "value": "36rem",
    "variable": "var(--chakra-sizes-xl)"
  },
  "sizes.2xl": {
    "value": "42rem",
    "variable": "var(--chakra-sizes-2xl)"
  },
  "sizes.3xl": {
    "value": "48rem",
    "variable": "var(--chakra-sizes-3xl)"
  },
  "sizes.4xl": {
    "value": "56rem",
    "variable": "var(--chakra-sizes-4xl)"
  },
  "sizes.5xl": {
    "value": "64rem",
    "variable": "var(--chakra-sizes-5xl)"
  },
  "sizes.6xl": {
    "value": "72rem",
    "variable": "var(--chakra-sizes-6xl)"
  },
  "sizes.7xl": {
    "value": "80rem",
    "variable": "var(--chakra-sizes-7xl)"
  },
  "sizes.8xl": {
    "value": "90rem",
    "variable": "var(--chakra-sizes-8xl)"
  },
  "sizes.0.5": {
    "value": "0.125rem",
    "variable": "var(--chakra-sizes-0\\.5)"
  },
  "sizes.1.5": {
    "value": "0.375rem",
    "variable": "var(--chakra-sizes-1\\.5)"
  },
  "sizes.2.5": {
    "value": "0.625rem",
    "variable": "var(--chakra-sizes-2\\.5)"
  },
  "sizes.3.5": {
    "value": "0.875rem",
    "variable": "var(--chakra-sizes-3\\.5)"
  },
  "sizes.4.5": {
    "value": "1.125rem",
    "variable": "var(--chakra-sizes-4\\.5)"
  },
  "sizes.1/2": {
    "value": "50%",
    "variable": "var(--chakra-sizes-1\\/2)"
  },
  "sizes.1/3": {
    "value": "33.333333%",
    "variable": "var(--chakra-sizes-1\\/3)"
  },
  "sizes.2/3": {
    "value": "66.666667%",
    "variable": "var(--chakra-sizes-2\\/3)"
  },
  "sizes.1/4": {
    "value": "25%",
    "variable": "var(--chakra-sizes-1\\/4)"
  },
  "sizes.3/4": {
    "value": "75%",
    "variable": "var(--chakra-sizes-3\\/4)"
  },
  "sizes.1/5": {
    "value": "20%",
    "variable": "var(--chakra-sizes-1\\/5)"
  },
  "sizes.2/5": {
    "value": "40%",
    "variable": "var(--chakra-sizes-2\\/5)"
  },
  "sizes.3/5": {
    "value": "60%",
    "variable": "var(--chakra-sizes-3\\/5)"
  },
  "sizes.4/5": {
    "value": "80%",
    "variable": "var(--chakra-sizes-4\\/5)"
  },
  "sizes.1/6": {
    "value": "16.666667%",
    "variable": "var(--chakra-sizes-1\\/6)"
  },
  "sizes.2/6": {
    "value": "33.333333%",
    "variable": "var(--chakra-sizes-2\\/6)"
  },
  "sizes.3/6": {
    "value": "50%",
    "variable": "var(--chakra-sizes-3\\/6)"
  },
  "sizes.4/6": {
    "value": "66.666667%",
    "variable": "var(--chakra-sizes-4\\/6)"
  },
  "sizes.5/6": {
    "value": "83.333333%",
    "variable": "var(--chakra-sizes-5\\/6)"
  },
  "sizes.1/12": {
    "value": "8.333333%",
    "variable": "var(--chakra-sizes-1\\/12)"
  },
  "sizes.2/12": {
    "value": "16.666667%",
    "variable": "var(--chakra-sizes-2\\/12)"
  },
  "sizes.3/12": {
    "value": "25%",
    "variable": "var(--chakra-sizes-3\\/12)"
  },
  "sizes.4/12": {
    "value": "33.333333%",
    "variable": "var(--chakra-sizes-4\\/12)"
  },
  "sizes.5/12": {
    "value": "41.666667%",
    "variable": "var(--chakra-sizes-5\\/12)"
  },
  "sizes.6/12": {
    "value": "50%",
    "variable": "var(--chakra-sizes-6\\/12)"
  },
  "sizes.7/12": {
    "value": "58.333333%",
    "variable": "var(--chakra-sizes-7\\/12)"
  },
  "sizes.8/12": {
    "value": "66.666667%",
    "variable": "var(--chakra-sizes-8\\/12)"
  },
  "sizes.9/12": {
    "value": "75%",
    "variable": "var(--chakra-sizes-9\\/12)"
  },
  "sizes.10/12": {
    "value": "83.333333%",
    "variable": "var(--chakra-sizes-10\\/12)"
  },
  "sizes.11/12": {
    "value": "91.666667%",
    "variable": "var(--chakra-sizes-11\\/12)"
  },
  "sizes.max": {
    "value": "max-content",
    "variable": "var(--chakra-sizes-max)"
  },
  "sizes.min": {
    "value": "min-content",
    "variable": "var(--chakra-sizes-min)"
  },
  "sizes.fit": {
    "value": "fit-content",
    "variable": "var(--chakra-sizes-fit)"
  },
  "sizes.prose": {
    "value": "60ch",
    "variable": "var(--chakra-sizes-prose)"
  },
  "sizes.full": {
    "value": "100%",
    "variable": "var(--chakra-sizes-full)"
  },
  "sizes.dvh": {
    "value": "100dvh",
    "variable": "var(--chakra-sizes-dvh)"
  },
  "sizes.svh": {
    "value": "100svh",
    "variable": "var(--chakra-sizes-svh)"
  },
  "sizes.lvh": {
    "value": "100lvh",
    "variable": "var(--chakra-sizes-lvh)"
  },
  "sizes.dvw": {
    "value": "100dvw",
    "variable": "var(--chakra-sizes-dvw)"
  },
  "sizes.svw": {
    "value": "100svw",
    "variable": "var(--chakra-sizes-svw)"
  },
  "sizes.lvw": {
    "value": "100lvw",
    "variable": "var(--chakra-sizes-lvw)"
  },
  "sizes.vw": {
    "value": "100vw",
    "variable": "var(--chakra-sizes-vw)"
  },
  "sizes.vh": {
    "value": "100vh",
    "variable": "var(--chakra-sizes-vh)"
  },
  "sizes.breakpoint-sm": {
    "value": "480px",
    "variable": "var(--chakra-sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--chakra-sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--chakra-sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--chakra-sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--chakra-sizes-breakpoint-2xl)"
  },
  "zIndex.hide": {
    "value": -1,
    "variable": "var(--chakra-z-index-hide)"
  },
  "zIndex.base": {
    "value": 0,
    "variable": "var(--chakra-z-index-base)"
  },
  "zIndex.docked": {
    "value": 10,
    "variable": "var(--chakra-z-index-docked)"
  },
  "zIndex.dropdown": {
    "value": 1000,
    "variable": "var(--chakra-z-index-dropdown)"
  },
  "zIndex.sticky": {
    "value": 1100,
    "variable": "var(--chakra-z-index-sticky)"
  },
  "zIndex.banner": {
    "value": 1200,
    "variable": "var(--chakra-z-index-banner)"
  },
  "zIndex.overlay": {
    "value": 1300,
    "variable": "var(--chakra-z-index-overlay)"
  },
  "zIndex.modal": {
    "value": 1400,
    "variable": "var(--chakra-z-index-modal)"
  },
  "zIndex.popover": {
    "value": 1500,
    "variable": "var(--chakra-z-index-popover)"
  },
  "zIndex.skipNav": {
    "value": 1600,
    "variable": "var(--chakra-z-index-skip-nav)"
  },
  "zIndex.toast": {
    "value": 1700,
    "variable": "var(--chakra-z-index-toast)"
  },
  "zIndex.tooltip": {
    "value": 1800,
    "variable": "var(--chakra-z-index-tooltip)"
  },
  "zIndex.max": {
    "value": 2147483647,
    "variable": "var(--chakra-z-index-max)"
  },
  "cursor.button": {
    "value": "pointer",
    "variable": "var(--chakra-cursor-button)"
  },
  "cursor.checkbox": {
    "value": "default",
    "variable": "var(--chakra-cursor-checkbox)"
  },
  "cursor.disabled": {
    "value": "not-allowed",
    "variable": "var(--chakra-cursor-disabled)"
  },
  "cursor.menuitem": {
    "value": "default",
    "variable": "var(--chakra-cursor-menuitem)"
  },
  "cursor.option": {
    "value": "default",
    "variable": "var(--chakra-cursor-option)"
  },
  "cursor.radio": {
    "value": "default",
    "variable": "var(--chakra-cursor-radio)"
  },
  "cursor.slider": {
    "value": "default",
    "variable": "var(--chakra-cursor-slider)"
  },
  "cursor.switch": {
    "value": "pointer",
    "variable": "var(--chakra-cursor-switch)"
  },
  "breakpoints.sm": {
    "value": "480px",
    "variable": "var(--chakra-breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--chakra-breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--chakra-breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--chakra-breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--chakra-breakpoints-2xl)"
  },
  "radii.l1": {
    "value": "var(--chakra-radii-xs)",
    "variable": "var(--chakra-radii-l1)"
  },
  "radii.l2": {
    "value": "var(--chakra-radii-sm)",
    "variable": "var(--chakra-radii-l2)"
  },
  "radii.l3": {
    "value": "var(--chakra-radii-md)",
    "variable": "var(--chakra-radii-l3)"
  },
  "spacing.-1": {
    "value": "calc(var(--chakra-spacing-1) * -1)",
    "variable": "var(--chakra-spacing-1)"
  },
  "spacing.-2": {
    "value": "calc(var(--chakra-spacing-2) * -1)",
    "variable": "var(--chakra-spacing-2)"
  },
  "spacing.-3": {
    "value": "calc(var(--chakra-spacing-3) * -1)",
    "variable": "var(--chakra-spacing-3)"
  },
  "spacing.-4": {
    "value": "calc(var(--chakra-spacing-4) * -1)",
    "variable": "var(--chakra-spacing-4)"
  },
  "spacing.-5": {
    "value": "calc(var(--chakra-spacing-5) * -1)",
    "variable": "var(--chakra-spacing-5)"
  },
  "spacing.-6": {
    "value": "calc(var(--chakra-spacing-6) * -1)",
    "variable": "var(--chakra-spacing-6)"
  },
  "spacing.-7": {
    "value": "calc(var(--chakra-spacing-7) * -1)",
    "variable": "var(--chakra-spacing-7)"
  },
  "spacing.-8": {
    "value": "calc(var(--chakra-spacing-8) * -1)",
    "variable": "var(--chakra-spacing-8)"
  },
  "spacing.-9": {
    "value": "calc(var(--chakra-spacing-9) * -1)",
    "variable": "var(--chakra-spacing-9)"
  },
  "spacing.-10": {
    "value": "calc(var(--chakra-spacing-10) * -1)",
    "variable": "var(--chakra-spacing-10)"
  },
  "spacing.-11": {
    "value": "calc(var(--chakra-spacing-11) * -1)",
    "variable": "var(--chakra-spacing-11)"
  },
  "spacing.-12": {
    "value": "calc(var(--chakra-spacing-12) * -1)",
    "variable": "var(--chakra-spacing-12)"
  },
  "spacing.-14": {
    "value": "calc(var(--chakra-spacing-14) * -1)",
    "variable": "var(--chakra-spacing-14)"
  },
  "spacing.-16": {
    "value": "calc(var(--chakra-spacing-16) * -1)",
    "variable": "var(--chakra-spacing-16)"
  },
  "spacing.-20": {
    "value": "calc(var(--chakra-spacing-20) * -1)",
    "variable": "var(--chakra-spacing-20)"
  },
  "spacing.-24": {
    "value": "calc(var(--chakra-spacing-24) * -1)",
    "variable": "var(--chakra-spacing-24)"
  },
  "spacing.-28": {
    "value": "calc(var(--chakra-spacing-28) * -1)",
    "variable": "var(--chakra-spacing-28)"
  },
  "spacing.-32": {
    "value": "calc(var(--chakra-spacing-32) * -1)",
    "variable": "var(--chakra-spacing-32)"
  },
  "spacing.-36": {
    "value": "calc(var(--chakra-spacing-36) * -1)",
    "variable": "var(--chakra-spacing-36)"
  },
  "spacing.-40": {
    "value": "calc(var(--chakra-spacing-40) * -1)",
    "variable": "var(--chakra-spacing-40)"
  },
  "spacing.-44": {
    "value": "calc(var(--chakra-spacing-44) * -1)",
    "variable": "var(--chakra-spacing-44)"
  },
  "spacing.-48": {
    "value": "calc(var(--chakra-spacing-48) * -1)",
    "variable": "var(--chakra-spacing-48)"
  },
  "spacing.-52": {
    "value": "calc(var(--chakra-spacing-52) * -1)",
    "variable": "var(--chakra-spacing-52)"
  },
  "spacing.-56": {
    "value": "calc(var(--chakra-spacing-56) * -1)",
    "variable": "var(--chakra-spacing-56)"
  },
  "spacing.-60": {
    "value": "calc(var(--chakra-spacing-60) * -1)",
    "variable": "var(--chakra-spacing-60)"
  },
  "spacing.-64": {
    "value": "calc(var(--chakra-spacing-64) * -1)",
    "variable": "var(--chakra-spacing-64)"
  },
  "spacing.-72": {
    "value": "calc(var(--chakra-spacing-72) * -1)",
    "variable": "var(--chakra-spacing-72)"
  },
  "spacing.-80": {
    "value": "calc(var(--chakra-spacing-80) * -1)",
    "variable": "var(--chakra-spacing-80)"
  },
  "spacing.-96": {
    "value": "calc(var(--chakra-spacing-96) * -1)",
    "variable": "var(--chakra-spacing-96)"
  },
  "spacing.-0.5": {
    "value": "calc(var(--chakra-spacing-0\\.5) * -1)",
    "variable": "var(--chakra-spacing-0\\.5)"
  },
  "spacing.-1.5": {
    "value": "calc(var(--chakra-spacing-1\\.5) * -1)",
    "variable": "var(--chakra-spacing-1\\.5)"
  },
  "spacing.-2.5": {
    "value": "calc(var(--chakra-spacing-2\\.5) * -1)",
    "variable": "var(--chakra-spacing-2\\.5)"
  },
  "spacing.-3.5": {
    "value": "calc(var(--chakra-spacing-3\\.5) * -1)",
    "variable": "var(--chakra-spacing-3\\.5)"
  },
  "spacing.-4.5": {
    "value": "calc(var(--chakra-spacing-4\\.5) * -1)",
    "variable": "var(--chakra-spacing-4\\.5)"
  },
  "colors.bg": {
    "value": "var(--chakra-colors-bg)",
    "variable": "var(--chakra-colors-bg)"
  },
  "colors.bg.subtle": {
    "value": "var(--chakra-colors-bg-subtle)",
    "variable": "var(--chakra-colors-bg-subtle)"
  },
  "colors.bg.muted": {
    "value": "var(--chakra-colors-bg-muted)",
    "variable": "var(--chakra-colors-bg-muted)"
  },
  "colors.bg.emphasized": {
    "value": "var(--chakra-colors-bg-emphasized)",
    "variable": "var(--chakra-colors-bg-emphasized)"
  },
  "colors.bg.inverted": {
    "value": "var(--chakra-colors-bg-inverted)",
    "variable": "var(--chakra-colors-bg-inverted)"
  },
  "colors.bg.panel": {
    "value": "var(--chakra-colors-bg-panel)",
    "variable": "var(--chakra-colors-bg-panel)"
  },
  "colors.bg.error": {
    "value": "var(--chakra-colors-bg-error)",
    "variable": "var(--chakra-colors-bg-error)"
  },
  "colors.bg.warning": {
    "value": "var(--chakra-colors-bg-warning)",
    "variable": "var(--chakra-colors-bg-warning)"
  },
  "colors.bg.success": {
    "value": "var(--chakra-colors-bg-success)",
    "variable": "var(--chakra-colors-bg-success)"
  },
  "colors.bg.info": {
    "value": "var(--chakra-colors-bg-info)",
    "variable": "var(--chakra-colors-bg-info)"
  },
  "colors.fg": {
    "value": "var(--chakra-colors-fg)",
    "variable": "var(--chakra-colors-fg)"
  },
  "colors.fg.muted": {
    "value": "var(--chakra-colors-fg-muted)",
    "variable": "var(--chakra-colors-fg-muted)"
  },
  "colors.fg.subtle": {
    "value": "var(--chakra-colors-fg-subtle)",
    "variable": "var(--chakra-colors-fg-subtle)"
  },
  "colors.fg.inverted": {
    "value": "var(--chakra-colors-fg-inverted)",
    "variable": "var(--chakra-colors-fg-inverted)"
  },
  "colors.fg.error": {
    "value": "var(--chakra-colors-fg-error)",
    "variable": "var(--chakra-colors-fg-error)"
  },
  "colors.fg.warning": {
    "value": "var(--chakra-colors-fg-warning)",
    "variable": "var(--chakra-colors-fg-warning)"
  },
  "colors.fg.success": {
    "value": "var(--chakra-colors-fg-success)",
    "variable": "var(--chakra-colors-fg-success)"
  },
  "colors.fg.info": {
    "value": "var(--chakra-colors-fg-info)",
    "variable": "var(--chakra-colors-fg-info)"
  },
  "colors.border": {
    "value": "var(--chakra-colors-border)",
    "variable": "var(--chakra-colors-border)"
  },
  "colors.border.muted": {
    "value": "var(--chakra-colors-border-muted)",
    "variable": "var(--chakra-colors-border-muted)"
  },
  "colors.border.subtle": {
    "value": "var(--chakra-colors-border-subtle)",
    "variable": "var(--chakra-colors-border-subtle)"
  },
  "colors.border.emphasized": {
    "value": "var(--chakra-colors-border-emphasized)",
    "variable": "var(--chakra-colors-border-emphasized)"
  },
  "colors.border.inverted": {
    "value": "var(--chakra-colors-border-inverted)",
    "variable": "var(--chakra-colors-border-inverted)"
  },
  "colors.border.error": {
    "value": "var(--chakra-colors-border-error)",
    "variable": "var(--chakra-colors-border-error)"
  },
  "colors.border.warning": {
    "value": "var(--chakra-colors-border-warning)",
    "variable": "var(--chakra-colors-border-warning)"
  },
  "colors.border.success": {
    "value": "var(--chakra-colors-border-success)",
    "variable": "var(--chakra-colors-border-success)"
  },
  "colors.border.info": {
    "value": "var(--chakra-colors-border-info)",
    "variable": "var(--chakra-colors-border-info)"
  },
  "colors.gray.contrast": {
    "value": "var(--chakra-colors-gray-contrast)",
    "variable": "var(--chakra-colors-gray-contrast)"
  },
  "colors.gray.fg": {
    "value": "var(--chakra-colors-gray-fg)",
    "variable": "var(--chakra-colors-gray-fg)"
  },
  "colors.gray.subtle": {
    "value": "var(--chakra-colors-gray-subtle)",
    "variable": "var(--chakra-colors-gray-subtle)"
  },
  "colors.gray.muted": {
    "value": "var(--chakra-colors-gray-muted)",
    "variable": "var(--chakra-colors-gray-muted)"
  },
  "colors.gray.emphasized": {
    "value": "var(--chakra-colors-gray-emphasized)",
    "variable": "var(--chakra-colors-gray-emphasized)"
  },
  "colors.gray.solid": {
    "value": "var(--chakra-colors-gray-solid)",
    "variable": "var(--chakra-colors-gray-solid)"
  },
  "colors.gray.focusRing": {
    "value": "var(--chakra-colors-gray-focus-ring)",
    "variable": "var(--chakra-colors-gray-focus-ring)"
  },
  "colors.gray.border": {
    "value": "var(--chakra-colors-gray-border)",
    "variable": "var(--chakra-colors-gray-border)"
  },
  "colors.red.contrast": {
    "value": "var(--chakra-colors-red-contrast)",
    "variable": "var(--chakra-colors-red-contrast)"
  },
  "colors.red.fg": {
    "value": "var(--chakra-colors-red-fg)",
    "variable": "var(--chakra-colors-red-fg)"
  },
  "colors.red.subtle": {
    "value": "var(--chakra-colors-red-subtle)",
    "variable": "var(--chakra-colors-red-subtle)"
  },
  "colors.red.muted": {
    "value": "var(--chakra-colors-red-muted)",
    "variable": "var(--chakra-colors-red-muted)"
  },
  "colors.red.emphasized": {
    "value": "var(--chakra-colors-red-emphasized)",
    "variable": "var(--chakra-colors-red-emphasized)"
  },
  "colors.red.solid": {
    "value": "var(--chakra-colors-red-solid)",
    "variable": "var(--chakra-colors-red-solid)"
  },
  "colors.red.focusRing": {
    "value": "var(--chakra-colors-red-focus-ring)",
    "variable": "var(--chakra-colors-red-focus-ring)"
  },
  "colors.red.border": {
    "value": "var(--chakra-colors-red-border)",
    "variable": "var(--chakra-colors-red-border)"
  },
  "colors.orange.contrast": {
    "value": "var(--chakra-colors-orange-contrast)",
    "variable": "var(--chakra-colors-orange-contrast)"
  },
  "colors.orange.fg": {
    "value": "var(--chakra-colors-orange-fg)",
    "variable": "var(--chakra-colors-orange-fg)"
  },
  "colors.orange.subtle": {
    "value": "var(--chakra-colors-orange-subtle)",
    "variable": "var(--chakra-colors-orange-subtle)"
  },
  "colors.orange.muted": {
    "value": "var(--chakra-colors-orange-muted)",
    "variable": "var(--chakra-colors-orange-muted)"
  },
  "colors.orange.emphasized": {
    "value": "var(--chakra-colors-orange-emphasized)",
    "variable": "var(--chakra-colors-orange-emphasized)"
  },
  "colors.orange.solid": {
    "value": "var(--chakra-colors-orange-solid)",
    "variable": "var(--chakra-colors-orange-solid)"
  },
  "colors.orange.focusRing": {
    "value": "var(--chakra-colors-orange-focus-ring)",
    "variable": "var(--chakra-colors-orange-focus-ring)"
  },
  "colors.orange.border": {
    "value": "var(--chakra-colors-orange-border)",
    "variable": "var(--chakra-colors-orange-border)"
  },
  "colors.green.contrast": {
    "value": "var(--chakra-colors-green-contrast)",
    "variable": "var(--chakra-colors-green-contrast)"
  },
  "colors.green.fg": {
    "value": "var(--chakra-colors-green-fg)",
    "variable": "var(--chakra-colors-green-fg)"
  },
  "colors.green.subtle": {
    "value": "var(--chakra-colors-green-subtle)",
    "variable": "var(--chakra-colors-green-subtle)"
  },
  "colors.green.muted": {
    "value": "var(--chakra-colors-green-muted)",
    "variable": "var(--chakra-colors-green-muted)"
  },
  "colors.green.emphasized": {
    "value": "var(--chakra-colors-green-emphasized)",
    "variable": "var(--chakra-colors-green-emphasized)"
  },
  "colors.green.solid": {
    "value": "var(--chakra-colors-green-solid)",
    "variable": "var(--chakra-colors-green-solid)"
  },
  "colors.green.focusRing": {
    "value": "var(--chakra-colors-green-focus-ring)",
    "variable": "var(--chakra-colors-green-focus-ring)"
  },
  "colors.green.border": {
    "value": "var(--chakra-colors-green-border)",
    "variable": "var(--chakra-colors-green-border)"
  },
  "colors.blue.contrast": {
    "value": "var(--chakra-colors-blue-contrast)",
    "variable": "var(--chakra-colors-blue-contrast)"
  },
  "colors.blue.fg": {
    "value": "var(--chakra-colors-blue-fg)",
    "variable": "var(--chakra-colors-blue-fg)"
  },
  "colors.blue.subtle": {
    "value": "var(--chakra-colors-blue-subtle)",
    "variable": "var(--chakra-colors-blue-subtle)"
  },
  "colors.blue.muted": {
    "value": "var(--chakra-colors-blue-muted)",
    "variable": "var(--chakra-colors-blue-muted)"
  },
  "colors.blue.emphasized": {
    "value": "var(--chakra-colors-blue-emphasized)",
    "variable": "var(--chakra-colors-blue-emphasized)"
  },
  "colors.blue.solid": {
    "value": "var(--chakra-colors-blue-solid)",
    "variable": "var(--chakra-colors-blue-solid)"
  },
  "colors.blue.focusRing": {
    "value": "var(--chakra-colors-blue-focus-ring)",
    "variable": "var(--chakra-colors-blue-focus-ring)"
  },
  "colors.blue.border": {
    "value": "var(--chakra-colors-blue-border)",
    "variable": "var(--chakra-colors-blue-border)"
  },
  "colors.yellow.contrast": {
    "value": "var(--chakra-colors-yellow-contrast)",
    "variable": "var(--chakra-colors-yellow-contrast)"
  },
  "colors.yellow.fg": {
    "value": "var(--chakra-colors-yellow-fg)",
    "variable": "var(--chakra-colors-yellow-fg)"
  },
  "colors.yellow.subtle": {
    "value": "var(--chakra-colors-yellow-subtle)",
    "variable": "var(--chakra-colors-yellow-subtle)"
  },
  "colors.yellow.muted": {
    "value": "var(--chakra-colors-yellow-muted)",
    "variable": "var(--chakra-colors-yellow-muted)"
  },
  "colors.yellow.emphasized": {
    "value": "var(--chakra-colors-yellow-emphasized)",
    "variable": "var(--chakra-colors-yellow-emphasized)"
  },
  "colors.yellow.solid": {
    "value": "var(--chakra-colors-yellow-solid)",
    "variable": "var(--chakra-colors-yellow-solid)"
  },
  "colors.yellow.focusRing": {
    "value": "var(--chakra-colors-yellow-focus-ring)",
    "variable": "var(--chakra-colors-yellow-focus-ring)"
  },
  "colors.yellow.border": {
    "value": "var(--chakra-colors-yellow-border)",
    "variable": "var(--chakra-colors-yellow-border)"
  },
  "colors.teal.contrast": {
    "value": "var(--chakra-colors-teal-contrast)",
    "variable": "var(--chakra-colors-teal-contrast)"
  },
  "colors.teal.fg": {
    "value": "var(--chakra-colors-teal-fg)",
    "variable": "var(--chakra-colors-teal-fg)"
  },
  "colors.teal.subtle": {
    "value": "var(--chakra-colors-teal-subtle)",
    "variable": "var(--chakra-colors-teal-subtle)"
  },
  "colors.teal.muted": {
    "value": "var(--chakra-colors-teal-muted)",
    "variable": "var(--chakra-colors-teal-muted)"
  },
  "colors.teal.emphasized": {
    "value": "var(--chakra-colors-teal-emphasized)",
    "variable": "var(--chakra-colors-teal-emphasized)"
  },
  "colors.teal.solid": {
    "value": "var(--chakra-colors-teal-solid)",
    "variable": "var(--chakra-colors-teal-solid)"
  },
  "colors.teal.focusRing": {
    "value": "var(--chakra-colors-teal-focus-ring)",
    "variable": "var(--chakra-colors-teal-focus-ring)"
  },
  "colors.teal.border": {
    "value": "var(--chakra-colors-teal-border)",
    "variable": "var(--chakra-colors-teal-border)"
  },
  "colors.purple.contrast": {
    "value": "var(--chakra-colors-purple-contrast)",
    "variable": "var(--chakra-colors-purple-contrast)"
  },
  "colors.purple.fg": {
    "value": "var(--chakra-colors-purple-fg)",
    "variable": "var(--chakra-colors-purple-fg)"
  },
  "colors.purple.subtle": {
    "value": "var(--chakra-colors-purple-subtle)",
    "variable": "var(--chakra-colors-purple-subtle)"
  },
  "colors.purple.muted": {
    "value": "var(--chakra-colors-purple-muted)",
    "variable": "var(--chakra-colors-purple-muted)"
  },
  "colors.purple.emphasized": {
    "value": "var(--chakra-colors-purple-emphasized)",
    "variable": "var(--chakra-colors-purple-emphasized)"
  },
  "colors.purple.solid": {
    "value": "var(--chakra-colors-purple-solid)",
    "variable": "var(--chakra-colors-purple-solid)"
  },
  "colors.purple.focusRing": {
    "value": "var(--chakra-colors-purple-focus-ring)",
    "variable": "var(--chakra-colors-purple-focus-ring)"
  },
  "colors.purple.border": {
    "value": "var(--chakra-colors-purple-border)",
    "variable": "var(--chakra-colors-purple-border)"
  },
  "colors.pink.contrast": {
    "value": "var(--chakra-colors-pink-contrast)",
    "variable": "var(--chakra-colors-pink-contrast)"
  },
  "colors.pink.fg": {
    "value": "var(--chakra-colors-pink-fg)",
    "variable": "var(--chakra-colors-pink-fg)"
  },
  "colors.pink.subtle": {
    "value": "var(--chakra-colors-pink-subtle)",
    "variable": "var(--chakra-colors-pink-subtle)"
  },
  "colors.pink.muted": {
    "value": "var(--chakra-colors-pink-muted)",
    "variable": "var(--chakra-colors-pink-muted)"
  },
  "colors.pink.emphasized": {
    "value": "var(--chakra-colors-pink-emphasized)",
    "variable": "var(--chakra-colors-pink-emphasized)"
  },
  "colors.pink.solid": {
    "value": "var(--chakra-colors-pink-solid)",
    "variable": "var(--chakra-colors-pink-solid)"
  },
  "colors.pink.focusRing": {
    "value": "var(--chakra-colors-pink-focus-ring)",
    "variable": "var(--chakra-colors-pink-focus-ring)"
  },
  "colors.pink.border": {
    "value": "var(--chakra-colors-pink-border)",
    "variable": "var(--chakra-colors-pink-border)"
  },
  "colors.cyan.contrast": {
    "value": "var(--chakra-colors-cyan-contrast)",
    "variable": "var(--chakra-colors-cyan-contrast)"
  },
  "colors.cyan.fg": {
    "value": "var(--chakra-colors-cyan-fg)",
    "variable": "var(--chakra-colors-cyan-fg)"
  },
  "colors.cyan.subtle": {
    "value": "var(--chakra-colors-cyan-subtle)",
    "variable": "var(--chakra-colors-cyan-subtle)"
  },
  "colors.cyan.muted": {
    "value": "var(--chakra-colors-cyan-muted)",
    "variable": "var(--chakra-colors-cyan-muted)"
  },
  "colors.cyan.emphasized": {
    "value": "var(--chakra-colors-cyan-emphasized)",
    "variable": "var(--chakra-colors-cyan-emphasized)"
  },
  "colors.cyan.solid": {
    "value": "var(--chakra-colors-cyan-solid)",
    "variable": "var(--chakra-colors-cyan-solid)"
  },
  "colors.cyan.focusRing": {
    "value": "var(--chakra-colors-cyan-focus-ring)",
    "variable": "var(--chakra-colors-cyan-focus-ring)"
  },
  "colors.cyan.border": {
    "value": "var(--chakra-colors-cyan-border)",
    "variable": "var(--chakra-colors-cyan-border)"
  },
  "shadows.xs": {
    "value": "var(--chakra-shadows-xs)",
    "variable": "var(--chakra-shadows-xs)"
  },
  "shadows.sm": {
    "value": "var(--chakra-shadows-sm)",
    "variable": "var(--chakra-shadows-sm)"
  },
  "shadows.md": {
    "value": "var(--chakra-shadows-md)",
    "variable": "var(--chakra-shadows-md)"
  },
  "shadows.lg": {
    "value": "var(--chakra-shadows-lg)",
    "variable": "var(--chakra-shadows-lg)"
  },
  "shadows.xl": {
    "value": "var(--chakra-shadows-xl)",
    "variable": "var(--chakra-shadows-xl)"
  },
  "shadows.2xl": {
    "value": "var(--chakra-shadows-2xl)",
    "variable": "var(--chakra-shadows-2xl)"
  },
  "shadows.inner": {
    "value": "var(--chakra-shadows-inner)",
    "variable": "var(--chakra-shadows-inner)"
  },
  "shadows.inset": {
    "value": "var(--chakra-shadows-inset)",
    "variable": "var(--chakra-shadows-inset)"
  },
  "colors.colorPalette": {
    "value": "var(--chakra-colors-color-palette)",
    "variable": "var(--chakra-colors-color-palette)"
  },
  "colors.colorPalette.50": {
    "value": "var(--chakra-colors-color-palette-50)",
    "variable": "var(--chakra-colors-color-palette-50)"
  },
  "colors.colorPalette.100": {
    "value": "var(--chakra-colors-color-palette-100)",
    "variable": "var(--chakra-colors-color-palette-100)"
  },
  "colors.colorPalette.200": {
    "value": "var(--chakra-colors-color-palette-200)",
    "variable": "var(--chakra-colors-color-palette-200)"
  },
  "colors.colorPalette.300": {
    "value": "var(--chakra-colors-color-palette-300)",
    "variable": "var(--chakra-colors-color-palette-300)"
  },
  "colors.colorPalette.400": {
    "value": "var(--chakra-colors-color-palette-400)",
    "variable": "var(--chakra-colors-color-palette-400)"
  },
  "colors.colorPalette.500": {
    "value": "var(--chakra-colors-color-palette-500)",
    "variable": "var(--chakra-colors-color-palette-500)"
  },
  "colors.colorPalette.600": {
    "value": "var(--chakra-colors-color-palette-600)",
    "variable": "var(--chakra-colors-color-palette-600)"
  },
  "colors.colorPalette.700": {
    "value": "var(--chakra-colors-color-palette-700)",
    "variable": "var(--chakra-colors-color-palette-700)"
  },
  "colors.colorPalette.800": {
    "value": "var(--chakra-colors-color-palette-800)",
    "variable": "var(--chakra-colors-color-palette-800)"
  },
  "colors.colorPalette.900": {
    "value": "var(--chakra-colors-color-palette-900)",
    "variable": "var(--chakra-colors-color-palette-900)"
  },
  "colors.colorPalette.950": {
    "value": "var(--chakra-colors-color-palette-950)",
    "variable": "var(--chakra-colors-color-palette-950)"
  },
  "colors.colorPalette.subtle": {
    "value": "var(--chakra-colors-color-palette-subtle)",
    "variable": "var(--chakra-colors-color-palette-subtle)"
  },
  "colors.colorPalette.muted": {
    "value": "var(--chakra-colors-color-palette-muted)",
    "variable": "var(--chakra-colors-color-palette-muted)"
  },
  "colors.colorPalette.emphasized": {
    "value": "var(--chakra-colors-color-palette-emphasized)",
    "variable": "var(--chakra-colors-color-palette-emphasized)"
  },
  "colors.colorPalette.inverted": {
    "value": "var(--chakra-colors-color-palette-inverted)",
    "variable": "var(--chakra-colors-color-palette-inverted)"
  },
  "colors.colorPalette.panel": {
    "value": "var(--chakra-colors-color-palette-panel)",
    "variable": "var(--chakra-colors-color-palette-panel)"
  },
  "colors.colorPalette.error": {
    "value": "var(--chakra-colors-color-palette-error)",
    "variable": "var(--chakra-colors-color-palette-error)"
  },
  "colors.colorPalette.warning": {
    "value": "var(--chakra-colors-color-palette-warning)",
    "variable": "var(--chakra-colors-color-palette-warning)"
  },
  "colors.colorPalette.success": {
    "value": "var(--chakra-colors-color-palette-success)",
    "variable": "var(--chakra-colors-color-palette-success)"
  },
  "colors.colorPalette.info": {
    "value": "var(--chakra-colors-color-palette-info)",
    "variable": "var(--chakra-colors-color-palette-info)"
  },
  "colors.colorPalette.contrast": {
    "value": "var(--chakra-colors-color-palette-contrast)",
    "variable": "var(--chakra-colors-color-palette-contrast)"
  },
  "colors.colorPalette.fg": {
    "value": "var(--chakra-colors-color-palette-fg)",
    "variable": "var(--chakra-colors-color-palette-fg)"
  },
  "colors.colorPalette.solid": {
    "value": "var(--chakra-colors-color-palette-solid)",
    "variable": "var(--chakra-colors-color-palette-solid)"
  },
  "colors.colorPalette.focusRing": {
    "value": "var(--chakra-colors-color-palette-focus-ring)",
    "variable": "var(--chakra-colors-color-palette-focus-ring)"
  },
  "colors.colorPalette.border": {
    "value": "var(--chakra-colors-color-palette-border)",
    "variable": "var(--chakra-colors-color-palette-border)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar
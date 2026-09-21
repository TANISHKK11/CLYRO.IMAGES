const paths = {
  upload: (
    <>
      <path d="M12 16V5m0 0L8 9m4-4 4 4" />
      <path d="M4 16v2.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V16" />
    </>
  ),
  download: <path d="M12 4v11m0 0-4-4m4 4 4-4M4 20h16" />,
  refresh: <path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7" />,
  alert: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v5M12 16v.01" />
    </>
  ),
  check: <path d="m5 12 5 5L20 7" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7z" />,
  "circle-check": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.5-6 8-6s8 2 8 6" />
    </>
  ),
  "user-slash": (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.5-6 8-6s8 2 8 6M3 3l18 18" />
    </>
  ),
  transparent: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <path d="M4 12h8V4M12 20v-8h8" />
    </>
  ),
  bag: (
    <>
      <path d="M5 8h14l-1 12H6z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </>
  ),
  hexagon: <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z" />,
  share: (
    <>
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6" />
    </>
  ),
  store: (
    <>
      <path d="M4 9l1.5-5h13L20 9" />
      <path d="M4 9a2.67 2.67 0 0 0 5.33 0 2.67 2.67 0 0 0 5.34 0A2.67 2.67 0 0 0 20 9" />
      <path d="M5 12v8h14v-8" />
    </>
  ),
  compress: <path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" />,
  resize: <path d="M4 9V4h5M20 15v5h-5M4 4l6 6M20 20l-6-6" />,
  swap: <path d="M4 8h14l-3-3M20 16H6l3 3" />,
  image: (
    <>
      <rect x="3.5" y="4.5" width="17" height="15" rx="3" />
      <circle cx="9" cy="10" r="1.6" />
      <path d="m4 17 5-4.5 4 3.5 3-2.5 4 3.5" />
    </>
  ),
  crop: (
    <>
      <path d="M6 3v12a3 3 0 0 0 3 3h12" />
      <path d="M3 6h12a3 3 0 0 1 3 3v12" />
    </>
  ),
  rotate: (
    <>
      <path d="M20 11a8 8 0 0 0-14.5-4.5L3 9" />
      <path d="M3 4v5h5" />
      <path d="M4 13a8 8 0 0 0 14.5 4.5L21 15" />
      <path d="M21 20v-5h-5" />
    </>
  ),
  sparkles: (
    <>
      <path d="m12 3 1.2 4.3L17 9l-3.8 1.7L12 15l-1.2-4.3L7 9l3.8-1.7z" />
      <path d="m19 14 .7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7z" />
    </>
  ),
};

export default function Icon({ name, className = "h-5 w-5", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

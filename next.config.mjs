/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // KEEPZINE used to be proxied in under /edition. It now lives at its own
  // domain, so these send the old links there instead of serving the app.
  //
  // A redirect, not a rewrite, on purpose: the archive lives in IndexedDB and
  // is isolated per origin, so an app reachable from two hostnames shows the
  // same person two different archives. One origin, always.
  //
  // Temporary (307) rather than permanent: a 308 is cached hard by browsers
  // and is painful to undo. Make it permanent once the domain has settled.
  async redirects() {
    return [
      {
        source: "/edition",
        destination: "https://keepzine.com/",
        permanent: false,
      },
      {
        source: "/edition/:path*",
        destination: "https://keepzine.com/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

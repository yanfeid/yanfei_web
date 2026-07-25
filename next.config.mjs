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
  // PRIVATE EDITION lives in its own Vercel project and is proxied in under
  // /edition, so it ships on its own schedule and its 24 MB cutout model
  // never lands in this repo.
  //
  // Two rules, because the bare path and its children match differently. The
  // destination is the project's stable domain — a per-deployment URL would
  // break on its next deploy.
  //
  // Array form runs after the filesystem, so this only works on a path the
  // site does not already own. /projects was taken, and its [id] segment
  // swallows every child path, which is why the app sits at /edition.
  async rewrites() {
    return [
      {
        source: "/edition",
        destination: "https://private-edition.vercel.app/edition/",
      },
      {
        source: "/edition/:path*",
        destination: "https://private-edition.vercel.app/edition/:path*",
      },
    ];
  },
};

export default nextConfig;

import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Shapoorji Pallonji Joyville Vyomora',
    short_name: 'Vyomora Hinjewadi',
    description: 'Luxury 2, 3 & 4 BHK Residences in Hinjewadi & Mahalunge, Pune by Shapoorji Pallonji.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A192F',
    theme_color: '#0A192F',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}

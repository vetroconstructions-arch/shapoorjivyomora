"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix leaflet default icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Helper to create custom div icons for different categories
const createCustomIcon = (colorClass: string, isProject: boolean = false) => {
  return L.divIcon({
    className: "custom-leaflet-icon",
    html: `
      <div class="relative flex items-center justify-center w-8 h-8 ${isProject ? 'scale-125 z-50' : 'scale-100'}">
        ${isProject ? '<div class="absolute inset-0 rounded-full bg-[#C5A059] animate-ping opacity-75"></div>' : ''}
        <div class="relative z-10 w-4 h-4 rounded-full shadow-lg ${colorClass} border-2 border-white flex items-center justify-center">
        </div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
  });
};

const mapStyles = {
  project: createCustomIcon("bg-[#C5A059]", true), // Gold
  itPark: createCustomIcon("bg-indigo-600"),
  hospital: createCustomIcon("bg-red-600"),
  school: createCustomIcon("bg-blue-600"),
  metro: createCustomIcon("bg-purple-600"),
  transport: createCustomIcon("bg-orange-500"),
  retail: createCustomIcon("bg-pink-500"),
  nature: createCustomIcon("bg-green-600"),
};

// Points of interest around Hinjewadi / Mahalunge
const pois = [
  { id: 1, pos: [18.5913, 73.7389], title: "Shapoorji Vyomora (Project Site)", icon: mapStyles.project, type: "Project Site", desc: "Luxury 2 & 3 BHK Residences in Hinjewadi" },
  { id: 2, pos: [18.5985, 73.7188], title: "Hinjewadi IT Park Phase 1", icon: mapStyles.itPark, type: "IT Park", desc: "Major IT Hub (5 mins)" },
  { id: 3, pos: [18.5833, 73.7167], title: "Hinjewadi IT Park Phase 2", icon: mapStyles.itPark, type: "IT Park", desc: "Major IT Hub (10 mins)" },
  { id: 4, pos: [18.5800, 73.7500], title: "Blue Ridge Public School", icon: mapStyles.school, type: "Education", desc: "Premier Education (8 mins)" },
  { id: 5, pos: [18.5700, 73.7400], title: "Ruby Hall Clinic, Hinjewadi", icon: mapStyles.hospital, type: "Healthcare", desc: "Multi-specialty Hospital (12 mins)" },
  { id: 6, pos: [18.5850, 73.7450], title: "Upcoming Metro Station", icon: mapStyles.metro, type: "Transport", desc: "Line 3 Metro (3 mins)" },
  { id: 7, pos: [18.5820, 73.7650], title: "Balewadi High Street", icon: mapStyles.retail, type: "Retail & Entertainment", desc: "Premium Dining & Shopping (15 mins)" },
  { id: 8, pos: [18.6100, 73.7300], title: "Mahalunge-Maan Hi-Tech City", icon: mapStyles.project, type: "Infrastructure", desc: "Upcoming Smart City" },
];

export default function InteractiveMap() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevents SSR hydration mismatch for leaflet

  return (
    <div className="w-full h-full relative z-0">
      <MapContainer
        center={[18.5913, 73.7389]}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full z-0"
        style={{ background: "#1a1a1a" }} // Matches dark matter theme before tiles load
      >
        {/* CartoDB Dark Matter Tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          maxZoom={20}
        />

        {pois.map((poi) => (
          <Marker key={poi.id} position={poi.pos as [number, number]} icon={poi.icon}>
            <Popup className="custom-popup">
              <div className="p-1">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#C5A059] mb-1">{poi.type}</span>
                <strong className="block text-sm font-serif text-[#0A192F] mb-1">{poi.title}</strong>
                <span className="block text-xs text-gray-600">{poi.desc}</span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Custom CSS for Leaflet Overrides without polluting global CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .leaflet-container {
          background-color: transparent !important;
          z-index: 10 !important;
        }
        .custom-popup .leaflet-popup-content-wrapper {
          background: #FDFBF7;
          border-radius: 4px;
          border: 1px solid rgba(10, 25, 47, 0.1);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
        }
        .custom-popup .leaflet-popup-tip {
          background: #FDFBF7;
        }
        .custom-popup .leaflet-popup-close-button {
          color: #0A192F !important;
          padding: 4px !important;
        }
      `}} />
    </div>
  );
}

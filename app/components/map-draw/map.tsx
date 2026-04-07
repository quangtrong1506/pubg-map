// src/app/components/map-inner.tsx
'use client';

import L from 'leaflet';
import { ImageOverlay, MapContainer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import { MapCircle } from './map-circle';
import { MapClickCoords } from './map-click-coords';
import { MapMeasure } from './map-measure';

const bounds: [[number, number], [number, number]] = [
   [0, 0],
   [1000, 1000],
];

interface MapInnerProps {
   overlayUrl: string;
   showSecretBunkers?: boolean;
   showBearCave?: boolean;
   measureDistance?: boolean;
   secretBunkers?: [number, number][];
   bearCave?: [number, number][];
   mapSize?: [number, number];
}

export default function MapInner({
   overlayUrl,
   showSecretBunkers,
   showBearCave,
   measureDistance,
   secretBunkers = [],
   bearCave = [],
   mapSize,
}: MapInnerProps): React.ReactElement {
   return (
      <MapContainer
         crs={L.CRS.Simple}
         bounds={bounds}
         className="w-full h-full !cursor-default"
         maxZoom={3}
         minZoom={-1}
         maxBounds={bounds}
         maxBoundsViscosity={1.0}
         fadeAnimation={true}
      >
         {/* Nền */}
         <ImageOverlay url={overlayUrl} bounds={bounds} />

         {/* Ấn để hiện toạ độ */}
         <MapClickCoords />

         {/* Hầm bí mật */}
         {showSecretBunkers &&
            secretBunkers.map((pos, i) => <MapCircle key={i} center={pos} radius={5} fillColor="red" />)}

         {showBearCave &&
            bearCave.map((pos, i) => <MapCircle key={i} center={pos} radius={5} fillColor="blue" strokeColor="blue" />)}
         {/* Đo khoảng cách */}
         {measureDistance && <MapMeasure scale={(mapSize?.[0] || 1) / 1000} />}
      </MapContainer>
   );
}

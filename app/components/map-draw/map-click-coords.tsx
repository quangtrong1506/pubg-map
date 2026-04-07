'use client';

import { LatLngTuple, divIcon } from 'leaflet';
import { useState } from 'react';
import { Marker, Tooltip, useMapEvents } from 'react-leaflet';

export function MapClickCoords(): React.ReactElement | null {
   const [pos, setPos] = useState<LatLngTuple | null>(null);

   useMapEvents({
      click(e) {
         const lat = Number(e.latlng.lat.toFixed(2));
         const lng = Number(e.latlng.lng.toFixed(2));
         setPos([lat, lng]);
      },
   });

   if (!pos) return null;

   return (
      <Marker position={pos} icon={divIcon({ className: 'hidden' })}>
         <Tooltip permanent direction="top" offset={[0, -10]}>
            <div className="bg-black text-white px-2 py-1 rounded text-xs">
               [{pos[0]}, {pos[1]}]
            </div>
         </Tooltip>
      </Marker>
   );
}

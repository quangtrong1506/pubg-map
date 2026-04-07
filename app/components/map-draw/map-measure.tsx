// src/app/components/map-measure.tsx
'use client';

import { divIcon, LatLngTuple } from 'leaflet';
import { useState } from 'react';
import { Marker, Polyline, Tooltip, useMapEvents } from 'react-leaflet';

interface MapMeasurePropsInterface {
   scale?: number;
}

export function MapMeasure({ scale = 8 }: MapMeasurePropsInterface): React.ReactElement | null {
   const [points, setPoints] = useState<LatLngTuple[]>([]);

   useMapEvents({
      click(e) {
         const newPoint: LatLngTuple = [e.latlng.lat, e.latlng.lng];

         setPoints((prev) => {
            if (prev.length === 2) return [newPoint]; // reset
            return [...prev, newPoint];
         });
      },
   });

   if (points.length === 0) return null;

   const redDotIcon = divIcon({
      className: '',
      html: `
      <div style="width:10px;height:10px;background:red;border-radius:50%;border:2px solid white;box-shadow: 0 0 6px red;"></div>
    `,
   });

   if (points.length === 1) return <Marker position={points[0]} icon={redDotIcon} />;

   const [p1, p2] = points;

   const dx = p2[1] - p1[1];
   const dy = p2[0] - p1[0];
   const pixelDistance = Math.sqrt(dx * dx + dy * dy);
   const meterDistance = pixelDistance * scale;

   const mid: LatLngTuple = [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2];

   return (
      <>
         <Marker position={p1} icon={redDotIcon} />
         <Marker position={p2} icon={redDotIcon} />

         <Polyline positions={points} pathOptions={{ color: 'yellow', weight: 2 }} />

         <Marker position={mid} icon={divIcon({ className: 'hidden' })}>
            <Tooltip permanent direction="top" offset={[0, -10]}>
               <div className="text-red-500 font-bold text-lg">{meterDistance.toFixed(0)} m</div>
            </Tooltip>
         </Marker>
      </>
   );
}

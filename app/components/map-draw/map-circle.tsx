'use client';

import { LatLngTuple } from 'leaflet';
import { Circle } from 'react-leaflet';

export interface MapCirclePropsInterface {
   center: LatLngTuple;
   radius: number;

   strokeColor?: string;
   strokeWidth?: number;

   fillColor?: string;
   fillOpacity?: number;
}

export function MapCircle({
   center,
   radius,
   strokeColor = 'red',
   strokeWidth = 2,
   fillColor = 'transparent',
   fillOpacity = 0,
}: MapCirclePropsInterface): React.ReactElement {
   return (
      <Circle
         center={center}
         radius={radius}
         pathOptions={{
            color: strokeColor,
            weight: strokeWidth,
            fillColor: fillColor,
            fillOpacity: fillColor === 'transparent' ? 0 : fillOpacity,
         }}
      />
   );
}

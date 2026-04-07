import { divIcon, LatLngTuple } from 'leaflet';
import { Marker, Tooltip } from 'react-leaflet';

export function MapTooltip({ position, text }: { position: LatLngTuple; text: string }): React.ReactElement {
   return (
      <Marker position={position} icon={divIcon({ className: 'hidden' })}>
         <Tooltip
            permanent // 👈 luôn hiện
            direction="top"
            offset={[0, -10]}
         >
            {text}
         </Tooltip>
      </Marker>
   );
}

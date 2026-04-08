'use client';

import { MAPS } from '@/app/data';
import dynamic from 'next/dynamic';
import { useState } from 'react';
const MapInner = dynamic(() => import('../map-draw/map'), {
   ssr: false,
});
export const Maps = () => {
   const [selectedMap, setSelectedMap] = useState(MAPS[0]);
   const [showSecretBunkers, setShowSecretBunkers] = useState<boolean>(true);
   const [showBearCave, setShowBearCave] = useState<boolean>(true);
   const [measureDistance, setMeasureDistance] = useState<boolean>(false);
   return (
      <div className="w-full flex justify-center flex-wrap lg:flex-nowrap">
         <div className="lg:w-xs w-full grid lg:grid-cols-1 grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2 p-4 content-start">
            {MAPS.map((map) => (
               <div className="" key={map.name}>
                  <div
                     className={`select-none border text-center border-gray-200 rounded py-2 px-4 text-lg font-medium ${selectedMap.id === map.id ? 'text-green-600 border-green-500' : 'text-gray-500 border-gray-200'}`}
                     onClick={() => setSelectedMap(map)}
                  >
                     {map.name}
                  </div>
               </div>
            ))}
         </div>
         <div className="aspect-square w-full lg:h-screen bg-amber-200">
            <MapInner
               overlayUrl={selectedMap.image}
               showSecretBunkers={showSecretBunkers}
               measureDistance={measureDistance}
               secretBunkers={selectedMap.secretBunkers}
               mapSize={[selectedMap.width, selectedMap.height]}
               showBearCave={showBearCave}
               bearCave={selectedMap.bearCave}
            />
         </div>
         <div className="w-xs flex flex-col items-center">
            <h2 className="text-4xl font-bold mt-4">{selectedMap.name}</h2>
            {selectedMap.secretBunkers.length > 0 && (
               <div className="w-full mt-4">
                  <div
                     className={`mx-4 my-1 select-none border border-gray-200 rounded py-2 px-4 text-lg font-medium ${showSecretBunkers ? 'text-green-600 border-green-500' : 'text-gray-500 border-gray-200'}`}
                     onClick={() => setShowSecretBunkers((prev) => !prev)}
                  >
                     Hầm bí mật
                  </div>
               </div>
            )}
            {selectedMap.bearCave && selectedMap.bearCave.length > 0 && (
               <div className="w-full">
                  <div
                     className={`mx-4 my-1  select-none border border-gray-200 rounded py-2 px-4 text-lg font-medium ${showBearCave ? 'text-green-600 border-green-500' : 'text-gray-500 border-gray-200'}`}
                     onClick={() => setShowBearCave((prev) => !prev)}
                  >
                     Hang Gấu
                  </div>
               </div>
            )}
            <div className="w-full">
               <div
                  className={`mx-4 my-1  select-none border border-gray-200 rounded py-2 px-4 text-lg font-medium ${measureDistance ? 'text-green-600 border-green-500' : 'text-gray-500 border-gray-200'}`}
                  onClick={() => setMeasureDistance((prev) => !prev)}
               >
                  Đo khoảng cách
               </div>
            </div>
         </div>
      </div>
   );
};

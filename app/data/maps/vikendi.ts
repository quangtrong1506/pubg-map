import { MapInterface } from './map';

export const vikendiMap: MapInterface = {
   name: 'Vikendi',
   image: '/maps/vikendi.webp',
   description:
      'Vikendi is a map in PUBG featuring a unique landscape with diverse environments. It provides players with various strategic options and challenges.',
   id: 'vikendi',
   width: 8000,
   height: 8000,
   secretBunkers: [
      [196.5, 485.5],
      [278.5, 746.5],
      [308.5, 292],
      [392.5, 578.5],
      [522.5, 840],
      [527, 171],
      [605, 503.5],
      [698.5, 767.5],
      [806.5, 337.5],
      [838, 664.5],
   ],
   bearCave: [
      [832, 350],
      [831, 650],
      [558, 575],
      [656, 712],
      [274, 643],
      [521, 816],
      [786, 744],
   ],
};

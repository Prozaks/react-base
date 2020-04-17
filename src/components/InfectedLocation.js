import React from 'react';
import Region from './Region';
import InfectedQuantity from './InfectedQuantity';
import DeathQuantity from './DeathQuantity';
import RecoveredQuantity from './RecoveredQuantity';
import ActiveQuantity from './ActiveQuantity';
import TotalTested from './TotalTested';

// Arrow Function
const InfectedLocation = () => (
  <div> 
    <ul>
      <li>
        <a href="">
          <Region></Region>
          <InfectedQuantity></InfectedQuantity>
          <DeathQuantity></DeathQuantity>
          <RecoveredQuantity></RecoveredQuantity>
          <ActiveQuantity></ActiveQuantity>
          <TotalTested></TotalTested>
        </a>
      </li>
    </ul>
  </div>
);

export default InfectedLocation;


//////// <li><a href=""> Antofagasta </a></li>
//////// <li><a href=""> Atacama </a></li>
//////// <li><a href=""> Coquimbo </a></li>
//////// <li><a href=""> Valparaíso </a></li>
//////// <li><a href=""> Metropolitana </a></li>
//////// <li><a href=""> O'Higgins </a></li>
//////// <li><a href=""> Maule </a></li>
//////// <li><a href=""> Ñuble </a></li>
//////// <li><a href=""> Biobío </a></li>
//////// <li><a href=""> Araucanía </a></li>
//////// <li><a href=""> Los Ríos </a></li>
//////// <li><a href=""> Los Lagos </a></li>
//////// <li><a href=""> Aysén </a></li>
//////// <li><a href=""> Magallanes </a></li>
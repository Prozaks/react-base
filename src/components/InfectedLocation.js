import React from 'react';
import Region from './Region';
import InfectedQuantity from './InfectedQuantity';
import DeathQuantity from './DeathQuantity';
import RecoveredQuantity from './RecoveredQuantity';
import ActiveQuantity from './ActiveQuantity';
import TotalTested from './TotalTested';
import {
  AP,
  AN,
  AT,
  CO,
  VS,
  RM,
  LI,
  ML,
  NB,
  BI,
  AR,
  LR,
  LL,
  AI,
  MA
} from './../constants/regions'


// Arrow Function
const InfectedLocation = () => (
  <div> 
    <ul>
      <li>
        <a href="">
          <Region 
            region={"Arica y Parinacota"}/>
          <InfectedQuantity 
            infected={150}/>
          <DeathQuantity 
            death={30}/>
          <RecoveredQuantity 
            recovered={60}/>
          <ActiveQuantity 
            active={60}/>
          <TotalTested 
            tested={500}/>
        </a>
      </li>
    </ul>
  </div>
);

export default InfectedLocation;
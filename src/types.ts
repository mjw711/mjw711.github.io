import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: React.ElementType;
  path: string;
}

export interface Review {
  id: number;
  clientName: string;
  service: string;
  text: string;
  rating: number;
}

export interface MissionContextType {
  missionObjective: string;
  setMissionObjective: (objective: string) => void;
}
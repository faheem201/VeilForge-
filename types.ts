import React from 'react';

export type ViewState = 'HOME' | 'LORE' | 'SERVER';

export interface NavItem {
  label: string;
  view?: ViewState;
  href?: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
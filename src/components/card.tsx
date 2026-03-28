import React from 'react';
import { IconBadge } from './icon-badge';

type Props = {
  icon: React.ElementType;
  title: string;
  desc: string;
};

export function Card({ icon, title, desc }: Props) {
  return (
    <div className="p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:border-gray-300 transition-all duration-200">
      <IconBadge icon={icon} />
      <h3 className="text-text text-lg font-semibold mt-5 mb-2">{title}</h3>
      <p className="text-sm text-disable leading-relaxed">{desc}</p>
    </div>
  );
}

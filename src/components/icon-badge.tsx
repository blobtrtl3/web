import React from 'react';

type Props = {
  icon: React.ElementType;
};

export function IconBadge({ icon: Icon }: Props) {
  return (
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
      <Icon className="text-primary" size={22} />
    </div>
  );
}

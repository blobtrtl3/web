import React from 'react';

type Props = {
  icon: React.ElementType;
};
export function IconBadge({ icon: Icon }: Props) {
  return (
    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
      <Icon className="text-background" size={24} />
    </div>
  );
}

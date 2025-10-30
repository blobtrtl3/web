import React from 'react';

type Props = {
  icon: React.ElementType;
};
export function IconBadge({ icon: Icon }: Props) {
  return (
    <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
      <Icon class="text-background" size={24} />
    </div>
  );
}

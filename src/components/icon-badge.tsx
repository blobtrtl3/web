import React from 'react';

type Props = {
  icon: React.ElementType;
};
export function IconBadge({ icon: Icon }: Props) {
  return (
    <div class="w-10 h-10 flex items-center justify-center border-l-3 border-primary">
      <Icon class="text-primary" size={24} />
    </div>
  );
}

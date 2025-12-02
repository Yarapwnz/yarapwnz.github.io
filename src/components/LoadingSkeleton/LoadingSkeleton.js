import React from 'react';
import {
  SkeletonContainer,
  SkeletonSidebar,
  SkeletonNavItem,
  SkeletonContent,
  SkeletonHeader,
  SkeletonAvatar,
  SkeletonInfo,
  SkeletonText,
  SkeletonCard,
  SkeletonMobileNav,
  SkeletonNavIcon
} from './styles';

const LoadingSkeleton = () => {
  return (
    <SkeletonContainer>
      <SkeletonMobileNav>
        {[1, 2, 3, 4, 5].map(i => (
          <SkeletonNavIcon key={i} />
        ))}
      </SkeletonMobileNav>

      <SkeletonSidebar>
        {[1, 2, 3, 4, 5].map(i => (
          <SkeletonNavItem key={i} />
        ))}
      </SkeletonSidebar>

      <SkeletonContent>
        <SkeletonHeader>
          <SkeletonAvatar />
          <SkeletonInfo>
            <SkeletonText $height="32px" $width="200px" />
            <SkeletonText $height="20px" $width="150px" />
            <SkeletonText $height="20px" $width="180px" />
            <SkeletonText $height="48px" $width="120px" />
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
              {[1, 2, 3].map(i => (
                <SkeletonText key={i} $height="28px" $width="100px" />
              ))}
            </div>
          </SkeletonInfo>
        </SkeletonHeader>

        <SkeletonText $height="28px" $width="150px" style={{ marginBottom: '1rem' }} />

        {[1, 2, 3].map(i => (
          <SkeletonCard key={i} />
        ))}
      </SkeletonContent>
    </SkeletonContainer>
  );
};

export default LoadingSkeleton;

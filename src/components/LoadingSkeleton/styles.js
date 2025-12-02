import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #262626;
`;

export const SkeletonSidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 256px;
  height: 100vh;
  background-color: #000;
  padding: 1rem;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const SkeletonNavItem = styled.div`
  height: 40px;
  background: linear-gradient(90deg, #393939 0%, #525252 50%, #393939 100%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
  border-radius: 4px;
  margin-bottom: 0.5rem;
`;

export const SkeletonContent = styled.div`
  margin-left: 256px;
  padding: 2rem;

  @media (max-width: 640px) {
    margin-left: 0;
    padding: 1rem;
    padding-top: 72px;
  }
`;

export const SkeletonHeader = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const SkeletonAvatar = styled.div`
  width: 200px;
  height: 200px;
  background: linear-gradient(90deg, #393939 0%, #525252 50%, #393939 100%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
  border-radius: 4px;
  flex-shrink: 0;
`;

export const SkeletonInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
`;

export const SkeletonText = styled.div`
  height: ${props => props.$height || '20px'};
  width: ${props => props.$width || '100%'};
  background: linear-gradient(90deg, #393939 0%, #525252 50%, #393939 100%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
  border-radius: 4px;
`;

export const SkeletonCard = styled.div`
  background: linear-gradient(90deg, #393939 0%, #525252 50%, #393939 100%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
  border-radius: 4px;
  height: 150px;
  margin-bottom: 1rem;
`;

export const SkeletonMobileNav = styled.div`
  display: none;

  @media (max-width: 640px) {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 56px;
    background-color: #161616;
    border-bottom: 1px solid #393939;
    justify-content: space-around;
    align-items: center;
    z-index: 100;
  }
`;

export const SkeletonNavIcon = styled.div`
  width: 24px;
  height: 24px;
  background: linear-gradient(90deg, #393939 0%, #525252 50%, #393939 100%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
  border-radius: 50%;
`;

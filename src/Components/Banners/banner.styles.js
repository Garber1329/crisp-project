import styled from "styled-components";

export const Banner = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  padding: 80px 0;

  &.banner-top {
    margin-bottom: 120px;
  }

  &.banner-bottom {
    flex-direction: row-reverse;
    margin-top: 120px;
  }
`;

export const BannerContent = styled.div`
  max-width: 480px;

  h1,
  h2 {
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 24px;
    text-transform: uppercase;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 32px;
    color: #444;
  }
`;

export const BannerButton = styled.button`
  padding: 12px 32px;
  border: 2px solid #000;
  background: transparent;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

export const BannerImage = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
`;

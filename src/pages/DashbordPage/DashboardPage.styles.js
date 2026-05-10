import styled from "styled-components";

export const DashboardWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
`;

export const PageTitle = styled.h1`
  margin-bottom: 30px;
  font-size: 32px;
`;

export const DashboardLayout = styled.div`
  display: flex;
  gap: 40px;
`;

export const Sidebar = styled.aside`
  width: 260px;
  border: 1px solid #e5e5e5;
  padding: 20px;
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SidebarItem = styled.li`
  padding: 12px 0;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  font-weight: ${({ active }) => (active ? "700" : "400")};
  color: ${({ active }) => (active ? "#000" : "#555")};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    font-weight: 600;
    color: #000;
  }
`;

export const Content = styled.main`
  flex: 1;
  border: 1px solid #e5e5e5;
  padding: 30px;
`;

export const ContentTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 20px;
`;

export const ContentText = styled.p`
  font-size: 14px;
  color: #555;
`;
export const ContentFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

export const Card = styled.div`
  width: calc(50% - 20px);
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 30px;
`;

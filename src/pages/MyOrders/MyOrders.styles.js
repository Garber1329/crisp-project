import styled from "styled-components";

export const OrdersWrapper = styled.div`
  padding: 20px;
`;

export const OrdersTitle = styled.h2`
  margin-bottom: 30px;
`;

/* 🔥 КОНТЕЙНЕР */
export const OrdersGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

/* 🔥 3 КАРТОЧКИ В РЯД */
export const OrderCard = styled.div`
  width: calc(33.333% - 14px);
  border: 1px solid #eee;
  padding: 20px;
  box-sizing: border-box;
  background: #fff;
`;

export const OrderRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const OrderLabel = styled.span`
  font-weight: 600;
`;

export const OrderValue = styled.span`
  text-align: right;
`;

export const Status = styled.span`
  color: green;
  font-weight: 600;
`;
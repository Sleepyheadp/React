import { Spin } from 'antd';
import styled from 'styled-components';

const StyledLoadingBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  .ant-spin {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Loading = () => {
  return (
    <StyledLoadingBox>
      <Spin size="large" tip="加载中..." />
    </StyledLoadingBox>
  );
};

export default Loading;

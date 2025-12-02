import React from 'react';
import { Link } from 'react-router-dom';
import { PDFViewer, pdf } from '@react-pdf/renderer';
import { Download, ArrowLeft } from '@carbon/icons-react';
import styled from 'styled-components';
import ResumePDF from '../../components/ResumePDF';

const Container = styled.div`
  min-height: 100vh;
  background-color: #161616;
  padding: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0 1rem;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #393939;
  border-radius: 50%;
  color: #f4f4f4;
  text-decoration: none;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #525252;
    transform: translateY(-2px);
  }

  svg {
    fill: #f4f4f4;
  }
`;

const Title = styled.h1`
  color: #f4f4f4;
  font-size: 1.5rem;
  margin: 0;
`;

const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #2ecc40;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #27ae60;
    transform: translateY(-2px);
  }

  svg {
    fill: white;
  }
`;

const ViewerContainer = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  border-radius: 8px;
  overflow: hidden;
`;

const StyledPDFViewer = styled(PDFViewer)`
  width: 100%;
  height: 100%;
  border: none;
`;

const Resume = ({ user }) => {
  const handleDownload = async () => {
    const blob = await pdf(<ResumePDF user={user} />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${user.basics.name.replace(/\s+/g, '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Container>
      <Header>
        <HeaderLeft>
          <BackButton to="/">
            <ArrowLeft size={20} />
          </BackButton>
          <Title>Resume Preview</Title>
        </HeaderLeft>
        <DownloadButton onClick={handleDownload}>
          <Download size={16} />
          Download PDF
        </DownloadButton>
      </Header>
      <ViewerContainer>
        <StyledPDFViewer>
          <ResumePDF user={user} />
        </StyledPDFViewer>
      </ViewerContainer>
    </Container>
  );
};

export default Resume;

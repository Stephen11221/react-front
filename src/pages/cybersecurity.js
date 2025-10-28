import React, { useState, useEffect } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';

// Global Styles
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #eaeaea;
    background-color: #0f172a; /* Dark navy background */
  }

  html {
    scroll-behavior: smooth;
  }
`;

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Styled Components
const AppContainer = styled.div`
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const HeaderSection = styled.section`
  margin-bottom: 60px;
  animation: ${fadeIn} 1s ease-out;
`;

const MainTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 24px;
  color: #60a5fa; /* Blue accent text */
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  line-height: 1.6;
  color: #cbd5e1;
  margin-bottom: 40px;
  max-width: 800px;
`;

const Divider = styled.hr`
  border: none;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6 0%, transparent 100%);
  margin: 40px 0;
`;

// Buttons Section
const ButtonsSection = styled.div`
  display: flex;
  gap: 20px;
  margin: 30px 0;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PrimaryButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
    animation: ${pulse} 0.5s ease-in-out;
  }
`;

const SecondaryButton = styled.button`
  background-color: transparent;
  color: #93c5fd;
  border: 2px solid #3b82f6;
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #1e293b;
    color: #fff;
    transform: translateY(-2px);
  }
`;

// Threats Section
const ThreatsSection = styled.section`
  margin-top: 60px;
  animation: ${fadeIn} 1s ease-out 0.3s both;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #60a5fa;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: #cbd5e1;
  line-height: 1.6;
  max-width: 600px;
`;

// Checkbox Threats Section
const CheckboxThreatsSection = styled.section`
  margin: 60px 0;
  animation: ${fadeIn} 1s ease-out 0.4s both;
`;

const ThreatsList = styled.ul`
  list-style: none;
  margin: 24px 0;
`;

const ThreatItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
  padding: 16px;
  border: 1px solid #334155;
  border-radius: 8px;
  background: #1e293b;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #3b82f6;
    transform: translateX(8px);
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 16px;
  margin-top: 4px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: ${props => props.checked ? '#10b981' : '#64748b'};
  
  &:checked {
    background-color: #10b981;
  }
`;

const ThreatText = styled.span`
  font-size: 1.1rem;
  color: ${props => props.checked ? '#10b981' : '#e2e8f0'};
  font-weight: ${props => props.checked ? '600' : '400'};
  text-decoration: ${props => props.checked ? 'line-through' : 'none'};
  flex: 1;
`;

// Services Section
const ServicesSection = styled.section`
  margin: 60px 0;
  animation: ${fadeIn} 1s ease-out 0.5s both;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 32px;
`;

const ServiceCard = styled.div`
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 8px;
  padding: 28px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(30, 64, 175, 0.3);
    border-color: #3b82f6;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #60a5fa);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #e2e8f0;
`;

const ServiceDescription = styled.p`
  color: #94a3b8;
  line-height: 1.5;
  margin-bottom: 16px;
`;

const ServiceFeatureList = styled.ul`
  list-style: none;
  margin-top: 16px;
`;

const ServiceFeature = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: #cbd5e1;
  font-size: 0.95rem;
  
  &::before {
    content: '✓';
    color: #10b981;
    font-weight: bold;
    margin-right: 8px;
  }
`;

// Stats Component
const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 40px 0;
  padding: 20px;
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  border-radius: 12px;
  color: white;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 20px;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  opacity: 0.9;
`;

// Threat Cards Container (for the original threat cards)
const ThreatCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 40px;
`;

const ThreatCard = styled.div`
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 8px;
  padding: 24px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(30, 64, 175, 0.3);
    border-color: #3b82f6;
  }
`;

const ThreatTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: #e2e8f0;
`;

const ThreatDescription = styled.p`
  color: #94a3b8;
  line-height: 1.5;
  margin-bottom: 16px;
`;

const ThreatSeverity = styled.div`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  
  ${props => {
    switch(props.severity) {
      case 'critical':
        return `
          background-color: #dc2626;
          color: white;
        `;
      case 'high':
        return `
          background-color: #f97316;
          color: white;
        `;
      case 'medium':
        return `
          background-color: #facc15;
          color: #1e293b;
        `;
      default:
        return `
          background-color: #64748b;
          color: white;
        `;
    }
  }}
`;

// Main Component
const CyberSecurityComponent = () => {
  const [currentThreatIndex, setCurrentThreatIndex] = useState(0);
  const [checkboxThreats, setCheckboxThreats] = useState([
    { id: 1, text: "Ransomware attacks targeting Kenyan businesses", checked: false },
    { id: 2, text: "Mobile money fraud and financial scams", checked: true },
    { id: 3, text: "Data breaches in healthcare and education sectors", checked: false },
    { id: 4, text: "Insider threats and employee negligence", checked: true },
    { id: 5, text: "Email phishing targeting government contracts", checked: false }
  ]);

  const [services] = useState([
    {
      title: "Network Security Assessment",
      description: "Comprehensive evaluation of your network infrastructure to identify vulnerabilities and security gaps.",
      features: [
        "Vulnerability scanning",
        "Penetration testing",
        "Security gap analysis",
        "Compliance reporting"
      ]
    },
    {
      title: "Endpoint Protection",
      description: "Advanced security solutions for all endpoints including computers, mobile devices, and servers.",
      features: [
        "Real-time threat detection",
        "Malware protection",
        "Device control",
        "Data loss prevention"
      ]
    },
    {
      title: "Security Monitoring",
      description: "24/7 monitoring and threat detection to protect your business around the clock.",
      features: [
        "24/7 security monitoring",
        "Threat intelligence",
        "Incident response",
        "Security analytics"
      ]
    }
  ]);

  const cyberThreats = [
    {
      title: "Phishing Attacks",
      description: "Deceptive emails and messages targeting Kenyan employees to steal login credentials and sensitive information.",
      severity: "high"
    },
    {
      title: "Ransomware",
      description: "Malicious software that encrypts business data and demands payment for restoration, targeting local businesses.",
      severity: "critical"
    },
    {
      title: "Business Email Compromise",
      description: "Sophisticated scams targeting financial transactions and sensitive business communications.",
      severity: "high"
    },
    {
      title: "Mobile Banking Fraud",
      description: "Growing threats targeting Kenya's extensive mobile banking and payment systems.",
      severity: "medium"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThreatIndex((prevIndex) => 
        prevIndex === cyberThreats.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    
    return () => clearInterval(interval);
  }, [cyberThreats.length]);

  const toggleThreat = (id) => {
    setCheckboxThreats(checkboxThreats.map(threat => 
      threat.id === id ? { ...threat, checked: !threat.checked } : threat
    ));
  };

  const activeThreatsCount = checkboxThreats.filter(threat => threat.checked).length;

  return (
    <AppContainer>
      <GlobalStyle />
      
      {/* Main Header Section */}
      <HeaderSection>
        <MainTitle>
          Protect Your Business<br />
          from Cyber Threats
        </MainTitle>
        
        <Subtitle>
          Comprehensive cybersecurity solutions tailored for Kenyan businesses. From SMEs to enterprises, 
          we provide the protection you need in today's digital landscape.
        </Subtitle>
        
        <Divider />
        
        <ButtonsSection>
          <PrimaryButton>Get Security Assessment</PrimaryButton>
          <SecondaryButton>View Case Studies</SecondaryButton>
        </ButtonsSection>
        
        <Divider />
      </HeaderSection>

      {/* Current Cyber Threats Section with Cards */}
      <ThreatsSection>
        <SectionTitle>Current Cyber Threats in Kenya</SectionTitle>
        <SectionDescription>
          Stay informed about the evolving threat landscape affecting Kenyan businesses
        </SectionDescription>
        
        <ThreatCardsContainer>
          {cyberThreats.map((threat, index) => (
            <ThreatCard key={index}>
              <ThreatTitle>{threat.title}</ThreatTitle>
              <ThreatDescription>{threat.description}</ThreatDescription>
              <ThreatSeverity severity={threat.severity}>
                {threat.severity.charAt(0).toUpperCase() + threat.severity.slice(1)} Risk
              </ThreatSeverity>
            </ThreatCard>
          ))}
        </ThreatCardsContainer>
      </ThreatsSection>

      {/* Checkbox Threats Section */}
      <CheckboxThreatsSection>
        <SectionTitle>Track Current Threats</SectionTitle>
        <SectionDescription>
          Monitor and manage the cybersecurity threats affecting your business
        </SectionDescription>

        <ThreatsList>
          {checkboxThreats.map((threat) => (
            <ThreatItem key={threat.id}>
              <Checkbox 
                checked={threat.checked}
                onChange={() => toggleThreat(threat.id)}
              />
              <ThreatText checked={threat.checked}>
                {threat.text}
              </ThreatText>
            </ThreatItem>
          ))}
        </ThreatsList>

        {/* Stats */}
        <StatsContainer>
          <StatItem>
            <StatNumber>{checkboxThreats.length}</StatNumber>
            <StatLabel>Total Threats Tracked</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{activeThreatsCount}</StatNumber>
            <StatLabel>Active Threats</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{checkboxThreats.length - activeThreatsCount}</StatNumber>
            <StatLabel>Mitigated Threats</StatLabel>
          </StatItem>
        </StatsContainer>
      </CheckboxThreatsSection>

      {/* Our Cybersecurity Services Section */}
      <ServicesSection>
        <SectionTitle>Our Cybersecurity Services</SectionTitle>
        <SectionDescription>
          Comprehensive security solutions designed to protect your business at every level
        </SectionDescription>

        <Divider />

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatureList>
                {service.features.map((feature, featureIndex) => (
                  <ServiceFeature key={featureIndex}>{feature}</ServiceFeature>
                ))}
              </ServiceFeatureList>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesSection>
    </AppContainer>
  );
};

export default CyberSecurityComponent;
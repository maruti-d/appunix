// src/ServicesLiquidFlow.jsx (FIXED LAYOUT)
import React from 'react';
import { Box, Typography, Button, styled, Divider } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


// ----------------------------------------------------
// Core Styles and Keyframes (No changes here, they handle animations)
// ----------------------------------------------------
const floatAnimation = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
`;
const liquidShift = `
  @keyframes liquidShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const LiquidBackgroundBox = styled(Box)(({ theme }) => ({
    minHeight: '100vh', 
    padding: theme.spacing(8, 0),
    backgroundColor: theme.palette.background.default, 
    color: theme.palette.text.primary,
    backgroundImage: `linear-gradient(90deg, #030504c1 0%, #1a353497 50%, #827a0dff 100%)`,
    backgroundSize: '200% 200%',
    animation: 'liquidShift 30s ease infinite',
}));

// Inject the float keyframes into the document
LiquidBackgroundBox.defaultProps = {
    children: (
        <>
            <style>{floatAnimation}</style>
            <style>{liquidShift}</style>
        </>
    )
};

const LiquidGlassPanel = styled(Box)(({ theme, float }) => ({
    backgroundColor: 'rgba(21, 21, 24, 0.5)',
    borderRadius: '24px',
    padding: theme.spacing(4),
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4), inset 0 0 15px rgba(255, 255, 255, 0.05)',
    animation: `float 6s infinite ease-in-out ${float}`,
    transition: 'box-shadow 0.3s',
    '&:hover': {
        scale: 1.02,
        boxShadow: '0 5px 5px rgba(180, 180, 180, 0.15), inset 0 0 10px rgba(255, 255, 255, 0.15)',
    },
}));

// --- Graphics Placeholders ---
const CircleGraphic = ({ color }) => (
    <Box sx={{ 
        width: 40, // Reduced size for better fit
        height: 40, 
        borderRadius: '50%', 
        bgcolor: 'transparent', 
        position: 'absolute',
        top: '20px', 
        right: '20px', 
        boxShadow: `0 0 8px #43fa85c7`
    }} />
);

// --- Feature Card Component (Small adjustment for graphic positioning) ---
const FeatureCard = ({ title, description, delay = '0s', graphic, buttonText = "Learn More" }) => (
    <LiquidGlassPanel float={delay} mb={4} sx={{ position: 'relative', textAlign: 'left' }}>
        {graphic}
        <Typography 
            variant="h5" 
            fontWeight={900} 
            sx={{ color: '#77ff7f', mt: 1 }}
        >
            {title}
        </Typography>
        <Typography variant="body2" color="#ffffff99" my={2}>
            {description}
        </Typography>
        <Button 
            variant="outlined" 
            color="white" 
            endIcon={<ArrowForwardIosIcon sx={{ fontSize: '0.8rem !important' }} />}
            size="large"
            sx={{ borderRadius: 50, textTransform: 'none', px: 3, borderColor: '#2c82ff' }}
        >
            {buttonText}
        </Button>
    </LiquidGlassPanel>
);

// ----------------------------------------------------
// 3. Main Component Structure (FIXED LAYOUT)
// ----------------------------------------------------
const Services = () => {
    return (
            <LiquidBackgroundBox>
                
                {/* --- Header Section (Centered) --- */}
                <Box mb={8} maxWidth="1200px" mx="auto" px={4} textAlign="left">
                    <Typography 
                        variant="h2" 
                        sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 800, color: '#FFFFFF' }} 
                        mb={1}
                    >
                        Future-Proof Services
                    </Typography>
                    <Typography variant="h6" color="#77ff7f" maxWidth="685px">
                        We deliver strategic, design, and development solutions that move beyond tomorrow's trends.
                    </Typography>
                </Box>
                <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mb: 6, maxWidth: '1200px', mx: 'auto' }} />
                {/* --- FIXED TWO-COLUMN FLEX CONTAINER --- */}
                <Box 
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' }, // Stack on mobile, side-by-side on desktop
                        maxWidth: '1200px',
                        mx: 'auto',
                        px: 4,
                        gap: 4, // Spacing between columns
                        alignItems: 'flex-start' // Align content to the top
                    }}
                >
                    
                    {/* Column A (Left - Sticky Sidebar/Mini-Features: 40% Desktop) */}
                    <Box 
                        sx={{ 
                            width: { xs: '100%', md: '35%' }, // Explicitly set width
                            position: { md: 'sticky' }, 
                            top: { md: '80px' }, 
                            order: { xs: 2, md: 1 } // Push to bottom on mobile
                        }}
                    >
                        <LiquidGlassPanel float="0s">
                            <Typography variant="h6" fontWeight={700} mb={1}>
                                Quick Facts
                            </Typography>
                            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mb: 2 }} />
                            <Typography variant="body1" color="white" mb={1}>
                                ⭐ 4.9/5 Client Rating
                            </Typography>
                            <Typography variant="body1" color="white" mb={1}>
                                ⏱️ 24/7 Global Support
                            </Typography>
                            <Typography variant="body1" color="white">
                                🌐 10+ Years Experience
                            </Typography>
                        </LiquidGlassPanel>
                        
                        <Box mt={4} sx={{ textAlign: 'left' }}> 
                            <Button variant="contained" sx={{ 
                                borderRadius: 50, 
                                px: 8, 
                                py: 1.5, 
                                background: '#5f6904ea',
                                color: 'white',
                                fontWeight: 700,
                            }}>
                                START A PROJECT
                            </Button>
                        </Box>
                    </Box>
                            
                    {/* Column B (Right - Main Scrolling Content: 60% Desktop) */}
                    <Box 
                        sx={{ 
                            width: { xs: '100%', md: '65%' }, // Explicitly set width
                            order: { xs: 1, md: 2 } // Display first on mobile
                        }}
                    >
                        <FeatureCard 
                            title="Web Development"
                            description="We align business goals with user needs through comprehensive market research, competitor analysis, and clear product roadmaps."
                            delay="0s"
                            graphic={<CircleGraphic color="#171a1d" />}
                        />
                        <FeatureCard 
                            title="Mobile App Development"
                            description="Crafting captivating interfaces and consistent visual identities that resonate with your target audience, from logo systems to complete UI libraries."
                            delay="0.5s"
                            graphic={<CircleGraphic color="#171a1d" />}
                        />
                        <FeatureCard 
                            title="Development & Engineering"
                            description="Building scalable, high-performance applications using modern frameworks like React, Node.js, and leveraging secure, efficient cloud infrastructure."
                            delay="1s"
                            graphic={<CircleGraphic color="#171a1d" />}
                        />

                        <FeatureCard 
                            title="Shopify Development"
                            description="Building scalable, high-performance applications using modern frameworks like React, Node.js, and leveraging secure, efficient cloud infrastructure."
                            delay="1s"
                            graphic={<CircleGraphic color="#171a1d" />}
                        />
                    </Box>

                </Box>

            </LiquidBackgroundBox>
    );
};

export default Services;
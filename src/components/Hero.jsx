import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroImage from "../assets/hero-premium.png"; // <---- add your image here
import HeroParticles from "./HeroParticles";

export default function Hero() {
  return (
    <Box
      sx={{
        background: "#000",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow behind text */}
      <Box
        sx={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "rgba(0,229,168,0.15)",
          filter: "blur(120px)",
          top: "-50px",
          left: "-50px",
          zIndex: 0,
          borderRadius: "50%",
        }}
      />

      {/* Right Premium Image */}
      <Box
        component="img"
        src={HeroImage}
        alt="AppUnix Premium"
        sx={{
          position: "absolute",
          right: 0,
        left: "40%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "75%",
          opacity: 0.45,
          filter: "drop-shadow(0 0 40px rgba(0,255,170,0.5))",
          pointerEvents: "none",
          userSelect: "none",
          "@media(max-width: 900px)": {
            width: "80%",
            right: "50%",
            top: "20%",
            transform: "translateX(50%)",
            opacity: 0.18,
            display: { xs: "none" }
          },
        }}
      />

      <Container maxWidth="lg" 
      sx={{ 
        zIndex: 2,
        position: "relative",
        lineHeight:{xs: 7}
         }}
         >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Typography variant="h2" 
          sx={{ 
            fontWeight: 800, 
            color: "#00e5a8",
            fontSize: { xs: "2.8rem", sm: "6rem", md: "3.6rem" },
            }}>
            Transforming Ideas Into
          </Typography>

          <Typography
            variant="h2"
            sx={{ 
                fontWeight: 800, 
                mb: 2, 
                display: "inline-block" ,
                fontSize: { xs: "2.8rem", sm: "4rem", md: "3.6rem" },
            }}
          >
            <motion.span
              animate={{ color: ["#fff", "#00e5a8", "#fff"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Digital Reality.
            </motion.span>
          </Typography>

          <Typography sx={{ maxWidth: "600px", 
            fontSize: {  sm: "1.4rem", md: "1.1rem" }, 
            opacity: 0.8 }}>
            We build scalable web, mobile & AI-driven applications for modern
            businesses. From Shopify apps to enterprise-grade systems —
            AppUnix delivers.
          </Typography>

          {/* Buttons */}
          <Box 
          sx={{ 
            mt: { xs: 4, sm: 10 }, 
            display: "flex", 
            gap: 2 }}>
            <Button
              variant="contained"
              component={Link}
              to="/contact"
              sx={{
                background: "#00e5a8",
                color: "#000",
                px: {xs:1,sm:1.5, md:4},
                py: {sm:3, md:1.3},
                fontSize: {xs:"1rem", sm: "1.2rem", md: "1rem" },
                fontWeight: 800,
                textAlign:{xs:"center"},
                "&:hover": { background: "#00b887" },
              }}
            >
              Book Free Consultation
            </Button>

            <Button
              variant="outlined"
              component={Link}
              to="/services"
              sx={{
                borderColor: "#00e5a8",
                color: "#00e5a8",
                px: {xs:1,sm:1.5, md:4},
                py: {sm:3, md:1.3},
                fontSize: {xs:"1rem", sm: "1.2rem", md: "1rem" },
                fontWeight: 800,
                textAlign:{xs:"center"},
                "&:hover": {
                  borderColor: "#00e5a8",
                  background: "rgba(0,229,168,0.1)",
                },
              }}
            >
              Our Services
            </Button>
          </Box>
        </motion.div>
      </Container>
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.6 }}>
  <HeroParticles />
</Box>
    </Box>
  );
}

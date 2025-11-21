import { useState } from "react";
import { Box, Typography, Chip, Grid, Card, CardMedia, CardContent, Modal, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ecomStore from "../assets/ecommerce-store.png";
// import mobilUI from "../assets/mobile-ui.png";
import mobilUI from "../assets/mobile-app-dev.png";
import shopifyDev from "../assets/shopify-dev.png";
import webDev from "../assets/web-dev.png";

const categories = ["All", "Shopify", "React", "Node.js", "UI/UX"];

const projects = [
  {
    id: "shopify-store",
    title: "E-Commerce Store",
    tech: "Shopify",
    image: ecomStore,
    category: "Shopify",
  },
  {
    id: "mobile-app-ui",
    title: "Mobile Apps Android & iOS",
    tech: "Flutter, Dart, Java",
    image: mobilUI,
    category: "Flutter, Dart, Java",
  },
  {
    id: "shopify-development",
    title: "Shopify Store",
    tech: "Remix,Liquid,Hydrogen,Oxygen,Polaris",
    image: shopifyDev,
    category: "Shopify",
  },

  {
    id: "web-devlopment",
    title: "Web Development",
    tech: "Java, React, MongoDB, Microservices, Cloud",
    image: webDev,
    category: "UI/UX",
  },
  {
    id: "mobile-app-ui",
    title: "Mobile App UI",
    tech: "React",
    image: mobilUI,
    category: "React",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const navigate = useNavigate();

  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  const openProject = (p) => {
    setSelected(p);
    setOpen(true);
  };

  return (
    <Box sx={{ background: "#000", color: "#fff", minHeight: "100vh", py: 10 }}>
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 700,
          mb: 3,
          textShadow: "0px 0px 15px rgba(0,255,140,0.5)",
        }}
      >
        Our Portfolio
      </Typography>

      {/* Filter Chips */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        {categories.map(cat => (
          <Chip
            key={cat}
            label={cat}
            onClick={() => setActive(cat)}
            sx={{
              mx: 1,
              mb: 1,
              color: active === cat ? "#00ff95" : "#fff",
              border: "1px solid #00ff95",
              bgcolor: active === cat ? "rgba(0,255,149,0.15)" : "transparent",
              fontWeight: active === cat ? 600 : 400,
              cursor: "pointer",
              transition: "300ms",
              "&:hover": {
                bgcolor: "rgba(0,255,149,0.2)",
                boxShadow: "0px 0px 8px #00ff95",
              },
            }}
            clickable
          />
        ))}
      </Box>

      {/* Project Grid */}
      <Grid container spacing={4} px={5}>
        {filtered.map((p, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card
              onClick={() => openProject(p)}
              sx={{
                position: "relative",
                bgcolor: "#0c0c0c",
                borderRadius: "14px",
                overflow: "hidden",
                transition: "0.4s",
                cursor: "pointer",
                border: "1px solid rgba(0,255,149,0.12)",
                "&:hover": {
                  transform: "translateY(-6px) scale(1.02)",
                  boxShadow: "0 0 18px rgba(0,255,149,0.6)",
                },
              }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  src={p.image}
                  alt={p.title}
                  sx={{
                    height: 240,
                    objectFit: "cover",
                    transition: "0.4s",
                    "&:hover": { transform: "scale(1.08)" },
                  }}
                />

                {/* Hover Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "rgba(0,0,0,0.55)",
                    opacity: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#00ff95",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    transition: "0.4s",
                    // "&:hover": { opacity: 1 },
                  }}
                >
                  View Project →
                </Box>
              </Box>

              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {p.title}
                </Typography>
                <Typography sx={{ color: "#00ff95" }}>{p.tech}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* ✅ Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            background: "#0d0d0d",
            border: "1px solid #00ff95",
            borderRadius: "16px",
            // width: "420px",
            width: { xs: "90vw", sm: "400px", md: "450px" },
            mx: "auto",
            mt: "15vh",
            p: 4,
            textAlign: "center",
            animation: "fadeIn .3s ease",
            "@keyframes fadeIn": {
              from: { opacity: 0, transform: "translateY(20px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          {selected && (
            <>
              <Typography variant="h5" sx={{ color: "#00ff95", fontWeight: 700, mb: 1 }}>
                {selected.title}
              </Typography>

              <Typography sx={{ mb: 3, opacity: 0.8, color: "white" }}>
                Tech Stack: <b style={{ color: "#00ff95" }}>{selected.tech}</b>
              </Typography>

              <Button
                variant="contained"
                sx={{
                  background: "#00ff95",
                  color: "#000",
                  fontWeight: 700,
                  "&:hover": {
                    background: "#00ff95",
                    boxShadow: "0 0 15px #00ff95",
                  },
                }}
                onClick={() => navigate(`/case-study/${selected.id}`)}
              >
                View Case Study →
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}

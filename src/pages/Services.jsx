import React from "react";
import {
    Box,
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CodeIcon from "@mui/icons-material/Code";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

const services = [
    {
        title: "Web Development",
        desc: "High-performance web applications built using modern frameworks.",
        icon: <CodeIcon sx={{ fontSize: 40 }} />,
    },
    {
        title: "Mobile App Development",
        desc: "Cross-platform and native mobile apps with seamless UX.",
        icon: <SmartphoneIcon sx={{ fontSize: 40 }} />,
    },
    {
        title: "Shopify Development",
        desc: "Custom Shopify stores, apps & automation for eCommerce growth.",
        icon: <ShoppingBagIcon sx={{ fontSize: 40 }} />,
    },
    {
        title: "UI/UX & Product Design",
        desc: "Human-centered design for digital products that delight users.",
        icon: <DesignServicesIcon sx={{ fontSize: 40 }} />,
    },
];

export default function Services() {
    //   const theme = useTheme();

    return (
        <Box sx={{ py: 2, background: "#000", color: "#fff" }}>
            <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        fontWeight={800}
                        align="center"
                        sx={{ mb: 2, color: "#00e5a8" }}
                    >
                        Services We Offer
                    </Typography>

                    <Typography align="center" sx={{ mb: 6, opacity: 0.8 }}>
                        Powerful tech solutions to scale your business
                    </Typography>

                    <Grid
                        container
                        spacing={3}
                        alignItems="stretch"               /* IMPORTANT: force equal heights */
                    >
                        {services.map((service, i) => (
                            <Grid
                                item
                                key={i}
                                xs={12}
                                sm={6}
                                md={6}                          /* two columns on md and up */
                                sx={{ display: "flex" }}        /* make Grid item a flex container */
                            >
                                <Card
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        borderRadius: 3,
                                        p: 3,
                                        background: "rgba(17, 25, 40, 0.35)",
                                        backdropFilter: "blur(12px)",
                                        border: "1px solid rgba(0, 230, 150, 0.15)",
                                        transition:
                                            "transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .35s, border-color .35s",
                                        boxShadow: "0 0 0 rgba(0,0,0,0)",
                                        position: "relative",
                                        overflow: "hidden",

                                        "&:before": {
                                            content: '""',
                                            position: "absolute",
                                            inset: 0,
                                            background:
                                                "radial-gradient(circle at top left, rgba(0,255,200,0.25), transparent 50%)",
                                            opacity: 0,
                                            transition: "opacity .4s ease",
                                        },

                                        "&:hover": {
                                            transform: "translateY(-10px)",
                                            borderColor: "#00e5a8",
                                            boxShadow: "0 20px 40px rgba(0,229,168,0.12)",
                                        },

                                        "&:hover:before": {
                                            opacity: 1,
                                        },

                                        "&:hover .iconBox": {
                                            transform: "scale(1.15) rotate(3deg)",
                                            filter: "drop-shadow(0 0 8px rgba(0,229,168,0.6))",
                                        },
                                    }}
                                >

                                    <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                        <Box
                                            className="iconBox"
                                            sx={{
                                                color: "#00e5a8",
                                                mb: 2,
                                                transition: "0.35s",
                                                width: "48px",
                                                height: "48px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: "10px",
                                                background: "rgba(0,230,150,0.08)",
                                                border: "1px solid rgba(0,230,150,0.15)",
                                            }}
                                        >
                                            {service.icon}
                                        </Box>


                                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                            {service.title}
                                        </Typography>

                                        <Typography sx={{ opacity: 0.85, flexGrow: 1 }}>
                                            {service.desc}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                
            </Container>
        </Box>
    );
}

import { Box, Typography, TextField, Button, Grid, Card } from "@mui/material";
import interfaceBg from "../assets/interfaces-bg.png";

export default function Contact() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 3,
        px: { xs: 3, md: 2 },
        backgroundImage: `url(${interfaceBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
        color: "#fff",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.65)", // dark overlay
          backdropFilter: "blur(2px)",
        },
      }}
    >

      {/* CONTENT WRAPPER TO KEEP ABOVE OVERLAY */}
      <Box sx={{ position: "relative", zIndex: 2 }}>

        <Grid
          container
          spacing={6}
          justifyContent="center"
          alignItems="stretch"
        >
          {/* LEFT — Contact Info */}
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(0,255,149,0.25)",
                p: 4,
                height: "100%",
                borderRadius: "18px",
                boxShadow: "0 0 25px rgba(0,255,149,0.18)",
                backdropFilter: "blur(12px)", // GLASS EFFECT
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                Get In Touch
              </Typography>

              <Typography sx={{ mb: 3, color: "#d5d5d5", lineHeight: 1.6 }}>
                Let’s build something amazing together.
                <br />
                Reach out through the details below.
              </Typography>

              {/* CONTACT INFO */}
              <Box sx={{ mt: 1 }}>
                <Typography sx={{ color: "#00ff95", fontWeight: 600 }}>
                  📍 Office
                </Typography>
                <Typography sx={{ mb: 3 }}>Kolhapur, Maharashtra</Typography>

                <Typography sx={{ color: "#00ff95", fontWeight: 600 }}>
                  ✉️ Email
                </Typography>
                <Typography sx={{ mb: 3 }}>contact@appunix.com</Typography>

                <Typography sx={{ color: "#00ff95", fontWeight: 600 }}>
                  📞 Phone
                </Typography>
                <Typography>+91 98765 43210</Typography>
              </Box>
            </Card>
          </Grid>

          {/* RIGHT — Contact Form */}
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(0,255,149,0.25)",
                p: 4,
                borderRadius: "18px",
                boxShadow: "0 0 25px rgba(0,255,149,0.18)",
                backdropFilter: "blur(12px)", // GLASS EFFECT
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                Send a Message
              </Typography>

              <TextField fullWidth label="Your Name" variant="outlined" sx={inputStyle} />
              <TextField fullWidth label="Email" variant="outlined" sx={inputStyle} />
              <TextField fullWidth label="Message" multiline rows={4} variant="outlined" sx={inputStyle} />

              <Button
                fullWidth
                sx={{
                  py: 1.5,
                  background: "seagreen",
                  color: "#ffffffff",
                  fontWeight: 700,
                  fontSize: "1rem",
                  borderRadius: "10px",
                  "&:hover": {
                    // boxShadow: "0 0 10px #ffc40083",
                    border: "1px solid #00ff95",
                  },
                }}
              >
                Submit
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

/* Reusable input styling */
const inputStyle = {
  mb: 3,
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    "& fieldset": { borderColor: "#00ff95" },
    "&:hover fieldset": { borderColor: "#00ff95" },
  },
  "& .MuiInputLabel-root": { color: "#ccc" },
};

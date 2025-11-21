import { Box, Typography, TextField, Button, Grid, Card } from "@mui/material";

export default function Contact() {
  return (
    <Box
      sx={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        py: 10,
        px: { xs: 3, md: 2 },
      }}
    >
      {/* Page Title */}
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 700,
          mb: 6,
          textShadow: "0 0 18px rgba(0,255,140,0.5)",
        }}
      >
        Contact Us
      </Typography>

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
              background: "rgba(20,20,20,0.85)",
              border: "1px solid rgba(0,255,149,0.3)",
              p: 4,
              height: "100%",
              borderRadius: "18px",
              boxShadow: "0 0 20px rgba(0,255,149,0.25)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
              Get In Touch
            </Typography>

            <Typography sx={{ mb: 3, color: "#bfbfbf", lineHeight: 1.6 }}>
              Let’s build something amazing together.<br />
              Reach out through the details below.
            </Typography>

            {/* INFO ITEMS */}
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
              background: "rgba(20,20,20,0.85)",
              border: "1px solid rgba(0,255,149,0.3)",
              p: 4,
              borderRadius: "18px",
              boxShadow: "0 0 20px rgba(0,255,149,0.25)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
              Send a Message
            </Typography>

            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              sx={inputStyle}
            />

            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              sx={inputStyle}
            />

            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              sx={inputStyle}
            />

            <Button
              fullWidth
              sx={{
                py: 1.5,
                background: "#00ff95",
                color: "#000",
                fontWeight: 700,
                fontSize: "1rem",
                borderRadius: "10px",
                "&:hover": {
                  background: "#00d67f",
                  boxShadow: "0 0 15px #00ff95",
                },
              }}
            >
              Submit
            </Button>
          </Card>
        </Grid>
      </Grid>
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
  "& .MuiInputLabel-root": { color: "#aaa" },
};

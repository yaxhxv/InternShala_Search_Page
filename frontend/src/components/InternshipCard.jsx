import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Stack,
  Chip,
  Avatar,
} from "@mui/material";
import {
  LocationOn,
  AccessTime,
  CalendarToday,
  AttachMoney,
  WorkOutline,
} from "@mui/icons-material";

export default function InternshipCard({ internship }) {
  return (
    <Card
      sx={{
        width: "100%",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        "&:hover": {
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
            {internship.companyLogo && (
              <Avatar
                src={`https://internshala.com/uploads/logo/${internship.companyLogo}`}
                alt={internship.company_name}
                variant="square"
                sx={{ width: 50, height: 50 }}
              />
            )}
            <Box>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "#333", fontSize: "1.1rem" }}
              >
                {internship.profile}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
                {internship.company_name}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
            {internship.isPremium && (
              <Chip
                label="Premium"
                size="small"
                sx={{
                  bgcolor: "#fff4e5",
                  color: "#ff8c00",
                  borderRadius: "4px",
                  height: "24px",
                }}
              />
            )}
            {internship.isActivelyHiring && (
              <Chip
                label="Actively hiring"
                size="small"
                sx={{
                  bgcolor: "#f3fbf7",
                  color: "#1dc37a",
                  borderRadius: "4px",
                  height: "24px",
                }}
              />
            )}
          </Box>
        </Box>

        <Stack spacing={2}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LocationOn sx={{ color: "#666", fontSize: "1.2rem" }} />
              <Typography variant="body2" color="text.secondary">
                {internship.location}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <WorkOutline sx={{ color: "#666", fontSize: "1.2rem" }} />
              <Typography variant="body2" color="text.secondary">
                {internship.startDate}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <AccessTime sx={{ color: "#666", fontSize: "1.2rem" }} />
              <Typography variant="body2" color="text.secondary">
                {internship.duration}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <AttachMoney sx={{ color: "#666", fontSize: "1.2rem" }} />
              <Typography variant="body2" color="text.secondary">
                {internship.stipend}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pt: 1,
              borderTop: "1px solid #eee",
            }}
          >
            <Stack direction="row" spacing={3}>
              <Typography variant="caption" color="text.secondary">
                {internship.posted_on}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <CalendarToday sx={{ color: "#666", fontSize: "0.9rem" }} />
                <Typography variant="caption" color="error">
                  Apply by {internship.apply_by}
                </Typography>
              </Box>
            </Stack>

            <Button
              variant="outlined"
              color="primary"
              size="small"
              sx={{
                borderRadius: "4px",
                textTransform: "none",
                px: 3,
              }}
            >
              View details
            </Button>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

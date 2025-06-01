import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  Breadcrumbs,
  Link,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import axios from "axios";
import InternshipCard from "./InternshipCard";
import Filters from "./Filters";
import SearchBar from "./SearchBar";

// Transform API data to match our component structure
const transformInternshipData = (apiData) => {
  if (!apiData || !apiData.internships_meta) return [];

  return Object.values(apiData.internships_meta).map((internship) => ({
    id: internship.id,
    profile: internship.profile_name || internship.title,
    company_name: internship.company_name,
    location: internship.location_names?.join(", ") || "Location not specified",
    duration: internship.duration,
    stipend: internship.stipend?.salary || "Not specified",
    posted_on: internship.posted_by_label,
    apply_by: internship.application_deadline,
    isActivelyHiring: internship.is_active,
    isPremium: internship.is_premium,
    companyLogo: internship.company_logo,
    workFromHome: internship.work_from_home,
    startDate: internship.start_date,
  }));
};

// Sample data for development fallback
const sampleData = [
  {
    id: 1,
    profile: "Front Office",
    company_name: "Go Stops",
    location: "Dehradun, Rishikesh, Goa",
    duration: "1 Month",
    stipend: "₹10,000/month",
    posted_on: "3 days ago",
    apply_by: "25 Mar' 24",
    isActivelyHiring: true,
  },
  {
    id: 2,
    profile: "Channel Sales Internship",
    company_name: "IndiShreshtha Private Limited",
    location: "Mumbai",
    duration: "2 Months",
    stipend: "₹7,500 - 15,000/month",
    posted_on: "3 weeks ago",
    apply_by: "30 Mar' 24",
    isActivelyHiring: true,
  },
  {
    id: 3,
    profile: "Content Writing",
    company_name: "Ghackk Technologies",
    location: "Bhopalpur",
    duration: "4 Months",
    stipend: "₹3,000/month",
    posted_on: "1 week ago",
    apply_by: "28 Mar' 24",
    isActivelyHiring: true,
  },
];

export default function InternshipList() {
  const [internships, setInternships] = useState(sampleData);
  const [filteredInternships, setFilteredInternships] = useState(sampleData);
  const [filters, setFilters] = useState({
    profile: "",
    location: "",
    duration: "",
  });

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get(
          "https://internshala.com/hiring/search"
        );
        const transformedData = transformInternshipData(response.data);
        if (transformedData.length > 0) {
          setInternships(transformedData);
          setFilteredInternships(transformedData);
        }
      } catch (error) {
        console.error("Error fetching internships:", error);
        // Using sample data as fallback
        setInternships(sampleData);
        setFilteredInternships(sampleData);
      }
    };

    fetchInternships();
  }, []);

  const applyFilters = (newFilters) => {
    setFilters(newFilters);
    let filtered = [...internships];

    if (newFilters.profile) {
      filtered = filtered.filter((internship) =>
        internship.profile
          .toLowerCase()
          .includes(newFilters.profile.toLowerCase())
      );
    }

    if (newFilters.location) {
      filtered = filtered.filter((internship) =>
        internship.location
          .toLowerCase()
          .includes(newFilters.location.toLowerCase())
      );
    }

    if (newFilters.duration) {
      filtered = filtered.filter((internship) =>
        internship.duration
          .toLowerCase()
          .includes(newFilters.duration.toLowerCase())
      );
    }

    setFilteredInternships(filtered);
  };

  return (
    <>
      <Box sx={{ bgcolor: "#fff", borderBottom: 1, borderColor: "divider" }}>
        <Container maxWidth="lg">
          <Breadcrumbs sx={{ py: 2 }}>
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.primary">Internships</Typography>
          </Breadcrumbs>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            {filteredInternships.length} Total Internships
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Latest Summer Internships in India
          </Typography>
        </Box>

        <SearchBar
          onSearch={(term) => applyFilters({ ...filters, profile: term })}
        />

        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                bgcolor: "#f8f8f8",
                overflow: "hidden", // Prevent content overflow
              }}
            >
              <Filters filters={filters} onFilterChange={applyFilters} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={9}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {Array.isArray(filteredInternships) &&
                filteredInternships.map((internship) => (
                  <InternshipCard key={internship.id} internship={internship} />
                ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

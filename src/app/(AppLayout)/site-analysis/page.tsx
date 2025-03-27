"use client";

import React, { useState } from "react";
import {
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Slide,
    Drawer,
    IconButton,
    MenuItem,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    InputLabel,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    Select,
} from "@mui/material";
import LocationAnalysis from "./LocationAnalysis";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/system/Stack";
import InputAccordion from "./InputAccordion";
import InvestmentGrid from "./InvestmentGrid";

export default function SiteAnalysisPage() {
    const [showAnalysis, setShowAnalysis] = useState(false);

    const handleStartAnalysis = () => {
        setShowAnalysis(true);
    };

    const handleCloseAnalysis = () => {
        setShowAnalysis(false);
    };

    return (
        <Box sx={{ p: 4, maxWidth: 1200, margin: "auto" }}>
            {/* Input Section */}
            <Card sx={{ mb: 4, boxShadow: '0 0 6px rgba(0, 0, 0, 0.25)', borderRadius: '8px' }}>
                <CardContent>
                    <Typography variant="h5" fontWeight="700" align="center" sx={{ mb: 2, color: '#3A4F5F' }}>Site Analysis Input</Typography>
                    <Stack sx={{ mb: 2 }}>
                        <Stack spacing={2}>
                            <InputAccordion title="Customer Information">
                                <Grid container>
                                    <Grid item xs={12} md={4}>
                                        <Stack gap={1}>
                                            <InputLabel sx={{ fontWeight: "600", color: "#3A4F5F" }}>Customer Name</InputLabel>
                                            <TextField fullWidth size="small" variant="outlined" value="" sx={{ borderRadius: '10px', width: '25ch' }} />
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Stack gap={1}>
                                            <InputLabel sx={{ fontWeight: "600", color: "#3A4F5F" }}>Company Name</InputLabel>
                                            <TextField fullWidth size="small" variant="outlined" value="" sx={{ borderRadius: '10px', width: '25ch' }} />
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Stack gap={1}>
                                            <InputLabel sx={{ fontWeight: "600", color: "#3A4F5F" }}>Site Address</InputLabel>
                                            <TextField fullWidth size="small" variant="outlined" value="" sx={{ borderRadius: '10px', width: '25ch' }} />
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </InputAccordion>

                            <InputAccordion title="Car Wash Working Hours">
                                <Grid container>
                                    <Grid item xs={12} md={4}>
                                        <Stack gap={1}>
                                            <InputLabel sx={{ fontWeight: "600", color: "#3A4F5F" }}>Weekly Hours Of Operation</InputLabel>
                                            <TextField fullWidth size="small" variant="outlined" value="" sx={{ borderRadius: '10px', width: '25ch' }} />
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Stack gap={1}>
                                            <InputLabel sx={{ fontWeight: "600", color: "#3A4F5F" }}>Average Daily Wash Hours</InputLabel>
                                            <TextField fullWidth size="small" variant="outlined" value="" sx={{ borderRadius: '10px', width: '25ch' }} />
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </InputAccordion>

                            <InputAccordion title="Labor Information">
                                <Grid container>
                                    <Grid item xs={12} md={4}>
                                        <Stack gap={1}>
                                            <InputLabel sx={{ fontWeight: "600", color: "#3A4F5F" }}>Labor Hours</InputLabel>
                                            <TextField fullWidth size="small" variant="outlined" value="" sx={{ borderRadius: '10px', width: '25ch' }} />
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Stack gap={1}>
                                            <InputLabel sx={{ fontWeight: "600", color: "#3A4F5F" }}>Hourly Wages</InputLabel>
                                            <TextField fullWidth size="small" variant="outlined" value="" sx={{ borderRadius: '10px', width: '25ch' }} />
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Stack gap={1}>
                                            <InputLabel sx={{ fontWeight: "600", color: "#3A4F5F" }}>Burden Rate</InputLabel>
                                            <TextField fullWidth size="small" variant="outlined" value="" sx={{ borderRadius: '10px', width: '25ch' }} />
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </InputAccordion>

                            <InputAccordion title="Wash Packages">
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={3}>
                                        <Stack gap={1}>
                                            <InputLabel sx={{ fontWeight: "600", color: "#3A4F5F" }}>Basic Package</InputLabel>
                                            <TextField fullWidth size="small" variant="outlined" disabled value={"$10"} sx={{ borderRadius: '10px' }} />
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <Stack gap={1}>
                                            <InputLabel sx={{ fontWeight: "600", color: "#3A4F5F" }}>Menu Package #1</InputLabel>
                                            <TextField fullWidth size="small" variant="outlined" disabled value={"$15"} sx={{ borderRadius: '10px' }} />
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <Stack gap={1}>
                                            <InputLabel sx={{ fontWeight: "600", color: "#3A4F5F" }}>Menu Package #2</InputLabel>
                                            <TextField fullWidth size="small" variant="outlined" disabled value={"$22"} sx={{ borderRadius: '10px' }} />
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <Stack gap={1}>
                                            <InputLabel sx={{ fontWeight: "600", color: "#3A4F5F" }}>Menu Package #3</InputLabel>
                                            <TextField fullWidth size="small" variant="outlined" disabled value={"$27"} sx={{ borderRadius: '10px' }} />
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </InputAccordion>

                            <InputAccordion title="Site Specific Factors">
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={3}>
                                        <Stack gap={1}>
                                            <InputLabel id="area-profile-label" sx={{ fontWeight: "600", color: "#3A4F5F" }}>
                                                Area Profile
                                            </InputLabel>
                                            <Select
                                                labelId="area-profile-label"
                                                id="area-profile-select"
                                                value={""}
                                                onChange={() => { }}
                                                sx={{ borderRadius: '10px' }}
                                            >
                                                <MenuItem value="1">Shopping Mall</MenuItem>
                                                <MenuItem value="2">Industrial</MenuItem>
                                                <MenuItem value="3">Residential</MenuItem>
                                                <MenuItem value="4">Other</MenuItem>
                                            </Select>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <Stack gap={1}>
                                            <InputLabel id="area-profile-label" sx={{ fontWeight: "600", color: "#3A4F5F" }}>
                                                Area Profile
                                            </InputLabel>
                                            <Select
                                                labelId="area-profile-label"
                                                id="area-profile-select"
                                                value={""}
                                                onChange={() => { }}
                                                sx={{ borderRadius: '10px' }}
                                            >
                                                <MenuItem value="1">Shopping Mall</MenuItem>
                                                <MenuItem value="2">Industrial</MenuItem>
                                                <MenuItem value="3">Residential</MenuItem>
                                                <MenuItem value="4">Other</MenuItem>
                                            </Select>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </InputAccordion>

                            <InputAccordion title="Acquisition Budget">
                                <InvestmentGrid />
                            </InputAccordion>

                            <InputAccordion title="Operational Expenses">
                                Placeholder
                            </InputAccordion>
                        </Stack>
                    </Stack>

                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Button
                            variant="contained"
                            onClick={handleStartAnalysis}
                            sx={{ color: 'white', textTransform: 'capitalize', backgroundColor: 'secondary.main', borderRadius: '8px', fontWeight: '600' }}
                        >
                            Start Analysis
                        </Button>
                    </Box>
                </CardContent>
            </Card>



            {/* Analysis Report (Full Screen Slide-in from Right) */}
            <Drawer
                anchor="right"
                open={showAnalysis}
                onClose={handleCloseAnalysis}
                sx={{ "& .MuiDrawer-paper": { width: "100%", height: "100%" } }}
            >
                <Box sx={{ width: "100%", height: "100%", p: 3, position: "relative" }}>
                    <LocationAnalysis handleCloseAnalysis={handleCloseAnalysis} />
                </Box>
            </Drawer>
        </Box>
    );
}

"use client";

import React, { useEffect, useState, useTransition } from "react";
import {
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    LinearProgress,
    Alert,
    List,
    ListItem,
    ListItemText,
    CircularProgress,
    Stack,
    IconButton,
    Divider,
} from "@mui/material";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import CloseIcon from "@mui/icons-material/Close";


const trafficData = [
    { year: "Year 1", count: 2000 },
    { year: "Year 2", count: 3000 },
    { year: "Year 3", count: 5000 },
    { year: "Year 4", count: 7000 },
    { year: "Year 5", count: 9000 },
];

const competitorData = [
    { name: "Competitor A", price: 10 },
    { name: "Competitor B", price: 15 },
    { name: "Competitor C", price: 12 },
];

const customerDemographics = [
    { name: "Daily Commuters", value: 50 },
    { name: "Families", value: 30 },
    { name: "Businesses", value: 20 },
];

const profitForecast = [
    { year: "Year 1", revenue: 15000, expense: 8000 },
    { year: "Year 2", revenue: 18000, expense: 9000 },
    { year: "Year 3", revenue: 22000, expense: 11000 },
    { year: "Year 4", revenue: 26000, expense: 13000 },
    { year: "Year 5", revenue: 30000, expense: 15000 },
];

export default function LocationAnalysis({ handleCloseAnalysis }: any) {
    const [isPending, startTransition] = useTransition()
    const [loaderMessage, setLoaderMessage] = useState("Analysing...")

    useEffect(function () {
        startTransition(async () => {
            await new Promise((resolve) => setTimeout(resolve, 7000));
        })
    }, [])

    useEffect(function () {
        let intervalId: any;
        if (isPending) {
            intervalId = setInterval(() => {
                setLoaderMessage((prev: string) => {
                    return prev === "Analysing..." ? "Creating Charts & Graphs..." : "Summarising..."
                })
            }, 2000)
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        }
    }, [isPending])

    return (
        <Box sx={{ minHeight: "100vh", paddingBottom: 24 }}>
            <Box sx={{ display: "flex", mb: 4, alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant="h4" color="#3A4F5F" fontWeight='800'>Site Analysis</Typography>
                <IconButton onClick={handleCloseAnalysis}>
                    <CloseIcon />
                </IconButton>
            </Box>

            <Box sx={{ maxWidth: 1200, margin: "auto", minHeight: "100vh" }}>
                {
                    isPending ? (
                        <Stack sx={{ justifyContent: "center", alignItems: "center", height: "100%", gap: 2, minHeight: "80vh" }}>
                            <CircularProgress />
                            <Typography variant="body1" fontWeight='500' fontSize={18} sx={{ transition: "all 0.5s ease-in-out" }}>
                                {loaderMessage}
                            </Typography>
                        </Stack>
                    ) : (
                        <>
                            <Grid container spacing={3}>
                                {/* <Grid item xs={12}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6">📍 Location Analysis</Typography>
                                        <Typography variant="body1">Location: Downtown, New York</Typography>
                                        <Typography variant="body1">Traffic Volume: 12,000 vehicles/day</Typography>
                                        <Typography variant="body1">Competitor Density: 3 Car Washes nearby</Typography>
                                    </CardContent>
                                </Card>
                            </Grid> */}

                                <Grid item xs={12}>
                                    <Card sx={{ boxShadow: '0 0 6px rgba(0, 0, 0, 0)' }}>
                                        <CardContent>
                                            <Stack direction="row" alignItems="center" gap={1}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 14.2864C3.14864 15.1031 2 16.2412 2 17.5C2 19.9853 6.47715 22 12 22C17.5228 22 22 19.9853 22 17.5C22 16.2412 20.8514 15.1031 19 14.2864M18 8C18 12.0637 13.5 14 12 17C10.5 14 6 12.0637 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z" stroke="#3A4F5F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                                <Typography variant="h6" fontWeight='600' color="#3A4F5F">Location Details</Typography>
                                            </Stack>
                                            <Typography variant="body1" color="#3A4F5F"><b>Country:</b> USA</Typography>
                                            <Typography variant="body1" color="#3A4F5F"><b>City:</b> New York</Typography>
                                            <Typography variant="body1" color="#3A4F5F"><b>Address:</b> 123 Main St, New York, NY 10001</Typography>
                                        </CardContent>
                                        <Divider />
                                    </Card>
                                </Grid>

                                <Grid item xs={12}>
                                    <Stack direction='row' alignItems='center' sx={{ mt: 2, boxShadow: '0 0 6px rgba(0, 0, 0, 0.5)', borderRadius: '10px', padding: 1 }}>
                                        <Card sx={{ height: "100%", boxShadow: '0 0 6px rgba(0, 0, 0, 0.0)', flexGrow: 1 }}>
                                            <CardContent>
                                                <Stack justifyContent='center' alignItems='center' direction='column'>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 13H8M2 9L4 10L5.27064 6.18807C5.53292 5.40125 5.66405 5.00784 5.90729 4.71698C6.12208 4.46013 6.39792 4.26132 6.70951 4.13878C7.06236 4 7.47705 4 8.30643 4H15.6936C16.523 4 16.9376 4 17.2905 4.13878C17.6021 4.26132 17.8779 4.46013 18.0927 4.71698C18.3359 5.00784 18.4671 5.40125 18.7294 6.18807L20 10L22 9M16 13H19M6.8 10H17.2C18.8802 10 19.7202 10 20.362 10.327C20.9265 10.6146 21.3854 11.0735 21.673 11.638C22 12.2798 22 13.1198 22 14.8V17.5C22 17.9647 22 18.197 21.9616 18.3902C21.8038 19.1836 21.1836 19.8038 20.3902 19.9616C20.197 20 19.9647 20 19.5 20H19C17.8954 20 17 19.1046 17 18C17 17.7239 16.7761 17.5 16.5 17.5H7.5C7.22386 17.5 7 17.7239 7 18C7 19.1046 6.10457 20 5 20H4.5C4.03534 20 3.80302 20 3.60982 19.9616C2.81644 19.8038 2.19624 19.1836 2.03843 18.3902C2 18.197 2 17.9647 2 17.5V14.8C2 13.1198 2 12.2798 2.32698 11.638C2.6146 11.0735 3.07354 10.6146 3.63803 10.327C4.27976 10 5.11984 10 6.8 10Z" stroke="#3A4F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <Typography variant="h6" color="#85929C" sx={{ fontSize: 18 }}>
                                                        Traffic Volume
                                                    </Typography>
                                                    <Typography variant="body1" color="#3A4F5F" sx={{ fontSize: 24, fontWeight: '600' }}>12,000 vehicles/day</Typography>
                                                </Stack>
                                            </CardContent>
                                        </Card>

                                        <Card sx={{ height: "100%", boxShadow: '0 0 6px rgba(0, 0, 0, 0.0)', borderRight: '1px solid #3A4F5F', borderRadius: '0px', borderLeft: '1px solid #3A4F5F', flexGrow: 1 }} >
                                            <CardContent>
                                                <Stack justifyContent='center' alignItems='center' direction='column'>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.5295 8.35186C12.9571 8.75995 12.2566 9 11.5 9C9.567 9 8 7.433 8 5.5C8 3.567 9.567 2 11.5 2C12.753 2 13.8522 2.65842 14.4705 3.64814M6 20.0872H8.61029C8.95063 20.0872 9.28888 20.1277 9.61881 20.2086L12.3769 20.8789C12.9753 21.0247 13.5988 21.0388 14.2035 20.9214L17.253 20.3281C18.0585 20.1712 18.7996 19.7854 19.3803 19.2205L21.5379 17.1217C22.154 16.5234 22.154 15.5524 21.5379 14.9531C20.9832 14.4134 20.1047 14.3527 19.4771 14.8103L16.9626 16.6449C16.6025 16.9081 16.1643 17.0498 15.7137 17.0498H13.2855L14.8311 17.0498C15.7022 17.0498 16.4079 16.3633 16.4079 15.5159V15.2091C16.4079 14.5055 15.9156 13.892 15.2141 13.7219L12.8286 13.1417C12.4404 13.0476 12.0428 13 11.6431 13C10.6783 13 8.93189 13.7988 8.93189 13.7988L6 15.0249M20 6.5C20 8.433 18.433 10 16.5 10C14.567 10 13 8.433 13 6.5C13 4.567 14.567 3 16.5 3C18.433 3 20 4.567 20 6.5ZM2 14.6L2 20.4C2 20.9601 2 21.2401 2.10899 21.454C2.20487 21.6422 2.35785 21.7951 2.54601 21.891C2.75992 22 3.03995 22 3.6 22H4.4C4.96005 22 5.24008 22 5.45399 21.891C5.64215 21.7951 5.79513 21.6422 5.89101 21.454C6 21.2401 6 20.9601 6 20.4V14.6C6 14.0399 6 13.7599 5.89101 13.546C5.79513 13.3578 5.64215 13.2049 5.45399 13.109C5.24008 13 4.96005 13 4.4 13L3.6 13C3.03995 13 2.75992 13 2.54601 13.109C2.35785 13.2049 2.20487 13.3578 2.10899 13.546C2 13.7599 2 14.0399 2 14.6Z" stroke="#3A4F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <Typography variant="h6" color="#85929C" sx={{ fontSize: 18 }}>Estimated ROI</Typography>
                                                    <Typography variant="body1" color="#3A4F5F" sx={{ fontSize: 24, fontWeight: '600' }}>$1,000,000 in 1 Year</Typography>
                                                </Stack>
                                            </CardContent>
                                        </Card>

                                        <Card sx={{ height: "100%", boxShadow: '0 0 6px rgba(0, 0, 0, 0.0)', flexGrow: 1 }}>
                                            <CardContent>
                                                <Stack justifyContent='center' alignItems='center' direction='column'>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M21 7L15.5657 12.4343C15.3677 12.6323 15.2687 12.7313 15.1545 12.7684C15.0541 12.8011 14.9459 12.8011 14.8455 12.7684C14.7313 12.7313 14.6323 12.6323 14.4343 12.5657L7 15M21 7H17M21 7V11" stroke="#3A4F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>

                                                    <Typography variant="h6" color="#85929C" sx={{ fontSize: 18 }}>P&L Overview</Typography>
                                                    <Typography variant="body1" color="#3A4F5F" sx={{ fontSize: 24, fontWeight: '600', color: 'green' }} align="center">High Profitability</Typography>
                                                    <Typography variant="body1" color="#3A4F5F" sx={{ fontSize: 16, fontWeight: '600' }} align="center">Est. Time: 1.5 - 2 years</Typography>
                                                    {/* <Typography variant="body1">Estimated Profitability: High</Typography>
                                                    <Typography variant="body1">Break-even Time: 1.5 - 2 years</Typography> */}
                                                </Stack>
                                            </CardContent>
                                        </Card>
                                    </Stack>
                                </Grid>


                                <Grid item xs={12} md={6}>
                                    <Card sx={{ boxShadow: '0 0 6px rgba(0, 0, 0, 0.0)', border: '1px solid #3A4F5F' }}>
                                        <CardContent>
                                            <Typography variant="h6" fontWeight='600' color="#3A4F5F" sx={{ mb: 2 }}>Car Wash Volume Estimates</Typography>
                                            <ResponsiveContainer width="100%" height={250}>
                                                <LineChart data={trafficData}>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="year" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Line type="monotone" dataKey="count" stroke="#1976d2" />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                {/* <Grid item xs={12} md={6}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6">🏢 Competitor Analysis</Typography>
                                        <ResponsiveContainer width="100%" height={250}>
                                            <BarChart data={competitorData}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="name" />
                                                <YAxis />
                                                <Tooltip />
                                                <Bar dataKey="price" fill="#ff9800" />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </CardContent>
                                </Card>
                            </Grid> */}

                                {/* <Grid item xs={12} md={6}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6">🏘️ Customer Demographics</Typography>
                                        <ResponsiveContainer width="100%" height={250}>
                                            <PieChart>
                                                <Pie data={customerDemographics} dataKey="value" nameKey="name" outerRadius={100}>
                                                    <Cell fill="#4caf50" />
                                                    <Cell fill="#ffeb3b" />
                                                    <Cell fill="#f44336" />
                                                </Pie>
                                                <Tooltip />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </CardContent>
                                </Card>
                            </Grid> */}

                                <Grid item xs={12} md={6}>
                                    <Card sx={{ boxShadow: '0 0 6px rgba(0, 0, 0, 0.0)', border: '1px solid #3A4F5F' }}>
                                        <CardContent>
                                            <Typography variant="h6" fontWeight='600' color="#3A4F5F" sx={{ mb: 2 }}>Profitability Projection (5-Year Forecast)</Typography>
                                            <ResponsiveContainer width="100%" height={250}>
                                                <LineChart data={profitForecast}>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="year" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Line type="monotone" dataKey="revenue" stroke="#4caf50" />
                                                    <Line type="monotone" dataKey="expense" stroke="#f44336" />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} md={12}>
                                    <Card sx={{ boxShadow: 'none' }}>
                                        <CardContent>
                                            <Box display="flex" alignItems="center" width="100%">
                                                <Divider sx={{ flexGrow: 1, backgroundColor: '#3A4F5F' }} />
                                                <Typography variant="h5" fontWeight='600' align="center" color="#3A4F5F" sx={{ mx: 2, whiteSpace: "nowrap" }}>Summary Findings</Typography>
                                                <Divider sx={{ flexGrow: 1, backgroundColor: '#3A4F5F' }} />
                                            </Box>
                                            <Typography variant="body2" sx={{ fontSize: 16, mt: 2 }}>
                                                The analysis indicates that this location is a strong candidate for a car wash business due to its high traffic volume of 12,000 vehicles per day, ensuring a steady flow of potential customers. The competition level is moderate, with three other car washes within a 5 km radius, meaning there is demand but also some competition.
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontSize: 16, mt: 2 }}>
                                                The projected revenue suggests profitability within 1.5 - 2 years, making this an economically viable choice. Given the surrounding customer demographics, including daily commuters and families, offering a mix of automated and self-service options will enhance customer retention. The break-even analysis supports investment in this location.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </>
                    )
                }
            </Box>
        </Box>
    );
}

import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import InputAccordion from './InputAccordion'
import { Controller, useWatch } from 'react-hook-form'
import useStore from '../../../../store/useStore';
import { useEffect } from 'react';

export default function SiteFactors({ control }: any) {
    const siteFactors = useWatch({ control, name: "siteFactors" });
    const allFilled = Object.values(siteFactors).every(value => value !== "");
    const { setSiteFactors } = useStore()

    useEffect(() => {
        setSiteFactors(siteFactors);
    }, [siteFactors]);

    return (
        <InputAccordion title="Site Specific Factors" completed={allFilled}>
            <Grid container spacing={2}>
                {/* Area Profile */}
                <Grid item xs={12} md={4}>
                    <Controller
                        name="siteFactors.areaProfile"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth>
                                <InputLabel id="areaProfile" sx={{ fontWeight: "600", color: "#3A4F5F" }}>
                                    Area Profile
                                </InputLabel>
                                <Select
                                    {...field}
                                    label="Area Profile"
                                    labelId="areaProfile"
                                    sx={{ borderRadius: '10px' }}
                                >
                                    <MenuItem value="0.15">Shopping Mall</MenuItem>
                                    <MenuItem value="0.10">Business</MenuItem>
                                    <MenuItem value="0.05">Residential</MenuItem>
                                    <MenuItem value="-0.25">Industrial</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />
                </Grid>

                {/* Nearest Competition */}
                <Grid item xs={12} md={4}>
                    <Controller
                        name="siteFactors.nearestCompetition"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth>
                                <InputLabel id="nearestCompetition" sx={{ fontWeight: "600", color: "#3A4F5F" }}>
                                    Nearest Competition
                                </InputLabel>
                                <Select
                                    {...field}
                                    label="Nearest Competition"
                                    labelId="nearestCompetition"
                                    sx={{ borderRadius: '10px' }}
                                >
                                    <MenuItem value="0.15">One in 4 Miles</MenuItem>
                                    <MenuItem value="0.125">Multiple in 4 Miles</MenuItem>
                                    <MenuItem value="0.075">One in 2 Miles</MenuItem>
                                    <MenuItem value="-0.025">Multiple in 2 Miles</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />
                </Grid>

                {/* Type of Site */}
                <Grid item xs={12} md={4}>
                    <Controller
                        name="siteFactors.typeOfSite"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth>
                                <InputLabel id="typeOfSite" sx={{ fontWeight: "600", color: "#3A4F5F" }}>
                                    Type of Site
                                </InputLabel>
                                <Select
                                    {...field}
                                    label="Type of Site"
                                    labelId="typeOfSite"
                                    sx={{ borderRadius: '10px' }}
                                >
                                    <MenuItem value="0.15">Corner Lot With Light</MenuItem>
                                    <MenuItem value="0.125">Corner Lot With Light</MenuItem>
                                    <MenuItem value="0.075">Inside Lot Near Light</MenuItem>
                                    <MenuItem value="0.05">Inside Lot Far From Light</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />
                </Grid>

                {/* Site Accessibility */}
                <Grid item xs={12} md={4}>
                    <Controller
                        name="siteFactors.siteAccessibility"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth>
                                <InputLabel id="siteAccessibility" sx={{ fontWeight: "600", color: "#3A4F5F" }}>
                                    Site Accessibility
                                </InputLabel>
                                <Select
                                    {...field}
                                    label="Site Accessibility"
                                    labelId="siteAccessibility"
                                    sx={{ borderRadius: '10px' }}
                                >
                                    <MenuItem value="0.15">Easy in and Easy out</MenuItem>
                                    <MenuItem value="0.10">Easy in/out with Divided Highway</MenuItem>
                                    <MenuItem value="0.05">Easy in or Easy out With One Way</MenuItem>
                                    <MenuItem value="0">Difficult in and out</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />
                </Grid>
                {/* Visibility */}
                <Grid item xs={12} md={4}>
                    <Controller
                        name="siteFactors.visibility"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth>
                                <InputLabel id="visibility" sx={{ fontWeight: "600", color: "#3A4F5F" }}>
                                    Visibility
                                </InputLabel>
                                <Select
                                    {...field}
                                    label="Visibility"
                                    labelId="visibility"
                                    sx={{ borderRadius: '10px' }}
                                >
                                    <MenuItem value="0.15">More than 500 feet Both Directions</MenuItem>
                                    <MenuItem value="0.10">400-500 feet Both Directions</MenuItem>
                                    <MenuItem value="0.05">300-400 feet Both Directions</MenuItem>
                                    <MenuItem value="0">Less than 300 feed Both Directions</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />
                </Grid>

                {/* Entrance Stack up area */}
                <Grid item xs={12} md={4}>
                    <Controller
                        name="siteFactors.entranceStackUpArea"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth>
                                <InputLabel id="entranceStackUpArea" sx={{ fontWeight: "600", color: "#3A4F5F" }}>
                                    Entrance Stack up Area
                                </InputLabel>
                                <Select
                                    {...field}
                                    label="Entrance Stack up Area"
                                    labelId="entranceStackUpArea"
                                    sx={{ borderRadius: '10px' }}
                                >
                                    <MenuItem value="0.15">More than 20 Vehicles</MenuItem>
                                    <MenuItem value="0.125">20-15 Vehicles</MenuItem>
                                    <MenuItem value="0.075">14-10 Vehicles</MenuItem>
                                    <MenuItem value="0.05">Less than 10 Vehicles</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />
                </Grid>

                {/* Number of Free Vacuum Slots */}
                <Grid item xs={12} md={4}>
                    <Controller
                        name="siteFactors.numberOfFreeVacuumSlots"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth>
                                <InputLabel id="numberOfFreeVacuumSlots" sx={{ fontWeight: "600", color: "#3A4F5F" }}>
                                    Number of Free Vacuum Slots
                                </InputLabel>
                                <Select
                                    {...field}
                                    label="Number of Free Vacuum Slots"
                                    labelId="numberOfFreeVacuumSlots"
                                    sx={{ borderRadius: '10px' }}
                                >
                                    <MenuItem value="0.15">More than 20</MenuItem>
                                    <MenuItem value="0.10">12-20</MenuItem>
                                    <MenuItem value="0.05">Less than 12</MenuItem>
                                    <MenuItem value="-0.25">Coin or none</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />
                </Grid>

                {/* Number of Pay Stations */}
                <Grid item xs={12} md={4}>
                    <Controller
                        name="siteFactors.numberOfPayStations"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth>
                                <InputLabel id="numberOfPayStations" sx={{ fontWeight: "600", color: "#3A4F5F" }}>
                                    Number of Pay Stations
                                </InputLabel>
                                <Select
                                    {...field}
                                    label="Number of Pay Stations"
                                    labelId="numberOfPayStations"
                                    sx={{ borderRadius: '10px' }}
                                >

                                    <MenuItem value="0.15">3 or more</MenuItem>
                                    <MenuItem value="0.10">2</MenuItem>
                                    <MenuItem value="0.05">1</MenuItem>
                                    <MenuItem value="0">Live Person</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />
                </Grid>

                {/* Traffic Speed */}
                <Grid item xs={12} md={4}>
                    <Controller
                        name="siteFactors.trafficSpeed"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth>
                                <InputLabel id="trafficSpeed" sx={{ fontWeight: "600", color: "#3A4F5F" }}>
                                    Traffic Speed
                                </InputLabel>
                                <Select
                                    {...field}
                                    label="Traffic Speed"
                                    labelId="trafficSpeed"
                                    sx={{ borderRadius: '10px' }}
                                >

                                    <MenuItem value="0.15">Less than 30 mph</MenuItem>
                                    <MenuItem value="0.10">30-40 mph</MenuItem>
                                    <MenuItem value="0.05">40-50 mph</MenuItem>
                                    <MenuItem value="0">More than 50 mph</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />
                </Grid>
            </Grid>
        </InputAccordion>
    )
}

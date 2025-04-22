'use client';

import { Box, Button, Card, CardContent, Divider, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { useRouter } from 'next/navigation';
import IncomeBarChart from './IncomeBarChart';
import CarWashThroughPutChart from './CarWashThroughPutChart';

const initialIncome = 16338; // Year 1 income
const cagr = 0.103; // 10.3%
const years = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'];

// Generate income for each year with CAGR
// const incomeData = years.map((_, index) => parseFloat((initialIncome * Math.pow(1 + cagr, index)).toFixed(2)));
const incomeData = [initialIncome, 230748, 341908, 368416, 449130];

const cumulativeIncome = incomeData.reduce((acc, curr) => acc + curr, 0);

const maxVolumes = [30000, 35000, 42000, 47000, 53000]; // Example data

export default function ProForma() {
    const router = useRouter();
    const theme = useTheme();
    const isTabletOrSmaller = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <>
            <Typography
                variant="h4"
                sx={{
                    fontSize: { xs: 24, sm: 28, md: 32 },
                    fontWeight: 'bolder',
                    color: '#3A4F5F',
                    textAlign: { xs: 'center', md: 'left' },
                    mb: 4,
                }}
            >
                Your Car Wash Opportunity
            </Typography>
            <Grid container spacing={2}>
                {/* Location Overview */}
                <Grid item xs={12}>
                    <Card
                        sx={{
                            height: '100%',
                            boxShadow: '0 0 6px rgba(0, 0, 0, 0.4)',
                            borderRadius: '0px',
                            flexGrow: 1,
                            py: 1,
                        }}
                    >
                        <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                            <Stack justifyContent="center" alignItems="center" direction="column">
                                <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5 14.2864C3.14864 15.1031 2 16.2412 2 17.5C2 19.9853 6.47715 22 12 22C17.5228 22 22 19.9853 22 17.5C22 16.2412 20.8514 15.1031 19 14.2864M18 8C18 12.0637 13.5 14 12 17C10.5 14 6 12.0637 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z"
                                            stroke="#3A4F5F"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                    <Typography variant="h6" color="#85929C" fontWeight="bold" sx={{ fontSize: 24, color: 'primary.main' }}>
                                        Location Overview
                                    </Typography>
                                </Stack>

                                <Grid container spacing={4} mt={2}>
                                    <Grid item xs={4}>
                                        <Typography
                                            variant="body1"
                                            color="primary.main"
                                            sx={{
                                                fontSize: 32,
                                                fontWeight: '800',
                                                textAlign: 'center',
                                            }}
                                        >
                                            2{' '}
                                        </Typography>
                                        <Stack direction="column" alignItems="center">
                                            <Typography
                                                variant="body1"
                                                color="#3A4F5F"
                                                sx={{
                                                    fontSize: 16,
                                                    fontWeight: '600',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                Number of Competitors
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                color="#3A4F5F"
                                                sx={{
                                                    fontSize: 14,
                                                    fontWeight: '500',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                (within 5 miles)
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography
                                            variant="body1"
                                            color="primary.main"
                                            sx={{
                                                fontSize: 32,
                                                fontWeight: '800',
                                                textAlign: 'center',
                                            }}
                                        >
                                            29.9K
                                        </Typography>
                                        <Stack direction="column" alignItems="center">
                                            <Typography
                                                variant="body1"
                                                color="#3A4F5F"
                                                sx={{
                                                    fontSize: 16,
                                                    fontWeight: '600',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                Population Size
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                color="#3A4F5F"
                                                sx={{
                                                    fontSize: 14,
                                                    fontWeight: '500',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                (within 3 miles)
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography
                                            variant="body1"
                                            color="primary.main"
                                            sx={{
                                                fontSize: 32,
                                                fontWeight: '800',
                                                textAlign: 'center',
                                            }}
                                        >
                                            21.2K
                                        </Typography>
                                        <Stack direction="column" alignItems="center">
                                            <Typography
                                                variant="body1"
                                                color="#3A4F5F"
                                                sx={{
                                                    fontSize: 16,
                                                    fontWeight: '600',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                Total Addressable Vehicles
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                color="#3A4F5F"
                                                sx={{
                                                    fontSize: 14,
                                                    fontWeight: '500',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                (within 3 miles)
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography
                                            variant="body1"
                                            color="primary.main"
                                            sx={{
                                                fontSize: 32,
                                                fontWeight: '800',
                                                textAlign: 'center',
                                            }}
                                        >
                                            35.5%
                                        </Typography>
                                        <Stack direction="column" alignItems="center">
                                            <Typography
                                                variant="body1"
                                                color="#3A4F5F"
                                                sx={{
                                                    fontSize: 16,
                                                    fontWeight: '600',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                Renter Occupied Units
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                color="#3A4F5F"
                                                sx={{
                                                    fontSize: 14,
                                                    fontWeight: '500',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                (within 3 miles)
                                            </Typography>
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={4}>
                                        <Typography
                                            variant="body1"
                                            color="primary.main"
                                            sx={{
                                                fontSize: 32,
                                                fontWeight: '800',
                                                textAlign: 'center',
                                            }}
                                        >
                                            $88.3K
                                        </Typography>
                                        <Stack direction="column" alignItems="center">
                                            <Typography
                                                variant="body1"
                                                color="#3A4F5F"
                                                sx={{
                                                    fontSize: 16,
                                                    fontWeight: '600',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                Average Household Income
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                color="#3A4F5F"
                                                sx={{
                                                    fontSize: 14,
                                                    fontWeight: '500',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                (within 3 miles)
                                            </Typography>
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={4}>
                                        <Typography
                                            variant="body1"
                                            color="primary.main"
                                            sx={{
                                                fontSize: 32,
                                                fontWeight: '800',
                                                textAlign: 'center',
                                            }}
                                        >
                                            9.9%
                                        </Typography>
                                        <Stack direction="column" alignItems="center">
                                            <Typography
                                                variant="body1"
                                                color="#3A4F5F"
                                                sx={{
                                                    fontSize: 16,
                                                    fontWeight: '600',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                Average Household Income Growth
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                color="#3A4F5F"
                                                sx={{
                                                    fontSize: 14,
                                                    fontWeight: '500',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                (within 3 miles)
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Executive Summary */}
                <Grid item xs={12}>
                    <Card sx={{ boxShadow: 'none' }}>
                        <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" width="100%">
                                <Divider
                                    sx={{
                                        flexGrow: 1,
                                        backgroundColor: 'rgba(58, 79, 95, 0.15)',
                                    }}
                                />
                                <Typography variant="h5" fontWeight="600" align="center" color="primary.main" sx={{ mx: 2, whiteSpace: 'nowrap' }}>
                                    Executive Summary
                                </Typography>
                                <Divider
                                    sx={{
                                        flexGrow: 1,
                                        backgroundColor: 'rgba(58, 79, 95, 0.15)',
                                    }}
                                />
                            </Box>

                            <Typography variant="body2" sx={{ fontSize: 16, mt: 2 }}>
                                The 3-mile market has a population of 29,889 with 21,184 vehicles. Typically, it requires 25,000 people to support an
                                express wash. The working population (25-65) makes up 50.7% of the demographics (our target is 55%). The unemployment
                                rate is 4.2%, above the national average of 4.1%. The average household size is 2.51 (our target is 2.1), this
                                increases the likelihood of there being children in the home that do not drive vehicles. Carwashing is a “low priced
                                luxury” and requires some expendable income. 78.6% of households have a yearly income over $35K (our target is 50%).
                                The average household income is projected to increase 9.9% in the next 4 years. Over the past four years the
                                population has increased 7.08%. The market is projecting a notable increase in population of 10.43% in the next five
                                years. Rental housing makes up 35.5% of the market (our target is 33%). Renters typically do not have the space
                                required to wash their own vehicles and are dependent on the services of professional carwashes for their vehicle
                                cleaning needs. The traffic count at the site is 20,883, just above our target of 20,000.
                            </Typography>

                            <Typography variant="body2" sx={{ fontSize: 16, mt: 2 }}>
                                Carwashes are typically an impulse purchase; with this it is extremely helpful to have retail draw provided by the
                                stores and businesses in the vicinity to attract customers to the site. The proposed location has great retail draw
                                provided by the multiple big box stores in the area including Aldi and Kroger. However, the customers at these stores
                                may not have visibility to the proposed location. With this it is recommended to consider target marketing towards
                                them. This can be accomplished with billboards, flyers, special promotions etc. The proposed location has excellent
                                visibility to northbound traffic on Lexington Road, easily visible at 500’. This will grant these customers ample
                                opportunity to prepare to safely access the site which will positively affect your potential capture rate. Similarly,
                                southbound vehicles have great visibility to the site, coming into view at approximately 400’. Strategic placement of
                                equipment and installation of bright and eye-catching signage will help to further maximize the sites visibility and
                                your potential capture rate. The site is directly accessible to both directions of traffic with no U-turns required.
                                However, northbound vehicles must cross the opposing flow of traffic without the assistance of a signalized
                                intersection to enter the site. This maneuver could be difficult which may negatively affect your potential capture
                                rate.
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: 16, mt: 2 }}>
                                There are no carwashes within the 3-mile market. Offering monthly unlimited plans in this type of market is key to
                                insulating your customer base and preventing competitors from having market penetration. However, the nearest express
                                washes (1 an existing VIP location) are just outside the northeastern border of the market. With this, they will
                                likely have market penetration. The proposed location is positioned on the southern edge of the population density,
                                with this there is potential that some of the traffic passing the site is commuter in nature, traveling into
                                Georgetown for work. With this, you may need to market the site as a destination location to attract the population
                                density from the northern portion of the 3-mile market to capture the number of customers required to support a viable
                                express wash. Overall, the site is well positioned on a traffic count above our benchmark with strong retail draw.
                                Additionally, it appears there is room in the market for an additional express wash. However, you will need to
                                strategically price your offering to win and maintain a customer base. Additionally, you may need to take market share
                                from the competition and achieve a greater than typical capture rate of commuter traffic to maximize your ROI.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card
                        sx={{
                            height: '100%',
                            boxShadow: '0 0 6px rgba(0, 0, 0, 0.4)',
                            flexGrow: 1,
                        }}
                    >
                        <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                            <Stack justifyContent="center" alignItems="center" direction="column">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M21 7L15.5657 12.4343C15.3677 12.6323 15.2687 12.7313 15.1545 12.7684C15.0541 12.8011 14.9459 12.8011 14.8455 12.7684C14.7313 12.7313 14.6323 12.6323 14.4343 12.5657L7 15M21 7H17M21 7V11"
                                        stroke="#3A4F5F"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                <Typography variant="h6" color="#85929C" fontWeight="bold" sx={{ fontSize: 24, color: 'primary.main' }}>
                                    Estimated ROE
                                </Typography>

                                <IncomeBarChart />
                            </Stack>
                            <Box sx={{ mt: 2 }}>
                                <Typography
                                    variant="body1"
                                    color="#3A4F5F"
                                    sx={{ fontSize: isTabletOrSmaller ? 14 : 16, fontWeight: '600' }}
                                    align="left"
                                >
                                    5-Year ROE CAGR of +10.3%.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="#3A4F5F"
                                    sx={{ fontSize: isTabletOrSmaller ? 14 : 16, fontWeight: '600' }}
                                    align="left"
                                >
                                    Cumulative Net Income of ${cumulativeIncome.toLocaleString('en-US')}.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="#3A4F5F"
                                    sx={{ fontSize: isTabletOrSmaller ? 14 : 16, fontWeight: '600' }}
                                    align="left"
                                >
                                    Assumes an initial equity investment of $860,000.
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card
                        sx={{
                            height: '100%',
                            boxShadow: '0 0 6px rgba(0, 0, 0, 0.4)',
                            flexGrow: 1,
                        }}
                    >
                        <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                            <Stack justifyContent="center" alignItems="center" direction="column">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5 13H8M2 9L4 10L5.27064 6.18807C5.53292 5.40125 5.66405 5.00784 5.90729 4.71698C6.12208 4.46013 6.39792 4.26132 6.70951 4.13878C7.06236 4 7.47705 4 8.30643 4H15.6936C16.523 4 16.9376 4 17.2905 4.13878C17.6021 4.26132 17.8779 4.46013 18.0927 4.71698C18.3359 5.00784 18.4671 5.40125 18.7294 6.18807L20 10L22 9M16 13H19M6.8 10H17.2C18.8802 10 19.7202 10 20.362 10.327C20.9265 10.6146 21.3854 11.0735 21.673 11.638C22 12.2798 22 13.1198 22 14.8V17.5C22 17.9647 22 18.197 21.9616 18.3902C21.8038 19.1836 21.1836 19.8038 20.3902 19.9616C20.197 20 19.9647 20 19.5 20H19C17.8954 20 17 19.1046 17 18C17 17.7239 16.7761 17.5 16.5 17.5H7.5C7.22386 17.5 7 17.7239 7 18C7 19.1046 6.10457 20 5 20H4.5C4.03534 20 3.80302 20 3.60982 19.9616C2.81644 19.8038 2.19624 19.1836 2.03843 18.3902C2 18.197 2 17.9647 2 17.5V14.8C2 13.1198 2 12.2798 2.32698 11.638C2.6146 11.0735 3.07354 10.6146 3.63803 10.327C4.27976 10 5.11984 10 6.8 10Z"
                                        stroke="#3A4F5F"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <Typography variant="h6" color="#85929C" fontWeight="bold" sx={{ fontSize: 24, color: 'primary.main' }}>
                                    Max Daily Car Wash Throughput
                                </Typography>
                                <CarWashThroughPutChart />
                            </Stack>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="body1" color="#3A4F5F" sx={{ fontSize: 16, fontWeight: '600' }} align="left">
                                    Assuming average local speed of 25 mph.
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Button
                    fullWidth={true}
                    variant="contained"
                    onClick={() => {
                        router.push('/pro-forma/location-dynamics');
                    }}
                    sx={{
                        my: 3,
                        textTransform: 'capitalize',
                        fontSize: { xs: 14, sm: 16 },
                        maxWidth: 300,
                        mx: 'auto',
                    }}
                >
                    Explore Your Site
                </Button>
            </Grid>
        </>
    );
}

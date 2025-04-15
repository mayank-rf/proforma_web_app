import {
    Grid,
    Card,
    CardContent,
    Typography,
    Box,
    Divider,
    Chip
} from "@mui/material";

const overviewData = {
    siteSummary: {
        siteName: "NH-9 Express Car Wash",
        siteCode: "CW-001",
        location: "Sector 10, Ghaziabad, UP",
        siteType: "Lease",
        lotSize: "5,000 sq ft",
        zoning: "Commercial",
        visibility: "High (main road)"
    },
    businessModel: {
        services: ["Exterior Wash", "Interior Clean", "Detailing", "Add-ons"],
        washType: "Conveyor Belt + Touchless",
        pricingModel: "Retail + Membership",
        targetCustomers: ["Residents", "Office Workers", "Local Fleets"],
        hours: "8:00 AM – 8:00 PM, 7 days/week"
    },
    market: {
        traffic: "25,000 vehicles/day",
        population: "60,000 within 3 km",
        captureRate: "1.5%",
        competitors: "2 nearby",
        differentiators: ["Water Recycling", "App Booking", "Premium Plans"]
    },
    projections: {
        setupCost: "$30,00,000",
        monthlyRevenue: "$16,00,000",
        netProfitMargin: "22%",
        payback: "14 months",
        roi: "25% (Year 1)"
    }
};

export default function ProFormaOverview() {
    return (
        <Box sx={{ flexGrow: 1, p: 4 }}>
            <Grid container spacing={3}>

                {/* Left Column */}
                <Grid item xs={12} md={8}>
                    {/* Site Summary */}
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                📍 Site Summary
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <Typography><strong>Site Name:</strong> {overviewData.siteSummary.siteName}</Typography>
                            <Typography><strong>Site Code:</strong> {overviewData.siteSummary.siteCode}</Typography>
                            <Typography><strong>Location:</strong> {overviewData.siteSummary.location}</Typography>
                            <Typography><strong>Site Type:</strong> {overviewData.siteSummary.siteType}</Typography>
                            <Typography><strong>Lot Size:</strong> {overviewData.siteSummary.lotSize}</Typography>
                            <Typography><strong>Zoning:</strong> {overviewData.siteSummary.zoning}</Typography>
                            <Typography><strong>Visibility:</strong> {overviewData.siteSummary.visibility}</Typography>
                        </CardContent>
                    </Card>

                    {/* Business Model */}
                    <Card sx={{ mt: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                🧼 Business Model
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <Typography><strong>Wash Type:</strong> {overviewData.businessModel.washType}</Typography>
                            <Typography><strong>Pricing Model:</strong> {overviewData.businessModel.pricingModel}</Typography>
                            <Typography><strong>Hours:</strong> {overviewData.businessModel.hours}</Typography>
                            <Typography sx={{ mt: 1 }}><strong>Services:</strong></Typography>
                            {overviewData.businessModel.services.map((s, i) => (
                                <Chip key={i} label={s} size="small" sx={{ m: 0.5 }} />
                            ))}
                            <Typography sx={{ mt: 2 }}><strong>Target Customers:</strong></Typography>
                            {overviewData.businessModel.targetCustomers.map((c, i) => (
                                <Chip key={i} label={c} size="small" color="info" sx={{ m: 0.5 }} />
                            ))}
                        </CardContent>
                    </Card>

                    {/* Market Opportunity */}
                    <Card sx={{ mt: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                📊 Market Opportunity
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <Typography><strong>Traffic:</strong> {overviewData.market.traffic}</Typography>
                            <Typography><strong>Population:</strong> {overviewData.market.population}</Typography>
                            <Typography><strong>Capture Rate:</strong> {overviewData.market.captureRate}</Typography>
                            <Typography><strong>Nearby Competitors:</strong> {overviewData.market.competitors}</Typography>
                            <Typography sx={{ mt: 1 }}><strong>Differentiators:</strong></Typography>
                            {overviewData.market.differentiators.map((d, i) => (
                                <Chip key={i} label={d} size="small" color="success" sx={{ m: 0.5 }} />
                            ))}
                        </CardContent>
                    </Card>
                </Grid>

                {/* Right Column: Visuals & Projections */}
                <Grid item xs={12} md={4}>
                    {/* Map / Image Visual */}
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                🗺️ Site Location Map
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <Box sx={{ height: 240, background: "#eee", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography color="text.secondary">[Map Placeholder]</Typography>
                            </Box>
                        </CardContent>
                    </Card>

                    {/* Projections */}
                    <Card sx={{ mt: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                📈 Projected Financial Highlights
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <Typography><strong>Setup Cost:</strong> {overviewData.projections.setupCost}</Typography>
                            <Typography><strong>Monthly Revenue:</strong> {overviewData.projections.monthlyRevenue}</Typography>
                            <Typography><strong>Net Profit Margin:</strong> {overviewData.projections.netProfitMargin}</Typography>
                            <Typography><strong>Payback Period:</strong> {overviewData.projections.payback}</Typography>
                            <Typography><strong>ROI (Year 1):</strong> {overviewData.projections.roi}</Typography>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </Box>
    );
}

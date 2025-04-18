import { Container, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const initialData = [
    { item: 'Building', totalInvestment: 360000, ownerPercentage: 20, bankPercentage: 80 },
    { item: 'Equipment', totalInvestment: 725000, ownerPercentage: 20, bankPercentage: 80 },
    { item: 'Land', totalInvestment: 7475000, ownerPercentage: 20, bankPercentage: 80 },
    { item: 'Site', totalInvestment: 45000, ownerPercentage: 20, bankPercentage: 80 },
    { item: 'Soft Costs', totalInvestment: 50000, ownerPercentage: 20, bankPercentage: 80 },
];

function InvestmentGrid() {
    const [data, setData] = useState<any>(initialData);

    const handleInputChange = (index: number, field: string, value: string) => {
        const newData = [...data];
        newData[index][field] = parseFloat(value) || 0;

        // Recalculate Owner Investment & Bank Debt
        newData[index].ownerInvestment = (newData[index].totalInvestment * newData[index].ownerPercentage) / 100;

        newData[index].bankDebt = (newData[index].totalInvestment * newData[index].bankPercentage) / 100;

        setData(newData);
    };

    return (
        <Container maxWidth="md">
            <Grid container spacing={2} sx={{ marginBottom: 2, fontWeight: 'bold' }}>
                <Grid item xs={6}>
                    <Typography variant="body1" fontWeight="600" color="#3A4F5F">
                        Investment Item
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="body1" fontWeight="600" color="#3A4F5F">
                        Total Investment ($)
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="body1" fontWeight="600" color="#3A4F5F">
                        % Owner
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="body1" fontWeight="600" color="#3A4F5F">
                        % Bank
                    </Typography>
                </Grid>
            </Grid>

            {data.map((row: any, index: number) => (
                <Grid container spacing={2} key={index} alignItems="center">
                    <Grid item xs={6}>
                        <Typography>{row.item}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            fullWidth
                            size="small"
                            type="number"
                            value={row.totalInvestment}
                            onChange={(e) => handleInputChange(index, 'totalInvestment', e.target.value)}
                            sx={{ m: 1 }}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            fullWidth
                            size="small"
                            type="number"
                            value={row.ownerPercentage}
                            onChange={(e) => handleInputChange(index, 'ownerPercentage', e.target.value)}
                            sx={{ m: 1 }}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            fullWidth
                            size="small"
                            type="number"
                            value={row.bankPercentage}
                            onChange={(e) => handleInputChange(index, 'bankPercentage', e.target.value)}
                            sx={{ m: 1 }}
                            disabled
                        />
                    </Grid>
                </Grid>
            ))}
        </Container>
    );
}

export default InvestmentGrid;

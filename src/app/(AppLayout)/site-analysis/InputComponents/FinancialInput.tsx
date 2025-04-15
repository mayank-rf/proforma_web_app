import { Box, capitalize, Grid, TextField, Typography } from '@mui/material'
import InputAccordion from './InputAccordion'
import { Controller, useWatch } from 'react-hook-form'

export default function FinancialInput({ control }: any) {
    const acquisitionBudgetData = useWatch({ control, name: "acquisitionBudget" });
    const bankDebtAllocationData = useWatch({ control, name: "bankDebtAllocation" });

    const acquisitionBudgetFilled = Object.values(acquisitionBudgetData).every(
        (val) => val !== undefined && val !== null && val !== ''
    );
    const bankDebtAllocationFilled = Object.values(bankDebtAllocationData).every(
        (val) => val !== undefined && val !== null && val !== ''
    );
    const allFilled = acquisitionBudgetFilled && bankDebtAllocationFilled;

    return (
        <InputAccordion title="Financial Inputs" completed={allFilled}>
            <Box mb={2}>
                <Typography variant="h6" fontWeight="600" sx={{ mb: 2, color: '#3A4F5F' }} align='center'>Acquisition Budget</Typography>

                <Grid container spacing={2} sx={{ marginBottom: 2, fontWeight: "bold" }}>
                    <Grid item xs={6}><Typography variant="body1" fontWeight="600" color="#3A4F5F">Investment Item</Typography></Grid>
                    <Grid item xs={2}><Typography variant="body1" fontWeight="600" color="#3A4F5F">Total Investment ($)</Typography></Grid>
                    <Grid item xs={2}><Typography variant="body1" fontWeight="600" color="#3A4F5F">% Owner</Typography></Grid>
                    <Grid item xs={2}><Typography variant="body1" fontWeight="600" color="#3A4F5F">% Bank</Typography></Grid>
                </Grid>

                {Object.keys(acquisitionBudgetData).map((key: any, index: number) => (
                    <Grid container spacing={2} key={index} alignItems="center">
                        <Grid item xs={6}>
                            <Typography>{capitalize(key.split("_").join(" "))}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Controller
                                name={`acquisitionBudget.${key}.totalInvestment`}
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        size="small"
                                        type="number"
                                        {...field}
                                        sx={{ m: 1 }}
                                        disabled
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Controller
                                name={`acquisitionBudget.${key}.percentOwner`}
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        size="small"
                                        type="number"
                                        {...field}
                                        sx={{ m: 1 }}
                                        disabled
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Controller
                                name={`acquisitionBudget.${key}.percentBank`}
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        size="small"
                                        type="number"
                                        {...field}
                                        sx={{ m: 1 }}
                                        disabled
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                ))}
            </Box>

            <Box mb={2}>
                <Typography variant="h6" fontWeight="600" sx={{ mb: 2, color: '#3A4F5F' }} align='center'>Bank Debt Allocation</Typography>

                <Grid container spacing={2} sx={{ marginBottom: 2, fontWeight: "bold" }}>
                    <Grid item xs={6}><Typography variant="body1" fontWeight="600" color="#3A4F5F">Investment Item</Typography></Grid>
                    <Grid item xs={2}><Typography variant="body1" fontWeight="600" color="#3A4F5F">Bank Debt Total ($)</Typography></Grid>
                    <Grid item xs={2}><Typography variant="body1" fontWeight="600" color="#3A4F5F">Interest Rate</Typography></Grid>
                    <Grid item xs={2}><Typography variant="body1" fontWeight="600" color="#3A4F5F">Term of Loan <br />(In Months)</Typography></Grid>
                </Grid>

                {Object.keys(bankDebtAllocationData).map((key: any, index: number) => (
                    <Grid container spacing={2} key={index} alignItems="center">
                        <Grid item xs={6}>
                            <Typography>{capitalize(key.split("_").join(" "))}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Controller
                                name={`bankDebtAllocation.${key}.bankDebtTotal`}
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        size="small"
                                        type="number"
                                        {...field}
                                        sx={{ m: 1 }}
                                        disabled
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Controller
                                name={`bankDebtAllocation.${key}.interestRate`}
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        size="small"
                                        type="number"
                                        {...field}
                                        sx={{ m: 1 }}
                                        disabled
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Controller
                                name={`bankDebtAllocation.${key}.termOfLoan`}
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        size="small"
                                        type="number"
                                        {...field}
                                        sx={{ m: 1 }}
                                        disabled
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                ))}
            </Box>

            <Box mb={2}>
                <Typography variant="h6" fontWeight="600" sx={{ mb: 2, color: '#3A4F5F' }} align='center'>Operational Expenses</Typography>

                <Grid container spacing={2} sx={{ marginBottom: 2, fontWeight: "bold" }}>
                </Grid>
            </Box>
        </InputAccordion>
    )
}

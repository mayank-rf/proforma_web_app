import { Box, capitalize, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import InputAccordion from './InputAccordion';
import { Controller, useWatch } from 'react-hook-form';
import { getValidationRules } from '@/utils/validationRules';

export default function FinancialInput({ control, isValid}: any) {
    const acquisitionBudgetData = useWatch({ control, name: 'acquisitionBudget' });
    const bankDebtAllocationData = useWatch({ control, name: 'bankDebtAllocation' });
    const operationalExpensesData = useWatch({ control, name: 'operationalExpenses' });

    const acquisitionBudgetFilled = Object.entries(acquisitionBudgetData).every(([_,val]) => Object.values(val).every((item) => item !== ""  && item !== null && item !== undefined));
    const bankDebtAllocationFilled = Object.entries(bankDebtAllocationData).every(([_,val]) => Object.values(val).every((item) => item !== ""  && item !== null && item !== undefined));
    const operationalExpensesFilled = Object.entries(operationalExpensesData).every(([_,val]) => Object.values(val).every((item) => item !== ""  && item !== null && item !== undefined));
 
    const allFilled = acquisitionBudgetFilled && bankDebtAllocationFilled && operationalExpensesFilled && isValid;

    return (
        <InputAccordion title="Financial Inputs" completed={allFilled}>
            <Box mb={2}>
                <Typography variant="h6" fontWeight="600" sx={{ mb: 2, color: '#3A4F5F' }} align="center">
                    Acquisition Budget
                </Typography>

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

                {Object.keys(acquisitionBudgetData).map((key: any, index: number) => (
                    <Grid container spacing={2} key={index} alignItems="center">
                        <Grid item xs={6}>
                            <Typography>{capitalize(key.split('_').join(' '))}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Controller
                                name={`acquisitionBudget.${key}.totalInvestment`}
                                control={control}
                                rules={getValidationRules('number')}        
                                render={({ field, fieldState }) => <TextField fullWidth size="small"  {...field} sx={{ m: 1 }}
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                                slotProps={{
                                    input: {
                                      startAdornment: (
                                        <InputAdornment position="start">
                                         $ 
                                        </InputAdornment>
                                      ),
                                    },
                                  }}
                                />}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Controller
                                name={`acquisitionBudget.${key}.percentOwner`}
                                control={control}
                                rules={getValidationRules('number')}
                                render={({ field, fieldState}) => <TextField fullWidth size="small" {...field} sx={{ m: 1 }}
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                                slotProps={{
                                    input: {
                                      endAdornment: (
                                        <InputAdornment position="end">
                                         %
                                        </InputAdornment>
                                      ),
                                    },
                                  }}
                                />}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Controller
                                name={`acquisitionBudget.${key}.percentBank`}
                                control={control}
                                rules={getValidationRules('number')}    
                                render={({ field, fieldState }) => <TextField fullWidth size="small"  {...field} sx={{ m: 1 }}
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                                slotProps={{
                                    input: {
                                      endAdornment: (
                                        <InputAdornment position="end">
                                         %
                                        </InputAdornment>
                                      ),
                                    },
                                  }}
                                />}
                            />
                        </Grid>
                    </Grid>
                ))}
            </Box>

            <Box mb={2}>
                <Typography variant="h6" fontWeight="600" sx={{ mb: 2, color: '#3A4F5F' }} align="center">
                    Bank Debt Allocation
                </Typography>

                <Grid container spacing={2} sx={{ marginBottom: 2, fontWeight: 'bold' }}>
                    <Grid item xs={6}>
                        <Typography variant="body1" fontWeight="600" color="#3A4F5F">
                            Investment Item
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="body1" fontWeight="600" color="#3A4F5F">
                            Bank Debt Total ($)
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="body1" fontWeight="600" color="#3A4F5F">
                            Interest Rate
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="body1" fontWeight="600" color="#3A4F5F">
                            Term of Loan <br />
                            (In Months)
                        </Typography>
                    </Grid>
                </Grid>

                {Object.keys(bankDebtAllocationData).map((key: any, index: number) => (
                    <Grid container spacing={2} key={index} alignItems="center">
                        <Grid item xs={6}>
                            <Typography>{capitalize(key.split('_').join(' '))}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Controller
                                name={`bankDebtAllocation.${key}.bankDebtTotal`}
                                control={control}
                                rules={getValidationRules('number')}    
                                render={({ field, fieldState }) => <TextField fullWidth size="small"  {...field} sx={{ m: 1 }}
                                error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                                slotProps={{
                                    input: {
                                      startAdornment: (
                                        <InputAdornment position="start">
                                         $ 
                                        </InputAdornment>
                                      ),
                                    },
                                  }}
                                />}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Controller
                                name={`bankDebtAllocation.${key}.interestRate`}
                                control={control}
                                rules={getValidationRules('number')}
                                render={({ field, fieldState }) => <TextField fullWidth size="small"  {...field} sx={{ m: 1 }} error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                                slotProps={{
                                    input: {
                                      endAdornment: (
                                        <InputAdornment position="end">
                                         %
                                        </InputAdornment>
                                      ),
                                    },
                                  }}
                                />}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Controller
                                name={`bankDebtAllocation.${key}.termOfLoan`}
                                control={control}
                                rules={getValidationRules('number')}    
                                render={({ field, fieldState }) => <TextField fullWidth size="small"  {...field} sx={{ m: 1 }}
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                                />}
                            />
                        </Grid>
                    </Grid>
                ))}
            </Box>

            <Box mb={2}>
                <Typography variant="h6" fontWeight="600" sx={{ mb: 2, color: '#3A4F5F' }} align="center">
                    Operational Expenses
                </Typography>


                <Grid container spacing={2} sx={{ marginBottom: 2, fontWeight: 'bold' }}>
                <Grid item xs={6}>
                        <Typography variant="body1" fontWeight="600" color="#3A4F5F">
                            Expense Description
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="body1" fontWeight="600" color="#3A4F5F">
                            % of Sales
                        </Typography>
                    </Grid>
                    {/* <Grid item xs={2}>
                        <Typography variant="body1" fontWeight="600" color="#3A4F5F">
                            Break Even
                        </Typography>
                    </Grid> */}
                    <Grid item xs={2}>
                        <Typography variant="body1" fontWeight="600" color="#3A4F5F">
                            Year 1
                        </Typography>
                    </Grid>
                </Grid>

                {Object.keys(operationalExpensesData).map((key: any, index: number) => (
                    <Grid container spacing={2} key={index} alignItems="center">
                        <Grid item xs={6}>
                            <Typography>{capitalize(key.split('_').join(' '))}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Controller
                                name={`operationalExpenses.${key}.percentOfSales`}
                                control={control}
                                rules={getValidationRules('number')}    
                                render={({ field, fieldState }) => <TextField fullWidth size="small"  {...field} sx={{ m: 1 }}  
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                                slotProps={{
                                    input: {
                                      endAdornment: (
                                        <InputAdornment position="end">
                                         %
                                        </InputAdornment>
                                      ),
                                    },
                                  }}
                                />}
                            />
                        </Grid>
                        {/* <Grid item xs={2}>
                            <Controller
                                name={`operationalExpenses.${key}.breakEven`}
                                control={control}
                                rules={getValidationRules('number')}    
                                render={({ field, fieldState }) => <TextField fullWidth size="small"  {...field} sx={{ m: 1 }} 
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                                />}
                            />
                        </Grid> */}
                        <Grid item xs={2}>
                            <Controller
                                name={`operationalExpenses.${key}.year1`}
                                control={control}
                                rules={getValidationRules('number')}    
                                render={({ field, fieldState }) => <TextField fullWidth size="small"  {...field} sx={{ m: 1 }} 
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                                slotProps={{
                                    input: {
                                      startAdornment: (
                                        <InputAdornment position="start">
                                         $
                                        </InputAdornment>
                                      ),
                                    },
                                  
                                }}
                                />}
                            />
                        </Grid>
                    </Grid>
                ))}
            </Box>
        </InputAccordion>
    );
}

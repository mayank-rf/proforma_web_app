import { Grid, InputLabel, Stack, TextField } from '@mui/material';
import InputAccordion from './InputAccordion';
import { Controller, useWatch } from 'react-hook-form';
import { getValidationRules } from '@/utils/validationRules';

export default function CarWashWorkingHours({ control, isValid }: any) {
    const weeklyHoursOfOperation = useWatch({ control, name: 'weeklyHoursOfOperation' });
    const averageDailyWashHours = useWatch({ control, name: 'averageDailyWashHours' });

    const allFilled = !!weeklyHoursOfOperation && !!averageDailyWashHours && isValid;

    return (
        <InputAccordion title="Car Wash Working Hours" completed={allFilled}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Controller
                        name="weeklyHoursOfOperation"
                        control={control}
                        rules={getValidationRules('number')}
                        render={({ field, fieldState }: any) => (
                            <TextField
                                fullWidth
                                size="small"
                                variant="outlined"
                                sx={{ borderRadius: '10px' }}
                                {...field}
                                id="weeklyHoursOfOperation"
                                label="Weekly Hours"
                                required
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Controller
                        name="averageDailyWashHours"
                        control={control}
                        rules={getValidationRules('number')}
                        render={({ field, fieldState }: any) => (
                            <TextField
                                fullWidth
                                size="small"
                                variant="outlined"
                                sx={{ borderRadius: '10px' }}
                                {...field}
                                id="averageDailyWashHours"
                                label="Average Daily Wash Hours"
                                required
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
            </Grid>
        </InputAccordion>
    );
}

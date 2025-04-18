import { Grid, TextField, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Controller, useWatch } from 'react-hook-form';
import useStore from '../../../../store/useStore';
import InputAccordion from './InputAccordion';

export default function LaborInformation({ control }: any) {
    const { setLaborInformation } = useStore();
    const manager = {
        laborHours: useWatch({ control, name: 'laborHours.manager' }),
        hourlyWages: useWatch({ control, name: 'hourlyWages.manager' }),
        burdenRate: useWatch({ control, name: 'burdenRate.manager' }),
    };
    const assistantManager = {
        laborHours: useWatch({ control, name: 'laborHours.assistantManager' }),
        hourlyWages: useWatch({ control, name: 'hourlyWages.assistantManager' }),
        burdenRate: useWatch({ control, name: 'burdenRate.assistantManager' }),
    };
    const attendants = {
        count: useWatch({ control, name: 'count.attendants' }),
        laborHours: useWatch({ control, name: 'laborHours.attendants' }),
        hourlyWages: useWatch({ control, name: 'hourlyWages.attendants' }),
        burdenRate: useWatch({ control, name: 'burdenRate.attendants' }),
    };

    const currentState = {
        manager,
        assistantManager,
        attendants,
    };

    useEffect(() => {
        setLaborInformation(currentState);
    }, [JSON.stringify(currentState)]);

    const isManagerFilled = Object.values(manager).every(Boolean);
    const isAssistantManagerFilled = Object.values(assistantManager).every(Boolean);
    const isAttendantsFilled = Object.values(attendants).every(Boolean);

    const allFilled = isManagerFilled && isAssistantManagerFilled && isAttendantsFilled;

    const renderTextField = (name: string, label: string) => (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <TextField fullWidth size="small" variant="outlined" sx={{ borderRadius: '10px' }} {...field} label={label} required />
            )}
        />
    );

    return (
        <InputAccordion title="Labor Information" completed={allFilled}>
            <Grid container spacing={2}>
                {/* Manager */}
                <Grid item xs={12}>
                    <Typography variant="subtitle1" fontWeight="bold" color="primary.main">
                        Manager
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    {renderTextField('laborHours.manager', 'Labor Hours')}
                </Grid>
                <Grid item xs={12} md={4}>
                    {renderTextField('hourlyWages.manager', 'Hourly Wages')}
                </Grid>
                <Grid item xs={12} md={4}>
                    {renderTextField('burdenRate.manager', 'Burden Rate')}
                </Grid>

                {/* Assistant Manager */}
                <Grid item xs={12}>
                    <Typography variant="subtitle1" fontWeight="bold" color="primary.main">
                        Assistant Manager
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    {renderTextField('laborHours.assistantManager', 'Labor Hours')}
                </Grid>
                <Grid item xs={12} md={4}>
                    {renderTextField('hourlyWages.assistantManager', 'Hourly Wages')}
                </Grid>
                <Grid item xs={12} md={4}>
                    {renderTextField('burdenRate.assistantManager', 'Burden Rate')}
                </Grid>

                {/* Attendants */}
                <Grid item xs={12}>
                    <Typography variant="subtitle1" fontWeight="bold" color="primary.main">
                        Attendants
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    {renderTextField('count.attendants', 'Number of Attendants')}
                </Grid>
                <Grid item xs={12} md={3}>
                    {renderTextField('laborHours.attendants', 'Labor Hours')}
                </Grid>
                <Grid item xs={12} md={3}>
                    {renderTextField('hourlyWages.attendants', 'Hourly Wages')}
                </Grid>
                <Grid item xs={12} md={3}>
                    {renderTextField('burdenRate.attendants', 'Burden Rate')}
                </Grid>
            </Grid>
        </InputAccordion>
    );
}

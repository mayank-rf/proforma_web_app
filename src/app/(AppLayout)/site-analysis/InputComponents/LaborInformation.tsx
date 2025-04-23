import { Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { Controller, useWatch } from 'react-hook-form';
import InputAccordion from './InputAccordion';
import { getValidationRules } from '@/utils/validationRules';
import Percent from '@mui/icons-material/Percent';

export default function LaborInformation({ control, isValid }: any) {
    // const { setLaborInformation } = useStore();
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

    // const currentState = {
    //     manager,
    //     assistantManager,
    //     attendants,
    // };

    // useEffect(() => {
    //     setLaborInformation(currentState);
    // }, [JSON.stringify(currentState)]);

    const isManagerFilled = Object.values(manager).every(Boolean);
    const isAssistantManagerFilled = Object.values(assistantManager).every(Boolean);
    const isAttendantsFilled = Object.values(attendants).every(Boolean);

    const allFilled = isManagerFilled && isAssistantManagerFilled && isAttendantsFilled && isValid

    const renderTextField = (name: string, label: string, type: any) => (
        <Controller
            name={name}
            control={control}
            rules={getValidationRules(type)}
            render={({ field, fieldState }) => (
                <TextField fullWidth size="small" variant="outlined" sx={{ borderRadius: '10px' }} {...field} label={label} required error={!!fieldState.error}
                    helperText={fieldState.error?.message} 
                      slotProps={
                        name === 'burdenRate.manager' || name === 'burdenRate.assistantManager' || name === 'burdenRate.attendants'
                        ? {
                        input: {
                          endAdornment: (
                            <InputAdornment position="end" sx={{ ml: -1 }}>
                            %
                          </InputAdornment>
                          ),
                        },
                      }:null}/>
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
                    {renderTextField('laborHours.manager', 'Labor Hours', 'number')}
                </Grid>
                <Grid item xs={12} md={4}>
                    {renderTextField('hourlyWages.manager', 'Hourly Wages', 'number')}
                </Grid>
                <Grid item xs={12} md={4}>
                    {renderTextField('burdenRate.manager', 'Burden Rate', 'number')}
                </Grid>

                {/* Assistant Manager */}
                <Grid item xs={12}>
                    <Typography variant="subtitle1" fontWeight="bold" color="primary.main">
                        Assistant Manager
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    {renderTextField('laborHours.assistantManager', 'Labor Hours', 'number')}
                </Grid>
                <Grid item xs={12} md={4}>
                    {renderTextField('hourlyWages.assistantManager', 'Hourly Wages', 'number')}
                </Grid>
                <Grid item xs={12} md={4}>
                    {renderTextField('burdenRate.assistantManager', 'Burden Rate', 'number')}
                </Grid>

                {/* Attendants */}
                <Grid item xs={12}>
                    <Typography variant="subtitle1" fontWeight="bold" color="primary.main">
                        Attendants
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    {renderTextField('count.attendants', 'Number of Attendants', 'number')}
                </Grid>
                <Grid item xs={12} md={3}>
                    {renderTextField('laborHours.attendants', 'Labor Hours', 'number')}
                </Grid>
                <Grid item xs={12} md={3}>
                    {renderTextField('hourlyWages.attendants', 'Hourly Wages', 'number')}
                </Grid>
                <Grid item xs={12} md={3}>
                    {renderTextField('burdenRate.attendants', 'Burden Rate', 'number')}
                </Grid>
            </Grid>
        </InputAccordion>
    );
}

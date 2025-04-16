import { Grid, InputLabel, Stack, TextField } from '@mui/material';
import InputAccordion from './InputAccordion';
import { Controller, useWatch } from 'react-hook-form';

export default function WashPackages({ control }: any) {
    const basicPackage = useWatch({ control, name: 'basicPackage' });
    const menuPackageOne = useWatch({ control, name: 'menuPackageOne' });
    const menuPackageTwo = useWatch({ control, name: 'menuPackageTwo' });
    const menuPackageThree = useWatch({ control, name: 'menuPackageThree' });
    const menuPackageFour = useWatch({ control, name: 'menuPackageFour' });

    const allFilled = !!basicPackage && !!menuPackageOne && !!menuPackageTwo && !!menuPackageThree && !!menuPackageFour;

    return (
        <InputAccordion title="Wash Packages" completed={allFilled}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Controller
                        name="basicPackage"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth label="Basic Package" size="small" variant="outlined" sx={{ borderRadius: '10px' }} />
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Controller
                        name="menuPackageOne"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth label="Menu Package #1" size="small" variant="outlined" sx={{ borderRadius: '10px' }} />
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Controller
                        name="menuPackageTwo"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth label="Menu Package #2" size="small" variant="outlined" sx={{ borderRadius: '10px' }} />
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Controller
                        name="menuPackageThree"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth label="Menu Package #3" size="small" variant="outlined" sx={{ borderRadius: '10px' }} />
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Controller
                        name="menuPackageFour"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth label="Menu Package #4" size="small" variant="outlined" sx={{ borderRadius: '10px' }} />
                        )}
                    />
                </Grid>
            </Grid>
        </InputAccordion>
    );
}

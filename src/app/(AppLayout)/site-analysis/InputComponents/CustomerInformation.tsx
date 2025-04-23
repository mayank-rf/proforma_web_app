import { FormControl, Grid, TextField } from '@mui/material';
import { Controller, useWatch } from 'react-hook-form';
import InputAccordion from './InputAccordion';
import { getValidationRules } from '@/utils/validationRules';

export default function CustomerInformation({ control, isValid }: any) {
    const customerName = useWatch({ control, name: 'customerName' });
    const companyName = useWatch({ control, name: 'companyName' });
    const address = useWatch({ control, name: 'siteAddress.address' });
    const city = useWatch({ control, name: 'siteAddress.city' });
    const state = useWatch({ control, name: 'siteAddress.state' });
    const zip_code = useWatch({ control, name: 'siteAddress.zip_code' });
    // const { setAddress } = useStore();

    // useEffect(() => {
    //     const addressHeader = `${address || ''}-${city || ''}, ${state || ''}, ${zip_code || ''}`;
    //     setAddress(addressHeader);
    // }, [address, city, state, zip_code, setAddress]);

    const allFilled = !!customerName && !!companyName && !!city && !!state && !!zip_code && !!address && isValid;

    return (
        <InputAccordion title="Customer Information" completed={allFilled}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Controller
                        name="customerName"
                        control={control}
                        rules={getValidationRules('text')}
                        render={({ field, fieldState }: any) => (
                            <FormControl fullWidth required>
                                <TextField
                                    fullWidth
                                    size="small"
                                    variant="outlined"
                                    value=""
                                    sx={{ borderRadius: '10px' }}
                                    {...field}
                                    id="customerName"
                                    label="Customer Name"
                                    required
                                    error={!!fieldState.error}
                                    helperText={fieldState.error?.message}
                                />
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Controller
                        name="companyName"
                        control={control}
                        rules={getValidationRules('text')}
                        render={({ field, fieldState }: any) => (
                            <FormControl fullWidth required>
                                <TextField
                                    fullWidth
                                    size="small"
                                    variant="outlined"
                                    value=""
                                    sx={{ borderRadius: '10px' }}
                                    {...field}
                                    id="companyName"
                                    label="Company Name"
                                    required
                                    error={!!fieldState.error}
                                    helperText={fieldState.error?.message}
                                />
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <Controller
                        name="siteAddress.address"
                        control={control}
                        rules={getValidationRules('textAndNumber')}
                        render={({ field, fieldState }: any) => (
                            <FormControl fullWidth required>
                                <TextField
                                    fullWidth
                                    size="small"
                                    variant="outlined"
                                    value=""
                                    sx={{ borderRadius: '10px' }}
                                    {...field}
                                    id="siteAddress.address"
                                    label="Site Address"
                                    required
                                    error={!!fieldState.error}
                                    helperText={fieldState.error?.message}
                                />
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Controller
                        name="siteAddress.city"
                        control={control}
                        rules={getValidationRules('text')}
                        render={({ field,fieldState }: any) => (
                            <FormControl fullWidth required>
                                <TextField
                                    fullWidth
                                    size="small"
                                    variant="outlined"
                                    value=""
                                    sx={{ borderRadius: '10px' }}
                                    {...field}
                                    id="siteAddress.city"
                                    label="City"
                                    required
                                    error={!!fieldState.error}
                                    helperText={fieldState.error?.message}
                                />
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Controller
                        name="siteAddress.state"
                        control={control}
                        rules={getValidationRules('text')}
                        render={({ field, fieldState }: any) => (
                            <FormControl fullWidth required>
                                <TextField
                                    fullWidth
                                    size="small"
                                    variant="outlined"
                                    value=""
                                    sx={{ borderRadius: '10px' }}
                                    {...field}
                                    id="siteAddress.state"
                                    label="State"
                                    required
                                    error={!!fieldState.error}
                                    helperText={fieldState.error?.message}
                                />
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Controller
                        name="siteAddress.zip_code"
                        control={control}
                        rules={getValidationRules('number')}
                        render={({ field, fieldState }: any) => (
                            <FormControl fullWidth required>
                                <TextField
                                    fullWidth
                                    size="small"
                                    variant="outlined"
                                    value=""
                                    sx={{ borderRadius: '10px' }}
                                    {...field}
                                    id="siteAddress.zip_code"
                                    label="Zip Code"
                                    required
                                    error={!!fieldState.error}
                                    helperText={fieldState.error?.message}
                                />
                            </FormControl>
                        )}
                    />
                </Grid>
            </Grid>
        </InputAccordion>
    );
}

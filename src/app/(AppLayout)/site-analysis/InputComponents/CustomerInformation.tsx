import { FormControl, Grid, InputLabel, Stack, TextField } from "@mui/material";
import InputAccordion from "./InputAccordion";
import { Controller, useWatch } from "react-hook-form";

export default function CustomerInformation({ control }: any) {
    const customerName = useWatch({ control, name: "customerName" });
    const companyName = useWatch({ control, name: "companyName" });
    const siteAddress = useWatch({ control, name: "siteAddress" });

    const allFilled = !!customerName && !!companyName && !!siteAddress;

    return (
        <InputAccordion title="Customer Information" completed={allFilled}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Controller
                        name="customerName"
                        control={control}
                        render={({ field }: any) => (
                            <FormControl fullWidth required>
                                <TextField fullWidth size="small" variant="outlined" value="" sx={{ borderRadius: '10px' }} {...field} id="customerName" label="Customer Name" required />
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Controller
                        name="companyName"
                        control={control}
                        render={({ field }: any) => (
                            <FormControl fullWidth required>
                                <TextField fullWidth size="small" variant="outlined" value="" sx={{ borderRadius: '10px' }} {...field} id="companyName" label="Company Name" required />
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <Controller
                        name="siteAddress.address"
                        control={control}
                        render={({ field }: any) => (
                            <FormControl fullWidth required>
                                <TextField fullWidth size="small" variant="outlined" value="" sx={{ borderRadius: '10px' }} {...field} id="siteAddress.address" label="Site Address" required />
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Controller
                        name="siteAddress.city"
                        control={control}
                        render={({ field }: any) => (
                            <FormControl fullWidth required>
                                <TextField fullWidth size="small" variant="outlined" value="" sx={{ borderRadius: '10px' }} {...field} id="siteAddress.city" label="City" required />
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Controller
                        name="siteAddress.state"
                        control={control}
                        render={({ field }: any) => (
                            <FormControl fullWidth required>
                                <TextField fullWidth size="small" variant="outlined" value="" sx={{ borderRadius: '10px' }} {...field} id="siteAddress.state" label="State" required />
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Controller
                        name="siteAddress.zip_code"
                        control={control}
                        render={({ field }: any) => (
                            <FormControl fullWidth required>
                                <TextField fullWidth size="small" variant="outlined" value="" sx={{ borderRadius: '10px' }} {...field} id="siteAddress.zip_code" label="Zip Code" required />
                            </FormControl>
                        )}
                    />
                </Grid>
            </Grid>
        </InputAccordion>
    )
}


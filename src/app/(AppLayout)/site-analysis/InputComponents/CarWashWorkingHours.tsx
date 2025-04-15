import { Grid, InputLabel, Stack, TextField } from "@mui/material";
import InputAccordion from "./InputAccordion";
import { Controller, useWatch } from "react-hook-form";

export default function CarWashWorkingHours({ control }: any) {
    const weeklyHoursOfOperation = useWatch({ control, name: "weeklyHoursOfOperation" });
    const averageDailyWashHours = useWatch({ control, name: "averageDailyWashHours" });

    const allFilled = !!weeklyHoursOfOperation && !!averageDailyWashHours;

    return (
        <InputAccordion title="Car Wash Working Hours" completed={allFilled}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Controller
                        name="weeklyHoursOfOperation"
                        control={control}
                        render={({ field }: any) => (
                            <TextField fullWidth size="small" variant="outlined" sx={{ borderRadius: '10px' }} {...field} id="weeklyHoursOfOperation" label="Weekly Hours" required />
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Controller
                        name="averageDailyWashHours"
                        control={control}
                        render={({ field }: any) => (
                            <TextField fullWidth size="small" variant="outlined" sx={{ borderRadius: '10px' }} {...field} id="averageDailyWashHours" label="Average Daily Wash Hours" required />
                        )}
                    />
                </Grid>
            </Grid>
        </InputAccordion>
    )
}

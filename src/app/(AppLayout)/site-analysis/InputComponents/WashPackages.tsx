import { Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { useMemo } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import InputAccordion from './InputAccordion';
import { getValidationRules } from '@/utils/validationRules';

export default function WashPackages({ control, isValid }: any) {

    const basicPackage = {
        price: useWatch({ control, name: 'basicPackage.price' }),
        customerPercent: useWatch({ control, name: 'basicPackage.customerPercent' }),
        chemicalCost: useWatch({ control, name: 'basicPackage.chemicalCost' }),
    };

    const menuPackageOne = {
        price: useWatch({ control, name: 'menuPackageOne.price' }),
        customerPercent: useWatch({ control, name: 'menuPackageOne.customerPercent' }),
        chemicalCost: useWatch({ control, name: 'menuPackageOne.chemicalCost' }),
    };

    const menuPackageTwo = {
        price: useWatch({ control, name: 'menuPackageTwo.price' }),
        customerPercent: useWatch({ control, name: 'menuPackageTwo.customerPercent' }),
        chemicalCost: useWatch({ control, name: 'menuPackageTwo.chemicalCost' }),
    };

    const menuPackageThree = {
        price: useWatch({ control, name: 'menuPackageThree.price' }),
        customerPercent: useWatch({ control, name: 'menuPackageThree.customerPercent' }),
        chemicalCost: useWatch({ control, name: 'menuPackageThree.chemicalCost' }),
    };

    const menuPackageFour = {
        price: useWatch({ control, name: 'menuPackageFour.price' }),
        customerPercent: useWatch({ control, name: 'menuPackageFour.customerPercent' }),
        chemicalCost: useWatch({ control, name: 'menuPackageFour.chemicalCost' }),
    };

    const isBasicPackageFilled = Object.values(basicPackage).every(Boolean);
    const isMenuPackageOneFilled = Object.values(menuPackageOne).every(Boolean);
    const isMenuPackageTwoFilled = Object.values(menuPackageTwo).every(Boolean);
    const isMenuPackageThreeFilled = Object.values(menuPackageThree).every(Boolean);
    const isMenuPackageFourFilled = Object.values(menuPackageFour).every(Boolean);

    const allFilled = isBasicPackageFilled && isMenuPackageOneFilled && isMenuPackageTwoFilled && 
                      isMenuPackageThreeFilled && isMenuPackageFourFilled 

    const renderTextField = (name: string, label: string, type: string) => (
        <Controller
            name={name}
            control={control}
            rules={getValidationRules('number')}
            render={({ field, fieldState }) => (
                <TextField 
                    fullWidth 
                    size="small" 
                    variant="outlined" 
                    sx={{ borderRadius: '10px' }} 
                    {...field} 
                    required 
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    slotProps={
                        name.includes('price') || name.includes('chemicalCost') 
                        ? {
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        $
                                    </InputAdornment>
                                ),
                            },
                        }
                        : name.includes('customerPercent')
                        ? {
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end" sx={{ ml: -1 }}>
                                        %
                                    </InputAdornment>
                                ),
                            },
                        }
                        : null
                    }
                />
            )}
        />
    );

    return (
        <InputAccordion title="Menu Packages" completed={allFilled}>
            <Grid container spacing={2}>
                {/* Header */}
                <Grid item xs={6}>
                    <Typography variant="body1" fontWeight="600" color="primary.main">
                        Packages
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="body1" fontWeight="600" color="primary.main">
                        Price
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="body1" fontWeight="600" color="primary.main">
                        Customer %
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="body1" fontWeight="600" color="primary.main">
                        Chemical Cost
                    </Typography>
                </Grid>

                {/* Basic Package */}
                <Grid item xs={6}>
                    <Typography variant="body1">Basic Package</Typography>
                </Grid>
                <Grid item xs={2}>
                    {renderTextField('basicPackage.price', 'Price', 'number')}
                </Grid>
                <Grid item xs={2}>
                    {renderTextField('basicPackage.customerPercent', 'Customer %', 'number')}
                </Grid>
                <Grid item xs={2}>
                    {renderTextField('basicPackage.chemicalCost', 'Chemical Cost', 'number')}
                </Grid>

                {/* Menu Package One */}
                <Grid item xs={6}>
                    <Typography variant="body1">Menu Package One</Typography>
                </Grid>
                <Grid item xs={2}>
                    {renderTextField('menuPackageOne.price', 'Price', 'number')}
                </Grid>
                <Grid item xs={2}>
                    {renderTextField('menuPackageOne.customerPercent', 'Customer %', 'number')}
                </Grid>
                <Grid item xs={2}>
                    {renderTextField('menuPackageOne.chemicalCost', 'Chemical Cost', 'number')}
                </Grid>

                {/* Menu Package Two */}
                <Grid item xs={6}>
                    <Typography variant="body1">Menu Package Two</Typography>
                </Grid>
                <Grid item xs={2}>
                    {renderTextField('menuPackageTwo.price', 'Price', 'number')}
                </Grid>
                <Grid item xs={2}>
                    {renderTextField('menuPackageTwo.customerPercent', 'Customer %', 'number')}
                </Grid>
                <Grid item xs={2}>
                    {renderTextField('menuPackageTwo.chemicalCost', 'Chemical Cost', 'number')}
                </Grid>

                {/* Menu Package Three */}
                <Grid item xs={6}>
                    <Typography variant="body1">Menu Package Three</Typography>
                </Grid>
                <Grid item xs={2}>
                    {renderTextField('menuPackageThree.price', 'Price', 'number')}
                </Grid>
                <Grid item xs={2}>
                    {renderTextField('menuPackageThree.customerPercent', 'Customer %', 'number')}
                </Grid>
                <Grid item xs={2}>
                    {renderTextField('menuPackageThree.chemicalCost', 'Chemical Cost', 'number')}
                </Grid>

                {/* Menu Package Four */}
                <Grid item xs={6}>
                    <Typography variant="body1">Menu Package Four</Typography>
                </Grid>
                <Grid item xs={2}>
                    {renderTextField('menuPackageFour.price', 'Price', 'number')}
                </Grid>
                <Grid item xs={2}>
                    {renderTextField('menuPackageFour.customerPercent', 'Customer %', 'number')}
                </Grid>
                <Grid item xs={2}>
                    {renderTextField('menuPackageFour.chemicalCost', 'Chemical Cost', 'number')}
                </Grid>
            </Grid>
        </InputAccordion>
    );
}
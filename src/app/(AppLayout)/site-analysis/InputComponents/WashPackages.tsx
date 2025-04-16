import {Grid, TextField, Typography } from '@mui/material'
import InputAccordion from './InputAccordion'
import { Controller, useForm, useWatch } from 'react-hook-form'
import React from 'react';

const defaultValues = {
    basicPackage: { price: 10, customerPercent: 45, chemicalCost: 0.48 },
    menuPackageOne: { price: 15, customerPercent: 30, chemicalCost: 0.89 },
    menuPackageTwo: { price: 20, customerPercent: 15, chemicalCost: 1.05 },
    menuPackageThree: { price: 25, customerPercent: 10, chemicalCost: 1.09 },
    menuPackageFour: { price: 0, customerPercent: 0, chemicalCost: 0 },
  };

export default function WashPackages() {
    const { control } = useForm({ defaultValues });
    const packageNames = [
        { key: "basicPackage", label: "Basic Package", price: 10, customerPercent: 45, chemicalCost: 0.48 },
        { key: "menuPackageOne", label: "Menu Package One",price: 15, customerPercent: 30, chemicalCost: 0.89  },
        { key: "menuPackageTwo", label: "Menu Package Two",price: 15, customerPercent: 30, chemicalCost: 0.89  },
        { key: "menuPackageThree", label: "Menu Package Three",price: 15, customerPercent: 30, chemicalCost: 0.89 },
        { key: "menuPackageFour", label: "Menu Package Four",price: 15, customerPercent: 30, chemicalCost: 0.89  },
    ];
  
    const packages = packageNames.map(({ key, label }) => {
        return {
            label,
            price: useWatch({ control, name: `${key}.price` as any }),
            customerPercent: useWatch({ control, name: `${key}.customerPercent` as any }),
            chemicalCost: useWatch({ control, name: `${key}.chemicalCost` as any }),
        };
    });
    const renderTextField = (name: string, defaultValue: number) => (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field }) => (
                <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    sx={{ borderRadius: '10px' }}
                    {...field}
                    required
                />
            )}
        />
    );

    const allFieldsFilled = packages.every(pkg =>
        pkg.price !== '' && pkg.price !== null && pkg.price !== undefined &&
        pkg.customerPercent !== '' && pkg.customerPercent !== null && pkg.customerPercent !== undefined &&
        pkg.chemicalCost !== '' && pkg.chemicalCost !== null && pkg.chemicalCost !== undefined
      );
   
    return (
        <InputAccordion title="Menu Packages" completed={allFieldsFilled}>     
            <Grid container >
                <Grid container spacing={2} sx={{ marginBottom: 2, fontWeight: "bold" }}>
                    <Grid item xs={6}><Typography variant="body1" fontWeight="600" color="#3A4F5F">Packages</Typography></Grid>
                    <Grid item xs={2}><Typography variant="body1" fontWeight="600" color="#3A4F5F">% Price</Typography></Grid>
                    <Grid item xs={2}><Typography variant="body1" fontWeight="600" color="#3A4F5F">% Customer</Typography></Grid>
                    <Grid item xs={2}><Typography variant="body1" fontWeight="600" color="#3A4F5F">Chemical Cost</Typography></Grid>
                </Grid>
                {packages.map((pkg, index) => (
                    <Grid container spacing={2} key={index} alignItems="center" sx={{ marginBottom: 2 }}>
                        <Grid item xs={6}>
                            <Typography>{pkg.label}</Typography>
                        </Grid>
                        <Grid item xs={2} md={2}>
                            {renderTextField(`${packageNames[index].key}.price`, packageNames[index].price)}
                        </Grid>
                        <Grid item xs={2} md={2}>
                            {renderTextField(`${packageNames[index].key}.customerPercent`, packageNames[index].customerPercent)}
                        </Grid>
                        <Grid item xs={2} md={2}>
                            {renderTextField(`${packageNames[index].key}.chemicalCost`, packageNames[index].chemicalCost)}
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </InputAccordion>
    )
}

import { Grid, TextField, Typography } from '@mui/material';
import InputAccordion from './InputAccordion';
import { Controller, useForm, useWatch } from 'react-hook-form';
import React, { useEffect, useMemo } from 'react';
import useStore from '../../../../store/useStore';

const defaultValues = {
    basicPackage: { price: 10, percentCustomers: 45, chemicalCost: 0.48 },
    menuPackageOne: { price: 15, percentCustomers: 30, chemicalCost: 0.89 },
    menuPackageTwo: { price: 20, percentCustomers: 15, chemicalCost: 1.05 },
    menuPackageThree: { price: 25, percentCustomers: 10, chemicalCost: 1.09 },
    menuPackageFour: { price: 0, percentCustomers: 0, chemicalCost: 0 },
};

export default function WashPackages() {
    const { control } = useForm({ defaultValues });
    const { setWashPackages } = useStore();

    const packageNames = [
        { key: 'basicPackage', name: 'Basic Package', price: 10, percentCustomers: 45, chemicalCost: 0.48 },
        { key: 'menuPackageOne', name: 'Menu Package One', price: 15, percentCustomers: 30, chemicalCost: 0.89 },
        { key: 'menuPackageTwo', name: 'Menu Package Two', price: 15, percentCustomers: 30, chemicalCost: 0.89 },
        { key: 'menuPackageThree', name: 'Menu Package Three', price: 15, percentCustomers: 30, chemicalCost: 0.89 },
        { key: 'menuPackageFour', name: 'Menu Package Four', price: 15, percentCustomers: 30, chemicalCost: 0.89 },
    ];

    const watchedValues: any = useWatch({ control });

    const packages = useMemo(() => {
        return packageNames.map(({ key, name }) => ({
            name,
            price: watchedValues?.[key]?.price ?? 0,
            percentCustomers: watchedValues?.[key]?.percentCustomers ?? 0,
            chemicalCost: watchedValues?.[key]?.chemicalCost ?? 0,
        }));
    }, [watchedValues]);

    useEffect(() => {
        setWashPackages(packages);
    }, [packages]);

    const renderTextField = (name: any, defaultValue: number) => (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field }) => <TextField fullWidth size="small" variant="outlined" sx={{ borderRadius: '10px' }} {...field} required />}
        />
    );

    const allFieldsFilled = packages.every(
        (pkg) =>
            pkg.price !== '' &&
            pkg.price !== null &&
            pkg.price !== undefined &&
            pkg.percentCustomers !== '' &&
            pkg.percentCustomers !== null &&
            pkg.percentCustomers !== undefined &&
            pkg.chemicalCost !== '' &&
            pkg.chemicalCost !== null &&
            pkg.chemicalCost !== undefined
    );

    return (
        <InputAccordion title="Menu Packages" completed={allFieldsFilled}>
            <Grid container>
                <Grid container spacing={2} sx={{ marginBottom: 2, fontWeight: 'bold' }}>
                    <Grid item xs={6}>
                        <Typography variant="body1" fontWeight="600" color="#3A4F5F">
                            Packages
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="body1" fontWeight="600" color="#3A4F5F">
                            $ Price
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="body1" fontWeight="600" color="#3A4F5F">
                            % Customer
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="body1" fontWeight="600" color="#3A4F5F">
                            Chemical Cost
                        </Typography>
                    </Grid>
                </Grid>
                {packages.map((pkg, index) => (
                    <Grid container spacing={2} key={index} alignItems="center" sx={{ marginBottom: 2 }}>
                        <Grid item xs={6}>
                            <Typography>{pkg.name}</Typography>
                        </Grid>
                        <Grid item xs={2} md={2}>
                            {renderTextField(`${packageNames[index].key}.price`, packageNames[index].price)}
                        </Grid>
                        <Grid item xs={2} md={2}>
                            {renderTextField(`${packageNames[index].key}.percentCustomers`, packageNames[index].percentCustomers)}
                        </Grid>
                        <Grid item xs={2} md={2}>
                            {renderTextField(`${packageNames[index].key}.chemicalCost`, packageNames[index].chemicalCost)}
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </InputAccordion>
    );
}

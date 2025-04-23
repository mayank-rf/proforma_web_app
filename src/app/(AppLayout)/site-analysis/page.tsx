'use client';

import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import Stack from '@mui/system/Stack';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import startAnalysis from './actions';
import CarWashWorkingHours from './InputComponents/CarWashWorkingHours';
import CustomerInformation from './InputComponents/CustomerInformation';
import FinancialInput from './InputComponents/FinancialInput';
import LaborInformation from './InputComponents/LaborInformation';
import SiteFactors from './InputComponents/SiteFactors';
import WashPackages from './InputComponents/WashPackages';
import ProformaInputs from './proforma-inputs.type';

const defaultValues: ProformaInputs = {
    customerName: '',
    companyName: '',
    siteAddress: {
        address: '1273 Lexington Road',
        city: 'Georgetown',
        state: 'KY',
        zip_code: '40324',
    },
    //
    weeklyHoursOfOperation: null,
    averageDailyWashHours: null,
    //
    laborHours: {
        manager: null,
        assistantManager: null,
        attendants: null,
    },
    hourlyWages: {
        manager: null,
        assistantManager: null,
        attendants: null,
    },
    burdenRate: {
        manager: null,
        assistantManager: null,
        attendants: null,
    },
    count: {
        // manager: null,
        // assistantManager: null,
        attendants: null,
    },
    //
    basicPackage: {
        price: 0,
        customerPercent: 0,
        chemicalCost: 0,
    },
    menuPackageOne: {
        price: 0,
        customerPercent: 0,
        chemicalCost: 0,
    },
    menuPackageTwo: {
        price: 0,
        customerPercent: 0,
        chemicalCost: 0,
    },
    menuPackageThree: {
        price: 0,
        customerPercent: 0,
        chemicalCost: 0,
    },
    menuPackageFour: {
        price: 0,
        customerPercent: 0,
        chemicalCost: 0,
    },
    //
    siteFactors: {
        areaProfile: '',
        nearestCompetition: '',
        typeOfSite: '',
        siteAccessibility: '',
        visibility: '',
        entranceStackUpArea: '',
        numberOfFreeVacuumSlots: '',
        numberOfPayStations: '',
        trafficSpeed: '',
    },
    //
    acquisitionBudget: {
        building: {
            totalInvestment: 0,
            percentOwner: 0,
            percentBank: 0,
        },
        equipment: {
            totalInvestment: 0,
            percentOwner: 0,
            percentBank: 0,
        },
        land: {
            totalInvestment: 0,
            percentOwner: 0,
            percentBank: 0,
        },
        site: {
            totalInvestment: 0,
            percentOwner: 0,
            percentBank: 0,
        },
        soft_costs: {
            totalInvestment: 0,
            percentOwner: 0,
            percentBank: 0,
        },
    },
    //
    bankDebtAllocation: {
        building: {
            bankDebtTotal: 0,
            interestRate: 0,
            termOfLoan: 0,
        },
        equipment: {
            bankDebtTotal: 0,
            interestRate: 0,
            termOfLoan: 0,
        },
        land: {
            bankDebtTotal: 0,
            interestRate: 0,
            termOfLoan: 0,
        },
        site: {
            bankDebtTotal: 0,
            interestRate: 0,
            termOfLoan: 0,
        },
        soft_costs: {
            bankDebtTotal: 0,
            interestRate: 0,
            termOfLoan: 0,
        },
    },
    operationalExpenses: {
        advertisements: {
            percentOfSales: 0,
            breakEven: 0,
            year1: 0,
        },
        chemicalSupplies: {
            percentOfSales: 0,
            breakEven: 0,
            year1: 0,
        },
        customerClaims: {
            percentOfSales: 0,
            breakEven: 0,
            year1: 0,
        },
        insurance: {
            percentOfSales: 0,
            breakEven: 0,
            year1: 0,
        },
        labor: {
            percentOfSales: 0,
            breakEven: 0,
            year1: 0,
        },
        legalFees: {
            percentOfSales: 0,
            breakEven: 0,
            year1: 0,
        },
        licenses: {
            percentOfSales: 0,
            breakEven: 0,
            year1: 0,
        },
        miscellaneous: {
            percentOfSales: 0,
            breakEven: 0,
            year1: 0,
        },
        repairs: {
            percentOfSales: 0,
            breakEven: 0,
            year1: 0,
        },
        realEstateTaxes: {
            percentOfSales: 0,
            breakEven: 0,
            year1: 0,
        },
        refuseCollection: {
            percentOfSales: 0,
            breakEven: 0,
            year1: 0,
        },
        utilities: {
            percentOfSales: 0,
            breakEven: 0,
            year1: 0,
        },
    },
};

export default function SiteAnalysisPage() {
    const router = useRouter();
    const [showAnalysis, setShowAnalysis] = useState(false);
    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors, isValid },
    } = useForm<ProformaInputs>({
        defaultValues: defaultValues,
        mode: 'onChange',
    });
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        setValue('basicPackage', { price: 10, customerPercent: 45, chemicalCost: 0.48 });
        setValue('menuPackageOne', { price: 15, customerPercent: 30, chemicalCost: 0.89 });
        setValue('menuPackageTwo', { price: 22, customerPercent: 15, chemicalCost: 1.05 });
        setValue('menuPackageThree', { price: 27, customerPercent: 10, chemicalCost: 1.09 });
        setValue('menuPackageFour', { price: 30, customerPercent: 5, chemicalCost: 1.13 });
        setValue('siteFactors', {
            areaProfile: '0.15',
            nearestCompetition: '0.125',
            typeOfSite: '0.125',
            siteAccessibility: '0.15',
            visibility: '0.10',
            entranceStackUpArea: '0.15',
            numberOfFreeVacuumSlots: '0.10',
            numberOfPayStations: '0.10',
            trafficSpeed: '0.10',
        });

        const defaultAcquisitionBudget = {
            building: {
                totalInvestment: 360000,
                percentOwner: 20,
                percentBank: 80,
            },
            equipment: {
                totalInvestment: 725000,
                percentOwner: 20,
                percentBank: 80,
            },
            land: {
                totalInvestment: 7475000,
                percentOwner: 20,
                percentBank: 80,
            },
            site: {
                totalInvestment: 45000,
                percentOwner: 20,
                percentBank: 80,
            },
            soft_costs: {
                totalInvestment: 50000,
                percentOwner: 20,
                percentBank: 80,
            },
        };

        setValue('acquisitionBudget', defaultAcquisitionBudget);

        setValue('bankDebtAllocation', {
            building: {
                bankDebtTotal: defaultAcquisitionBudget.building.totalInvestment * (defaultAcquisitionBudget.building.percentBank / 100),
                interestRate: 9,
                termOfLoan: 300,
            },
            equipment: {
                bankDebtTotal: defaultAcquisitionBudget.equipment.totalInvestment * (defaultAcquisitionBudget.equipment.percentBank / 100),
                interestRate: 9,
                termOfLoan: 300,
            },
            land: {
                bankDebtTotal: defaultAcquisitionBudget.land.totalInvestment * (defaultAcquisitionBudget.land.percentBank / 100),
                interestRate: 9,
                termOfLoan: 300,
            },
            site: {
                bankDebtTotal: defaultAcquisitionBudget.site.totalInvestment * (defaultAcquisitionBudget.site.percentBank / 100),
                interestRate: 9,
                termOfLoan: 300,
            },
            soft_costs: {
                bankDebtTotal: defaultAcquisitionBudget.soft_costs.totalInvestment * (defaultAcquisitionBudget.soft_costs.percentBank / 100),
                interestRate: 9,
                termOfLoan: 300,
            },
        });
        setValue('operationalExpenses', {
            advertisements: { percentOfSales: 3.0, breakEven: 2505.0, year1: 1200.36 },
            chemicalSupplies: { percentOfSales: 4.6, breakEven: 3836.99, year1: 1880.95 },
            customerClaims: { percentOfSales: 1.0, breakEven: 835.0, year1: 400.12 },
            insurance: { percentOfSales: 1.2, breakEven: 1000.0, year1: 1000.0 },
            labor: { percentOfSales: 29.6, breakEven: 25298.0, year1: 25298.0 },
            legalFees: { percentOfSales: 1.0, breakEven: 835.0, year1: 400.12 },
            licenses: { percentOfSales: 1.0, breakEven: 835.0, year1: 400.12 },
            miscellaneous: { percentOfSales: 1.5, breakEven: 1252.5, year1: 600.18 },
            repairs: { percentOfSales: 1.0, breakEven: 835.0, year1: 400.12 },
            realEstateTaxes: { percentOfSales: 2.3, breakEven: 2000.0, year1: 2000.0 },
            refuseCollection: { percentOfSales: 1.0, breakEven: 835.0, year1: 400.12 },
            utilities: { percentOfSales: 9.0, breakEven: 7515.01, year1: 3601.08 },
        });
    }, []);

    const handleCloseAnalysis = () => {
        setShowAnalysis(false);
    };

    function onSubmit(data: ProformaInputs) {
        console.log({ data });

        window.localStorage.setItem('proformaData', JSON.stringify(data));

        startTransition(async () => {
            const analysisResponse = await startAnalysis(data);
            console.log({ analysisResponse });
            alert(JSON.stringify(analysisResponse));
            setShowAnalysis(true);
        });

        router.push('/pro-forma');
    }

    const formValues = useWatch({ control });

    const isObjectFullyFilled = (obj: any): boolean => {
        if (obj === null || obj === undefined || obj === '') return false;
        if (typeof obj === 'object') {
            for (const key in obj) {
                if (!isObjectFullyFilled(obj[key])) return false;
            }
        }
        return true;
    };
    // Check if all values in the object are filled
    const allFilled = isObjectFullyFilled(formValues) && isValid;

    return (
        <Box sx={{ p: 4, maxWidth: 1200, margin: 'auto' }}>
            {/* Input Section */}
            <Card sx={{ mb: 4, boxShadow: '0 0 6px rgba(0, 0, 0, 0.25)', borderRadius: '8px' }}>
                <CardContent>
                    <Typography variant="h6" fontWeight="600" align="left" sx={{ mb: 2, color: '#3A4F5F' }}>
                        Provide the following details to generate Pro Forma:
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack sx={{ mb: 2 }} spacing={2}>
                            {/* Customer Information */}
                            <CustomerInformation control={control} isValid={isValid} />

                            {/* Car Wash Working Hours */}
                            <CarWashWorkingHours control={control} isValid={isValid} />

                            {/* Labor Information */}
                            <LaborInformation control={control} isValid={isValid} />

                            {/* Wash Packages */}
                            <WashPackages control={control} isValid={isValid} />

                            {/* Site Specific Factors */}
                            <SiteFactors control={control} isValid={isValid} />

                            {/* Financial Input */}
                            <FinancialInput control={control} isValid={isValid} />
                        </Stack>

                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button
                                variant="contained"
                                sx={{
                                    color: 'white',
                                    textTransform: 'capitalize',
                                    backgroundColor: 'secondary.main',
                                    borderRadius: '8px',
                                    fontWeight: '600',
                                }}
                                type="submit"
                                disabled={!allFilled}
                                loading={isPending}
                                loadingPosition="start"
                            >
                                {isPending ? 'Analysing...' : 'Start Analysis'}
                            </Button>
                        </Box>
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
}

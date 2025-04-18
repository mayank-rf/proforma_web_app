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
        address: '',
        city: '',
        state: '',
        zip_code: '',
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
        manager: null,
        assistantManager: null,
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
};

export default function SiteAnalysisPage() {
    const router = useRouter();
    const [showAnalysis, setShowAnalysis] = useState(false);
    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<ProformaInputs>({
        defaultValues: defaultValues,
    });
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        setValue('basicPackage', { price: 10, customerPercent: 45, chemicalCost: 0.48 });
        setValue('menuPackageOne', { price: 15, customerPercent: 30, chemicalCost: 0.89 });
        setValue('menuPackageTwo', { price: 22, customerPercent: 15, chemicalCost: 1.05 });
        setValue('menuPackageThree', { price: 27, customerPercent: 10, chemicalCost: 1.09 });
        setValue('menuPackageFour', { price: 30, customerPercent: 5, chemicalCost: 1.13 });

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
                interestRate: 0,
                termOfLoan: 0,
            },
            equipment: {
                bankDebtTotal: defaultAcquisitionBudget.equipment.totalInvestment * (defaultAcquisitionBudget.equipment.percentBank / 100),
                interestRate: 0,
                termOfLoan: 0,
            },
            land: {
                bankDebtTotal: defaultAcquisitionBudget.land.totalInvestment * (defaultAcquisitionBudget.land.percentBank / 100),
                interestRate: 0,
                termOfLoan: 0,
            },
            site: {
                bankDebtTotal: defaultAcquisitionBudget.site.totalInvestment * (defaultAcquisitionBudget.site.percentBank / 100),
                interestRate: 0,
                termOfLoan: 0,
            },
            soft_costs: {
                bankDebtTotal: defaultAcquisitionBudget.soft_costs.totalInvestment * (defaultAcquisitionBudget.soft_costs.percentBank / 100),
                interestRate: 0,
                termOfLoan: 0,
            },
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
            setShowAnalysis(true);
        });

        router.push('/pro-forma');
    }

    const formValues = useWatch({ control });
    const allFilled = Object.values(formValues).every((val) => val !== undefined && val !== null && val !== '');

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
                            <CustomerInformation control={control} />

                            {/* Car Wash Working Hours */}
                            <CarWashWorkingHours control={control} />

                            {/* Labor Information */}
                            <LaborInformation control={control} />

                            {/* Wash Packages */}
                            <WashPackages />

                            {/* Site Specific Factors */}
                            <SiteFactors control={control} />

                            {/* Financial Input */}
                            <FinancialInput control={control} />
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

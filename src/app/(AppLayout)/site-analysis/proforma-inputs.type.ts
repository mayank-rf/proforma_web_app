type ProformaInputs = {
    customerName: string;
    companyName: string;
    siteAddress: {
        address: string;
        city: string;
        state: string;
        zip_code: string;
    };
    //
    weeklyHoursOfOperation: number | null;
    averageDailyWashHours: number | null;
    //
    laborHours: {
        manager: number | null;
        assistantManager: number | null;
        attendants: number | null;
    };
    hourlyWages: {
        manager: number | null;
        assistantManager: number | null;
        attendants: number | null;
    };
    burdenRate: {
        manager: number | null;
        assistantManager: number | null;
        attendants: number | null;
    };
    count: {
        manager: number | null;
        assistantManager: number | null;
        attendants: number | null;
    };
    //
    basicPackage: {
        price: number;
        customerPercent: number;
        chemicalCost: number;
    };
    menuPackageOne: {
        price: number;
        customerPercent: number;
        chemicalCost: number;
    };
    menuPackageTwo: {
        price: number;
        customerPercent: number;
        chemicalCost: number;
    };
    menuPackageThree: {
        price: number;
        customerPercent: number;
        chemicalCost: number;
    };
    menuPackageFour: {
        price: number;
        customerPercent: number;
        chemicalCost: number;
    };
    //
    siteFactors: {
        areaProfile: string;
        nearestCompetition: string;
        typeOfSite: string;
        siteAccessibility: string;
        entranceStackUpArea: string;
        numberOfFreeVacuumSlots: string;
        numberOfPayStations: string;
        visibility: string;
        trafficSpeed: string;
    };
    //
    acquisitionBudget: {
        building: {
            totalInvestment: number;
            percentOwner: number;
            percentBank: number;
        };
        equipment: {
            totalInvestment: number;
            percentOwner: number;
            percentBank: number;
        };
        land: {
            totalInvestment: number;
            percentOwner: number;
            percentBank: number;
        };
        site: {
            totalInvestment: number;
            percentOwner: number;
            percentBank: number;
        };
        soft_costs: {
            totalInvestment: number;
            percentOwner: number;
            percentBank: number;
        };
    };
    //
    bankDebtAllocation: {
        building: {
            bankDebtTotal: number;
            interestRate: number;
            termOfLoan: number;
        };
        equipment: {
            bankDebtTotal: number;
            interestRate: number;
            termOfLoan: number;
        };
        land: {
            bankDebtTotal: number;
            interestRate: number;
            termOfLoan: number;
        };
        site: {
            bankDebtTotal: number;
            interestRate: number;
            termOfLoan: number;
        };
        soft_costs: {
            bankDebtTotal: number;
            interestRate: number;
            termOfLoan: number;
        };
    };
        operationalExpenses: {
            advertisements: {
              percentOfSales: number;
              breakEven: number;
              year1: number;
            };
            chemicalSupplies: {
              percentOfSales: number;
              breakEven: number;
              year1: number;
            };
            customerClaims: {
              percentOfSales: number;
              breakEven: number;
              year1: number;
            };
            insurance: {
              percentOfSales: number;
              breakEven: number;
              year1: number;
            };
            labor: {
              percentOfSales: number;
              breakEven: number;
              year1: number;
            };
            legalFees: {
              percentOfSales: number;
              breakEven: number;
              year1: number;
            };
            licenses: {
              percentOfSales: number;
              breakEven: number;
              year1: number;
            };
            miscellaneous: {
              percentOfSales: number;
              breakEven: number;
              year1: number;
            };
            repairs: {
              percentOfSales: number;
              breakEven: number;
              year1: number;
            };
            realEstateTaxes: {
              percentOfSales: number;
              breakEven: number;
              year1: number;
            };
            refuseCollection: {
              percentOfSales: number;
              breakEven: number;
              year1: number;
            };
            utilities: {
              percentOfSales: number;
              breakEven: number;
              year1: number;
          };
    };
};

export default ProformaInputs;

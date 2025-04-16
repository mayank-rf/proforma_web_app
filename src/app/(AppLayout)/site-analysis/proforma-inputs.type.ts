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
    basicPackage: number;
    menuPackageOne: number;
    menuPackageTwo: number;
    menuPackageThree: number;
    menuPackageFour: number;
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
};

export default ProformaInputs;

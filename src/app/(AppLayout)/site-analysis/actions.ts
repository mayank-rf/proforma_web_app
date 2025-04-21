'use server';

import ProformaInputs from './proforma-inputs.type';

const trafficData = [
    { year: 'Year 1', totalVolume: 2000, memberVolume: 500 },
    { year: 'Year 2', totalVolume: 3000, memberVolume: 1200 },
    { year: 'Year 3', totalVolume: 5000, memberVolume: 2500 },
    { year: 'Year 4', totalVolume: 7000, memberVolume: 4000 },
    { year: 'Year 5', totalVolume: 9000, memberVolume: 6000 },
];

const chartData = trafficData.map(({ year, totalVolume, memberVolume }) => ({
    year,
    memberVolume,
    nonMemberVolume: totalVolume - memberVolume,
}));

const profitForecast = [
    { year: 'Year 1', revenue: 15000, expense: 6000 },
    { year: 'Year 2', revenue: 18000, expense: 8000 },
    { year: 'Year 3', revenue: 22000, expense: 10000 },
    { year: 'Year 4', revenue: 26000, expense: 11000 },
    { year: 'Year 5', revenue: 30000, expense: 12000 },
];

const years = profitForecast.map((d) => d.year);

const revenueData = profitForecast.map((d) => d.revenue);
const expenseData = profitForecast.map((d) => d.expense);
const profitData = profitForecast.map((d) => d.revenue - d.expense);

async function startAnalysis(proformaInput: ProformaInputs) {
    const helloWorldResponse = await fetch('http://10.53.224.4:8080/api/v1/hello', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    await new Promise((resolve) => setTimeout(resolve, 7000));

    const response = helloWorldResponse;

    return {
        success: true,
        message: 'Analysis completed successfully',
        data: response,
    };
}

export default startAnalysis;

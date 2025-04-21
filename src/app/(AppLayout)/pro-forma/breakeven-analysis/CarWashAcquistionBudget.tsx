'use client';

import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';

const investmentData = [
    { item: 'Building', total: 1500000, equityPercent: 20, equity: 300000, debtPercent: 80, debt: 1200000, interestRate: 9, term: 300 },
    { item: 'Equipment', total: 1500000, equityPercent: 20, equity: 300000, debtPercent: 80, debt: 1200000, interestRate: 9, term: 300 },
    { item: 'Land', total: 800000, equityPercent: 20, equity: 160000, debtPercent: 80, debt: 640000, interestRate: 9, term: 300 },
    { item: 'Site', total: 250000, equityPercent: 20, equity: 50000, debtPercent: 80, debt: 200000, interestRate: 9, term: 300 },
    { item: 'Soft Costs', total: 250000, equityPercent: 20, equity: 50000, debtPercent: 80, debt: 200000, interestRate: 9, term: 300 },
];

export default function CarWashAcquisitionBudget() {
    const [globalCarAquistion, setGlobalCarAquistion] = useState<Record<string, {
        item: string;
        total: number;
        equityPercent: number;
        debtPercent: number;
        interestRate: number;
        term: number;
    }>>({});

    useEffect(() => {
        const data = JSON.parse(window.localStorage.getItem('proformaData'));
        if (data.acquisitionBudget && data.bankDebtAllocation) {
            const { acquisitionBudget, bankDebtAllocation } = data;
            const mergedData = Object.keys(acquisitionBudget).reduce((acc, key) => {
                const budget = acquisitionBudget[key];
                const debt = bankDebtAllocation[key];
                acc[key] = {
                    item: key,
                    total: budget.totalInvestment,
                    equityPercent: budget.percentOwner,
                    debtPercent: budget.percentBank,
                    interestRate: debt.interestRate,
                    term: debt.termOfLoan,
                };
                return acc;
            }, {});

            setGlobalCarAquistion(mergedData);
        }
    }, []);

    const total = investmentData.reduce(
        (acc, row) => {
            acc.total += row.total;
            acc.equity += row.equity;
            acc.debt += row.debt;
            return acc;
        },
        { total: 0, equity: 0, debt: 0 }
    );

    const formatCurrency = (value: number) => `$${value.toLocaleString('en-US', { minimumFractionDigits: 0 })}`;

    return (
        <Box width={'100%'}>
            <TableContainer sx={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)', borderRadius: '4px' }}>
                <Table size="small">
                    <TableHead sx={{ backgroundColor: '#f8f9fa' }}>
                        <TableRow>
                            <TableCell>
                                <strong>Investment Item</strong>
                            </TableCell>
                            <TableCell align="right">
                                <strong>Total</strong>
                            </TableCell>
                            <TableCell align="right">
                                <strong>% Equity</strong>
                            </TableCell>
                            <TableCell align="right">
                                <strong>% Debt</strong>
                            </TableCell>
                            <TableCell align="right">
                                <strong>Interest Rate</strong>
                            </TableCell>
                            <TableCell align="right">
                                <strong>Term (Months)</strong>
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {Object.entries(globalCarAquistion).map(([_, row], idx) => (
                            <TableRow key={idx} hover>
                                <TableCell>{row.item}</TableCell>
                                <TableCell align="right">{formatCurrency(row.total)}</TableCell>
                                <TableCell align="right">{row.equityPercent}%</TableCell>
                                <TableCell align="right">{row.debtPercent}%</TableCell>
                                <TableCell align="right">{row.interestRate}%</TableCell>
                                <TableCell align="right">{row.term}</TableCell>
                            </TableRow>
                        ))}

                        {/* Totals Row */}
                        <TableRow sx={{ backgroundColor: '#eef2f5' }}>
                            <TableCell>
                                <strong>Project Cost</strong>
                            </TableCell>
                            <TableCell align="right">
                                <strong>{formatCurrency(total.total)}</strong>
                            </TableCell>
                            <TableCell align="right">
                                <div style={{ fontSize: '0.85rem', color: '#555' }}>
                                    <strong>{formatCurrency(total.equity)}</strong>
                                </div>
                            </TableCell>
                            <TableCell align="right">
                                <div style={{ fontSize: '0.85rem', color: '#555' }}>
                                    <strong>{formatCurrency(total.debt)}</strong>
                                </div>
                            </TableCell>
                            <TableCell />
                            <TableCell />
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

'use client';

import React, { useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
    Button,
    Stack,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const radiusColumns = ['1 mile', '3 miles', '5 miles'];

const data = [
    {
        category: 'Population',
        rows: [
            ['Total Population 2024', ['5,585', '29,889', '45,688']],
            ['Growth 2020–2024', ['15.36%', '7.08%', '8.58%']],
            ['Growth 2024–2029', ['11.08%', '10.43%', '11.43%']],
            ['Average Household Size', ['2.48', '2.51', '2.57']],
            ['Average Age', ['36.6', '36.9', '37.1']],
        ],
    },
    {
        category: 'Labor',
        rows: [
            ['Working Population (25–65)', ['2,903 (52.0%)', '15,158 (50.7%)', '23,660 (51.8%)']],
            ['Labor Force', ['3,101 (72.1%)', '15,814 (67.4%)', '24,534 (68.3%)']],
            ['Unemployment Rate', ['4.7%', '4.2%', '3.7%']],
        ],
    },
    {
        category: 'Household Income',
        rows: [
            ['2024 HH Income $35K+', ['1,793 (79.8%)', '9,028 (78.6%)', '14,151 (82.4%)']],
            ['2024 HH Income $50K+', ['1,586 (70.6%)', '7,673 (66.8%)', '12,339 (71.9%)']],
            ['2029 HH Income $35K+', ['2,042 (81.5%)', '10,276 (80.7%)', '16,170 (84.3%)']],
            ['2029 HH Income $50K+', ['1,821 (72.7%)', '9,062 (71.2%)', '14,499 (75.6%)']],
            ['2024 Avg HH Income', ['$84,250', '$88,310', '$98,715']],
            ['2029 Avg HH Income Growth', ['$8,316 (9.9%)', '$8,744 (9.9%)', '$10,070 (10.2%)']],
            ['2024 Avg Disposable Income', ['$69,792', '$70,432', '$77,818']],
        ],
    },
    {
        category: 'Housing',
        rows: [
            ['Renter-Occupied Units', ['742 (31.4%)', '4,366 (35.5%)', '5,725 (31.3%)']],
            ['Average Housing Unit Value', ['$273,931', '$336,446', '$391,479']],
        ],
    },
    {
        category: 'Vehicles',
        rows: [
            ['Total Vehicles in Market', ['4,246', '21,184', '33,254']],
            ['Avg Vehicles per Household', ['1.89', '1.84', '1.94']],
        ],
    },
];

const KeyDemographicsAccordion = () => {
    // Track expanded state for each section
    const [expandedState, setExpandedState] = useState(() => {
        const initial: Record<string, boolean> = {};
        data.forEach((section) => {
            initial[section.category] = false;
        });
        return initial;
    });

    const isAllExpanded = Object.values(expandedState).every(Boolean);

    const toggleAll = () => {
        const newState: Record<string, boolean> = {};
        data.forEach((section) => {
            newState[section.category] = !isAllExpanded;
        });
        setExpandedState(newState);
    };

    const toggleOne = (category: string) => {
        setExpandedState((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    return (
        <Box sx={{ my: 4 }}>
            <Stack direction="row" justifyContent="space-between" mb={2} py={1} alignItems={'flex-end'}>
                <Typography variant="h6" gutterBottom sx={{ color: '#3A4F5F' }}>
                    Key Demographics
                </Typography>
                <Button variant="contained" size="small" onClick={toggleAll}>
                    {isAllExpanded ? 'Collapse All' : 'Expand All'}
                </Button>
            </Stack>

            <Stack spacing={1}>
                {data.map((section) => (
                    <Accordion
                        key={section.category}
                        expanded={expandedState[section.category]}
                        onChange={() => toggleOne(section.category)}
                        sx={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.4)', mb: 2 }}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography fontWeight="bold" color="primary.main">
                                {section.category}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TableContainer component={Paper}>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Metric</TableCell>
                                            {radiusColumns.map((radius) => (
                                                <TableCell key={radius} align="center">
                                                    {radius}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {section.rows.map(([label, values], i) => (
                                            <TableRow key={i}>
                                                <TableCell>{label}</TableCell>
                                                {values.map((value, j) => (
                                                    <TableCell key={j} align="center">
                                                        {value}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Stack>
        </Box>
    );
};

export default KeyDemographicsAccordion;

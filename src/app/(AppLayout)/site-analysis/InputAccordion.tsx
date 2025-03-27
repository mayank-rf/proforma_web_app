'use client'

import { Accordion, AccordionDetails, AccordionSummary, Grid, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function InputAccordion({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <Accordion sx={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.25)', borderRadius: '8px', border: 'none' }} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon color='primary' />}>
                <Typography variant="body1" fontWeight='600' fontSize={20} color='#3A4F5F'>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>
    )
}

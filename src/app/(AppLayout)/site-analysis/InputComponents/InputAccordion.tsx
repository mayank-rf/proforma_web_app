'use client'

import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React, { useState } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function CustomExpandIcon({ expand, completed }: { expand: boolean, completed: boolean }) {
    return completed ? (
        <CheckCircleIcon color="success" />
    ) : (
        <ExpandMoreIcon color="primary" />
    )
}

export default function InputAccordion({ title, completed = false, children }: { title: string, completed: boolean, children: React.ReactNode }) {
    const [expand, setExpand] = useState(true)

    return (
        <Accordion sx={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.25)', borderRadius: '8px', border: 'none' }} onChange={() => { setExpand(!expand) }} expanded={expand}>
            <AccordionSummary
                expandIcon={<CustomExpandIcon expand={expand} completed={completed} />}
                sx={expand && completed ? {
                    '& .MuiAccordionSummary-expandIconWrapper': {
                        transform: 'none !important',
                    }
                } : {}
                }
            >
                <Typography variant="body1" fontWeight='600' fontSize={16} color='#3A4F5F'>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>
    )
}

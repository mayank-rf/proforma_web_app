import { Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const competitorData = [
    {
        name: 'Zip Car Wash',
        type: 'Express',
        mup: 'Yes',
        website: 'https://www.zipcarwash.com',
        distance: 4.47,
    },
    {
        name: 'VIP Car Wash & Detail',
        type: 'Flex/Detail',
        mup: 'Yes',
        website: 'https://www.facebook.com/VIPCarWash',
        distance: 3.81,
    },
    {
        name: 'Zip Car Wash',
        type: 'Express',
        mup: 'Yes',
        website: 'https://www.zipcarwash.com',
        distance: 9.63,
    },
    {
        name: 'Zip Car Wash',
        type: 'Express',
        mup: 'Yes',
        website: 'https://www.zipcarwash.com',
        distance: 9.74,
    },
    {
        name: 'Zip Car Wash',
        type: 'Express',
        mup: 'Yes',
        website: 'https://www.zipcarwash.com',
        distance: 10.38,
    },
];

const CompetitorTable = () => (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Competitor Name</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>M.U.P*</TableCell>
                    <TableCell>Website</TableCell>
                    <TableCell>Distance (miles)</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {competitorData.map((row, index) => (
                    <TableRow key={index}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.type}</TableCell>
                        <TableCell>{row.mup}</TableCell>
                        <TableCell>
                            <Link href={row.website} target="_blank" rel="noopener">
                                {row.website}
                            </Link>
                        </TableCell>
                        <TableCell>{row.distance}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default CompetitorTable;

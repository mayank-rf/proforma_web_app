import { Box, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import useStore from '../../../../store/useStore';

const packageData = [
    {
        name: 'Basic Package',
        price: '$10',
        percentCustomers: '45%',
        chemicalCost: '$0.48 / gal',
    },
    {
        name: 'Menu Package #1',
        price: '$15',
        percentCustomers: '30%',
        chemicalCost: '$0.89 / gal',
    },
    {
        name: 'Menu Package #2',
        price: '$20',
        percentCustomers: '15%',
        chemicalCost: '$1.05 / gal',
    },
    {
        name: 'Menu Package #3',
        price: '$25',
        percentCustomers: '10%',
        chemicalCost: '$1.09 / gal',
    },
    {
        name: 'Menu Package #4',
        price: null,
        percentCustomers: null,
        chemicalCost: null,
    },
];

export default function WashPackageSummary() {
    const { washPackages } = useStore();

    return (
        <Card sx={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.0)' }}>
            <CardContent>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell align="center" sx={{ border: 'none' }}>
                                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={1}>
                                        {/* <AttachMoneyIcon fontSize="large" /> */}
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.5 14.6667C8.5 15.9553 9.54467 17 10.8333 17H13C14.3807 17 15.5 15.8807 15.5 14.5C15.5 13.1193 14.3807 12 13 12H11C9.61929 12 8.5 10.8807 8.5 9.5C8.5 8.11929 9.61929 7 11 7H13.1667C14.4553 7 15.5 8.04467 15.5 9.33333M12 5.5V7M12 17V18.5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                                stroke="#23679D"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                        <Typography variant="subtitle2" fontSize={24}>
                                            Price
                                        </Typography>
                                    </Box>
                                </TableCell>

                                <TableCell align="center" sx={{ border: 'none' }}>
                                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={1}>
                                        {/* <LocalCarWashIcon fontSize="large" /> */}
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15.5 13C18.5376 13 21 10.5376 21 7.5C21 4.46243 18.5376 2 15.5 2C12.4624 2 10 4.46243 10 7.5C10 10.5376 12.4624 13 15.5 13Z"
                                                stroke="#23679D"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M6.5 22C8.98528 22 11 19.9853 11 17.5C11 15.0147 8.98528 13 6.5 13C4.01472 13 2 15.0147 2 17.5C2 19.9853 4.01472 22 6.5 22Z"
                                                stroke="#3A4F5F"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M5 10C6.10457 10 7 9.10457 7 8C7 6.89543 6.10457 6 5 6C3.89543 6 3 6.89543 3 8C3 9.10457 3.89543 10 5 10Z"
                                                stroke="#3A4F5F"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M17 22C18.6569 22 20 20.6569 20 19C20 17.3431 18.6569 16 17 16C15.3431 16 14 17.3431 14 19C14 20.6569 15.3431 22 17 22Z"
                                                stroke="#3A4F5F"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>

                                        <Typography variant="subtitle2" fontSize={24}>
                                            Chemical Cost
                                        </Typography>
                                    </Box>
                                </TableCell>

                                <TableCell align="center" sx={{ border: 'none' }}>
                                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={1}>
                                        {/* <SearchIcon fontSize="large" /> */}
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18 15.8369C19.4559 16.5683 20.7041 17.742 21.6152 19.2096C21.7957 19.5003 21.8859 19.6456 21.9171 19.8468C21.9805 20.2558 21.7008 20.7585 21.3199 20.9204C21.1325 21 20.9217 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9853 12 9.5 12C7.01472 12 5 9.98528 5 7.5C5 5.01472 7.01472 3 9.5 3C11.9853 3 14 5.01472 14 7.5ZM2.55923 18.9383C4.15353 16.5446 6.66937 15 9.5 15C12.3306 15 14.8465 16.5446 16.4408 18.9383C16.79 19.4628 16.9647 19.725 16.9446 20.0599C16.9289 20.3207 16.7579 20.64 16.5496 20.7976C16.2819 21 15.9138 21 15.1776 21H3.82235C3.08617 21 2.71808 21 2.45044 20.7976C2.24205 20.64 2.07109 20.3207 2.05543 20.0599C2.03533 19.725 2.20996 19.4628 2.55923 18.9383Z"
                                                stroke="#23679D"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>

                                        <Typography variant="subtitle2" fontSize={24}>
                                            % Customers
                                        </Typography>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {washPackages
                                .filter((pkg) => pkg.price !== null && pkg.percentCustomers !== null && pkg.chemicalCost !== null)
                                .map((pkg, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{
                                            '&:last-of-type td': { borderBottom: 'none' },
                                        }}
                                    >
                                        <TableCell
                                            sx={{
                                                fontWeight: 600,
                                                backgroundColor: 'primary.main',
                                                color: '#fff',
                                                width: 200,
                                                textAlign: 'center',
                                                fontSize: 20,
                                            }}
                                        >
                                            {pkg.name}
                                        </TableCell>
                                        <TableCell align="center" sx={{ width: 250, fontSize: 18 }}>
                                            ${pkg.price}
                                        </TableCell>
                                        <TableCell align="center" sx={{ width: 250, fontSize: 18 }}>
                                            {pkg.chemicalCost}%
                                        </TableCell>
                                        <TableCell align="center" sx={{ width: 250, fontSize: 18 }}>
                                            ${pkg.percentCustomers}
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
}

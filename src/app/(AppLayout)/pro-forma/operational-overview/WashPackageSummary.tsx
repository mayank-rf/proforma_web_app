import {
    Box,
    Card,
    CardContent,
    Grid,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TableHead,
    Paper,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SearchIcon from "@mui/icons-material/Search";
import LocalCarWashIcon from "@mui/icons-material/LocalCarWash";

const packageData = [
    {
        name: "Basic Package",
        price: "$10",
        percentCustomers: "45%",
        chemicalCost: "$0.48 / gal",
    },
    {
        name: "Menu Package #1",
        price: "$15",
        percentCustomers: "30%",
        chemicalCost: "$0.89 / gal",
    },
    {
        name: "Menu Package #2",
        price: "$20",
        percentCustomers: "15%",
        chemicalCost: "$1.05 / gal",
    },
    {
        name: "Menu Package #3",
        price: "$25",
        percentCustomers: "10%",
        chemicalCost: "$1.09 / gal",
    },
    {
        name: "Menu Package #4",
        price: "$[ ]",
        percentCustomers: "[ ]%",
        chemicalCost: "$[ ] / gal",
    },
];

export default function WashPackageSummary() {
    return (
        <Card sx={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.0)' }}>
            <CardContent>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell align="center">
                                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={1}>
                                        <AttachMoneyIcon fontSize="large" />
                                        <Typography variant="subtitle2" fontSize={24}>Price</Typography>
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={1}>
                                        <SearchIcon fontSize="large" />
                                        <Typography variant="subtitle2" fontSize={24}>% Customers</Typography>
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={1}>
                                        <LocalCarWashIcon fontSize="large" />
                                        <Typography variant="subtitle2" fontSize={24}>Chemical Cost</Typography>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {packageData.map((pkg, index) => (
                                <TableRow key={index}>
                                    <TableCell
                                        sx={{
                                            fontWeight: 600,
                                            backgroundColor: "primary.main",
                                            color: "#fff",
                                            width: 200,
                                            textAlign: 'center',
                                            fontSize: 20
                                        }}
                                    >
                                        {pkg.name}
                                    </TableCell>
                                    <TableCell align="center" sx={{ width: 250, fontSize: 18 }}>{pkg.price}</TableCell>
                                    <TableCell align="center" sx={{ width: 250, fontSize: 18 }}>{pkg.percentCustomers}</TableCell>
                                    <TableCell align="center" sx={{ width: 250, fontSize: 18 }}>{pkg.chemicalCost}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
}

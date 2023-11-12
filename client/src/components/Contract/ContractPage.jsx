import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

export default function ContractPage() {
    const { id } = useParams()
    return (
        <Box flex={1} bgcolor='white'>
            Contract of {id}

        </Box>
    )
}
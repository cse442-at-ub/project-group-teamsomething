import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ContractPage() {
    const { id } = useParams();

    return (
        <div className="flex flex-col items-top bg-white-500 text-white">
            <Button
                className="ml-2 p-2 bg-red text-white-500"
                component={Link}
                to="/partner-reviews"
            >
                Leave A Review For {id}?
            </Button>
        </div>
    );
}
import React, {useEffect, useState} from "react";
import Layout from "../components/Layout";
import Courses from "../components/Courses";
import Dashboard from "@/components/Dashboard";

const dashboard = () => {
    
    return (
        <Layout>
            <Dashboard />
        </Layout>
    );
};

export default dashboard;
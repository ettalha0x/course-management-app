import React, {useEffect, useState} from "react";
import Layout from "../components/Layout";
import Courses from "../components/Courses";

const courses = () => {
    const [courses, setCourses] = useState([]);
    const [filters, setFilters] = useState({
        search: '',
        page: 1,
    });

    const [lastPage, setLastPage] = useState(0);
    React.useEffect(() => {
        (
            async () => {
                const arr = [];
                if (filters.search) {
                    arr.push(`search=${filters.search}`);
                }
                if (filters.page) {
                    arr.push(`page=${filters.page}`);
                }

                const response = await fetch(`http://localhost:8000/api/courses?${arr.join('&')}`);
                const content = await response.json();
                setCourses(filters.page === 1 ? content.data : [...courses, ...content.data]);
                setLastPage(content.last_page);
            }
        )
        ();
    }, [filters]);

    return (
        <Layout>
            <Courses courses={courses} filters={filters} setFilters={setFilters} lastPage={lastPage} />
        </Layout>
    );
};

export default courses;
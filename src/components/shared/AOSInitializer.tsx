"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInitializer = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration
            once: false,    // Run animation only once
        });
    }, []);

    return null;
};

export default AOSInitializer;
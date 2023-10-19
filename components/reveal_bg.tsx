'use client'
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react";

const Reveal = () => {

    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        setShowBackground(true);
    }, []);

    return (
        <div
            className={cn(
                " bg-red-950 dark:bg-blue-800 fixed inset-0 transition-opacity duration-1000",
                !showBackground ? "opacity-100" : "opacity-0 hidden"
            )}
        />

    )
}
export default Reveal
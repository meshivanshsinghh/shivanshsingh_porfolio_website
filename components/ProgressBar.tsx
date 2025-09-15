import { useEffect } from "react";

interface ProgressBarProps {
    progress:number;
}
export default function ProgressBar({progress}: ProgressBarProps) {
    return (
        <div className="w-full max-w-md">
            <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all 
                duration-1000 ease-out" style={{width: `${progress}%`}}
                >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
    )
}
import { AlarmClock } from "lucide-react";

export default function Availibility() {
    return <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
            <div className="w-[5px] h-[5px] rounded-full bg-[#A1F452]"></div>
            <p className="text-white/40 text-xs">Available for work</p>
        </div>
        <div className="flex items-center gap-2">
            <AlarmClock className="text-white/40 w-4" />
            <span className="text-white/40 text-xs">7:15PM</span>
        </div>
    </div>
}
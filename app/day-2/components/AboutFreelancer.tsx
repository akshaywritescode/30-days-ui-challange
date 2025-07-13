import Image from "next/image";
import Avatar from "@/public/avatar.png"

export default function AboutFreelancer(){
    return <div className="flex items-center gap-3">
        <div className="w-12 h-12">
            <Image src={Avatar} alt="Avatar" className="w-full h-full" />
        </div>
        <div className="flex flex-col">
            <h1 className="text-white text-lg">Jay dwivedi</h1>
            <p className="text-white/40 text-xs">Product Designer</p>
        </div>
    </div>
}
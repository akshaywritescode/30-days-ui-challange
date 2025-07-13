import { Copy } from "lucide-react";

export default function ButtonRight() {
    return <button
        style={{
            boxShadow: `0px 2.2px 8px #000000, /* outer shadow */ inset 0 6px 6px -6px rgba(255, 255, 255, 0.4)  /* top inner white shine */`
        }}
        className="p-1 text-white bg-white/10 py-[0.7rem] w-1/2 rounded-xl text-sm flex items-center justify-center gap-2"
    >
        <Copy className="w-4" />
        Copy Email
    </button>
}
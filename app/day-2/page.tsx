import { Zap } from "lucide-react";
import ButtonLeft from "./components/ButtonLeft";
import ButtonRight from "./components/ButtonRight";
import AboutFreelancer from "./components/AboutFreelancer";
import Availibility from "./components/Availibility";

export default function FreelancerCard() {
    return <div className="w-screen h-screen bg-green-50 flex justify-center items-center">
        {/* card */}
        <div className="relative">
            {/* black card */}
            <div
                style={{
                    backgroundImage: `
      radial-gradient(
        circle at top right,
        rgba(255, 255, 255, 0.1),
        transparent 50%
      )
    `
                }}
                className="w-[400px] flex flex-col gap-6 bg-[#0A0A0A] absolute z-10 bottom-11 rounded-3xl p-5"
            >
                <div>
                    <Availibility />
                </div>
                <AboutFreelancer />
                <div className="w-full flex gap-3">
                    <ButtonLeft />
                    <ButtonRight />
                </div>
            </div>
            {/* green card  */}
            <div
                className="w-[400px] h-[160px] bg-[#A1F452] rounded-3xl relative"
                style={{ boxShadow: '0px 1.8px 3px #A1F452' }}
            >
                <span className="w-full flex flex-row items-center justify-center gap-1 absolute left-1/2 bottom-2 -translate-x-1/2 text-xs font-medium"><Zap className="w-4" />Currently High on Creativity</span>
            </div>
        </div>
    </div>
}
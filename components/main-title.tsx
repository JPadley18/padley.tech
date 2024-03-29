import { robotoMono } from "@/util/fonts"

export default function MainTitle({ text }: { text: string }) {
    return (
        <div className="w-screen text-center mt-2">
            <h1 className={`${robotoMono.className} text-5xl sm:text-7xl lg:text-8xl text-slate-900 [text-shadow:2px_2px_3px_#700000,-2px_-2px_3px_#000099] inline`}>[</h1>
            <h1 className={`${robotoMono.className} text-5xl sm:text-7xl lg:text-8xl text-slate-300 [text-shadow:2px_2px_3px_#700000,-2px_-2px_3px_#000099] inline`}>{text}</h1>
            <h1 className={`${robotoMono.className} text-5xl sm:text-7xl lg:text-8xl text-slate-900 [text-shadow:2px_2px_3px_#700000,-2px_-2px_3px_#000099] inline`}>]</h1>
        </div>
    )
}
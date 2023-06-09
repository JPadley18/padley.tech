import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html>
            <Head />
            <body className="h-screen bg-gradient-to-br from-slate-900 to-zinc-900">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
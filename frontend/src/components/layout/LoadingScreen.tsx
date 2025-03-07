import { useEffect, useState } from "react";

// Configurações que podem ser facilmente modificadas
const LOADING_CONFIG = {
    TYPING: {
        FULL_TEXT: "<Welcome />",
        INITIAL_INDEX: 0,
        INTERVAL_MS: 100,
        COMPLETION_DELAY_MS: 300
    },
    STYLES: {
        // Container principal
        WRAPPER: "fixed inset-0 z-50 flex flex-col items-center justify-center",

        // Texto animado
        TEXT_CONTAINER: "mb-4 text-4xl font-mono font-bold",
        BLINK_CURSOR: "animate-blink ml-1",

        // Barra de progresso
        PROGRESS_BAR_CONTAINER: "w-[200px] h-[2px] rounded relative overflow-hidden",
        PROGRESS_BAR: "w-[40%] h-full shadow-[0_0_15px_var(--color-primary)] animate-loading-bar"
    }
};

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
    const [text, setText] = useState("");
    const { FULL_TEXT, INITIAL_INDEX, INTERVAL_MS, COMPLETION_DELAY_MS } = LOADING_CONFIG.TYPING;
    const {
        WRAPPER,
        TEXT_CONTAINER,
        BLINK_CURSOR,
        PROGRESS_BAR_CONTAINER,
        PROGRESS_BAR
    } = LOADING_CONFIG.STYLES;

    useEffect(() => {
        let index = INITIAL_INDEX;
        const interval = setInterval(() => {
            setText(FULL_TEXT.substring(INITIAL_INDEX, index));
            index++;

            if (index > FULL_TEXT.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, COMPLETION_DELAY_MS);
            }
        }, INTERVAL_MS);
        // Cleanup para evitar vazamento de memória
        return () => clearInterval(interval);
    }, [onComplete, FULL_TEXT, INITIAL_INDEX, INTERVAL_MS, COMPLETION_DELAY_MS]);

    return (
        <div
            className={WRAPPER}
            style={{
                backgroundColor: "var(--color-bg)",
                color: "var(--color-text)",
                transition: "background-color 0.3s, color 0.3s"
            }}
        >
            {/* Container do texto animado com cursor piscante */}
            <div className={TEXT_CONTAINER}>
                {text}
                <span className={BLINK_CURSOR}>|</span>
            </div>
            {/* Barra de progresso com efeito de animação contínua */}
            <div
                className={PROGRESS_BAR_CONTAINER}
                style={{ backgroundColor: "var(--color-surface)" }}
            >
                <div className={PROGRESS_BAR} style={{ backgroundColor: "var(--color-primary)" }} />
            </div>
        </div>
    );
}

interface CenteredContainerProps {
    children: React.ReactNode;
}
// min-h-screen flex items-center justify-center px-4 md:px-8
// text-center w-full max-w-6xl
export function CenteredContainer({ children }: CenteredContainerProps) {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 md:px-8">
            <div className="text-center w-full max-w-6xl">
                {children}
            </div>
        </div>
    );
}
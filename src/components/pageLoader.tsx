

export default function PageLoader() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
        </div>
    );
}

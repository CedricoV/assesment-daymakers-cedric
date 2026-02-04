export default function AlertError({
    errors,
    title,
}: {
    errors: string[];
    title?: string;
}) {
    return (
        <div className="rounded-md border border-red-300 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
            <h3 className="mb-2 font-semibold text-red-800 dark:text-red-200">
                {title || 'Something went wrong.'}
            </h3>
            <ul className="list-inside list-disc text-sm text-red-700 dark:text-red-300">
                {Array.from(new Set(errors)).map((error, index) => (
                    <li key={index}>{error}</li>
                ))}
            </ul>
        </div>
    );
}

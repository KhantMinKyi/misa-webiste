import React from 'react'

function SecondarySubjectsTable() {
    const subjects = [
        { no: 1, name: "English Language A / \nEnglish Language B Pre Intermediate* / Intermediate*", periods: 10 },
        { no: 2, name: "Mathematics", periods: 6 },
        { no: 3, name: "Science", periods: 4 },
        { no: 4, name: "Geography", periods: 2 },
        { no: 5, name: "History", periods: 2 },
        { no: 6, name: "Myanmar Culture", periods: 3 },
        { no: 7, name: "Art", periods: 2 },
        { no: 8, name: "ICT", periods: 2 },
        { no: 9, name: "Music / Elective Language", periods: 2 },
        { no: 10, name: "PE", periods: 2 },
        { no: 11, name: "Etiquette", periods: 1 },
    ];

    return (
        <section className="py-16 bg-white dark:bg-black">
            <div className="container mx-auto px-4">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-core mb-4">
                        Secondary School (Year 7 – 9)
                    </h2>
                    <div className="w-24 h-1 bg-brand-core mx-auto rounded-full mb-6"></div>
                    <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
                        Our secondary curriculum offers a broad range of subjects designed to challenge students and prepare them for higher education.
                    </p>
                </div>

                {/* Table Card */}
                <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-900 shadow-xl rounded-2xl overflow-hidden border border-gray-100 dark:border-brand-core/10">

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-brand-core text-white">
                                    <th className="px-6 py-5 text-center font-semibold text-sm uppercase tracking-wider w-20">
                                        No
                                    </th>
                                    <th className="px-6 py-5 font-semibold text-sm uppercase tracking-wider">
                                        Subject Name
                                    </th>
                                    <th className="px-6 py-5 text-center font-semibold text-sm uppercase tracking-wider w-40">
                                        Periods / Week
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                                {subjects.map((item, index) => (
                                    <tr
                                        key={item.no}
                                        className={`
                                            transition-colors duration-200 hover:bg-blue-50/50 dark:hover:bg-neutral-800
                                            ${index % 2 === 0 ? 'bg-white dark:bg-neutral-900' : 'bg-gray-50/50 dark:bg-neutral-900/50'}
                                        `}
                                    >
                                        <td className="px-6 py-4 text-center text-gray-400 dark:text-gray-500 font-mono text-sm">
                                            {String(item.no).padStart(2, '0')}
                                        </td>
                                        <td className="px-6 py-4 text-gray-800 dark:text-gray-200 font-medium whitespace-pre-line leading-relaxed">
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-brand-core/20 text-brand-core font-bold text-sm shadow-sm">
                                                {item.periods}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer Note */}
                    <div className="px-8 py-4 bg-gray-50 dark:bg-neutral-950 border-t border-gray-100 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                        <span className="text-gray-500 dark:text-gray-400 italic">
                            * English level is determined by assessment
                        </span>
                        <div className="flex items-center gap-2 text-brand-core font-medium">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Cambridge International Secondary 1 Curriculum
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SecondarySubjectsTable
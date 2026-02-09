import React from 'react'

function HighSchoolSubjectTable() {
    const subjects = [
        { no: 1, name: "English* (English as a Second Language)", periods: 7 },
        { no: 2, name: "Additional Mathematics", periods: 4 },
        { no: 3, name: "International Mathematics", periods: 4 },
        { no: 4, name: "Physics", periods: 3 },
        { no: 5, name: "Chemistry", periods: 3 },
        { no: 6, name: "Biology", periods: 3 },
        { no: 7, name: "Business Studies", periods: 3 },
        { no: 8, name: "Economics", periods: 3 },
        { no: 9, name: "Arts / Music / PE", periods: 2 },
        { no: 10, name: "Elective Language", periods: 2 },
        { no: 11, name: "ICT", periods: 3 },
        { no: 12, name: "Global Perspectives", periods: 1 },
        { no: 13, name: "College Counseling", periods: 1 },
        { no: 14, name: "PSAT English", periods: 2 },
        { no: 15, name: "PSAT Math", periods: 2 },
    ];

    return (
        <section className="py-16 bg-white dark:bg-black">
            <div className="container mx-auto px-4">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-core mb-4">
                        High School (Year 10 – 11)
                    </h2>
                    <div className="w-24 h-1 bg-brand-core mx-auto rounded-full mb-6"></div>
                    <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        We have embraced the IGCSE curriculum due to current high demand. We offer Cambridge IGCSE as a Cambridge International School and Examination Centre.
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
                    <div className="px-6 md:px-8 py-5 bg-gray-50 dark:bg-neutral-950 border-t border-gray-100 dark:border-neutral-800 text-sm">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-start gap-2 text-gray-600 dark:text-gray-400 italic leading-relaxed">
                                <span className="text-brand-core font-bold shrink-0">*</span>
                                <p>
                                    First Language English might be offered on demand. However, it depends on the number of students and the availability of teachers and school facilities. Students must submit their request in the first week of the academic year. Students cannot choose both English as a Second Language and First Language English if offered.
                                </p>
                            </div>

                            <div className="w-full h-px bg-gray-200 dark:bg-gray-800 my-1"></div>

                            <div className="flex items-center gap-2 text-brand-core font-medium">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Cambridge IGCSE Curriculum
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HighSchoolSubjectTable
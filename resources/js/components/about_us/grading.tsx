import React from 'react'

const Grading = () => {
    return (
        <div>
            <hr className='my-4 w-1/2 mx-auto' />
            <h2 className='text-center text-2xl my-4 font-bold text-brand-core'>Grading</h2>
            <div className=' container mx-auto'>
                <h4 className=' text-xl my-4 font-bold text-brand-core'>
                    Grade Point Average (GPA) Calculation</h4>
                <p>GPA is computed using the above quality points. Beginning with Year-10, all subjects, whether passed or failed, are included in the computation. A minimum of 5 IGCSE subjects must be taken to complete the Secondary Education Level. A minimum of 3 A Level subjects must be taken to complete the High School Graduation. We use Unweighted grades when calculating the GPA. Grades are recorded on the transcript and GPA is computed in May.</p>

                <div className="overflow-x-auto mt-10">
                    <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-brand-core">
                        Grade Descriptors
                    </h1>

                    <table className="min-w-full border border-gray-200 dark:border-brand-core rounded-lg shadow-sm">
                        <thead className="bg-main text-brand-core ">
                            <tr>
                                <th className="px-4 py-3 text-left text-base font-semibold">Grade</th>
                                <th className="px-4 py-3 text-left text-base font-semibold">Percentage Range (%)</th>
                                <th className="px-4 py-3 text-left text-base font-semibold">Grade Descriptor</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-brand-core bg-white dark:bg-neutral-950">
                            {[
                                { grade: 'A*', range: '90 – 100', desc: 'Student experienced excellent achievement' },
                                { grade: 'A', range: '80 – 89', desc: 'Student experienced excellent achievement' },
                                { grade: 'B', range: '70 – 79', desc: 'Student experienced good achievement' },
                                { grade: 'C', range: '60 – 69', desc: 'Student experienced satisfactory achievement' },
                                { grade: 'D', range: '50 – 59', desc: 'Student experienced limited achievement' },
                                { grade: 'E', range: '40 – 49', desc: 'Student experienced only minimal achievement' },
                                { grade: 'U', range: 'Ungraded', desc: 'Not yet assessed' },
                            ].map((item) => (
                                <tr key={item.grade} className="hover:bg-gray-50 dark:hover:bg-neutral-900 hover:text-brand-core">
                                    <td className="px-4 py-3 font-semibold text-main">{item.grade}</td>
                                    <td className="px-4 py-3 text-gray-700 dark:text-white ">{item.range}</td>
                                    <td className="px-4 py-3 text-gray-700 dark:text-white ">{item.desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="overflow-x-auto mt-10">
                    <h2 className="mt-12 mb-6 text-2xl font-bold text-gray-900 dark:text-brand-core">
                        Achievement Indicators
                    </h2>
                    <table className="min-w-full border border-gray-200 dark:border-brand-core rounded-lg shadow-sm">
                        <thead className="text-brand-core">
                            <tr>
                                <th className="px-4 py-3 text-left text-base font-semibold ">
                                    Indicator
                                </th>
                                <th className="px-4 py-3 text-left text-base font-semibold ">
                                    Descriptor
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-brand-core bg-white dark:bg-neutral-950">
                            {[
                                { code: 'EE', desc: 'Exceeds Expectation' },
                                { code: 'ME', desc: 'Meets Expectation' },
                                { code: 'AE', desc: 'Approaches Expectation' },
                                { code: 'BE', desc: 'Below Expectation' },
                                { code: 'N/A', desc: 'Not applicable at this time' },
                            ].map((item) => (
                                <tr key={item.code} className="hover:bg-gray-50 dark:hover:bg-neutral-900 hover:text-brand-core">
                                    <td className="px-4 py-3 font-semibold text-main">{item.code}</td>
                                    <td className="px-4 py-3 text-gray-700 dark:text-white">{item.desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Grading
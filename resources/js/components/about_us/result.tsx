import React from 'react'

const Result = () => {
    return (
        <div>
            <hr className='my-4 w-1/2 mx-auto' />
            <h2 className='text-center text-2xl my-4 font-bold text-brand-core'>Grading</h2>
            <div className=' container mx-auto'>
                <div className='grid md:grid-cols-2 gap-6'>

                    <div className=' rounded-xl bg-white dark:bg-neutral-950 p-8 shadow-sm'>

                        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-brand-core">
                            Class of 2023
                        </h2>

                        <p className="mb-6 text-gray-700 dark:text-white">
                            There were <span className="font-semibold">50 graduates</span> in the Class of 2023.
                        </p>

                        {/* GPA Distribution */}
                        <h3 className="mb-3 text-lg font-semibold ">
                            GPA Distribution
                        </h3>
                        <ul className="mb-8 space-y-2 text-gray-700 dark:text-gray-50">
                            <li className="flex justify-between border-b pb-2">
                                <span>4.0 – 3.5</span>
                                <span className="font-semibold">11 students</span>
                            </li>
                            <li className="flex justify-between border-b pb-2">
                                <span>3.0 – 3.49</span>
                                <span className="font-semibold">19 students</span>
                            </li>
                            <li className="flex justify-between border-b pb-2">
                                <span>2.50 – 2.99</span>
                                <span className="font-semibold">13 students</span>
                            </li>
                            <li className="flex justify-between border-b pb-2">
                                <span>2.0 – 2.49</span>
                                <span className="font-semibold">5 students</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Below 2.0</span>
                                <span className="font-semibold">2 students</span>
                            </li>
                        </ul>

                        {/* Grade Achievements */}
                        <h3 className="mb-3 text-lg font-semibold text-main">
                            Overall Academic Achievements
                        </h3>
                        <ul className="mb-8 list-disc pl-6 text-gray-700 dark:text-gray-50 space-y-2">
                            <li>
                                <span className="font-semibold">72 A*</span> grades achieved
                            </li>
                            <li>
                                <span className="font-semibold">64 A</span> grades achieved
                            </li>
                            <li>
                                <span className="font-semibold">54 B</span> grades achieved
                            </li>
                            <li>
                                Across a total of <span className="font-semibold">295 subjects</span>
                            </li>
                        </ul>

                        {/* Outstanding Students */}
                        <h3 className="mb-3 text-lg font-semibold text-main">
                            Outstanding Individual Performances
                        </h3>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-50">
                            <li className="flex justify-between border-b pb-2">
                                <span>Aye Chan Oo</span>
                                <span className="font-semibold text-main">10 A*</span>
                            </li>
                            <li className="flex justify-between border-b pb-2">
                                <span>Myat Htet Ko</span>
                                <span className="font-semibold text-main">7 A*</span>
                            </li>
                            <li className="flex justify-between border-b pb-2">
                                <span>Nang Thiri</span>
                                <span className="font-semibold text-main">7 A*</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Min Kaung Zan</span>
                                <span className="font-semibold text-main">7 A*</span>
                            </li>
                        </ul>


                    </div>
                    <div className="overflow-x-auto mt-10">
                        <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-brand-core">
                            Standardized Test Results
                        </h1>

                        <table className="min-w-full border border-gray-200 dark:border-brand-core rounded-lg shadow-sm">
                            <thead className="bg-main text-brand-core ">
                                <tr>
                                    <th className="px-4 py-3 text-left text-base font-semibold " colSpan={2}>
                                        100% of the Class of 2023 (295 subject entries) took the IGCSE</th>
                                    <th className="px-4 py-3 text-left text-base font-semibold"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-brand-core bg-white dark:bg-neutral-950">
                                {[
                                    { title: 'Languages', range: '31A*' },
                                    { title: 'Mathematics', range: '11A*' },
                                    { title: 'Sciences', range: '20A*' },
                                    { title: 'Creative and Professionals', range: '9A*' },
                                    { title: 'Humanities', range: '1A*' },
                                ].map((item) => (
                                    <tr key={item.title} className="hover:bg-gray-50 dark:hover:bg-neutral-900 hover:text-brand-core">
                                        <td className="px-4 py-3 font-semibold text-main">{item.title}</td>
                                        <td className="px-4 py-3 text-gray-700 dark:text-white ">{item.range}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <table className="min-w-full border border-gray-200 dark:border-brand-core rounded-lg shadow-sm">
                            <thead className="bg-main text-brand-core ">
                                <tr>
                                    <th className="px-4 py-3 text-left text-base font-semibold " colSpan={2}>
                                        100% of the Class of 2023 (12 subject entries) took the A-level</th>
                                    <th className="px-4 py-3 text-left text-base font-semibold"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-brand-core bg-white dark:bg-neutral-950">
                                {[
                                    { title: 'Mathematics', range: '3A' },
                                    { title: 'Sciences', range: '3A*' },
                                    { title: 'Creative and Professionals', range: '3A*' },
                                ].map((item) => (
                                    <tr key={item.title} className="hover:bg-gray-50 dark:hover:bg-neutral-900 hover:text-brand-core">
                                        <td className="px-4 py-3 font-semibold text-main">{item.title}</td>
                                        <td className="px-4 py-3 text-gray-700 dark:text-white ">{item.range}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Result
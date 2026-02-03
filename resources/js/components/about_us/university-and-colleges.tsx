import React from 'react'

const UniversityAndColleges = () => {
    return (
        <div>
            <hr className='my-4 w-1/2 mx-auto' />
            <h2 className='text-center text-2xl my-4 font-bold text-brand-core'>Universities and Colleges</h2>
            <div className=' container mx-auto'>
                <div className='grid md:grid-cols-2 gap-6'>

                    <div className=' rounded-xl bg-white dark:bg-neutral-950 p-8 shadow-sm'>

                        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-brand-core">
                            Post IGCSE Placement
                        </h2>
                        {/* GPA Distribution */}
                        <h3 className="mb-3 text-lg font-semibold ">
                            %
                        </h3>
                        <ul className="mb-8 space-y-2 text-gray-700 dark:text-gray-50">
                            <li className="flex justify-between border-b pb-2">
                                <span>matriculated to foundation programs</span>
                                <span className="font-semibold">40%</span>
                            </li>
                            <li className="flex justify-between border-b pb-2">
                                <span>matriculated to A Levels</span>
                                <span className="font-semibold">26%</span>
                            </li>
                            <li className="flex justify-between border-b pb-2">
                                <span >matriculated to IBDP</span>
                                <span className="font-semibold">10%</span>
                            </li>
                            <li className="flex justify-between border-b pb-2">
                                <span>matriculated to a 2-year College</span>
                                <span className="font-semibold">10%</span>
                            </li>
                            <li className="flex justify-between">
                                <span>selected work or technical instruction</span>
                                <span className="font-semibold">4%</span>
                            </li>
                        </ul>

                        {/* Grade Achievements */}
                        <h3 className="mb-3 text-lg font-semibold text-main">
                            Awards and Distinctions, 2019-23
                        </h3>
                        <ul className="mb-8 list-disc pl-6 text-gray-700 dark:text-gray-50 space-y-2">
                            <li>
                                <span className="font-semibold">2 Students got</span> 10 A*s
                            </li>
                            <li>
                                <span className="font-semibold">11</span> Distinct ICE awards
                            </li>
                            <li>
                                <span className="font-semibold">10 students got</span> 7 A*s
                            </li>
                            <li>
                                8 Outstanding awards <span className="font-semibold">in CheckPoint exams</span>
                            </li>
                            <li>
                                3 Full Scores <span className="font-semibold">in CheckPoint exams</span>
                            </li>
                        </ul>
                    </div>
                    <div className="overflow-x-auto mt-10">

                        <div className='grid  sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2'>
                            <table className="min-w-full border border-gray-200 dark:border-brand-core rounded-lg shadow-sm">
                                <thead className="bg-main text-brand-core ">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-base font-semibold " >
                                            Universities and Colleges Attended by MISA Graduates from the Last Ten Years</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-brand-core bg-white dark:bg-neutral-950">
                                    {[
                                        { title: ' Abbey College Cambridge' },
                                        { title: 'Alatoo International University' },
                                        { title: 'Assumption University' },
                                        { title: 'California Institute of Technology (Caltech) ' },
                                        { title: 'Cass Business School London' },
                                        { title: 'Cornell University' },
                                        { title: 'Curtin University' },
                                        { title: 'James Cook University' },
                                        { title: 'King’s College London(KCL)' },
                                        { title: ' Les Roches Global Hospitality Education' },
                                        { title: 'Middle East Technical University' },
                                        { title: 'Myanmar Institute of Information Technology(MIIT)' },
                                    ].map((item) => (
                                        <tr key={item.title} className="hover:bg-gray-50 dark:hover:bg-neutral-900 hover:text-brand-core">
                                            <td className="px-4 py-3 font-semibold text-main">{item.title}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <table className="min-w-full border border-gray-200 dark:border-brand-core rounded-lg shadow-sm">
                                {/* <thead className="bg-main text-brand-core ">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-base font-semibold " >
                                            100% of the Class of 2023 (12 subject entries) took the A-level</th>
                                    </tr>
                                </thead> */}
                                <tbody className="divide-y divide-gray-200 dark:divide-brand-core bg-white dark:bg-neutral-950">
                                    {[
                                        { title: 'Royal Melbourne Institute of Technology(RMIT)' },
                                        { title: 'Sunway College' },
                                        { title: 'Swinburne University of Technology' },
                                        { title: 'Taylor’s College' },
                                        { title: 'The State University of New York' },
                                        { title: 'University College London(UCL)' },
                                        { title: 'University of California, Los Angeles(UCLA)' },
                                        { title: 'University of Central Lancashire' },
                                        { title: 'University of Melbourne' },
                                        { title: 'University of Manchester' },
                                        { title: 'Virginia Tech' },
                                    ].map((item) => (
                                        <tr key={item.title} className="hover:bg-gray-50 dark:hover:bg-neutral-900 hover:text-brand-core">
                                            <td className="px-4 py-3 font-semibold text-main">{item.title}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default UniversityAndColleges
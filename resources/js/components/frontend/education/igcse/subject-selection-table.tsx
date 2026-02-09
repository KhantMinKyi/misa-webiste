import React from 'react'

function SubjectSelectionTable() {
    const selectionData = [
        {
            subject: "English",
            y10: "Compulsory",
            y11: "Compulsory",
            remark: "English as a Second Language (0511)"
        },
        {
            subject: "International Mathematics (0607)",
            y10: "Compulsory",
            y11: "Compulsory",
            remark: ""
        },
        {
            subject: "Additional Mathematics (0606)",
            y10: "Compulsory",
            y11: "Optional",
            remark: "At the end of first term of Year 10, students have the option to drop Additional Mathematics with the approval of academic committee."
        },
        {
            subject: "Physics (0625), Biology (0610) and Chemistry (0620)",
            y10: "All Compulsory",
            y11: "At Least Two of Three Subjects",
            remark: ""
        },
        {
            subject: "Economics (0455) and Business Studies (0450)",
            y10: "At least one",
            y11: "At least one",
            remark: ""
        },
        {
            subject: "Second Language",
            y10: "One Compulsory",
            y11: "One Compulsory",
            remark: "The selected course in Year 10 must continue in Year 11."
        },
        {
            subject: "PE / Art / Music",
            y10: "One Compulsory",
            y11: "One Compulsory",
            remark: "Students may change their selected subject at the end of Year 10 only."
        },
        {
            subject: "ICT (0417)",
            y10: "Optional",
            y11: "Optional",
            remark: ""
        },
        {
            subject: "Global Perspectives (0457)*",
            y10: "Compulsory",
            y11: "Compulsory",
            remark: ""
        },
        {
            subject: "PSAT English",
            y10: "Optional",
            y11: "Optional",
            remark: "This course might be given after classes due to timetable constraints in some campuses."
        },
        {
            subject: "PSAT Math",
            y10: "Optional",
            y11: "Optional",
            remark: "This course might be given after classes due to timetable constraints in some campuses."
        }
    ];

    return (
        <section className="py-16 bg-white dark:bg-black">
            <div className="container mx-auto px-4">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-core mb-4">
                        Subject Selection
                    </h2>
                    <div className="w-24 h-1 bg-brand-core mx-auto rounded-full mb-6"></div>
                    <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        We have embraced the IGCSE curriculum due to current high demand. We offer Cambridge IGCSE as a Cambridge International School and Examination Centre.
                    </p>
                </div>

                {/* Table Card */}
                <div className="max-w-7xl mx-auto bg-white dark:bg-neutral-900 shadow-xl rounded-2xl overflow-hidden border border-gray-100 dark:border-brand-core/10">

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[900px]">
                            <thead>
                                <tr className="bg-brand-core text-white">
                                    <th className="px-6 py-5 font-semibold text-sm uppercase tracking-wider w-1/4">
                                        Subject
                                    </th>
                                    <th className="px-6 py-5 font-semibold text-sm uppercase tracking-wider w-1/6">
                                        Year 10
                                    </th>
                                    <th className="px-6 py-5 font-semibold text-sm uppercase tracking-wider w-1/6">
                                        Year 11
                                    </th>
                                    <th className="px-6 py-5 font-semibold text-sm uppercase tracking-wider w-1/3">
                                        Remarks
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                                {selectionData.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={`
                                            transition-colors duration-200 hover:bg-blue-50/50 dark:hover:bg-neutral-800
                                            ${index % 2 === 0 ? 'bg-white dark:bg-neutral-900' : 'bg-gray-50/50 dark:bg-neutral-900/50'}
                                        `}
                                    >
                                        <td className="px-6 py-5 text-gray-900 dark:text-gray-100 font-bold whitespace-pre-wrap leading-snug">
                                            {item.subject}
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                                                ${item.y10.includes('Compulsory')
                                                    ? 'bg-brand-core/10 text-brand-core dark:bg-brand-core/20'
                                                    : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                }`}>
                                                {item.y10}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                                                ${item.y11.includes('Compulsory') || item.y11.includes('Subjects')
                                                    ? 'bg-brand-core/10 text-brand-core dark:bg-brand-core/20'
                                                    : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                }`}>
                                                {item.y11}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5 text-gray-600 dark:text-gray-400 text-sm italic leading-relaxed">
                                            {item.remark || <span className="opacity-30">-</span>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer Note */}
                    <div className="px-6 md:px-8 py-6 bg-gray-50 dark:bg-neutral-950 border-t border-gray-100 dark:border-neutral-800 text-sm">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-start gap-2 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                <span className="text-brand-core font-bold shrink-0 text-lg">*</span>
                                <p>
                                    Since the IGCSE assessment of this course requires more teaching hours, which is not available in the recent schedule, currently we are not preparing our students for the Cambridge IGCSE Global Perspectives Examinations. However, the content is delivered based on the Cambridge Global Perspective syllabus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SubjectSelectionTable
import React from 'react'

function SecondarySchoolBanner() {
    // Updated data list for Secondary School
    const achievementPoints = [
        "Students are assessed through two rigorous testing options: Cambridge International Secondary 1 Checkpoint and yearly progression tests.",
        "A variety of teaching techniques are employed to ensure that instruction is meaningful, effective, and relevant to the diversity of the developmental needs of this age group.",
        "Students are involved in more structured activities like projects, presentations, experiments, essays, debates, Olympiad studies, research papers, and inter-school competitions in various fields such as math, science, sports, English language, and art.",
        "Students are encouraged to take part in community service activities such as visiting homes for the elderly and/or orphanages."
    ];

    return (
        <div className="bg-white dark:bg-black py-12">
            <div className="container mx-auto px-4">

                {/* Intro Section */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-brand-core mb-6">
                        Secondary School Programme
                    </h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        is designed according to Cambridge International Secondary 1 curriculum. Students build on the solid foundations laid in the earlier years in the core subjects of English, mathematics, and science. In addition, they enjoy the more specialized subjects of Myanmar Language, history, geography, music, art, ICT, and PE. This curriculum provides them with the knowledge, skills, and values needed in a fast-changing world.
                    </p>
                </div>

                {/* Grid Section - Adjusted to 2 columns for better readability of longer text */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievementPoints.map((point, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-neutral-950 p-6 rounded-xl border border-gray-100 dark:border-brand-core/20 hover:border-brand-core hover:shadow-lg transition-all duration-300 flex flex-col"
                        >
                            {/* Icon */}
                            <div className="w-10 h-10 bg-white dark:bg-neutral-900 rounded-lg flex items-center justify-center text-brand-core shadow-sm mb-4 shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            {/* Text */}
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                                {point}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default SecondarySchoolBanner
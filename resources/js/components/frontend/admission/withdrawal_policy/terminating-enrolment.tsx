import React from 'react';
import {
    HiOutlineExclamation,
    HiOutlineBookOpen,
    HiOutlineIdentification,
    HiOutlineTruck,
    HiOutlineCurrencyDollar,
    HiOutlineUserAdd
} from 'react-icons/hi';

const TerminatingEnrolment: React.FC = () => {
    return (
        <section className="py-16 bg-white dark:bg-neutral-900 border-t border-gray-100 dark:border-neutral-800">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Terminating Enrolment
                    </h2>
                    <div className="w-16 h-1 bg-red-500 mx-auto rounded-full"></div>
                </div>

                {/* Main Content Card */}
                <div className="bg-gray-50 dark:bg-black rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 dark:border-neutral-800">

                    {/* Re-enrollment Policy */}
                    <div className="flex items-start gap-4 mb-10">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                            <HiOutlineUserAdd className="text-xl" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                Re-enrolment Policy
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Once a student has terminated his or her enrolment, that student’s place is taken by a new enrolment. If the student wants to return to our schools, <span className="font-semibold text-gray-900 dark:text-white">that student is treated as a new applicant</span> and must go through the new admission process mentioned above.
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-px bg-gray-200 dark:bg-neutral-800 my-8"></div>

                    {/* Submission Checklist */}
                    <div className="mb-10">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                            Items to Return Before Leaving
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                            Before terminating enrolment, students need to submit the following to the Office/Library:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { icon: HiOutlineBookOpen, text: "Textbooks" },
                                { icon: HiOutlineBookOpen, text: "Library books and materials" }, // Using same icon, or specific library one
                                { icon: HiOutlineIdentification, text: "ID cards" },
                                { icon: HiOutlineTruck, text: "Car-pass cards" },
                                { icon: HiOutlineCurrencyDollar, text: "Any unpaid fees (tuition, library, damages, etc.)" },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 bg-white dark:bg-neutral-900 rounded-lg border border-gray-200 dark:border-neutral-800 hover:border-brand-core dark:hover:border-brand-core transition-colors">
                                    <item.icon className="text-brand-core text-xl shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Warning Box */}
                    <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-lg">
                        <div className="flex items-start gap-3">
                            <HiOutlineExclamation className="text-red-600 dark:text-red-400 text-2xl shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-red-800 dark:text-red-200 font-bold mb-1">
                                    Important
                                </h4>
                                <p className="text-red-700 dark:text-red-300/80 leading-relaxed">
                                    Students who do not meet the above conditions will not be issued any school documents.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TerminatingEnrolment;
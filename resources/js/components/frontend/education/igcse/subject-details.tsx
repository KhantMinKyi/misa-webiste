import React from 'react'

function SubjectDetails() {
    const subjectData = [
        {
            title: "English as a Second Language",
            content: "This subject helps students develop skills, which are needed for practical communication. They also build solid foundation skills required for further study or employment using English as the medium. Students become aware of the nature of the language and language learning skills. It also promotes learners’ personal development. Students are assessed in four skills: Reading Comprehension, writing, speaking and listening.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            )
        },
        {
            title: "Additional Mathematics",
            content: "Cambridge IGCSE Additional Mathematics has a Pure Mathematics only content, which enables learners to extend their mathematical skills and understanding in the context of more advanced techniques. It also enables learners to acquire a suitable foundation in mathematics for further study in the subject, such as engineering and computer programming.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            )
        },
        {
            title: "International Mathematics",
            content: "Cambridge IGCSE International Mathematics has been developed for schools offering an international curriculum. It prepares students for the IB Diploma mathematics courses. With this curriculum students will acquire a solid foundation of mathematical skills and learn how to develop strategies for solving open-ended problems. The course also allows learners to develop and sharpen their investigation and modeling skills, and introduces them to the use of graphical calculators – a necessary part of the IB Diploma.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            )
        },
        {
            title: "Physics",
            content: "The Cambridge IGCSE Physics syllabus helps learners to understand the technological world in which they live, and take an informed interest in science and scientific developments. They learn about the basic principles of Physics through a mix of theoretical and practical studies. Learners develop experimental and investigation skills, which are needed for their further studies as well as daily life experiences. Physics has links to many other courses in higher education such as engineering, space and astronomy sciences.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            )
        },
        {
            title: "Chemistry",
            content: "The Cambridge IGCSE Chemistry syllabus helps learners to understand the technological world in which they live, and take an informed interest in science and scientific developments. Chemistry is an experimental science that connects theoretical knowledge with the practical applications. Learners develop experimental and investigation skills, which are needed for their further studies as well as daily life experiences. Chemistry has links to many other courses in higher education such as medicine, biological sciences and environmental sciences.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            )
        },
        {
            title: "Biology",
            content: "The Cambridge IGCSE Biology syllabus helps learners to understand the living world around us, and take an informed interest in science and scientific developments. Learners develop experimental and investigation skills, which are needed for their further studies as well as daily life experiences. Biology has links to many other courses in higher education such as medicine, health sciences, botanic and zoology.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            )
        },
        {
            title: "Business Studies",
            content: "The Cambridge IGCSE Business Studies syllabus develops learners’ understanding of business activity in the public and private sectors, and the importance of innovation and change. Learners find out how the major types of business organisation are established, financed and run, and how their activities are regulated. Factors influencing business decision-making are also considered, as are the essential values of cooperation and interdependence. Learners not only study business concepts and techniques but also enhance related skills such as numeracy and enquiry.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            )
        },
        {
            title: "Economics",
            content: "The Cambridge IGCSE Economics syllabus develops an understanding of economic terminology and principles and of basic economic theory. Learners study the economics of developed and developing nations and how these interrelate. They also learn to handle simple data and undertake economic analysis, evaluate information and discriminate between facts and value judgments in economic issues. A foundation for further studies, the syllabus also encourages a better understanding of the world in which learners live.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
            )
        },
        {
            title: "ICT",
            content: "The Information Communication Technology syllabus encourages learners to develop lifelong skills, which will be useful to them in their work across the curriculum and prepare them for future employment. They will develop understanding of the implications of technology in society, including social, economic and ethical uses. The syllabus combines theoretical and practical studies focusing on the ability to use common software applications to solve problems, including word processors, spreadsheets, databases, and website design.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            )
        },
        {
            title: "Global Perspectives",
            content: "Global Perspectives is a cross-curricular and skills-based subject which develops critical thinking skills and global awareness; promotes internationalism and encourages students to be open-minded individuals through activities and strategies like team work, presentations, projects, and working with other learners. Students discuss contemporary global issues such as poverty, global warming, and peace and conflict in the world.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            )
        },
        {
            title: "College Counseling",
            content: "This course aims to provide high school students an awareness of academic future planning and career opportunities and college readiness. Moreover students plan and participate in extracurricular activities and community projects. Students develop leadership and organizational skills, and practice long-term commitment, which they will need in their future life as well as university and job applications.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
            )
        },
        {
            title: "PSAT",
            content: "This course is provided for the students who are planning to continue their academic career in US. PSAT is the preliminary version of SAT Examinations, prepares students for it, and helps students in college planning in US. Students become familiar with the PSAT questions and take practice tests during the course.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            )
        },
        {
            title: "Art",
            content: "Art curriculum in high school focuses on developing creativity and rigorous understanding of arts and design skills of students. A wide range of activities and projects including painting, drawing, coloring, composition and craft works achieves this.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
            )
        },
        {
            title: "Physical Education",
            content: "Physical Education encourages students to participate in physical and sports activities within and beyond the school. Students learn to develop competency in a wide range of physical activities. The course also aims to build students’ teamwork, self-confidence and competitive skills.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            )
        },
        {
            title: "Music",
            content: "Music curriculum in high school focuses on three core areas of musical experience; performing, composing and listening. Students have various opportunities to perform both as individual and/or group in activities such as morning assemblies, talent shows and different ceremonies. Students understand the basic musical structure styles and genres. Our students learn to play different instruments such as piano, keyboard, violin, flute and etc.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
            )
        },
        {
            title: "Elective Language",
            content: "This course aims to develop basic communicative skills in the target language and strategies for effective language learning. It also helps students foster an understanding of different cultures. We offer Chinese and Japanese currently.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            )
        }
    ];

    return (
        <section className="py-12 bg-white dark:bg-black">
            <div className="container mx-auto px-4">

                <h2 className="text-3xl font-bold text-center text-brand-core mb-12">
                    Subject Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {subjectData.map((subject, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-neutral-950 rounded-2xl p-8 border border-gray-100 dark:border-brand-core/20 shadow-sm hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
                        >
                            {/* Decorative Accent */}
                            <div className="absolute top-0 left-0 w-1 h-full bg-brand-core opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Header */}
                            <div className="flex items-start gap-5 mb-6">
                                <div className="p-3 rounded-xl bg-gray-50 dark:bg-neutral-900 text-brand-core shrink-0">
                                    {subject.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-brand-core pt-1">
                                    {subject.title}
                                </h3>
                            </div>

                            {/* Content */}
                            <div className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line text-sm md:text-base">
                                {subject.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SubjectDetails
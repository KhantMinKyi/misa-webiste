import React from 'react'

function SubjectDetails() {
    const subjectData = [
        {
            title: "English Language A",
            content: "Cambridge Secondary 1 English enables learners to communicate confidently and effectively and to develop the skills to respond to a range of information, media and texts with understanding and enjoyment. English Language A courses are based on fundamental language competencies, which help students foster cross-cultural understanding, critical thinking, and excellence in writing. Secondary school students are given chances of extending their ability to use English through the Research Paper programme, speech contests, essay competitions, local and/or international debate competitions, and the annual Spelling Bee language contests.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            )
        },
        {
            title: "English Language B*",
            content: "We have students of varied English language learning backgrounds; therefore, we offer English B classes for students with a shorter period of exposure to and engagement in the English language. There are two levels of English B, being ‘Intermediate’ and ‘Pre-intermediate’, the aim of which is to elevate students’ skills to English Language A level over the years through a structured process.\n\nCambridge English as a Second Language places emphasis on developing listening, speaking, reading and writing skills as well as vocabulary development and language awareness. Learners are exposed to a range of vocabulary with opportunities for using language in personalised, meaningful ways and developing the language skills they will need to access classroom materials in English across school curricula.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
            )
        },
        {
            title: "Mathematics",
            content: "Cambridge Secondary 1 Mathematics curriculum is a foundation for further Mathematics education and provides a structured objective for mathematics at the High School level. Mathematics courses are designed to promote student-centred learning through pair work, group discussions and collaboration. The curriculum framework explores six concepts: number, algebra, geometry, measure, handling data and problem-solving. It focuses on principles, patterns, systems, functions and relationships so that learners apply their mathematical knowledge and develop a holistic understanding of the subject.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            )
        },
        {
            title: "Science",
            content: "Cambridge Secondary 1 Science curriculum framework covers four content areas: scientific enquiry, biology, chemistry and physics. Scientific enquiry is about considering ideas, evaluating evidence, planning investigative work, and recording and analysing data. The scientific enquiry objectives underpin biology, chemistry and physics, which are focused on developing confidence and interest in scientific knowledge. Environmental awareness and some history of science are also part of the curriculum. The scientific knowledge of our students is extensively strengthened by the variety of experiments in modern and well-equipped laboratories.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            )
        },
        {
            title: "Physical Education",
            content: "The physical education curriculum in secondary school targets developing students’ agility, coordination, and flexibility. This is achieved through educational games, gymnastics, athletics, and football and basketball training. Students are also encouraged to participate in intra-school and inter-school sports activities and competitions such as annual Streetball, Table tennis, and football tournaments.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            )
        },
        {
            title: "Music",
            content: "The music curriculum in secondary school focuses on three core areas of musical experience; performing, composing and listening. Students have various opportunities to perform both as individuals and/or groups in activities such as morning assemblies, talent shows and different ceremonies. Students understand the basic musical structure styles and genres. Our students learn to play different instruments such as piano, keyboard, violin, flute and etc.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
            )
        },
        {
            title: "ICT",
            content: "Technology is one of the most significant subjects in the 21st century. We dedicate a reasonable amount of time and energy to raising awareness of developments in information, communication and technology in everyday life. Constant investment in technology laboratories helps to teach and learn up to date along with the latest, fast computers, smart boards, smart pens and projectors. Further knowledge in ICT as computer science can be achieved through the Robotics club and other extracurricular activities.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            )
        },
        {
            title: "History",
            content: "The secondary School History curriculum teaches World History. Students are inspired to learn history to get lessons from the past and prescribe to our modern problems but are not forced to memorize dates, events, and other boring information. Through its focus, it helps students foster critical thinking and independent learning as well as an understanding of the history of humanity.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            )
        },
        {
            title: "Art",
            content: "The secondary School Art curriculum includes art, craft and design, and focuses on human creativity. It is designed to inspire and challenge students to create and invent their own works of art, craft and design. In addition to creativity students also develop critical thinking skills through the production of artworks. Students learn to be proficient in drawing, painting, colouring and composition concepts.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
            )
        },
        {
            title: "Etiquette",
            content: "Etiquette is the intentional and proactive effort to instil in our student’s important universal values such as caring, honesty, fairness, responsibility and respect for self by modelling and teaching good character through an emphasis on universal values that we all share. This is achieved through activities, projects, student-homeroom teacher discussions during homeroom time and student reflections.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
            )
        },
        {
            title: "Myanmar Culture",
            content: "Our schools follow an international curriculum, however, it is important for Myanmar students to understand their own culture to be able to make connections to other cultures. Therefore, Myanmar Culture classes are included in the curriculum for local students and are uniquely designed to engage students in different elements of Myanmar culture such as language, history and arts.\n\nMyanmar Culture is also offered to non-local students and it also includes Myanmar language for foreigners at beginner/elementary levels. This helps non-local students to adapt to Myanmar language and culture, and address the challenges that they can face in their daily lives.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            )
        },
        {
            title: "Elective Language",
            content: "This course aims to develop basic communicative skills in the target language and strategies for effective language learning. It also helps students foster an understanding of different cultures.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
            )
        },
        {
            title: "Geography",
            content: "The geography curriculum covers themes from different parts of the world and focuses on population, settlement, land shape, natural environment, and social and economic development. The curriculum is designed to inspire students to explore and investigate contemporary global and regional issues. It enables students to acquire skills to understand the relationship between people and the environment.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
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
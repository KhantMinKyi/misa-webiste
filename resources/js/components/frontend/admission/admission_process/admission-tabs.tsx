import React, { useState } from 'react';

// --- Types & Interfaces ---

interface AdmissionContent {
    intro: string;
    section1: string; // Age placement
    section2: string; // Download form...
    section3: string; // Contact school fee...
    listTitle: string; // Required docs title
    listItems: string[]; // List of docs
    section4: string; // Assessment...
    section5: string; // Decision...
    section6: string; // Payment...
    contactText: string;
}

type TabType = 'English' | 'Unicode' | 'Zawgyi';

// --- Data Content ---

const content: Record<TabType, AdmissionContent> = {
    English: {
        intro: "We are excited that you are considering MISA for your child. We will support you throughout the admissions process and look forward to welcoming you to the MISA.",
        section1: "Students seeking registration at MISA from Kindergarten to Secondary are placed according to their age on or before 30 September.",
        section2: "Please, download the application form, and complete your application form and supporting documents together with a one-time, non-refundable application fee. Once the application form is completed, please submit it to the following email address: contact@bfi-edu.com",
        section3: "Please, contact the school office with regard to school fee details, payment procedure, and options.",
        listTitle: "The required supporting documents are as follows:",
        listItems: [
            "Previous scholastic records from the last school attended",
            "A recommendation letter from the last school attended is needed.",
            "Evidence of date of birth or ID card, passport copy (if applicable)",
            "2 passport sized photographs",
            "Child’s health record"
        ],
        section4: "After the application is submitted, a parent meeting and child assessment will be scheduled.",
        section5: "Based on the applicant’s previous scholastic records and performance on the MISA admissions assessment, the Admissions Committee will make a decision on whether or not to offer the applicant a place. You will be notified by email or message of the outcome.",
        section6: "When a place is offered, you will be required to sign our Payment and Refund policy and pay the registration fee, by the date indicated on the invoice to confirm your child’s place.",
        contactText: "For more information, please email us or call our admissions office at 01-551795, 01-541085, 01-546837, 01-543926."
    },
    // REPLACE UNICODE HERE
    Unicode: {
        intro: "သင်၏ကလေးများအတွက် ကျွန်ုပ်တို့၏ Mandalay International School of Acumen ကိုစိတ်ဝင်စားသည့်အတွက် စိတ်လှုပ်ရှားမိပါသည်။ ကျွန်ုပ်တို့သည် ကျောင်းဝင်ခွင့်လျှောက်လွှာတင်မှု တစ်လျှောက်လုံးတွင် သင့်အားပံ့ပိုးပေးသွားမည်ဖြစ်ပြီး Mandalay International School of Acumen မှသင့်အား ကြိုဆိုလျက်ရှိပါသည်။",
        section1: "Mandalay International School of Acumen တွင် တက်ရောက်လိုသော ကျောင်းသားကျောင်းသူများသည် သူငယ်တန်းမှအလယ်တန်း သို့ တက်ရောက်ရာတွင် စက်တင်ဘာ (၃၀)ရက်မတိုင်ခင်ရှိသော ၎င်းတို့၏အသက်အရွယ်ပေါ်မူတည်၍ အတန်းများ ခွဲခြားပေးသွားမည်ဖြစ်ပါသည်။",
        section2: "ကျေးဇူးပြု၍ အောက်ပါလျှောက်လွှာပုံစံကို download ပြုလုပ်ပါ။ ၎င်းလျှောက်လွှာပုံစံကို အထောက်အကူပြုစာရွက်များနှင့်တကွ၊ ပြန်အမ်းခွင့်မရှိသည့် လျှောက်လွှာ နှင့်အတူ ဖြည့်စွက်ပါ။ လျှောက်လွှာတစ်ခု ဖြည့်ပြီးပါက ကျေးဇူးပြု၍အောက်ပါ email သို့ပေးပို့ပေးပါ။ contact@bfi-edu.com",
        section3: "ကျေးဇူးပြု၍ ကျောင်းအခကြေးငွေအသေးစိတ်၊ ငွေပေးချေမှုလုပ်ထုံးလုပ်နည်း နှင့် ပတ်သတ်၍ ကျောင်းသို့ ဆက်သွယ်ပါ။",
        listTitle: "လိုအပ်သောအထောက်အကူပြုစာရွက်စာတမ်းများမှာ အောက်ပါအတိုင်းဖြစ်ပါသည်။",
        listItems: [
            "ယခင်တက်ရောက်ခဲ့သည့်ကျောင်းမှ ကျောင်းမှတ်တမ်းများ",
            "နောက်ဆုံးတက်ရောက်ခဲ့သည့်ကျောင်းမှ ထောက်ခံစာပေးရန်လိုအပ်ပါသည်",
            "မွေးနေ့အထောက်အထား (သို့မဟုတ်) ID card၊ passport မိတ္တူ (ရှိပါက)",
            "Passport အရွယ် ဓာတ်ပုံ (၂) ပုံ",
            "ကလေး၏ကျန်းမာရေးမှတ်တမ်း"
        ],
        section4: "လျှောက်လွှာတင်ပြီးလျှင် မိဘနှင့်တွေ့ဆုံဆွေးနွေး၍ ကလေးအားအကဲဖြတ် ပါလိမ့်မည်။",
        section5: "Mandalay International School of Acumen ၏ကျောင်းဝင်ခွင့်အကဲဖြတ်ကော်မတီမှ ယခင်ပြီးခဲ့သည့် ကျောင်းမှတ်တမ်းနှင့် Mandalay International School of Acumen မှ စစ်ဆေးသောဝင်ခွင့်စာမေးပွဲပေါ်မူတည်၍ လျှောက်ထားသူမှ တက်ရောက်နိုင်ခြင်း ရှိ ၊မရှိကို ဆုံးဖြတ်ချက် ချပါလိမ့်မည်။ ကလေး၏ရလဒ်များကို email (သို့မဟုတ်) message မှတစ်ဆင့် ဖြေကြား ပေးသွားမည်ဖြစ်ပါသည်။",
        section6: "သင့်ကလေး၏အတန်းကို အတည်ပြုပြီးသည့်အခါ ငွေပေးချေမှုနှင့် ပြန်အမ်းငွေမူဝါဒပါသော တောင်းခံလွှာတွင် လက်မှတ်ရေးထိုး၍ မှတ်ပုံတင်ကြေးပေးရန် လိုအပ်ပါသည်။",
        contactText: "ပိုမိုသိရှိလိုပါက ကျေးဇူးပြု၍ email (သို့မဟုတ်) ကျွန်ုပ်တို့၏ကျောင်းသားရေးရာဌာန (01)450396-7 , (01)9410010-20 သို့ ဆက်သွယ်မေးမြန်းစုံစမ်းနိုင်ပါသည်။"
    },
    // REPLACE ZAWGYI HERE
    Zawgyi: {
        intro: "သင္၏ကေလးမ်ားအတြက္ ကၽြန္ုပ္တို႔၏ Mandalay International School of Acumen ကိုစိတ္၀င္စားသည့္အတြက္ စိတ္လႈပ္ရွားမိပါသည္။ ကၽြန္ုပ္တို႔သည္ ေက်ာင္း၀င္ခြင့္ေလွ်ာက္လႊာတင္မႈ တစ္ေလွ်ာက္လံုးတြင္ သင့္အားပံ့ပိုးေပးသြားမည္ျဖစ္ျပီး Mandalay International School of Acumen မွသင့္အား ၾကိဳဆိုလ်က္ရွိပါသည္။",
        section1: "Mandalay International School of Acumen တြင္ တက္ေရာက္လိုေသာ ေက်ာင္းသားေက်ာင္းသူမ်ားသည္ သူငယ္တန္းမွအလယ္တန္း သို႔ တက္ေရာက္ရာတြင္ စက္တင္ဘာ (၃၀)ရက္မတိုင္ခင္ရွိေသာ ၎တို႔၏အသက္အရြယ္ေပၚမူတည္၍ အတန္းမ်ား ခြဲျခားေပးသြားမည္ျဖစ္ပါသည္။",
        section2: "ေက်းဇူးျပဳ၍ ေအာက္ပါေလွ်ာက္လႊာပံုစံကို download ျပဳလုပ္ပါ။ ၎ေလွ်ာက္လႊာပုံစံကို အေထာက္အကူျပဳစာ႐ြက္မ်ားႏွင့္တကြ၊ ျပန္အမ္းခြင့္မရွိသည့္ ေလွ်ာက္လႊာ ႏွင့္အတူ ျဖည့္စြက္ပါ။ ေလွ်ာက္လႊာတစ္ခု ျဖည့္ျပီးပါက ေက်းဇူးျပဳ၍ေအာက္ပါ email သို႔ေပးပို႔ေပးပါ။ contact@bfi-edu.com",
        section3: "ေက်းဇူးျပဳ၍ ေက်ာင္းအခေၾကးေငြအေသးစိတ္၊ ေငြေပးေခ်မႈလုပ္ထံုးလုပ္နည္း ႏွင့္ ပတ္သတ္၍ ေက်ာင္းသို႔ ဆက္သြယ္ပါ။",
        listTitle: "လိုအပ္ေသာအေထာက္အကူျပဳစာရြက္စာတမ္းမ်ားမွာ ေအာက္ပါအတိုင္းျဖစ္ပါသည္။",
        listItems: [
            "ယခင္တက္ေရာက္ခဲ့သည့္ေက်ာင္းမွ ေက်ာင္းမွတ္တမ္းမ်ား",
            "ေနာက္ဆံုးတက္ေရာက္ခဲ့သည့္ေက်ာင္းမွ ေထာက္ခံစာေပးရန္လိုအပ္ပါသည္",
            "ေမြးေန႔အေထာက္အထား (သို႔မဟုတ္) ID card၊ passport မိတၲဴ (ရွိပါက)",
            "Passport အရြယ္ ဓာတ္ပံု (၂) ပံု",
            "ကေလး၏က်န္းမာေရးမွတ္တမ္း"
        ],
        section4: "ေလွ်ာက္လႊာတင္ျပီးလွ်င္ မိဘႏွင့္ေတြ႕ဆံုေဆြးေႏြး၍ ကေလးအားအကဲျဖတ္ ပါလိမ့္မည္။",
        section5: "Mandalay International School of Acumen ၏ေက်ာင္း၀င္ခြင့္အကဲျဖတ္ေကာ္မတီမွ ယခင္ျပီးခဲ့သည့္ ေက်ာင္းမွတ္တမ္းႏွင့္ Mandalay International School of Acumen မွ စစ္ေဆးေသာ၀င္ခြင့္စာေမးပြဲေပၚမူတည္၍ ေလွ်ာက္ထားသူမွ တက္ေရာက္ႏိုင္ျခင္း ရွိ ၊မရွိကို ဆံုးျဖတ္ခ်က္ ခ်ပါလိမ့္မည္။ ကေလး၏ရလဒ္မ်ားကို  email (သို႔မဟုတ္) message မွတစ္ဆင့္ ေျဖၾကား ေပးသြားမည္ျဖစ္ပါသည္။",
        section6: "သင့္ကေလး၏အတန္းကို အတည္ျပဳျပီးသည့္အခါ ေငြေပးေခ်မႈႏွင့္ ျပန္အမ္းေငြမူ၀ါဒပါေသာ ေတာင္းခံလႊာတြင္ လက္မွတ္ေရးထိုး၍ မွတ္ပံုတင္ေၾကးေပးရန္ လိုအပ္ပါသည္။",
        contactText: "ပိုမိုသိရွိလိုပါက ေက်းဇူးျပဳ၍ email (သို႔မဟုတ္) ကၽြန္ုပ္တို႔၏ေက်ာင္းသားေရးရာဌာန (01)450396-7 , (01)9410010-20 သို႔ ဆက္သြယ္ေမးျမန္းစံုစမ္းႏိုင္ပါသည္။"
    }


};

// --- Component ---

const AdmissionTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabType>('English');
    const data = content[activeTab];
    const isMyanmar = activeTab === 'Zawgyi' || activeTab === 'Unicode';

    return (
        <section className="py-16 bg-gray-50 dark:bg-black">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-core mb-4">
                        Admissions Process
                    </h2>
                    <div className="w-20 h-1 bg-brand-core mx-auto rounded-full"></div>
                </div>

                {/* Tabs Navigation */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex bg-white dark:bg-neutral-900 rounded-lg p-1 shadow-sm border border-gray-200 dark:border-neutral-800">
                        {(Object.keys(content) as TabType[]).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`
                                    px-6 py-2 rounded-md text-sm font-medium transition-all duration-200
                                    ${activeTab === tab
                                        ? 'bg-brand-core text-white shadow-md'
                                        : 'text-gray-500 hover:text-brand-core dark:text-gray-400 dark:hover:text-white'
                                    }
                                    ${tab === 'Zawgyi' ? 'font-zawgyi' : ''} 
                                `}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Card */}
                <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-gray-100 dark:border-brand-core/10 overflow-hidden">

                    {/* Intro */}
                    <div className="bg-brand-core/5 dark:bg-brand-core/10 p-8 border-b border-brand-core/10">
                        <p className={`text-lg text-brand-core dark:text-brand-core font-medium text-center leading-relaxed ${activeTab === 'Zawgyi' ? 'font-zawgyi' : ''}`}>
                            {data.intro}
                        </p>
                    </div>

                    <div className={`p-8 md:p-10 space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line ${activeTab === 'Zawgyi' ? 'font-zawgyi' : ''}`}>

                        {/* Section 1 */}
                        <p>{data.section1}</p>

                        {/* Section 2 - Includes Email */}
                        <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg border-l-4 border-brand-core">
                            {data.section2.split('contact@bfi-edu.com')[0]}
                            <a href="mailto:contact@bfi-edu.com" className="text-brand-core font-bold hover:underline">
                                contact@bfi-edu.com
                            </a>
                        </div>

                        {/* Section 3 */}
                        <p>{data.section3}</p>

                        {/* Document List */}
                        <div className="pl-2 md:pl-4">
                            <p className="font-bold text-gray-900 dark:text-white mb-3">
                                {data.listTitle}
                            </p>
                            <ul className="list-disc pl-5 space-y-2 marker:text-brand-core">
                                {data.listItems.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Section 4 */}
                        <p>{data.section4}</p>

                        {/* Section 5 */}
                        <p>{data.section5}</p>

                        {/* Section 6 */}
                        <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg text-blue-800 dark:text-blue-200">
                            {data.section6}
                        </div>
                    </div>

                    {/* Footer Contact */}
                    <div className="bg-gray-50 dark:bg-neutral-950 p-6 md:p-8 text-center border-t border-gray-100 dark:border-neutral-800">
                        <p className={`text-gray-600 dark:text-gray-400 font-medium ${activeTab === 'Zawgyi' ? 'font-zawgyi' : ''}`}>
                            {data.contactText}
                        </p>
                    </div>

                </div>
            </div>
            <div className='text-center mt-10'>
                <a href="/pdf/MISA-Admission-Form.pdf" target='_blank' className="rounded-full cursor-pointer bg-brand-core px-8 py-3 text-sm font-bold text-white hover:text-black transition hover:bg-brand">
                    Download Application Form
                </a>
            </div>
        </section>
    );
}

export default AdmissionTabs;
const translations ={
    en:{
        Portofilio:'Car Types',
        Service:'Company Services',
        Notilla:'Work Details',
        map:'Company Location',
        CONTACT:'Contact Us',
        lafacom:'Lafacom Public Transport Company',
        Llafacom:'Lafacom Public Transport Company',
        Browse:'Browse with us the latest models of taxis with the latest security systems',
        Register:'Register now',
        Services:'Services provided by the company',
        Insurance:'Car insurance service',
        Acc:'Company cars are insured against third parties, so there is no need to worry about traffic accidents.',
        Main:'Free maintenance service',
        Mainn:'The company provides free maintenance service, which includes spare parts - the driver is not responsible except for his car.s gas',
        card:'Operating card validity',
        cardd:'The company automatically renews the vehicles operating card before it expires to avoid violations by the Ministry of Transport',
        sadad:'Payment facilities',
        sadadd:'There are payment facilities, the details of which you can know when you receive your car.',
        support:'Support Service',
        supportt:'A team is available to assist you and answer all your questions.',
        discount:'Discount Service',
        discountt:'In the event of a car breakdown, the support team will deduct the rent if the parking period exceeds 6 hours.',
        cars:'Cars available for rent',
        hy:'Hyundai Sonata Limousine 2024 Model',
        see:'see more',
        sonn:'Hyundai Sonata Limousine 2025 Model',
        son:'Hyundai Sonata Limousine 2022 Model',
        kia:'Kia K5 Limousine 2023 Model',
        sonnn:'Hyundai Sonata Limousine 2020 Model',
        sys:'Company system in tires and batteries',
        bear:'The company bears the cost of batteries and tires, up to 4 tires per car and two batteries per year for all cars.',
        loc:'Company Location',
        Inter:'Company interface',
        connn:'To Contact Leave your Details',
        namee:'Insert Your Name',
        Phonee:'Insert Your Phone',
        emaill:'Insert Your Email',
        addresss:'Insert Your Address',
        messagee:'Insert Your Message',
        Subb:'Send',
        traa:'Designed by accountant and programmer / Mahmoud Omeira. Phone or WhatsApp 0536159020',
        
    },
    ar:{
        Portofilio:'انواع السيارات',
        Service:'خدمات الشركة',
        Notilla:'نظام العمل',
        map:'موقع الشركة',
        CONTACT:'تواصل معنا',
        lafacom:'شــركة لــفاكم للأجــرة العامـــة',
        Llafacom:'شــركة لــفاكم للأجــرة العامـــة',
        Browse:'تصفح معنا احدث الموديلات للسيارات الاجرة مع وجود احدث الانظمة الامنية',
        Register:'سجل الان',
        Services:'الخدمات التي تقدمها الشركة',
        Insurance:'خـــدمــة تــــأمين السيـــارات',
        Acc:'سيارات الشركة مؤمنة تأمين ضد الغير فلا داعي للقلق من الحوادث المرورية',
        Main:'خـــدمة الصـــيانة المجـــانية',
        Mainn:'تقــدم الشــركة خـدمة الصــيانة المــجانية والـذي يـشمل قـطع الغيــار - فالــسائق غــير مسئــول ســوي عــن بــنزين سيارتة',
        card:'صلاحية كرت التــشغيل',
        cardd:'كــارت  الـتشغيل الــخاص بالسيــارة تقــوم الشركة بتــجديدة تلقــائيا قبــل انتهاؤة تفــاديــأ لمخــالفات وزارة النقل ',
        sadad:'تسهيلات الســداد',
        sadadd:'يــوجد تســهيلات بالسـداد يمكــنك معــرفة تفــاصيلــها عند اسـتلام سيــارتك',
        support:'خــدمة الــدعم',
        supportt:'يتــوفر فــريق عمـل يعمــلون عــلي مساعــدتك والــحصول عـلي جواب علي كـل الاستفسارات',
        discount:'خـدمة الخــصم',
        discountt:'فـي حــال تعطــل السيارة - يــقوم فريــق الدعم بــالخصم مــن الايجار اذا تجاوزت مدة الايـقـاف 6 ساعــات',
        cars:'الـــسيارات المـــتاحـــة للــــتاجيـــــر',
        hy:'هــيونــداي ســونــاتا لـيــموزيـــن مــوديــل 2024',
        see:'شاهد المزيد',
        sonn:'هــيونــداي ســونــاتا لـيــموزيـــن مــوديــل 2025 ',
        son:'هــيونــداي ســونــاتا لـيــموزيـــن مــوديــل 2022',
        kia:'كــــــــيا كــــــــي 5  لـــــيــموزيـــن مـــوديـــل 2023',
        sonnn:'هــيونــداي ســونــاتا لـيــموزيـــن مــوديــل 2020',
        sys:'نظام الشركة في الكفرات والبطاريات',
        bear:'تتحمل الشركة تكلفة البطاريات والكفرات في حدود 4 كفرات للسيارة و عدد اتنين بطارية وذلك للسنة الواحدة بالنسبة لجميع السيارات',
        loc:'مـــوقــع الـــشركـــة',
        Inter:'واجـهــــة الــشركـــة',
        connn:'للتــــواصـل اتـــرك بيانـــــاتك',
        namee:'ادخــــل اســـــمك',
        Phonee:'ادخـــــــل رقــــــم جـــوالـــك',
        emaill:'ادخــــل الايـــــميل الخــــــاص بـــك',
        addresss:'ادخــــل عنـــــوانــــك',
        messagee:'ادخـــــل رســــالــــتك',
        Subb:'ارســـــال',
        traa:'تصميم محاسب ومبرمج / محمود عميرة . فون او واتساب 0536159020',
    },
};

const languageselector=document.querySelector('select');
languageselector.addEventListener("change", (Event)=>{
    setlanguage(Event.target.value);
    localStorage.setItem("lang",Event.target.value);

});
document.addEventListener("DOMContentLoaded",()=>{
    setlanguage(localStorage.getItem("lang"));
    });
    const setlanguage=(language)=>{
        const elemets = document.querySelectorAll("[data-aa]");
elemets.forEach((elemet)=>{
    const tranlationkey=elemet.getAttribute("data-aa");
    elemet.textContent=translations[language][tranlationkey];

});
document.dir=language ==="ar" ? "rtl" : "ltr"
    };
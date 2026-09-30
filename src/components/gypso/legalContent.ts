/**
 * Contenuti legali GYPSO per le lingue aggiuntive.
 *
 * Queste sei lingue (pt, ro, nl, pl, uk, ar) completano le 11 dell'app:
 * senza di esse le pagine legali coprirebbero solo 5 lingue su 11.
 *
 * Il testo è **estratto direttamente** dai file `lib/config/l10n_*.dart`
 * dell'app GYPSO (`privacy_sec1..6_*`, `terms_sec1..6_*`, `legal_last_update`),
 * quindi è la traduzione autentica già pubblicata negli store, non una
 * riscrittura. Se l'app cambia i testi, questi blocchi vanno rigenerati.
 */

import type { SupportedLang } from "./languages"

interface Section {
  title: string
  paragraphs?: string[]
  list?: string[]
}

export interface LegalContent {
  title: string
  lastUpdated: string
  sections: Section[]
}

/** Lingue aggiunte per arrivare a 11 (le altre 5 vivono dentro le pagine). */
export type ExtraLang = Extract<SupportedLang, "pt" | "ro" | "nl" | "pl" | "uk" | "ar">

export const POLICY_EXTRA: Record<ExtraLang, LegalContent> = {
  pt: {
    title: "Política de Privacidade",
    lastUpdated: "Última atualização: Setembro de 2026 · v1.0.0",
    sections: [
      {
        title: "1. Arquitetura Zero-Cloud e Armazenamento Local",
        paragraphs: [
          "O GYPSO foi concebido nativamente segundo o princípio da \"Privacidade desde a Conceção\" (Art. 25 RGPD).",
          "Todos os dados inseridos (levantamentos CAD 2D, medições de áreas, listas de materiais, fichas de clientes, dados fiscais e orçamentos) são armazenados EXCLUSIVAMENTE de forma local no armazenamento protegido do dispositivo.",
          "A aplicação NÃO transmite, armazena nem sincroniza os seus projetos e orçamentos com servidores externos.",
        ],
      },
      {
        title: "2. Assinaturas Digitais em Ecrã Tátil",
        paragraphs: [
          "O GYPSO permite recolher assinaturas no ecrã tátil para aprovação de orçamentos:",
        ],
        list: [
          "O traçado vetorial é utilizado unicamente para aposição no orçamento PDF oficial.",
          "Não são armazenados nem analisados quaisquer dados biométricos (pressão ou velocidade do traço).",
          "As assinaturas não são partilhadas com terceiros e podem ser eliminadas a qualquer momento.",
        ],
      },
      {
        title: "3. Publicidade e Identificadores de Rede (Google AdMob)",
        paragraphs: [
          "Na versão gratuita, o GYPSO integra o SDK Google Mobile Ads (AdMob) para exibir anúncios:",
        ],
        list: [
          "O Google pode recolher e processar identificadores de publicidade anónimos do dispositivo para apresentar anúncios relevantes e prevenir fraudes.",
          "Ao atualizar para o plano PRO, todos os anúncios são desativados e nenhum identificador de publicidade é utilizado.",
        ],
      },
      {
        title: "4. Compras na Aplicação e Recibos (RevenueCat & Lojas)",
        paragraphs: [
          "A gestão de compras na aplicação e licenças Premium é realizada através do RevenueCat com Google Play Billing e Apple StoreKit:",
        ],
        list: [
          "Nenhum dado de pagamento é processado ou guardado pelo GYPSO ou RevenueCat: todos os pagamentos são geridos pela Google ou Apple.",
          "O RevenueCat processa tokens de recibos anónimos para validar a licença PRO.",
        ],
      },
      {
        title: "5. Direitos do Utilizador (RGPD Art. 15, 17, 20)",
        paragraphs: [
          "Uma vez que todos os dados de obras e orçamentos residem localmente no seu dispositivo:",
        ],
        list: [
          "Tem a propriedade e controlo exclusivo sobre os seus dados.",
          "Direito à Portabilidade: pode exportar todos os projetos a qualquer momento em formatos padrão (.zip e .cart).",
          "Direito ao Apagamento: pode eliminar obras ou desinstalar a aplicação para remover todos os registos.",
        ],
      },
      {
        title: "6. Responsável pelo Tratamento e Apoio",
        paragraphs: [
          "O responsável pelo tratamento dos dados inseridos na aplicação é o próprio utilizador (o profissional ou empresa).",
          "Para qualquer dúvida sobre a privacidade do GYPSO, consulte o endereço de email disponível na loja de aplicações.",
        ],
      },
    ],
  },
  ro: {
    title: "Politică de Confidențialitate",
    lastUpdated: "Ultima actualizare: Septembrie 2026 · v1.0.0",
    sections: [
      {
        title: "1. Arhitectură Zero-Cloud și Stocare Locală",
        paragraphs: [
          "GYPSO este proiectat nativ conform principiului „Privacy by Design” (Art. 25 GDPR).",
          "Toate datele introduse (măsurători CAD 2D, suprafețe, liste de materiale, date clienți, informații fiscale și devize) sunt stocate EXCLUSIV local în spațiul securizat al dispozitivului.",
          "Aplicația NU transmite, nu stochează și nu sincronizează proiectele și devizele dumneavoastră pe servere externe.",
        ],
      },
      {
        title: "2. Semnături Digitale pe Ecran Tactil",
        paragraphs: [
          "GYPSO permite capturarea semnăturilor pe ecran tactil pentru aprobarea devizelor:",
        ],
        list: [
          "Traseul vectorial este utilizat exclusiv pentru a fi inserat pe devizul PDF oficial.",
          "Nu se stochează și nu se analizează date biometrice (presiune, viteză de scriere).",
          "Semnăturile nu sunt partajate cu terți și pot fi șterse în orice moment.",
        ],
      },
      {
        title: "3. Publicitate și Identificatori de Rețea (Google AdMob)",
        paragraphs: [
          "În versiunea gratuită, GYPSO integrează SDK-ul Google Mobile Ads (AdMob) pentru afișarea reclamelor:",
        ],
        list: [
          "Google poate colecta identificatori publicitari anonimi de pe dispozitiv pentru a furniza anunțuri relevante și a preveni fraudele.",
          "Trecerea la planul PRO dezactivează complet toate reclamele și oprește utilizarea identificatorilor publicitari.",
        ],
      },
      {
        title: "4. Achiziții în Aplicație și Chitanțe (RevenueCat & Magazine)",
        paragraphs: [
          "Gestionarea achizițiilor și a licențelor Premium se realizează prin RevenueCat, Google Play Billing și Apple StoreKit:",
        ],
        list: [
          "Nu se stochează și nu tranzitează date bancare prin GYPSO sau RevenueCat: plățile sunt procesate securizat de Google sau Apple.",
          "RevenueCat prelucrează token-uri anonime de chitanță pentru activarea licenței PRO.",
        ],
      },
      {
        title: "5. Drepturile Utilizatorului (GDPR Art. 15, 17, 20)",
        paragraphs: [
          "Deoarece toate datele de șantier și devize sunt stocate local pe dispozitivul dumneavoastră:",
        ],
        list: [
          "Aveți controlul deplin și exclusiv asupra datelor.",
          "Dreptul la Portabilitate: puteți exporta arhiva sau proiecte individuale oricând în format standard (.zip și .cart).",
          "Dreptul la Ștergere: puteți șterge proiecte sau dezinstala aplicația pentru a elimina toate datele.",
        ],
      },
      {
        title: "6. Operatorul de Date și Suport",
        paragraphs: [
          "Operatorul datelor de șantier introduse în aplicație este utilizatorul însuși (meșterul sau compania).",
          "Pentru asistență privind confidențialitatea și securitatea GYPSO, vă rugăm să utilizați adresa de email afișată în magazinul de aplicații.",
        ],
      },
    ],
  },
  nl: {
    title: "Privacybeleid",
    lastUpdated: "Laatst bijgewerkt: September 2026 · v1.0.0",
    sections: [
      {
        title: "1. Zero-Cloud architectuur en lokale opslag",
        paragraphs: [
          "GYPSO is ontworpen volgens het principe van \"Privacy by Design\" (Art. 25 AVG).",
          "Alle ingevoerde gegevens (2D CAD-metingen, oppervlaktes, materiaallijsten, klantgegevens, fiscale data en offertes) worden UITSLUITEND lokaal opgeslagen in de beveiligde sandbox van het apparaat.",
          "De applicatie verstuurt, bewaart of synchroniseert uw projecten en offertes NIET naar externe servers.",
        ],
      },
      {
        title: "2. Digitale handtekeningen op touchscreen",
        paragraphs: [
          "GYPSO maakt het mogelijk handtekeningen vast te leggen op het touchscreen voor offerteakkoord:",
        ],
        list: [
          "Het vectorpad wordt uitsluitend gebruikt voor weergave op de officiële PDF-offerte.",
          "Er worden geen biometrische gegevens (druk, stijlsnelheid) opgeslagen of geanalyseerd.",
          "Handtekeningen worden nooit gedeeld met derden en kunnen op elk gewenst moment worden gewist.",
        ],
      },
      {
        title: "3. Advertenties en netwerk-ID's (Google AdMob)",
        paragraphs: [
          "In de gratis versie integreert GYPSO de Google Mobile Ads (AdMob) SDK om advertenties weer te geven:",
        ],
        list: [
          "Google kan anonieme advertentie-ID's van het apparaat verwerken om relevante advertenties te tonen en fraude te voorkomen.",
          "Bij een upgrade naar het PRO-abonnement worden alle advertenties uitgeschakeld en worden er geen advertentie-ID's meer gebruikt.",
        ],
      },
      {
        title: "4. In-app aankopen en ontvangstbewijzen (RevenueCat & Stores)",
        paragraphs: [
          "Het beheer van in-app aankopen en Premium-licenties verloopt via RevenueCat in combinatie met Google Play Billing en Apple StoreKit:",
        ],
        list: [
          "Er worden geen betaalgegevens opgeslagen door GYPSO of RevenueCat: betalingen worden veilig verwerkt door Google of Apple.",
          "RevenueCat verwerkt anonieme tokens om de activering van de PRO-licentie te valideren.",
        ],
      },
      {
        title: "5. Gebruikersrechten (AVG Art. 15, 17, 20)",
        paragraphs: [
          "Omdat alle project- en offertegegevens lokaal op uw toestel staan:",
        ],
        list: [
          "Hebt u het volledige en exclusieve beheer over uw data.",
          "Recht op dataportabiliteit: u kunt te allen tijde het complete archief exporteren (.zip en .cart).",
          "Recht op vergetelheid: u kunt afzonderlijke projecten wissen of de app verwijderen om alle gegevens te wissen.",
        ],
      },
      {
        title: "6. Verwerkingsverantwoordelijke en ondersteuning",
        paragraphs: [
          "De verwerkingsverantwoordelijke voor de ingevoerde gegevens is de gebruiker zelf (de vakman of het aannemersbedrijf).",
          "Voor vragen over de privacy en beveiliging van GYPSO kunt u mailen naar het adres vermeld op de app store pagina.",
        ],
      },
    ],
  },
  pl: {
    title: "Polityka prywatności",
    lastUpdated: "Ostatnia aktualizacja: Wrzesień 2026 · v1.0.0",
    sections: [
      {
        title: "1. Architektura Zero-Cloud i lokalne przechowywanie",
        paragraphs: [
          "GYPSO zostało zaprojektowane zgodnie z zasadą „Privacy by Design” (art. 25 RODO).",
          "Wszystkie wprowadzone dane (pomiary CAD 2D, wymiary powierzchni, zestawienia materiałów, dane klientów, dane podatkowe i kosztorysy) są przechowywane WYŁĄCZNIE lokalnie w bezpiecznej pamięci urządzenia.",
          "Aplikacja NIE przesyła, nie archiwizuje ani nie synchronizuje Twoich projektów i kosztorysów z zewnętrznymi serwerami.",
        ],
      },
      {
        title: "2. Cyfrowe podpisy na ekranie dotykowym",
        paragraphs: [
          "GYPSO umożliwia składanie podpisu na ekranie dotykowym w celu zatwierdzenia kosztorysu:",
        ],
        list: [
          "Ścieżka wektorowa jest używana wyłącznie do naniesienia na oficjalny dokument PDF.",
          "Żadne dane biometryczne (nacisk, prędkość kreślenia) nie są rejestrowane ani analizowane.",
          "Podpisy nie są udostępniane podmiotom trzecim i mogą być usunięte w każdej chwili.",
        ],
      },
      {
        title: "3. Reklamy i identyfikatory sieciowe (Google AdMob)",
        paragraphs: [
          "W wersji darmowej GYPSO wykorzystuje pakiet SDK Google Mobile Ads (AdMob) do wyświetlania reklam:",
        ],
        list: [
          "Google może przetwarzać anonimowe identyfikatory reklamowe urządzenia w celu wyświetlania odpowiednich reklam i zapobiegania oszustwom.",
          "Przejście na wersję PRO wyłącza wszelkie reklamy i eliminuje użycie identyfikatorów reklamowych.",
        ],
      },
      {
        title: "4. Zakupy w aplikacji i paragony (RevenueCat i sklepy)",
        paragraphs: [
          "Obsługa zakupów w aplikacji i weryfikacja licencji Premium odbywa się za pośrednictwem platformy RevenueCat, Google Play Billing i Apple StoreKit:",
        ],
        list: [
          "Żadne dane płatnicze nie są przetwarzane ani przechowywane przez GYPSO lub RevenueCat: płatności obsługują Google lub Apple.",
          "RevenueCat przetwarza anonimowe tokeny w celu weryfikacji uprawnień PRO.",
        ],
      },
      {
        title: "5. Prawa Użytkownika (RODO Art. 15, 17, 20)",
        paragraphs: [
          "Ponieważ wszelkie dane budowy i kosztorysy przechowywane są lokalnie na Twoim urządzeniu:",
        ],
        list: [
          "Masz pełną kontrolę i wyłączną własność swoich danych.",
          "Prawo do przenoszenia danych: możesz w każdej chwili wyeksportować całe archiwum lub pojedyncze projekty (.zip i .cart).",
          "Prawo do bycia zapomnianym: możesz usunąć pojedyncze budowy lub odinstalować aplikację, usuwając wszelkie dane.",
        ],
      },
      {
        title: "6. Administrator Danych i Wsparcie",
        paragraphs: [
          "Administratorem danych budowy wprowadzonych do aplikacji jest sam użytkownik (rzemieślnik lub przedsiębiorstwo).",
          "W przypadku pytań dotyczących prywatności GYPSO prosimy o kontakt pod adresem e-mail podanym w sklepie z aplikacjami.",
        ],
      },
    ],
  },
  uk: {
    title: "Політика конфіденційності",
    lastUpdated: "Останнє оновлення: Вересень 2026 · v1.0.0",
    sections: [
      {
        title: "1. Архітектура Zero-Cloud та локальне збереження",
        paragraphs: [
          "GYPSO розроблено за принципом «Privacy by Design» (ст. 25 GDPR).",
          "Усі введені дані (2D CAD заміри, площі поверхонь, списки матеріалів, контакти клієнтів, податкові реквізити та кошториси) зберігаються ВИКЛЮЧНО локально в захищеному сховищі пристрою.",
          "Додаток НЕ передає, не зберігає і не синхронізує ваші проєкти та кошториси із зовнішніми серверами.",
        ],
      },
      {
        title: "2. Цифрові підписи на сенсорному екрані",
        paragraphs: [
          "GYPSO дозволяє отримати підпис на сенсорному екрані для підтвердження кошторису:",
        ],
        list: [
          "Векторний контур використовується виключно для вставки в офіційний PDF-кошторис.",
          "Жодні біометричні дані (сила натиску, швидкість проведення) не зберігаються й не аналізуються.",
          "Підписи не передаються третім особам і можуть бути видалені в будь-який момент.",
        ],
      },
      {
        title: "3. Реклама та мережеві ідентифікатори (Google AdMob)",
        paragraphs: [
          "У безкоштовній версії GYPSO використовує Google Mobile Ads (AdMob) SDK для показу реклами:",
        ],
        list: [
          "Google може збирати та обробляти анонімні рекламні ідентифікатори пристрою для показу релевантної реклами та запобігання шахрайству.",
          "Перехід на тариф PRO повністю вимикає рекламу і припиняє використання рекламних ідентифікаторів.",
        ],
      },
      {
        title: "4. Покупки в додатку та квитанції (RevenueCat та магазини)",
        paragraphs: [
          "Керування покупками в додатку та перевірка ліцензій Premium виконуються через платформу RevenueCat разом із Google Play Billing та Apple StoreKit:",
        ],
        list: [
          "Жодні платіжні дані не проходять і не зберігаються GYPSO або RevenueCat: платежі обробляються виключно Google або Apple.",
          "RevenueCat обробляє анонімні токени квитанцій для підтвердження активації ліцензії PRO.",
        ],
      },
      {
        title: "5. Права користувача (GDPR ст. 15, 17, 20)",
        paragraphs: [
          "Оскільки всі дані об'єктів та кошторисів зберігаються локально на вашому пристрої:",
        ],
        list: [
          "Ви маєте повний і виключний контроль над своїми даними.",
          "Право на перенесення даних: ви можете експортувати весь архів або окремі проєкти у будь-який момент у форматах .zip та .cart.",
          "Право на забуття: ви можете видалити окремі об'єкти або видалити додаток, щоб миттєво стерти всі сліди.",
        ],
      },
      {
        title: "6. Володілець даних та підтримка",
        paragraphs: [
          "Володільцем даних об'єктів, введених у додаток, є сам користувач (майстер або будівельна компанія).",
          "З будь-яких питань щодо безпеки та конфіденційності GYPSO звертайтеся за адресою електронної пошти, вказаною в магазині додатків.",
        ],
      },
    ],
  },
  ar: {
    title: "سياسة الخصوصية",
    lastUpdated: "آخر تحديث: سبتمبر 2026 — الإصدار 1.0.0",
    sections: [
      {
        title: "1. معمارية خالية من السحاب وتخزين محلي",
        paragraphs: [
          "تم تصميم GYPSO بشكل أساسي وفق مبدأ \"الخصوصية حسب التصميم\" (المادة 25 من اللائحة العامة لحماية البيانات GDPR).",
          "يتم تخزين جميع البيانات المدخلة (مخططات CAD ثنائية الأبعاد، وقياسات الأسطح، وقوائم المواد، وبيانات العملاء، والمعلومات الضريبية، وعروض الأسعار) حصرياً محلياً في التخزين الآمن للجهاز.",
          "لا يقوم التطبيق بنقل أو تخزين أو مزامنة مشاريعك وعروض أسعارك على خوادم خارجية.",
        ],
      },
      {
        title: "2. التوقيعات الرقمية على شاشة اللمس",
        paragraphs: [
          "يتيح GYPSO جمع التوقيعات على شاشة اللمس للموافقة على عروض الأسعار:",
        ],
        list: [
          "يُستخدم المسار المتجهي حصرياً لإدراجه في عرض أسعار PDF الرسمي.",
          "لا يتم تسجيل أو تحليل أي بيانات بيومترية (ضغط القلم، سرعة الرسم).",
          "لا يتم مشاركة التوقيعات مع أي طرف ثالث ويمكن حذفها في أي وقت.",
        ],
      },
      {
        title: "3. الإعلانات ومعرفات الشبكة (Google AdMob)",
        paragraphs: [
          "في الإصدار المجاني، يدمج GYPSO حزمة Google Mobile Ads (AdMob) لعرض الإعلانات:",
        ],
        list: [
          "قد تقوم Google بجمع ومعالجة معرفات إعلانية مجهولة الهوية للجهاز لتقديم إعلانات ملائمة ومنع الاحتيال.",
          "عند الترقية إلى باقة PRO، يتم إيقاف جميع الإعلانات تماماً ولا يتم استخدام أي معرفات إعلانية.",
        ],
      },
      {
        title: "4. المشتريات داخل التطبيق والإيصالات (RevenueCat والمتاجر)",
        paragraphs: [
          "تتم إدارة المشتريات داخل التطبيق والتحقق من ترخيص Premium عبر منصة RevenueCat الآمنة بالتعاون مع Google Play Billing و Apple StoreKit:",
        ],
        list: [
          "لا تمر أي بيانات دفع عبر GYPSO أو RevenueCat: تتم معالجة المعاملات بالكامل عبر خوادم Google أو Apple.",
          "يعالج RevenueCat رموز إيصالات مجهولة الهوية لتأكيد تفعيل ترخيص PRO.",
        ],
      },
      {
        title: "5. حقوق المستخدم (المواد 15، 17، 20 من GDPR)",
        paragraphs: [
          "نظراً لأن جميع بيانات المشاريع وعروض الأسعار محفوظة محلياً على جهازك:",
        ],
        list: [
          "تتمتع بالملكية والسيطرة الفورية الكاملة على بياناتك.",
          "الحق في نقل البيانات: يمكنك تصدير أرشيف العمل بالكامل أو المشاريع الفردية في أي وقت بتنسيق قياسي (.zip و .cart).",
          "الحق في الحذف: يمكنك حذف مشاريع محددة أو إلغاء تثبيت التطبيق لإزالة كافة الآثار فوراً.",
        ],
      },
      {
        title: "6. مسؤول معالجة البيانات والدعم",
        paragraphs: [
          "المسؤول عن معالجة بيانات العمل المدخلة في التطبيق هو المستخدم نفسه (الحرفي أو المقاول).",
          "لأي استفسارات حول الأمان والخصوصية في GYPSO، يرجى التواصل عبر البريد الإلكتروني المدرج في صفحة متجر التطبيقات.",
        ],
      },
    ],
  },
}

export const TERMS_EXTRA: Record<ExtraLang, LegalContent> = {
  pt: {
    title: "GYPSO — Termos de Serviço",
    lastUpdated: "Última atualização: Setembro de 2026 · v1.0.0",
    sections: [
      {
        title: "1. Objeto e Finalidade do Software",
        paragraphs: [
          "O GYPSO é uma aplicação de suporte profissional para montadores de gesso cartonado e empresas de construção a seco. Fornece ferramentas de levantamento 2D, cálculo de materiais, estimativa de peso de carga e orçamentos em PDF.",
        ],
      },
      {
        title: "2. Aviso Técnico e Estrutural (Obra)",
        paragraphs: [
          "Os cálculos de áreas, estrutura metálica e quantidade de placas fornecidos pelo GYPSO têm natureza meramente indicativa.",
        ],
        list: [
          "O GYPSO NÃO é um software de cálculo estrutural certificado e não substitui o projeto de engenharia ou fiscalização de obra.",
          "Para exigências corta-fogo ou cargas suspensas, consulte sempre os manuais dos fabricantes e a direção de obra.",
          "A correta execução da montagem e fixação é da responsabilidade exclusiva do instalador.",
        ],
      },
      {
        title: "3. Responsabilidade de Carga do Veículo",
        paragraphs: [
          "A estimativa do peso total dos materiais e o indicador para carrinhas têm valor puramente orientativo.",
        ],
        list: [
          "O peso real pode variar consoante o fabricante e a humidade absorvida.",
          "O condutor é o único responsável pelo cumprimento do peso bruto (Massa Máxima) e acondicionamento da carga.",
        ],
      },
      {
        title: "4. Validade de Orçamentos e Assinaturas no Ecrã",
        paragraphs: [
          "Os orçamentos gerados são propostas comerciais do utilizador para os seus clientes.",
        ],
        list: [
          "O criador da aplicação é alheio a quaisquer contratos ou litígios entre o profissional e o cliente.",
          "A assinatura no ecrã constitui uma Assinatura Eletrónica Simples ao abrigo do Regulamento eIDAS.",
        ],
      },
      {
        title: "5. Cópia de Segurança e Limitação de Responsabilidade",
        paragraphs: [
          "O GYPSO opera em modo offline-first: os dados residem unicamente no dispositivo do utilizador.",
        ],
        list: [
          "O utilizador deve efetuar cópias de segurança com frequência (.zip / .cart).",
          "O software é disponibilizado \"TAL COMO ESTÁ\". O criador não se responsabiliza por perdas de dados ou lucros cessantes.",
        ],
      },
      {
        title: "6. Compras na Aplicação, Licenças e Subscrições",
        paragraphs: [
          "Os pagamentos da versão PRO são processados diretamente pela Google Play Store no Android e Apple App Store no iOS:",
        ],
        list: [
          "A faturação rege-se pelos termos da respetiva loja.",
          "Pode gerir ou cancelar a sua subscrição a qualquer momento na sua conta Google ou ID Apple.",
          "O plano PRO desbloqueia o acesso ilimitado e remove todos os anúncios.",
        ],
      },
    ],
  },
  ro: {
    title: "GYPSO — Termeni și Condiții",
    lastUpdated: "Ultima actualizare: Septembrie 2026 · v1.0.0",
    sections: [
      {
        title: "1. Obiectul și Scopul Aplicației",
        paragraphs: [
          "GYPSO este o aplicație profesională pentru montatori de gips-carton și constructori. Oferă instrumente de releveu 2D, calcul estimativ al materialelor, estimarea greutății încărcăturii și generarea de devize PDF.",
        ],
      },
      {
        title: "2. Declinare Tehnică și Structurală (Șantier)",
        paragraphs: [
          "Calculele de suprafețe, structură metalică și cantități de plăci generate de GYPSO au caracter strict informativ.",
        ],
        list: [
          "GYPSO NU este un program de calcul structural certificat și nu înlocuiește proiectul tehnic avizat.",
          "Pentru cerințe anti-incendiu sau sarcini suspendate grele, consultați fișele tehnice ale producătorilor.",
          "Montajul conform normativelor și rezistența ancorajelor rămân în responsabilitatea montatorului.",
        ],
      },
      {
        title: "3. Responsabilitatea Încărcăturii Vehiculului (Codul Rutier)",
        paragraphs: [
          "Estimarea masei totale a materialelor și indicatorul de încărcare utilitară au valoare pur orientativă.",
        ],
        list: [
          "Masele reale pot varia în funcție de producător și umiditatea absorbită.",
          "Șoferul este unicul responsabil pentru respectarea masei maxime autorizate și ancorarea sigură a mărfii.",
        ],
      },
      {
        title: "4. Valabilitatea Devizelor și Semnăturilor Digitale",
        paragraphs: [
          "Devizele generate reprezintă propuneri comerciale formulate de utilizator către clienții săi.",
        ],
        list: [
          "Dezvoltatorul este terț complet față de relațiile contractuale dintre meșter și client.",
          "Semnătura pe ecran constituie o Semnătură Electronică Simplă (SES) conform Regulamentului eIDAS.",
        ],
      },
      {
        title: "5. Backup Local și Limitarea Răspunderii",
        paragraphs: [
          "GYPSO funcționează offline-first: datele sunt stocate exclusiv pe dispozitivul utilizatorului.",
        ],
        list: [
          "Utilizatorul este responsabil de efectuarea copiilor de siguranță periodice (.zip / .cart).",
          "Aplicația este furnizată „AȘA CUM ESTE”. Dezvoltatorul nu răspunde pentru pierderi de date sau întreruperi de activitate.",
        ],
      },
      {
        title: "6. Achiziții în Aplicație, Licențe și Abonamente",
        paragraphs: [
          "Plățile pentru versiunea PRO sunt procesate direct prin Google Play Store pe Android și Apple App Store pe iOS:",
        ],
        list: [
          "Facturarea se supune termenilor magazinului respectiv.",
          "Puteți gestiona sau anula abonamentul oricând din contul Google Play sau Apple ID.",
          "Trecerea la PRO deblochează accesul nelimitat și elimină complet reclamele.",
        ],
      },
    ],
  },
  nl: {
    title: "GYPSO — Servicevoorwaarden",
    lastUpdated: "Laatst bijgewerkt: September 2026 · v1.0.0",
    sections: [
      {
        title: "1. Doel en reikwijdte van de software",
        paragraphs: [
          "GYPSO is een professionele softwaretoepassing voor gipsplaatmonteurs en droogbouwbedrijven. Het biedt 2D-meettools, indicatieve materiaalberekeningen, transportgewichtramingen en het opstellen van PDF-offertes.",
        ],
      },
      {
        title: "2. Technische en constructieve disclaimer",
        paragraphs: [
          "Oppervlakteberekeningen, profielindelingen en plaatvolumes in GYPSO zijn uitsluitend indicatieve schattingen.",
        ],
        list: [
          "GYPSO is GEEN gecertificeerde constructiesoftware en vervangt geen professioneel bestek of advies.",
          "Raadpleeg bij brandwerende of zware constructies altijd de fabrikantvoorschriften en directie.",
          "De vakkundige montage en bevestigingskracht vallen volledig onder de verantwoordelijkheid van de installateur.",
        ],
      },
      {
        title: "3. Verantwoordelijkheid voertuigbelading (Verkeerswet)",
        paragraphs: [
          "De schatting van het materiaalgewicht en de bestelbus-indicatie zijn theoretische richtwaarden.",
        ],
        list: [
          "Werkelijke gewichten kunnen variëren door vocht en fabrikantafwijkingen.",
          "De bestuurder is te allen tijde zelf verantwoordelijk voor het niet overschrijden van de maximummassa en het zekeren van de lading.",
        ],
      },
      {
        title: "4. Geldigheid van offertes en touchscreen-handtekeningen",
        paragraphs: [
          "De gegenereerde offertes zijn commerciële voorstellen van de gebruiker aan zijn opdrachtgevers.",
        ],
        list: [
          "De ontwikkelaar staat geheel buiten eventuele overeenkomsten of geschillen tussen vakman en klant.",
          "Een touchscreen-handtekening geldt als eenvoudige elektronische handtekening (SES) onder de eIDAS-verordening.",
        ],
      },
      {
        title: "5. Lokale back-up en aansprakelijkheidsbeperking",
        paragraphs: [
          "GYPSO werkt offline-first: alle gegevens blijven uitsluitend op het apparaat van de gebruiker.",
        ],
        list: [
          "De gebruiker dient zelf regelmatig back-ups te maken (.zip / .cart).",
          "De software wordt geleverd \"ZOALS DEZE IS\". De ontwikkelaar is niet aansprakelijk voor dataverlies of gederfde winst.",
        ],
      },
      {
        title: "6. In-app aankopen, licenties en abonnementen",
        paragraphs: [
          "Betalingen voor de PRO-versie worden rechtstreeks verwerkt door de Google Play Store (Android) of Apple App Store (iOS):",
        ],
        list: [
          "Facturering volgt de voorwaarden van de betreffende store.",
          "U kunt uw abonnement op elk moment beheren of opzeggen via uw Google Play- of Apple-account.",
          "De PRO-versie ontgrendelt onbeperkt gebruik en verwijdert alle reclame.",
        ],
      },
    ],
  },
  pl: {
    title: "GYPSO — Warunki świadczenia usług",
    lastUpdated: "Ostatnia aktualizacja: Wrzesień 2026 · v1.0.0",
    sections: [
      {
        title: "1. Przedmiot i cel oprogramowania",
        paragraphs: [
          "GYPSO to profesjonalne oprogramowanie dla monterów suchej zabudowy i firm budowlanych. Oferuje narzędzia pomiarowe 2D, przedmiar materiałów, szacowanie masy ładunku oraz generowanie kosztorysów PDF.",
        ],
      },
      {
        title: "2. Zastrzeżenie techniczne i konstrukcyjne",
        paragraphs: [
          "Obliczenia powierzchni, rozstawu profili i ilości płyt generowane przez GYPSO mają charakter wyłącznie szacunkowy.",
        ],
        list: [
          "GYPSO NIE jest oprogramowaniem do obliczeń statyczno-konstrukcyjnych i nie zastępuje projektu budowlanego.",
          "W przypadku wymogów ppoż. (REI) lub obciążeń podwieszanych należy stosować się do wytycznych producentów.",
          "Prawidłowy montaż i dobór mocowań spoczywają na wykonawcy.",
        ],
      },
      {
        title: "3. Odpowiedzialność za ładunek pojazdu (Prawo o ruchu drogowym)",
        paragraphs: [
          "Szacunki masy materiałów oraz wskaźnik ładowności pojazdu dostawczego mają charakter orientacyjny.",
        ],
        list: [
          "Rzeczywista masa może się różnić w zależności od producenta i wilgotności.",
          "Kierowca ponosi wyłączną odpowiedzialność za przestrzeganie dopuszczalnej masy całkowitej (DMC) i zabezpieczenie ładunku.",
        ],
      },
      {
        title: "4. Ważność kosztorysów i podpisów na ekranie",
        paragraphs: [
          "Kosztorysy generowane w aplikacji stanowią oferty handlowe użytkownika dla jego klientów.",
        ],
        list: [
          "Twórca aplikacji nie jest stroną jakichkolwiek umów ani sporów pomiędzy wykonawcą a klientem.",
          "Podpis na ekranie dotykowym stanowi zwykły podpis elektroniczny w rozumieniu rozporządzenia eIDAS.",
        ],
      },
      {
        title: "5. Kopia zapasowa i ograniczenie odpowiedzialności",
        paragraphs: [
          "GYPSO działa w trybie offline-first: wszelkie dane znajdują się wyłącznie na urządzeniu użytkownika.",
        ],
        list: [
          "Użytkownik jest zobowiązany do regularnego tworzenia kopii zapasowych (.zip / .cart).",
          "Oprogramowanie dostarczane jest w stanie „TAK JAK JEST”. Twórca nie odpowiada za utratę danych czy przestoje w pracy.",
        ],
      },
      {
        title: "6. Zakupy w aplikacji, licencje i subskrypcje",
        paragraphs: [
          "Płatności za wersję PRO są realizowane bezpośrednio przez Google Play Store (Android) lub Apple App Store (iOS):",
        ],
        list: [
          "Odnawianie i rozliczenia podlegają regulaminowi danego sklepu.",
          "Subskrypcją można zarządzać w sekcji „Subskrypcje” na koncie Google Play lub Apple ID.",
          "Wersja PRO odblokowuje nielimitowany dostęp i usuwa wszelkie reklamy.",
        ],
      },
    ],
  },
  uk: {
    title: "GYPSO — Умови використання",
    lastUpdated: "Останнє оновлення: Вересень 2026 · v1.0.0",
    sections: [
      {
        title: "1. Предмет та призначення програми",
        paragraphs: [
          "GYPSO — професійне програмне забезпечення для монтажників гіпсокартону та компаній сухого будівництва. Надає інструменти 2D-замірів, орієнтовний розрахунок матеріалів, оцінку ваги вантажу та формування PDF-кошторисів.",
        ],
      },
      {
        title: "2. Технічне та конструктивне застереження",
        paragraphs: [
          "Розрахунки площ, металокаркасу та кількості листів у GYPSO мають суто орієнтовний характер.",
        ],
        list: [
          "GYPSO НЕ є сертифікованим розрахунковим комплексом і не замінює робочого проєкту інженерів.",
          "Для протипожежних (REI) або сейсмічних конструкцій керуйтеся інструкціями виробників та авторським наглядом.",
          "Правильність монтажу та надійність кріплення залишаються виключною відповідальністю майстра.",
        ],
      },
      {
        title: "3. Відповідальність за завантаження автомобіля (ПДР)",
        paragraphs: [
          "Оцінка загальної ваги матеріалів та індикатор завантаження мікроавтобуса мають орієнтовний характер.",
        ],
        list: [
          "Фактична вага може варіюватися залежно від виробника та вологості.",
          "Водій несе особисту відповідальність за дотримання дозволеної повної маси та надійність закріплення вантажу.",
        ],
      },
      {
        title: "4. Дійсність кошторисів та підписів на екрані",
        paragraphs: [
          "Сформовані кошториси є комерційними пропозиціями користувача для його замовників.",
        ],
        list: [
          "Розробник не є стороною договорів чи спорів між майстром та кінцевим клієнтом.",
          "Підпис на сенсорному екрані є простим електронним підписом згідно з чинним законодавством.",
        ],
      },
      {
        title: "5. Локальне резервне копіювання та обмеження відповідальності",
        paragraphs: [
          "GYPSO працює в режимі offline-first: усі дані зберігаються лише на пристрої користувача.",
        ],
        list: [
          "Користувач зобов'язаний регулярно створювати резервні копії (.zip / .cart).",
          "Програма надається «ЯК Є». Розробник не несе відповідальності за втрату даних або збитки від зупинки робіт.",
        ],
      },
      {
        title: "6. Покупки в додатку, ліцензії та підписки",
        paragraphs: [
          "Оплата та виставлення рахунків за версію PRO здійснюються безпосередньо через Google Play Store на Android та Apple App Store на iOS:",
        ],
        list: [
          "Поновлення та оплата регулюються правилами відповідного магазину.",
          "Ви можете керувати підпискою у розділі «Підписки» свого облікового запису Google Play або Apple ID.",
          "Тариф PRO відкриває необмежений доступ та прибирає будь-яку рекламу.",
        ],
      },
    ],
  },
  ar: {
    title: "GYPSO — شروط الخدمة",
    lastUpdated: "آخر تحديث: سبتمبر 2026 — الإصدار 1.0.0",
    sections: [
      {
        title: "1. موضوع البرنامج والغرض منه",
        paragraphs: [
          "GYPSO هو أداة برمجية احترافية لمركبي ألواح الجبس ومقاولي البناء الجاف. يوفر أدوات رفع مساحي ثنائي الأبعاد، وحساب الكميات التقريبية للمواد، وتقدير حمولة النقل، وإعداد عروض الأسعار بصيغة PDF.",
        ],
      },
      {
        title: "2. إخلاء المسؤولية الفنية والهيكلية (موقع العمل)",
        paragraphs: [
          "تعد حسابات الأسطح، وتوزيع الهياكل المعدنية، وكميات الألواح التي يحسبها GYPSO تقديرات نظرية وإرشادية فقط.",
        ],
        list: [
          "تطبيق GYPSO ليس برنامج حسابات إنشائية معتمداً ولا يغني عن المخططات الهندسية التنفيذية.",
          "في الأعمال المقاومة للحريق أو الأحمال المعلقة، يجب الالتزام بالكتيبات الفنية للمصنعين وإرشادات المشرفين.",
          "يقع التنفيذ السليم والتثبيت الآمن على عاتق فني التركيب حصرياً.",
        ],
      },
      {
        title: "3. مسؤولية حمولة المركبة (قانون المرور)",
        paragraphs: [
          "إن تقدير الوزن الإجمالي للمواد ومؤشر سعة مركبات النقل لهما طابع تقريبي توجيهي.",
        ],
        list: [
          "قد تختلف الأوزان الحقيقية باختلاف الشركات المصنعة ونسبة الرطوبة.",
          "وفقاً لقوانين السير، فإن سائق المركبة هو المسؤول الوحيد عن الالتزام بالوزن الأقصى المصرح به وتوزيع الأحمال وتثبيتها بأمان.",
        ],
      },
      {
        title: "4. صلاحية عروض الأسعار والتوقيعات على شاشة اللمس",
        paragraphs: [
          "تمثل عروض الأسعار المقترحة عروضاً تجارية يقدمها المستخدم لعملائه.",
        ],
        list: [
          "مطور التطبيق لا صلة له بأي علاقة تعاقدية أو نزاع تجاري بين الفني والعميل النهائي.",
          "يشكل التوقيع على شاشة اللمس توقيعاً إلكترونياً بسيطاً يخضع للتقدير القضائي وفق القوانين المعمول بها.",
        ],
      },
      {
        title: "5. النسخ الاحتياطي المحلي وتحديد المسؤولية",
        paragraphs: [
          "يعمل GYPSO بأسلوب وضع عدم الاتصال أولاً: تظل كافة البيانات محفوظة محلياً على جهاز المستخدم فقط.",
        ],
        list: [
          "يتحمل المستخدم مسؤولية إجراء نسخ احتياطي دوري لبياناته (.zip / .cart).",
          "يتم تقديم البرنامج \"كما هو\". لا يتحمل المطور أي مسؤولية عن فقدان البيانات أو تعطل الأعمال.",
        ],
      },
      {
        title: "6. المشتريات داخل التطبيق والتراخيص والاشتراكات",
        paragraphs: [
          "تتم مدفوعات وفواتير إصدار PRO مباشرة عبر Google Play Store على Android و Apple App Store على iOS:",
        ],
        list: [
          "يخضع التجديد والفوترة لشروط المتجر المعني.",
          "يمكن إدارة الاشتراك أو إلغاؤه في أي وقت عبر قسم \"الاشتراكات\" في حسابك.",
          "يتيح الاشتراك في PRO الاستخدام غير المحدود ويزيل الإعلانات تماماً.",
        ],
      },
    ],
  },
}

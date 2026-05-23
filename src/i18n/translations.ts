import {
  VIOLATION_CODES,
  normalizeViolationCode,
  type ViolationCode,
} from "@/data/violations";

export type Locale = "en" | "fr" | "ar";

export type TranslationKeys = {
  langLabel: string;
  home: {
    appName: string;
    tagline: string;
    taglineHighlight: string;
    subtitle: string;
    officerTitle: string;
    officerDesc: string;
    officerSteps: [string, string, string];
    ownerTitle: string;
    ownerDesc: string;
    ownerSteps: [string, string, string];
    footer: string;
  };
  common: {
    back: string;
    home: string;
    continue: string;
    done: string;
    matched: string;
    licensePlate: string;
    violation: string;
    status: string;
    owner: string;
    vehicle: string;
    location: string;
    scannedAt: string;
    color: string;
    garage: string;
    distance: string;
    openNow: string;
    closed: string;
    km: string;
    min: string;
    optional: string;
    photos: string;
    add: string;
    front: string;
    side: string;
    platePhoto: string;
    stepOf3: string;
    ownerNotified: string;
  };
  steps: { scan: string; details: string; assign: string };
  violations: {
    no_parking_zone: string;
    double_parking: string;
    sidewalk_parking: string;
    blocking_access: string;
    handicap_zone: string;
    yellow_line: string;
    crosswalk: string;
    obstructing_traffic: string;
    bus_stop: string;
  };
  statuses: { towed: string; pendingTow: string; released: string };
  officer: {
    scanTitle: string;
    scanSubtitle: string;
    tapFrame: string;
    capturePhoto: string;
    newImpoundTitle: string;
    newImpoundSubtitle: string;
    selectViolation: string;
    selectStatus: string;
    registryTitle: string;
    registryHint: string;
    gpsLogged: string;
    officerNotes: string;
    notesPlaceholder: string;
    documentTitle: string;
    documentSubtitle: string;
    violationPhotos: string;
    gpsAuto: string;
    assignGarage: string;
    confirmNotify: string;
    confirmedTitle: string;
    confirmedSubtitle: string;
    viewOwnerApp: string;
    newImpound: string;
    previewOwner: string;
  };
  owner: {
    emptyTitle: string;
    emptyDesc: string;
    emptyConfirm: string;
    simulateOfficer: string;
    myVehicle: string;
    myVehicleSubtitle: string;
    myVehicleEmptySubtitle: string;
    notification: string;
    towedAt: string;
    activeImpound: string;
    carTowed: string;
    towedFrom: string;
    evidencePhotos: string;
    payRetrieve: string;
    payRetrieveSubtitle: string;
    payRetrievePaidSubtitle: string;
    viewReleaseCode: string;
    payAndRetrieve: string;
    tapMap: string;
    feeBreakdown: string;
    towingFee: string;
    storageDay: string;
    totalDue: string;
    payGetCode: string;
    processing: string;
    paymentConfirmed: string;
    yourReleaseCode: string;
    copyCode: string;
    copied: string;
    showCodeAtGarage: string;
  };
};

const en: TranslationKeys = {
  langLabel: "Language",
  home: {
    appName: "Car Impound",
    tagline: "Smart towing,",
    taglineHighlight: "instant clarity",
    subtitle:
      "Connect officers and owners in real time — scan, notify, pay, release.",
    officerTitle: "Officer / Agent",
    officerDesc: "Document violations and assign impound garages on site.",
    officerSteps: ["Scan", "Photos", "Assign"],
    ownerTitle: "Vehicle Owner",
    ownerDesc:
      "See proof, locate your car, pay fees, and get your release code.",
    ownerSteps: ["Notify", "Pay", "Retrieve"],
    footer: "SupMTI · Interdisciplinary Project",
  },
  common: {
    back: "Back",
    home: "Home",
    continue: "Continue",
    done: "Done",
    matched: "Matched",
    licensePlate: "License plate",
    violation: "Violation",
    status: "Status",
    owner: "Owner",
    vehicle: "Vehicle",
    location: "Location",
    scannedAt: "Scanned at",
    color: "Color",
    garage: "Garage",
    distance: "Distance",
    openNow: "Open now",
    closed: "Closed",
    km: "km",
    min: "min",
    optional: "optional",
    photos: "photos",
    add: "Add",
    front: "Front",
    side: "Side",
    platePhoto: "Plate",
    stepOf3: "Step {n} of 3",
    ownerNotified: "Owner notified",
  },
  steps: { scan: "Scan", details: "Details", assign: "Assign" },
  violations: {
    no_parking_zone: "No parking zone (prohibited)",
    double_parking: "Double parking (double file)",
    sidewalk_parking: "Parking on sidewalk",
    blocking_access: "Blocking garage or building access",
    handicap_zone: "Disabled parking space",
    yellow_line: "Stopping on yellow line",
    crosswalk: "Parking on crosswalk",
    obstructing_traffic: "Obstructing traffic",
    bus_stop: "Parking at bus stop",
  },
  statuses: { towed: "Towed", pendingTow: "Pending tow", released: "Released" },
  officer: {
    scanTitle: "Scan license plate",
    scanSubtitle:
      "Center the plate inside the frame. We'll match owner records automatically.",
    tapFrame: "Tap the frame to simulate capture",
    capturePhoto: "Capture photo",
    newImpoundTitle: "New impound",
    newImpoundSubtitle: "Verify registry data, then set violation and status.",
    selectViolation: "Select the violation type.",
    selectStatus: "Select the current status.",
    registryTitle: "Auto-filled from registry",
    registryHint: "Verify before continuing",
    gpsLogged: "GPS & timestamp logged",
    officerNotes: "Officer notes",
    notesPlaceholder: "e.g. Blocking fire lane, hazard lights on…",
    documentTitle: "Document & assign",
    documentSubtitle:
      "Add evidence photos and choose the impound garage.",
    violationPhotos: "Violation photos",
    gpsAuto: "GPS & timestamp attached automatically",
    assignGarage: "Assign garage",
    confirmNotify: "Confirm & notify owner",
    confirmedTitle: "Impound confirmed",
    confirmedSubtitle:
      "The owner has been notified by push/SMS. They can now see this case in their app.",
    viewOwnerApp: "View owner app",
    newImpound: "New impound",
    previewOwner:
      "To preview the owner experience, choose Vehicle Owner from the home screen.",
  },
  owner: {
    emptyTitle: "No active impound",
    emptyDesc:
      "Complete an impound as an officer first. After you confirm and notify the owner, the case will appear here instantly.",
    emptyConfirm: "Confirm & notify owner",
    simulateOfficer: "Simulate officer flow",
    myVehicle: "My vehicle",
    myVehicleSubtitle:
      "Review violation details and evidence before payment.",
    myVehicleEmptySubtitle:
      "Your impound details will appear here after an officer confirms a tow.",
    notification: "New notification",
    towedAt: "Towed",
    activeImpound: "Active impound",
    carTowed: "Your car was towed",
    towedFrom: "Towed from",
    evidencePhotos: "Evidence photos",
    payRetrieve: "Pay & retrieve",
    payRetrieveSubtitle:
      "Navigate to the garage, pay fees, and receive your release code.",
    payRetrievePaidSubtitle:
      "Show your release code at the garage, then tap Done when finished.",
    viewReleaseCode: "View release code",
    payAndRetrieve: "Pay & retrieve vehicle",
    tapMap: "Tap for directions",
    feeBreakdown: "Fee breakdown",
    towingFee: "Towing fee",
    storageDay: "Storage ({n} day)",
    totalDue: "Total due",
    payGetCode: "Pay & get release code",
    processing: "Processing…",
    paymentConfirmed: "Payment confirmed",
    yourReleaseCode: "Your release code",
    copyCode: "Copy code",
    copied: "Copied",
    showCodeAtGarage: "Show this code at the garage to retrieve your vehicle",
  },
};

const fr: TranslationKeys = {
  langLabel: "Langue",
  home: {
    appName: "Fourrière",
    tagline: "Remorquage intelligent,",
    taglineHighlight: "clarté immédiate",
    subtitle:
      "Reliez agents et propriétaires en temps réel — scan, notification, paiement, retrait.",
    officerTitle: "Agent / Officier",
    officerDesc:
      "Documentez les infractions et assignez la fourrière sur place.",
    officerSteps: ["Scan", "Photos", "Assigner"],
    ownerTitle: "Propriétaire",
    ownerDesc:
      "Preuves, localisation, paiement des frais et code de libération.",
    ownerSteps: ["Alerte", "Payer", "Retirer"],
    footer: "SupMTI · Projet interdisciplinaire",
  },
  common: {
    back: "Retour",
    home: "Accueil",
    continue: "Continuer",
    done: "Terminé",
    matched: "Correspondance",
    licensePlate: "Plaque d'immatriculation",
    violation: "Infraction",
    status: "Statut",
    owner: "Propriétaire",
    vehicle: "Véhicule",
    location: "Lieu",
    scannedAt: "Scanné à",
    color: "Couleur",
    garage: "Fourrière",
    distance: "Distance",
    openNow: "Ouvert",
    closed: "Fermé",
    km: "km",
    min: "min",
    optional: "facultatif",
    photos: "photos",
    add: "Ajouter",
    front: "Avant",
    side: "Côté",
    platePhoto: "Plaque",
    stepOf3: "Étape {n} sur 3",
    ownerNotified: "Propriétaire notifié",
  },
  steps: { scan: "Scan", details: "Détails", assign: "Assigner" },
  violations: {
    no_parking_zone: "Stationnement interdit",
    double_parking: "Stationnement en double file",
    sidewalk_parking: "Stationnement sur trottoir",
    blocking_access: "Entrée de garage ou passage bloqué",
    handicap_zone: "Place réservée aux personnes à mobilité réduite",
    yellow_line: "Arrêt sur ligne jaune",
    crosswalk: "Stationnement sur passage piéton",
    obstructing_traffic: "Gêne à la circulation",
    bus_stop: "Stationnement à l'arrêt de bus",
  },
  statuses: {
    towed: "Remorqué",
    pendingTow: "Remorquage en attente",
    released: "Libéré",
  },
  officer: {
    scanTitle: "Scanner la plaque",
    scanSubtitle:
      "Centrez la plaque dans le cadre. Nous retrouverons le propriétaire automatiquement.",
    tapFrame: "Appuyez sur le cadre pour simuler la capture",
    capturePhoto: "Prendre la photo",
    newImpoundTitle: "Nouvelle mise en fourrière",
    newImpoundSubtitle:
      "Vérifiez le registre, puis choisissez l'infraction et le statut.",
    selectViolation: "Sélectionnez le type d'infraction.",
    selectStatus: "Sélectionnez le statut actuel.",
    registryTitle: "Rempli automatiquement (registre)",
    registryHint: "Vérifiez avant de continuer",
    gpsLogged: "GPS et horodatage enregistrés",
    officerNotes: "Notes de l'agent",
    notesPlaceholder: "ex. Voie de secours, warnings allumés…",
    documentTitle: "Documenter et assigner",
    documentSubtitle:
      "Ajoutez des photos et choisissez la fourrière.",
    violationPhotos: "Photos de l'infraction",
    gpsAuto: "GPS et horodatage ajoutés automatiquement",
    assignGarage: "Assigner une fourrière",
    confirmNotify: "Confirmer et notifier le propriétaire",
    confirmedTitle: "Fourrière confirmée",
    confirmedSubtitle:
      "Le propriétaire a été notifié par push/SMS. Il voit le dossier dans son application.",
    viewOwnerApp: "Voir l'app propriétaire",
    newImpound: "Nouvelle fourrière",
    previewOwner:
      "Pour voir l'expérience propriétaire, choisissez Propriétaire depuis l'accueil.",
  },
  owner: {
    emptyTitle: "Aucune fourrière active",
    emptyDesc:
      "Terminez d'abord une fourrière côté agent. Après Confirmer et notifier, le dossier apparaît ici.",
    emptyConfirm: "Confirmer et notifier le propriétaire",
    simulateOfficer: "Simuler le parcours agent",
    myVehicle: "Mon véhicule",
    myVehicleSubtitle:
      "Consultez l'infraction et les preuves avant le paiement.",
    myVehicleEmptySubtitle:
      "Les détails apparaîtront ici après confirmation par un agent.",
    notification: "Nouvelle notification",
    towedAt: "Remorqué",
    activeImpound: "Fourrière active",
    carTowed: "Votre voiture a été remorquée",
    towedFrom: "Remorqué depuis",
    evidencePhotos: "Photos preuves",
    payRetrieve: "Payer et récupérer",
    payRetrieveSubtitle:
      "Allez à la fourrière, payez les frais et recevez votre code.",
    payRetrievePaidSubtitle:
      "Présentez le code à la fourrière, puis appuyez sur Terminé.",
    viewReleaseCode: "Voir le code de sortie",
    payAndRetrieve: "Payer et récupérer le véhicule",
    tapMap: "Appuyez pour l'itinéraire",
    feeBreakdown: "Détail des frais",
    towingFee: "Frais de remorquage",
    storageDay: "Stockage ({n} jour)",
    totalDue: "Total dû",
    payGetCode: "Payer et obtenir le code",
    processing: "Traitement…",
    paymentConfirmed: "Paiement confirmé",
    yourReleaseCode: "Votre code de sortie",
    copyCode: "Copier le code",
    copied: "Copié",
    showCodeAtGarage:
      "Présentez ce code à la fourrière pour récupérer votre véhicule",
  },
};

const ar: TranslationKeys = {
  langLabel: "اللغة",
  home: {
    appName: "حجز المركبات",
    tagline: "سحب ذكي،",
    taglineHighlight: "وضوح فوري",
    subtitle:
      "ربط الشرطة والمالكين في الوقت الفعلي — مسح، إشعار، دفع، استلام.",
    officerTitle: "عون / شرطي",
    officerDesc: "توثيق المخالفة وتعيين مستودع الحجز في الموقع.",
    officerSteps: ["مسح", "صور", "تعيين"],
    ownerTitle: "مالك المركبة",
    ownerDesc: "عرض الأدلة، الموقع، دفع الرسوم والحصول على رمز الإفراج.",
    ownerSteps: ["إشعار", "دفع", "استلام"],
    footer: "SupMTI · مشروع متعدد التخصصات",
  },
  common: {
    back: "رجوع",
    home: "الرئيسية",
    continue: "متابعة",
    done: "تم",
    matched: "متطابق",
    licensePlate: "لوحة التسجيل",
    violation: "المخالفة",
    status: "الحالة",
    owner: "المالك",
    vehicle: "المركبة",
    location: "الموقع",
    scannedAt: "وقت المسح",
    color: "اللون",
    garage: "المستودع",
    distance: "المسافة",
    openNow: "مفتوح الآن",
    closed: "مغلق",
    km: "كم",
    min: "د",
    optional: "اختياري",
    photos: "صور",
    add: "إضافة",
    front: "أمام",
    side: "جانب",
    platePhoto: "لوحة",
    stepOf3: "الخطوة {n} من 3",
    ownerNotified: "تم إشعار المالك",
  },
  steps: { scan: "مسح", details: "تفاصيل", assign: "تعيين" },
  violations: {
    no_parking_zone: "وقوف في منطقة ممنوعة",
    double_parking: "الوقوف على صفين (دوبل فيل)",
    sidewalk_parking: "الوقوف على الرصيف",
    blocking_access: "إغلاق مدخل مرآب أو ممر",
    handicap_zone: "مكان مخصص لذوي الاحتياجات الخاصة",
    yellow_line: "التوقف على الخط الأصفر",
    crosswalk: "الوقوف على ممر المشاة",
    obstructing_traffic: "إعاقة حركة المرور",
    bus_stop: "الوقوف عند محطة الحافلة",
  },
  statuses: {
    towed: "تم السحب",
    pendingTow: "سحب قيد الانتظار",
    released: "تم الإفراج",
  },
  officer: {
    scanTitle: "مسح لوحة التسجيل",
    scanSubtitle:
      "ضع اللوحة داخل الإطار. سنجلب بيانات المالك تلقائياً.",
    tapFrame: "اضغط على الإطار لمحاكاة الالتقاط",
    capturePhoto: "التقاط صورة",
    newImpoundTitle: "حجز جديد",
    newImpoundSubtitle: "تحقق من السجل، ثم حدد المخالفة والحالة.",
    selectViolation: "اختر نوع المخالفة.",
    selectStatus: "اختر الحالة الحالية.",
    registryTitle: "مملوء تلقائياً من السجل",
    registryHint: "تحقق قبل المتابعة",
    gpsLogged: "تم تسجيل GPS والوقت",
    officerNotes: "ملاحظات العون",
    notesPlaceholder: "مثال: إغلاق ممر إطفاء…",
    documentTitle: "توثيق وتعيين",
    documentSubtitle: "أضف صوراً واختر مستودع الحجز.",
    violationPhotos: "صور المخالفة",
    gpsAuto: "GPS والوقت يُرفقان تلقائياً",
    assignGarage: "تعيين المستودع",
    confirmNotify: "تأكيد وإشعار المالك",
    confirmedTitle: "تم تأكيد الحجز",
    confirmedSubtitle:
      "تم إشعار المالك عبر push/SMS. يمكنه رؤية الملف في تطبيقه.",
    viewOwnerApp: "عرض تطبيق المالك",
    newImpound: "حجز جديد",
    previewOwner:
      "لمعاينة تجربة المالك، اختر مالك المركبة من الصفحة الرئيسية.",
  },
  owner: {
    emptyTitle: "لا يوجد حجز نشط",
    emptyDesc:
      "أكمل الحجز كعون أولاً. بعد تأكيد وإشعار المالك، يظهر الملف هنا فوراً.",
    emptyConfirm: "تأكيد وإشعار المالك",
    simulateOfficer: "محاكاة مسار العون",
    myVehicle: "مركبتي",
    myVehicleSubtitle: "راجع المخالفة والأدلة قبل الدفع.",
    myVehicleEmptySubtitle:
      "تفاصيل الحجز تظهر هنا بعد تأكيد العون.",
    notification: "إشعار جديد",
    towedAt: "تم السحب",
    activeImpound: "حجز نشط",
    carTowed: "تم سحب سيارتك",
    towedFrom: "سُحبت من",
    evidencePhotos: "صور الأدلة",
    payRetrieve: "الدفع والاستلام",
    payRetrieveSubtitle:
      "انتقل إلى المستودع، ادفع الرسوم واحصل على رمز الإفراج.",
    payRetrievePaidSubtitle:
      "اعرض الرمز في المستودع، ثم اضغط تم عند الانتهاء.",
    viewReleaseCode: "عرض رمز الإفراج",
    payAndRetrieve: "الدفع واستلام المركبة",
    tapMap: "اضغط للاتجاهات",
    feeBreakdown: "تفاصيل الرسوم",
    towingFee: "رسوم السحب",
    storageDay: "التخزين ({n} يوم)",
    totalDue: "المجموع المستحق",
    payGetCode: "الدفع والحصول على الرمز",
    processing: "جاري المعالجة…",
    paymentConfirmed: "تم تأكيد الدفع",
    yourReleaseCode: "رمز الإفراج",
    copyCode: "نسخ الرمز",
    copied: "تم النسخ",
    showCodeAtGarage: "اعرض هذا الرمز في المستودع لاستلام مركبتك",
  },
};

export const translations: Record<Locale, TranslationKeys> = { en, fr, ar };

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  ar: "AR",
};

/** Map violation code → localized label */
export function violationLabel(
  t: TranslationKeys,
  value: string,
): string {
  const code = normalizeViolationCode(value);
  return t.violations[code];
}

export function statusLabel(t: TranslationKeys, value: string): string {
  const map: Record<string, keyof TranslationKeys["statuses"]> = {
    Towed: "towed",
    "Pending tow": "pendingTow",
    Released: "released",
  };
  const key = map[value] ?? "towed";
  return t.statuses[key];
}

export function violationOptions(t: TranslationKeys) {
  return VIOLATION_CODES.map((code) => ({
    value: code,
    label: t.violations[code as ViolationCode],
  }));
}

export function statusOptions(t: TranslationKeys) {
  return [
    { value: "Towed", label: t.statuses.towed },
    { value: "Pending tow", label: t.statuses.pendingTow },
  ] as const;
}

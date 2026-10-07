/**
 * MoveWell Physiotherapy Clinic — site content
 * Edit this file to update doctor details, services, contact info, and copy.
 */

export const site = {
  clinicName: 'MoveWell',
  clinicTagline: 'Physiotherapy Clinic',
  doctorName: 'Dr. Priya Sharma',
  doctorFirstName: 'Dr. Priya',
  designation: 'Consultant Physiotherapist',
  qualifications: ['MPT (Musculoskeletal)', 'BPT'],
  experienceYears: 8,
  happyPatients: 5000,
  treatments: 12000,
  specializationsCount: 10,
  specializations: [
    'Orthopedic Physiotherapy',
    'Sports Injury Rehabilitation',
    'Neurological Physiotherapy',
    'Pediatric Physiotherapy',
    "Women's Health Physiotherapy",
  ],
  shortBio:
    'Dr. Priya Sharma is a dedicated and experienced physiotherapist with over 8 years of experience helping patients recover from pain, injuries, and movement limitations. She specialises in orthopedic, sports, and musculoskeletal physiotherapy with a patient-centred and evidence-based approach.',
  longBio: [
    'Dr. Priya Sharma is a consultant physiotherapist committed to helping people move with greater comfort, confidence, and strength. After completing her Bachelor of Physiotherapy (BPT) and Master of Physiotherapy in Musculoskeletal Sciences (MPT), she has spent more than eight years treating patients across orthopedic, sports, and neurological conditions.',
    'Her clinical approach is personalised and evidence-based. Every treatment plan begins with a detailed assessment of movement, posture, strength, and daily activity demands. She combines hands-on therapy, targeted exercise prescription, and education so patients understand their condition and can take an active role in recovery.',
    'At MoveWell Physiotherapy Clinic, Dr. Priya focuses on reducing pain, restoring mobility, and supporting long-term musculoskeletal health — without making unrealistic promises. Progress is monitored regularly, and plans are adjusted as each patient improves.',
  ],
  approach:
    'Patient-centred, evidence-based care that combines clinical assessment, manual therapy, and tailored exercise to support safer movement and everyday function.',
  city: 'Pune',
  state: 'Maharashtra',
  address: '123, Wellness Street, Aundh, Pune, Maharashtra 411007',
  addressShort: '123, Wellness Street, Aundh, Pune',
  phoneDisplay: '+91 98765 43210',
  phoneTel: '+919876543210',
  whatsappNumber: '919876543210',
  whatsappDisplay: '+91 98765 43210',
  email: 'info@movewellclinic.in',
  workingHours: [
    { days: 'Monday – Saturday', time: '9:00 AM – 7:00 PM' },
    { days: 'Sunday', time: 'Closed' },
  ],
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Aundh%20Pune&t=&z=15&ie=UTF8&iwloc=&output=embed',
  mapLink: 'https://maps.google.com/?q=123+Wellness+Street+Aundh+Pune',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com',
  },
  images: {
    hero: '/images/hero.jpg',
    doctor: '/images/doctor.jpg',
    appointment: '/images/appointment.jpg',
    recovery: '/images/recovery.jpg',
  },
  seo: {
    title: 'MoveWell Physiotherapy Clinic | Dr. Priya Sharma | Pune',
    description:
      'MoveWell Physiotherapy Clinic in Aundh, Pune offers personalised physiotherapy with Dr. Priya Sharma, MPT. Book an appointment for back pain, sports injuries, post-surgery rehab, and more.',
  },
  disclaimer:
    'Information provided on this website is for general educational purposes and does not replace professional medical advice. Outcomes vary from person to person. Please consult a qualified physiotherapist or physician for assessment and treatment.',
}

export const whatsappMessage = `Hello ${site.doctorName}, I would like to book a physiotherapy appointment.`

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Doctor', to: '/about' },
  { label: 'Services', to: '/#services' },
  { label: 'Conditions Treated', to: '/#conditions' },
  { label: 'Why Choose Us', to: '/#why-us' },
  { label: 'Testimonials', to: '/#testimonials' },
  { label: 'FAQs', to: '/#faqs' },
  { label: 'Contact', to: '/#contact' },
]

export const trustIndicators = [
  { icon: 'experience', title: 'Experienced Physiotherapist' },
  { icon: 'plans', title: 'Personalized Treatment Plans' },
  { icon: 'evidence', title: 'Evidence-Based Care' },
  { icon: 'patient', title: 'Patient-Centered Approach' },
]

export const stats = [
  { value: `${site.experienceYears}+`, label: 'Years Experience' },
  { value: `${site.happyPatients}+`, label: 'Happy Patients' },
  { value: `${site.treatments}+`, label: 'Treatments' },
  { value: `${site.specializationsCount}+`, label: 'Specializations' },
]

export const services = [
  {
    slug: 'orthopedic-physiotherapy',
    name: 'Orthopedic Physiotherapy',
    short: 'Joint, bone and muscle conditions',
    description:
      'Assessment and rehabilitation for musculoskeletal conditions affecting joints, bones, muscles, and ligaments, with a focus on restoring comfortable movement.',
    details:
      'Orthopedic physiotherapy supports people with joint pain, stiffness, post-fracture recovery, and muscle imbalance. Care may include movement assessment, manual therapy, mobility work, and a progressive exercise plan tailored to your daily activities.',
    icon: 'orthopedic',
  },
  {
    slug: 'sports-injury-rehabilitation',
    name: 'Sports Injury Rehabilitation',
    short: 'Return to sport safely',
    description:
      'Structured rehab for sports-related strains, sprains, and overuse injuries, helping athletes rebuild strength and return to activity with guidance.',
    details:
      'Sports physiotherapy focuses on injury recovery, movement quality, and a graded return to training. Plans typically combine pain modulation, strength work, neuromuscular control, and sport-specific loading — without rushing timelines.',
    icon: 'sports',
  },
  {
    slug: 'back-neck-pain-treatment',
    name: 'Back & Neck Pain Treatment',
    short: 'Relieve pain and improve mobility',
    description:
      'Care for cervical and lumbar discomfort, including posture-related pain, muscle tightness, and movement restriction.',
    details:
      'Back and neck programmes start with a thorough assessment of posture, mobility, and aggravating activities. Treatment may include hands-on therapy, mobility exercises, core and postural strengthening, and practical advice for work and daily life.',
    icon: 'back',
  },
  {
    slug: 'post-surgery-rehabilitation',
    name: 'Post-Surgery Rehabilitation',
    short: 'Faster and safer recovery',
    description:
      'Guided rehabilitation after orthopedic and related surgeries to restore mobility, strength, and confidence in everyday movement.',
    details:
      'Post-surgical physiotherapy follows your surgeon’s protocol where applicable. Sessions may include swelling management, gentle mobilisation, gait training, and progressive strengthening as healing allows. We do not promise recovery speed — progress is individual.',
    icon: 'surgery',
  },
  {
    slug: 'neurological-physiotherapy',
    name: 'Neurological Physiotherapy',
    short: 'Stroke, Parkinson’s, and related conditions',
    description:
      'Supportive therapy for neurological conditions that affect balance, coordination, walking, and functional independence.',
    details:
      'Neurological physiotherapy aims to improve movement quality, safety, and day-to-day function. Programmes are paced to each person’s abilities and may involve balance training, gait practice, and functional task practice.',
    icon: 'neuro',
  },
  {
    slug: 'joint-pain-management',
    name: 'Joint Pain Management',
    short: 'Knee, hip, shoulder pain',
    description:
      'Conservative care for painful or stiff joints, with an emphasis on mobility, strength, and activity modification.',
    details:
      'Joint-focused physiotherapy looks at how you move, load, and use the affected area. Treatment often includes education, targeted exercise, and manual techniques to support comfort and function over time.',
    icon: 'joint',
  },
  {
    slug: 'posture-correction',
    name: 'Posture Correction',
    short: 'Improve posture and prevent pain',
    description:
      'Assessment and training to improve postural awareness, workplace ergonomics, and muscle balance.',
    details:
      'Posture work is not about holding a rigid position. We assess sitting, standing, and movement habits, then build a practical plan with mobility, strengthening, and ergonomic guidance you can use at work and home.',
    icon: 'posture',
  },
  {
    slug: 'muscle-strength-rehabilitation',
    name: 'Muscle & Strength Rehabilitation',
    short: 'Rebuild strength and control',
    description:
      'Progressive strengthening programmes after injury, deconditioning, or periods of reduced activity.',
    details:
      'Strength rehabilitation is graded and specific. We identify weak or overworked muscle groups and build a plan that fits your current capacity, with clear progressions as you improve.',
    icon: 'strength',
  },
  {
    slug: 'geriatric-physiotherapy',
    name: 'Geriatric Physiotherapy',
    short: 'Mobility and balance for older adults',
    description:
      'Gentle, respectful care focused on mobility, balance, fall-risk reduction, and independence in later life.',
    details:
      'Geriatric physiotherapy supports older adults who want to stay active and independent. Sessions may include balance work, strength training, gait practice, and advice for safer movement at home.',
    icon: 'geriatric',
  },
  {
    slug: 'pediatric-physiotherapy',
    name: 'Pediatric Physiotherapy',
    short: 'Specialised care for children',
    description:
      'Age-appropriate physiotherapy for children with movement delays, postural concerns, or recovery after injury.',
    details:
      'Pediatric sessions are designed to feel supportive and engaging. Care is planned with parents or caregivers and adapted to the child’s age, comfort, and developmental needs.',
    icon: 'pediatric',
  },
]

export const conditions = [
  { name: 'Back Pain', icon: 'back' },
  { name: 'Neck Pain', icon: 'neck' },
  { name: 'Knee Pain', icon: 'knee' },
  { name: 'Shoulder Pain', icon: 'shoulder' },
  { name: 'Arthritis', icon: 'arthritis' },
  { name: 'Sports Injuries', icon: 'sports' },
  { name: 'Sciatica', icon: 'sciatica' },
  { name: 'Frozen Shoulder', icon: 'frozen' },
  { name: 'Slip Disc', icon: 'disc' },
  { name: 'Muscle Injuries', icon: 'muscle' },
  { name: 'Joint Stiffness', icon: 'stiffness' },
  { name: 'Post-Surgical Conditions', icon: 'surgical' },
]

export const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    text: 'Understand your concerns, medical history, and what you hope to achieve.',
  },
  {
    number: '02',
    title: 'Assessment',
    text: 'Detailed physical assessment of movement, strength, posture, and pain patterns.',
  },
  {
    number: '03',
    title: 'Personalized Plan',
    text: 'A customised treatment plan based on your needs, lifestyle, and goals.',
  },
  {
    number: '04',
    title: 'Recovery & Follow-up',
    text: 'Regular monitoring, guided exercises, and follow-up for longer-term results.',
  },
]

export const whyChoose = [
  { title: 'Personalized Treatment Plans', text: 'Care designed around your condition, goals, and daily routine.', icon: 'plans' },
  { title: 'Experienced Physiotherapist', text: 'Hands-on clinical experience across orthopedic and sports care.', icon: 'experience' },
  { title: 'Modern Treatment Techniques', text: 'Evidence-informed methods, exercise science, and manual therapy.', icon: 'modern' },
  { title: 'One-to-One Attention', text: 'Focused sessions so your questions and progress are never rushed.', icon: 'one' },
  { title: 'Evidence-Based Practice', text: 'Recommendations guided by clinical reasoning and current practice.', icon: 'evidence' },
  { title: 'Comfortable Clinic Environment', text: 'A calm, private setting designed to help you feel at ease.', icon: 'clinic' },
  { title: 'Regular Progress Monitoring', text: 'Clear reviews so your plan can be adjusted as you improve.', icon: 'progress' },
  { title: 'Holistic & Long-Term Care', text: 'Education and habits that support movement beyond the clinic.', icon: 'holistic' },
]

export const recoveryStories = [
  {
    condition: 'Persistent lower back discomfort',
    approach: 'Movement assessment, hands-on therapy, and a graded core and mobility programme.',
    goal: 'Return to work and daily walking with greater comfort and confidence.',
    outcome: 'The patient reported steadier movement and better activity tolerance over several weeks of guided care.',
  },
  {
    condition: 'Sports-related knee strain',
    approach: 'Load management, strengthening, and a staged return-to-training plan.',
    goal: 'Rebuild strength and resume recreational sport with reduced flare-ups.',
    outcome: 'Progress was reviewed session by session; the patient returned to training at a pace that felt sustainable.',
  },
  {
    condition: 'Frozen shoulder stiffness',
    approach: 'Gentle mobilisation, pain-aware stretching, and home exercise coaching.',
    goal: 'Improve reachable range for dressing, reaching, and sleep comfort.',
    outcome: 'Range and ease of movement improved gradually. Recovery timelines vary and were discussed openly.',
  },
]

export const testimonials = [
  {
    name: 'Sneha K.',
    condition: 'Knee Pain Treatment',
    rating: 5,
    quote:
      'Very professional and friendly approach. My knee pain has reduced significantly after a few sessions.',
  },
  {
    name: 'Amit P.',
    condition: 'Back Pain Treatment',
    rating: 5,
    quote:
      'Excellent guidance and personalised exercises. I feel much better now.',
  },
  {
    name: 'Neha M.',
    condition: 'Sports Injury Rehabilitation',
    rating: 5,
    quote:
      'Highly recommended. The doctor is very knowledgeable and supportive throughout the treatment.',
  },
  {
    name: 'Rahul S.',
    condition: 'Back Pain Treatment',
    rating: 5,
    quote:
      'The treatment was excellent and the doctor explained every exercise clearly. My back pain has improved significantly. Highly recommended.',
  },
  {
    name: 'Meera D.',
    condition: 'Posture Correction',
    rating: 5,
    quote:
      'I spend long hours at a desk. The posture advice and exercises were practical and easy to follow at work.',
  },
  {
    name: 'Karan T.',
    condition: 'Shoulder Pain Treatment',
    rating: 5,
    quote:
      'Clear explanations, unhurried sessions, and a plan I could actually stick to. I felt supported throughout.',
  },
]

export const faqs = [
  {
    q: 'What conditions can physiotherapy treat?',
    a: 'Physiotherapy can support a wide range of musculoskeletal and movement concerns, including back and neck pain, joint pain, sports injuries, post-surgical recovery, stiffness, and some neurological conditions. A clinical assessment helps determine whether physiotherapy is appropriate for you.',
  },
  {
    q: 'How long does a physiotherapy session take?',
    a: 'Most sessions last around 40–60 minutes, depending on the assessment, treatment, and exercise guidance needed. Your first visit may take a little longer so we can understand your history thoroughly.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'The number of sessions varies. It depends on your condition, how long symptoms have been present, your daily demands, and how you respond to care. After the initial assessment, we will discuss a realistic plan and review progress regularly.',
  },
  {
    q: 'Do I need a doctor’s referral?',
    a: 'A referral is not always required to book a physiotherapy consultation. If you have recent investigations, surgical notes, or a specialist’s advice, please bring them along. We will refer you onward if a medical review is needed.',
  },
  {
    q: 'Is physiotherapy painful?',
    a: 'Some techniques or exercises may feel challenging, especially if an area is already sensitive. Care is adjusted to your comfort. You should always tell us if something feels too intense so we can modify the approach.',
  },
  {
    q: 'What should I wear for my appointment?',
    a: 'Wear comfortable clothing that allows the affected area to be assessed easily — for example, shorts for knee concerns or a loose top for shoulder and neck issues. Avoid overly restrictive outfits.',
  },
  {
    q: 'Do you provide home physiotherapy?',
    a: 'Home visits may be available in selected cases, such as limited mobility or post-surgical recovery. Please call or message us to check availability in your area and discuss whether a home session is suitable.',
  },
]

export const timeSlots = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '4:00 PM',
  '5:00 PM',
  '6:00 PM',
]

export const treatmentOptions = [
  'Back Pain',
  'Neck Pain',
  'Knee Pain',
  'Shoulder Pain',
  'Sports Injury',
  'Post-Surgery Rehabilitation',
  'Neurological Condition',
  'Pediatric Physiotherapy',
  'Posture / Ergonomics',
  'Other',
]

export interface Author {
  name: string;
  contribution: string;
}

export interface ReferenceItem {
  id: string;
  authors: string;
  year: number;
  title: string;
  source: string;
  edition?: string;
  doi?: string;
  url?: string;
}

export interface IcebergDimension {
  level: number;
  id: string;
  title: string;
  position: 'above' | 'submerged';
  depthLabel: string;
  summary: string[];
  explanation: string;
  iconName: 'award' | 'brain' | 'workflow' | 'lightbulb' | 'clock';
  academicNote?: string;
}

export interface TheoryItem {
  scholar: string;
  year: string;
  concept: string;
  coreIdea: string;
  criticalQuestion: string;
  visualModel: string[];
  referenceId: string;
  caveat?: string;
}

export const posterMetadata = {
  institution: "Astana IT University",
  course: "Higher Education Pedagogy",
  degreeProgram: "Master's Degree Program • Department of General Education Disciplines",
  group: "SSE-2601",
  academicYear: "2026",
  topic: "Do High Grades Always Reflect the Actual Level of Knowledge?",
  title: "THE ICEBERG OF LEARNING",
  subtitle: "What Lies Beneath a High Grade?",
  researchQuestion: "Do high grades necessarily reflect actual understanding and the ability to apply knowledge?",
  centralArgument: "A high grade may indicate successful performance, but it is not sufficient proof of meaningful learning.",
  coreTakeaway: "A high grade is visible. Meaningful learning goes deeper.",
  finalQuote: "Grades should measure learning — not define its limits.",
  introScenario: {
    hook: "You score 95/100. But can you still explain what you learned next week?",
    context: "Hypothetical learning scenario reflecting common educational experience: high exam marks often correlate with cramming rather than durable mastery.",
  },
  groupPosition: "Grades are useful indicators of academic performance, but they cannot independently demonstrate the full depth of student learning."
};

export const authors: Author[] = [
  {
    name: "Nikita Shulmin",
    contribution: "Academic performance, memorisation-based assessment, practical assessment, and feedback."
  },
  {
    name: "Dana Kenzhebayeva",
    contribution: "Constructive alignment, practical judgment, educational philosophy, and the balance between structure and flexibility."
  },
  {
    name: "Islam Akhmetov",
    contribution: "Practical learning, formative feedback, and theoretical knowledge applied to Computer Organisation and Architecture."
  },
  {
    name: "Abzhappar Abylaikhan",
    contribution: "Interactive teaching, student participation, classroom discussions, and group-based mini-lessons."
  }
];

export const icebergDimensions: IcebergDimension[] = [
  {
    level: 1,
    id: "academic-performance",
    title: "ACADEMIC PERFORMANCE",
    position: "above",
    depthLabel: "SURFACE • 0 m",
    summary: [
      "Examination scores & test points",
      "Correct formulaic answers",
      "Reproduced textbook definitions",
      "Completed assessment requirements"
    ],
    explanation: "The visible grade provides quantifiable evidence of performance in a specific, timed assessment task. However, it does not automatically reveal how deeply or flexibly the student understands underlying principles.",
    iconName: "award",
    academicNote: "Essential for baseline benchmarking, but only represents the tip of cognitive capability."
  },
  {
    level: 2,
    id: "conceptual-understanding",
    title: "CONCEPTUAL UNDERSTANDING",
    position: "submerged",
    depthLabel: "DEPTH • -150 m",
    summary: [
      "Explain ideas in your own words",
      "Connect related & disparate concepts",
      "Understand why mechanisms function",
      "Recognize principles across domains"
    ],
    explanation: "Meaningful learning transcends rote recitation. Students grasp structural relationships and can explain the foundational rationale without relying on memorized scripts.",
    iconName: "brain"
  },
  {
    level: 3,
    id: "practical-application",
    title: "PRACTICAL APPLICATION",
    position: "submerged",
    depthLabel: "DEPTH • -350 m",
    summary: [
      "Apply theory to unfamiliar problems",
      "Solve realistic engineering tasks",
      "Justify chosen design trade-offs",
      "Diagnose system errors & anomalies"
    ],
    explanation: "Mastery becomes visible when students deploy theoretical knowledge to build, analyse, and troubleshoot real systems. Illustrated in Computer Architecture: understanding CPU ↔ RAM bus interactions rather than just defining registers.",
    iconName: "workflow",
    academicNote: "Contextual problem-solving validates genuine competence."
  },
  {
    level: 4,
    id: "critical-thinking",
    title: "CRITICAL THINKING",
    position: "submerged",
    depthLabel: "DEPTH • -550 m",
    summary: [
      "Question foundational assumptions",
      "Critically evaluate alternatives",
      "Defend methodological decisions",
      "Synthesize independent viewpoints"
    ],
    explanation: "Students actively interrogate ideas, critique methodologies, and adapt to ambiguity instead of treating knowledge as a static repository of unquestioned truths.",
    iconName: "lightbulb"
  },
  {
    level: 5,
    id: "long-term-retention",
    title: "LONG-TERM RETENTION",
    position: "submerged",
    depthLabel: "DEPTH • -800 m",
    summary: [
      "Durable recall long after exam week",
      "Explain concepts spontaneously without notes",
      "Anchor new knowledge to existing schema",
      "Transfer insights into professional practice"
    ],
    explanation: "The true measure of learning is durability. Meaningful knowledge integrates into the student's cognitive framework, remaining accessible and actionable across semesters and careers.",
    iconName: "clock"
  }
];

export const theoreticalPerspectives: TheoryItem[] = [
  {
    scholar: "John Biggs",
    year: "1996",
    concept: "Constructive Alignment",
    coreIdea: "Intended Learning Outcomes (ILOs), teaching-learning activities (TLAs), and assessment tasks must form an integrated, coherent system.",
    criticalQuestion: "Are we assessing what we actually intended to teach?",
    visualModel: [
      "INTENDED LEARNING OUTCOMES",
      "TEACHING & LEARNING ACTIVITIES",
      "ASSESSMENT METHODS & RUBRICS"
    ],
    referenceId: "biggs1996",
    caveat: "Courses targeting critical reasoning must assess reasoning directly, not fall back on memorization tests."
  },
  {
    scholar: "Paulo Freire",
    year: "2000",
    concept: "Problem-Posing vs. Banking Education",
    coreIdea: "Critiques the 'banking model' where students act as passive containers of deposited facts. Champions problem-posing dialogue and active co-construction.",
    criticalQuestion: "Are students passive recipients or active co-creators?",
    visualModel: [
      "BANKING MODEL: Passive Fact Storing",
      "VERSUS",
      "PROBLEM-POSING: Active Critical Dialogue"
    ],
    referenceId: "freire2000",
    caveat: "Supports balance: active participation works best when grounded in rigorous teacher guidance and structure."
  },
  {
    scholar: "Grabinger & Dunlap",
    year: "1995",
    concept: "Rich Environments for Active Learning (REAL)",
    coreIdea: "Promotes learning through authentic contexts, collaborative responsibility, dynamic problem-solving, and reflective inquiry.",
    criticalQuestion: "Can students utilize knowledge outside the textbook sandbox?",
    visualModel: [
      "AUTHENTIC CONTEXTS",
      "COLLABORATIVE PROBLEM-SOLVING",
      "STUDENT RESPONSIBILITY & REFLECTION"
    ],
    referenceId: "grabinger1995",
    caveat: "A completed project alone does not guarantee individual mastery; students must verbally defend their rationale."
  }
];

export const formativeFeedbackPrinciple = {
  title: "Formative Feedback as an Engine for Learning",
  coreIdea: "Assessment must serve as a continuous learning instrument rather than a retroactive post-mortem grade.",
  cycle: [
    { step: "ASSESS", desc: "Diagnostic drafts, peer reviews, low-stakes tests" },
    { step: "FEEDBACK", desc: "Timely, specific, criteria-aligned guidance" },
    { step: "REFLECT", desc: "Student self-interrogation & gap identification" },
    { step: "IMPROVE", desc: "Concrete revision before summative judgment" }
  ],
  keyRule: "Feedback is only valuable when students are afforded the structured opportunity to interpret and apply it."
};

export const assessmentComparison = {
  examinations: {
    title: "TRADITIONAL EXAMINATIONS",
    subtitle: "High Standardisation & Individual Verification",
    strengths: [
      "Efficient verification of foundational terminology & core facts",
      "Evaluates individual performance without collaborative obfuscation",
      "Tests independent problem-solving under strict time constraints",
      "High reliability and standardized comparative benchmarking"
    ],
    limitations: [
      "Prone to temporary cram-and-forget memorization strategies",
      "Limited capacity to evaluate complex, open-ended system design",
      "May reward formulaic pattern matching over authentic reasoning",
      "Fails to capture collaborative, iterative professional workflows"
    ]
  },
  projects: {
    title: "PRACTICAL & AUTHENTIC PROJECTS",
    subtitle: "Ecological Validity & Synthesis",
    strengths: [
      "Direct demonstration of theoretical knowledge applied to real tools",
      "Fosters architectural decision-making and troubleshooting",
      "Cultivates collaboration, research autonomy, and synthesis",
      "Produces authentic, verifiable tangible deliverables"
    ],
    limitations: [
      "Project completion does not automatically prove individual mastery",
      "Risk of 'free-riding' or copying boilerplate solutions from internet",
      "High grading subjectivity without structured assessment rubrics",
      "Demands individual oral defense to confirm conceptual grasp"
    ]
  },
  synthesis: "Neither examination scores nor completed projects provide a complete picture of learning when considered in isolation. True rigor emerges from their deliberate combination."
};

export const balancedAssessmentModel = {
  heading: "FROM GRADES TO MEANINGFUL LEARNING",
  subheading: "A Multi-Method Constructive Assessment Ecosystem",
  methods: [
    {
      name: "Examinations",
      badge: "Diagnostic & Foundational",
      purpose: "Verify core theoretical knowledge, individual mastery, and fluency in basic terminology under controlled conditions."
    },
    {
      name: "Practical Projects",
      badge: "Application & Creation",
      purpose: "Deploy principles in realistic environments, evaluate system trade-offs, and produce authentic artifacts."
    },
    {
      name: "Case Studies",
      badge: "Analytical Reasoning",
      purpose: "Analyze complex, ill-structured dilemmas, balance competing engineering priorities, and justify solutions."
    },
    {
      name: "Presentations & Q&A",
      badge: "Communication & Defense",
      purpose: "Articulate concepts verbally, respond to critical scrutiny, and defend technical decisions in real time."
    },
    {
      name: "Formative Feedback",
      badge: "Iterative Improvement",
      purpose: "Provide timely diagnostic feed-forward before high-stakes milestones, turning assessment into a learning tool."
    }
  ],
  computerArchExample: {
    title: "COMPUTING SYSTEMS APPLICATION",
    focus: "Computer Organisation and Architecture (SSE-2601 Case)",
    roteVsDeep: {
      rote: "Rote Memory: Reciting definitions of CPU registers, clock cycles, and RAM addressing modes on a multiple-choice sheet.",
      deep: "Meaningful Application: Tracing real-time CPU ↔ RAM bus bottlenecks, analysing memory cache hierarchies, and justifying system trade-offs."
    },
    quote: "Students demonstrate true understanding when they can explain system behaviour and justify design decisions, not just recite hardware specs."
  },
  recommendations: [
    {
      num: "01",
      title: "Constructive Alignment",
      body: "Align examination prompts and practical rubrics directly with intended higher-order learning outcomes."
    },
    {
      num: "02",
      title: "Dual Assessment Modality",
      body: "Combine timed individual verification with authentic practical tasks and oral defenses."
    },
    {
      num: "03",
      title: "Active Dialogue & Defense",
      body: "Integrate peer feedback, classroom debate, and verbal justification into technical coursework."
    },
    {
      num: "04",
      title: "Actionable Formative Loops",
      body: "Ensure draft milestones receive timely, actionable feedback before final summative grading."
    }
  ],
  highlightTakeaway: "Measure not only what students can reproduce, but also what they can explain, apply, and retain."
};

export const conclusionData = {
  mainText: "A high grade may indicate that a student has mastered the material, but it is not sufficient proof of deep understanding. Its meaning depends on the assessment task, the intended learning outcomes, and the knowledge demonstrated by the student.\n\nMeaningful learning becomes more visible when students can explain ideas, apply knowledge in unfamiliar situations, evaluate their solutions, and retain what they have learned.\n\nRather than abandoning examinations, higher education should combine different assessment methods, meaningful practical activities, active participation, and constructive feedback.\n\nUltimately, grades should support the development of knowledge and understanding rather than become the main goal of education.",
  prominentCallout: "Grades should measure learning — not define its limits."
};

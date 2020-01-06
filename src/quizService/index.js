const qBank = [
  {
    question: "WHEN YOU ARE FACED WITH A NEW PROBLEM, YOU ...",
    answers: [
      "Prioritize the problem based on the impact and address it as per the priority.",
      "Solve it in the fastest way possible.",
      "Escalate it to the supervisor and ask for a solution.",
      "Involve all stake holders and device the best way to solve the problem.  "
    ],

    values: [1, 2, 3, 4],
    questionId: "099099"
  },
  {
    question: "MY FIRST TASK EVERYDAY AT WORK IS ...",
    answers: [
      "Plan all the tasks & meetings for the day & address the tasks based on the priority",
      "Start working on the most urgent task at hand.",
      "Plan all the tasks & meetings for the day & address the easiest one first.",
      "Delegate tasks to someone else and attend to the tasks that are interesting."
    ],

    values: [1, 2, 3, 4],
    questionId: "183452"
  },
  {
    question: "WHEN YOU RECEIVE A MEETING REQUEST, YOU ...",
    answers: [
      "Accept the meeting request and may or may not attend the meeting.",
      "Do not respond to the meeting request but will try to attend the meeting if possible.",
      "Accept/Decline the meeting request/Propose another convenient time if busy.",
      "Decline the meeting request."
    ],
    values: [1, 2, 3, 4],
    questionId: "267908"
  },
  {
    question: "ON RECEIVING AN E-MAIL, YOU ...",
    answers: [
      "Prioritize it based on the subject and address the high priority ones first & setup tasks to address action items as required.",
      "Reply to it no matter what & setup tasks for action items as required.",
      "Reply to the email or act on it as soon as it is received.",
      "Ignore the mail until I receive a reminder."
    ],
    values: [1, 2, 3, 4],
    questionId: "333247"
  },
  {
    question: "WHEN ATTENDING A MEETING, YOU ...",
    answers: [
      "Will reach the meeting venue 5 minutes before the meeting starts & if unable to make it in time, will call the meeting organizer and inform him/her of the delay.",
      "Will reach the meeting in time if nothing else comes up.",
      "Arrive late since everyone comes late to the meetings.",
      "Arrive half an hour early and help with meeting setup."
    ],
    values: [1, 2, 3, 4],
    questionId: "496293"
  },
  {
    question: "WHEN ORGANIZING A MEETING, YOU ...",
    answers: [
      "Start & Finish the meeting on time, no matter what.",
      "Always have an agenda & stick to it.",
      "Prepare meetings notes/actions to track the decisions & discussions.",
      "All of the above"
    ],
    values: [1, 2, 3, 4],
    questionId: "588909"
  },
  {
    question: "WHEN HANDLING AN EXCESS WORKLOAD, YOU ...",
    answers: [
      "Let things hanging and finish it whenever you get time.",
      "Create a time management plan and execute your tasks accordingly.",
      "Work overtime and complete your workload",
      "Delegate certain tasks and handle the most important items yourself"
    ],
    values: [1, 2, 3, 4],
    questionId: "648452"
  },
  {
    question: "WHEN RUNNING LATE TO WORK, YOU ...",
    answers: [
      "Call your supervisor and inform him beforehand.",
      "Make a random excuse when you arrive.",
      "Avoid your supervisor and pretend nothing happened.",
      "Send email at the end of the month, explaining your reason."
    ],
    values: [1, 2, 3, 4],
    questionId: "786649"
  },
  {
    question: "WHEN YOU DISAGREE WITH YOUR SUPERVISOR ...",
    answers: [
      "Keep your thoughts to yourself to avoid potential conflicts.",
      "Express your opinion in a respectable manner.",
      "Wait until you get cooled down and then talk to him about the topic",
      "All of the above"
    ],
    values: [1, 2, 3, 4],
    questionId: "839754"
  },
  {
    question: "WHEN YOU OBSERVE AN ABNORMAL SITUATION ...",
    answers: [
      "Report it instantly, to the right person",
      "Think it is someone else’s problem to deal with it. ",
      "Walk passed it, pretend you did not see it.",
      "Report the incident to the first person you see."
    ],
    values: [1, 2, 3, 4],
    questionId: "98390"
  },
  {
    question: "MY HEALTH ALWAYS COMES ...",
    answers: [
      "First, I try to live a healthy lifestyle.",
      "First, however exercise is not part of my daily lifestyle.",
      "Second, good food comes first always.",
      "First, however I try to exercise whenever I can and have time."
    ],
    values: [1, 2, 3, 4],
    questionId: "1071006"
  },
  {
    question:
      "THE LAST TIME I LISTENED AND FOLLOWED A SUGGESTION FROM MY TEAM ...",
    answers: [
      "Last week.",
      "Two months ago.",
      "I can’t Remember. ",
      "I rarely do."
    ],
    values: [1, 2, 3, 4],
    questionId: "1174154"
  },
  {
    question: "WHENEVER I MAKE A PROMISE ...",
    answers: [
      "I usually follow through with it",
      "I occasionally follow through with it",
      "I sometimes follow through with it",
      "I Always follow through with it"
    ],
    values: [1, 2, 3, 4],
    questionId: "1226535"
  },
  {
    question: "I TAKE PERSONAL RESPONSIBILITY FOR THE ORDERS I GIVE ...",
    answers: ["Usually", "Occasionally ", "Sometimes", "Always"],
    values: [1, 2, 3, 4],
    questionId: "1310938"
  },
  {
    question: "I HAVE A CLEAR UNDERSTANDING OF MY RESPONSIBILITIES ...",
    answers: [
      "Things are Vague.",
      "I have some confusion.",
      "Generally speaking, yes.",
      "Exactly."
    ],
    values: [1, 2, 3, 4],
    questionId: "1436873"
  },
  {
    question:
      "I SET A GOOD EXAMPLE FOR MY PEOPLE IN THE USE OF MY TIME AT WORK ...",
    answers: [
      "If they did what I do, we’d be in trouble",
      "I waste significant amount of time.",
      "Sometimes yes, sometimes no.",
      "Usually"
    ],
    values: [1, 2, 3, 4],
    questionId: "1515110"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));

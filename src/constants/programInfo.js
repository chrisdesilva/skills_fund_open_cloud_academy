import logo from "../images/logo_oca.png" // add school logo to images folder and import here

export const applicationsLive = true // set to false if not currently accepting applications
export const disabledLoanAppFormID = "69140c47-bb03-4a1b-b674-cc136fdea23d" // Hubspot ID for all disabled apply now lead captures
export const nextCohortStartDate = "October 29, 2019"

// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = {
  // term details section
  interestRate36: "9.49%",
  interestRate60: "10.99%",
  APRRange36: "12.11 - 12.87%",
  APRRange60: "XX.XX - XX.XX%",
  interestOnly: [
    {
      // for multiple examples of interest only, add items to interestOnly array
      programName: "",
      APR36: "12.11%",
      financeCharge36: "$1,922.10",
      IOPayment36: "$65.80",
      FullMonthlyPayment36: "$266.48",
      APR60: "XX.XX%",
      financeCharge60: "$X,XXX.XX",
      IOPayment60: "$XX.XX",
      FullMonthlyPayment60: "$XXX.XX",
      LoanExampleAmt: "$8,000",
      LoanExampleOFeeAmt: "$320",
      LoanExampleAmtPlusOFee: "$8,320",
      programLength: "3", // program length in months
    },
  ],
  immediateRepayment: [
    {
      // for multiple examples of immmediate repayment, add items to immediateRepayment array
      programName: "",
      APR36: "12.87%",
      financeCharge36: "$1,593.11",
      FullMonthlyPayment36: "$266.48",
      APR60: "XX.XX%",
      financeCharge60: "$X,XXX.XX",
      FullMonthlyPayment60: "$XXX.XX",
      LoanExampleAmt: "$8,000",
      LoanExampleOFeeAmt: "$320",
      LoanExampleAmtPlusOFee: "$8,320",
    },
  ],
}

export const faq = {
  // faq section
  costOfLiving: false, // true if at least one program has cost of living included
  costOfLivingPrograms: "", // leave as empty string is cost of living availability is the same across all programs
  multCostOfLivingPrograms: false, // true if costOfLivingPrograms string has more than one program
  interestOnly: true, // true if interest-only payments are an option
  immediateRepayment: true, // true if immediate repayment is an option
  multipleLoanLengths: false, // true if 36 and 60 month options are both available
  multipleLoanTypes: true, // true if both IR and IO are available
  multiPrograms: true, // only true if there are multiple programs
  onlinePrograms: false, // true if at least one program is remote/online
  schoolHQState: "WA",
  origFee: 0.05,

  // interest payment FAQ info
  exampleLoanAmount: "$8,000",
  interestRate36: "9.49%",
  interestRate60: "10.99%",
  APR36: "12.11%",
  APR60: "XX.XX - XX.XX%",
  IOPayment36: "$66.43",
  IOPayment60: "$95.25",

  // max loan amounts by program for faq1
  loanRange: [
    {
      programName: "Open Cloud Academy's Cybersecurity program",
      maxAmount: "$16,000",
      col: false,
      colAmount: "$6,000",
    },
    {
      programName: "Open Cloud Academy's System Administration program",
      maxAmount: "$8,000",
      col: false,
      colAmount: "$6,000",
    },
  ],
}

// ***** END TERMS AND FAQ INFO *****

// ***** BEGIN GENERAL SCHOOL INFO *****

export const schoolLogo = logo // go to header.js if height needs adjustment

export const schoolName = "Open Cloud Academy"

export const schoolURL = "https://opencloudacademy.rackspace.com/" // update with url of school's website

export const skfURL = "https://opencloudacademy.skills.fund/" // update with Skills Fund url

export const headline = "Learn Information Technology at Open Cloud Academy" // update headline as appropriate

export const leadContent = {
  header: "Your last step on the path toward changing your career",
  paragraph: `${schoolName} designs its programs to prepare students with a foundation for a career in Information Technology. ${schoolName} partners with Skills Fund to offer tuition${
    faq.costOfLiving ? " and cost of living" : ""
  } financing so more students like you can access their program.`,
}

export const threeStepCardText = {
  step1: "",
  step2: {
    header: "select your program",
    text: "Choose between the Cybersecurity and System Adminstration programs.",
  },
  step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`,
}

export const netlifyFormName = "opencloudacademy_contact"

export const GATracking = "UA-68312423-1"

export const hubspotFormId = "e900b008-ed6c-45ae-a15b-f00227714c52" // create Hubspot form, get form id after publishing

export const selectAProgram = "select_a_opencloudacademy_program" // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** END GENERAL SCHOOL INFO *****

// ***** BEGIN LOAN APP AND CALC INFO *****

export const defaultLoanAmount = 10000
export const placeholder = "$10,000"
export const interestRates = {
  ir36: 9.49,
  ir60: 10.99,
}
export const moreThanSixPrograms = false // set to true if there are 7 or more programs in the loan application. True will render a dropdown menu, false will render buttons for each program.

export const programLoanInfo = [
  // update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
  {
    name: "Cybersecurity",
    url: "https://my.skills.fund/application?lenderCode=SAOCCS19",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 16000,
      loanTerm36: true,
      loanTerm60: false,
      "Interest Only": {
        // interest-only
        k: 6,
        apr36: 12.11,
        apr60: 12.51,
      },
      "Immediate Repayment": {
        apr36: 12.87,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: true, // true if both IR and IO are available
    loanTypes: ["Interest Only", "Immediate Repayment"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 16000,
          loanTerm36: true,
          loanTerm60: false,
          "Interest Only": {
            k: 6,
            apr36: 12.11,
            apr60: 12.51,
          },
          "Immediate Repayment": {
            apr36: 12.87,
          },
        },
      },
    ],
  },
  {
    name: "System Administration",
    url: "https://my.skills.fund/application?lenderCode=SAOCSA19",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 8000,
      loanTerm36: true,
      loanTerm60: false,
      "Interest Only": {
        k: 5,
        apr36: 12.11,
        apr60: 12.51,
      },
      "Immediate Repayment": {
        apr36: 12.87,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false,
    showLoanTypes: true,
    loanTypes: ["Interest Only", "Immediate Repayment"],
    locations: ["Metro 1", "Metro 2"],
    metros: [
      {
        location: "Metro 1",
        loanInfo: {
          // match loanInfo to Program 2 loanInfo above
          maxLoanAmt: 8000,
          loanTerm36: true,
          loanTerm60: false,
          "Interest Only": {
            k: 5,
            apr36: 12.11,
            apr60: 12.51,
          },
          "Immediate Repayment": {
            apr36: 12.87,
          },
        },
      },
    ],
  },
]

// ***** BEGIN LOAN CALC TEXT INFO *****
export const programMaxText =
  "Choose the loan amount that works best for you. Borrow up to $16,000 for Open Cloud Academy's Cybersecurity tuition, or up to $8,000 for System Administration tuition."

export const paymentTable = {
  headers: ["Program", "Tuition", "Cost of Living", "Max Total"],
  data: [
    {
      name: "PROGRAM 1",
      tuition: "$13,495",
      col: "$6,000",
      max: "$19,495",
    },
    {
      name: "PROGRAM 2",
      tuition: "$16,495",
      col: "$6,000",
      max: "$22,495",
    },
    {
      name: "PROGRAM 3",
      tuition: "$13,495",
      col: "--",
      max: "$13,495",
    },
  ],
  show: false,
}

// ***** END LOAN CALC TEXT INFO *****

// ***** Snippets for Netlify *****

// before body Hubspot

// <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3871135.js"></script>

// before head Crazyegg

// <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0076/9926.js" async="async"></script>

// before body Yotpo

// <script type="text/javascript"> (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=!0, e.src="//staticw2.yotpo.com/vDnpGV6DFy9oeKaj5UugzYG5TCeQ4gxgEVs9BO3n/widget.js";var t=document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e,t)})(); </script>

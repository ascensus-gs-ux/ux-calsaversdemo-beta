import svgPaths from "./svg-eovqmbbazp";

function Text2() {
  return (
    <div className="d-flex flex-column align-items-start align-self-start flex-shrink-0" data-name="Text">
      <a className="d-block text-secondary text-decoration-none w-100" href="mailto:pps@ascensus.com" target="_blank">
        <p className="w-100">
          <span>
            Some payroll providers have the option to upload files to CalSavers with a 180° connection. With this access, you would need to send updated employee contribution rates to your payroll provider prior to each pay date. Then the payroll provider uploads the employee payroll file to CalSavers.
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            {`If you are interested in this type of integration, contact your payroll provider for more information, including any fees and set-up assistance. Your payroll provider can contact `}
          </span>
          <span className="fw-semibold text-decoration-underline" style={{color: '#00594f'}}>pps@ascensus.com</span>
          <span>{` for support. `}</span>
        </p>
      </a>
    </div>
  );
}

function InnerContainer1() {
  return (
    <div className="position-relative flex-shrink-0 w-100" data-name="InnerContainer">
      <Text2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="d-flex flex-column gap-2 align-items-start flex-shrink-0 w-100">
      <p className="fw-medium text-dark w-100">Payroll File Upload Overview</p>
      <InnerContainer1 />
    </div>
  );
}

function InnerContainer() {
  return (
    <div className="d-flex flex-column gap-4 align-items-start flex-shrink-0 w-100" data-name="InnerContainer">
      <Frame2 />
    </div>
  );
}

function Switch() {
  return (
    <div className="position-relative flex-shrink-0" style={{width: '12px', height: '12px'}} data-name="Switch">
      <svg className="d-block w-100 h-100" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Switch">
          <circle cx="6" cy="6" fill="var(--fill-0, #828282)" id="Ellipse 1" r="5.5" stroke="var(--stroke-0, #828282)" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <button className="d-inline-flex flex-shrink-0 border-0 bg-transparent p-0 position-relative">
      <div className="bg-light border rounded-pill flex-shrink-0" style={{height: '24px', width: '44px'}} data-name="Background" />
      <div className="position-absolute" style={{marginLeft: '7px', marginTop: '6px'}}>
        <Switch />
      </div>
    </button>
  );
}

function Frame() {
  return (
    <div className="d-flex flex-column gap-1 align-items-start flex-shrink-0">
      <p className="fst-italic text-secondary w-100">Untoggle to see a more detailed walk-though</p>
      <div className="d-flex align-items-start flex-shrink-0 w-100" data-name="QuickViewToggle">
        <div className="d-flex gap-2 align-items-center flex-shrink-0 w-100" data-name="Toggle Switch">
          <p className="fw-semibold text-dark text-end flex-shrink-0">Quick Overview Instructions</p>
          <Group6 />
        </div>
      </div>
    </div>
  );
}

function StepText() {
  return (
    <div className="d-flex gap-2 align-items-start flex-shrink-0 w-100" data-name="StepText">
      <p className="flex-fill fw-medium text-dark">Setup guide to integrate payroll with a 180° integration</p>
      <Frame />
    </div>
  );
}

function NumberContainer() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-2 rounded-circle flex-shrink-0" style={{backgroundColor: '#80641f', width: '32px', height: '32px'}} data-name="Number Container">
      <p className="fw-medium text-center text-white w-100 mb-0">1</p>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="d-flex flex-fill flex-column gap-1 align-items-start" data-name="Text Container">
      <p className="fw-semibold w-100" style={{color: '#00594f'}}>Log into the CalSavers employer dashboard to start the integration set up</p>
    </div>
  );
}

function AccordionExpanded() {
  return (
    <div className="bg-white rounded w-100 position-relative" data-name="Accordion/expanded">
      <div className="d-flex flex-row align-items-center overflow-hidden rounded w-100 h-100">
        <div className="d-flex gap-3 align-items-center p-4 w-100 h-100">
          <NumberContainer />
          <TextContainer />
          <div className="overflow-hidden flex-shrink-0 position-relative" style={{width: '24px', height: '24px'}} data-name="chevron-up">
            <div className="position-absolute" style={{inset: '28.12% 9.37%'}} data-name="Vector">
              <svg className="d-block w-100 h-100" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5019 10.5023">
                <path clipRule="evenodd" d={svgPaths.p36fe5600} fill="var(--fill-0, #00594F)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="position-absolute border border-1 rounded pointer-events-none" style={{inset: 0, borderColor: '#00594f'}} />
    </div>
  );
}

function Text5() {
  return (
    <div className="d-flex flex-fill flex-column align-items-start" data-name="Text">
      <div className="text-secondary w-100">
        <p className="mb-0">
          <span className="fw-semibold text-decoration-underline" style={{color: '#00594f'}}>Log in</span>
          <span>{` to the employer portal and select "Payroll Provider" on the left-hand side of the screen under Dashboard.`}</span>
        </p>
        <p className="mb-0">​</p>
        <p className="mb-0">Select "Add New" to start the payroll integration process.</p>
        <p className="mb-0">​</p>
        <p>​</p>
      </div>
    </div>
  );
}

function Step() {
  return (
    <div className="d-flex gap-4 align-items-start flex-shrink-0 w-100" data-name="Step">
      <Text5 />
    </div>
  );
}

function Steps2() {
  return (
    <div className="d-flex flex-column align-items-start flex-shrink-0 w-100" data-name="Steps">
      <Step />
    </div>
  );
}

function NumberContainer1() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-2 rounded-circle flex-shrink-0" style={{backgroundColor: '#80641f', width: '32px', height: '32px'}} data-name="Number Container">
      <p className="fw-medium text-center text-white w-100 mb-0">2</p>
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="d-flex flex-fill flex-column gap-1 align-items-start" data-name="Text Container">
      <p className="fw-semibold w-100" style={{color: '#00594f'}}>{`Select your payroll provider in the vendor list. `}</p>
    </div>
  );
}

function AccordionExpanded1() {
  return (
    <div className="bg-white rounded w-100 position-relative" data-name="Accordion/expanded">
      <div className="d-flex flex-row align-items-center overflow-hidden rounded w-100 h-100">
        <div className="d-flex gap-3 align-items-center p-4 w-100 h-100">
          <NumberContainer1 />
          <TextContainer1 />
          <div className="overflow-hidden flex-shrink-0 position-relative" style={{width: '24px', height: '24px'}} data-name="chevron-down">
            <div className="position-absolute" style={{inset: '28.12% 9.37%'}} data-name="Vector">
              <svg className="d-block w-100 h-100" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5023 10.5027">
                <path clipRule="evenodd" d={svgPaths.p979b300} fill="var(--fill-0, #00594F)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="position-absolute border border-1 rounded pointer-events-none" style={{inset: 0, borderColor: '#00594f'}} />
    </div>
  );
}

function Text6() {
  return (
    <div className="d-flex flex-fill flex-column align-items-start" data-name="Text">
      <div className="text-secondary w-100">
        <p className="mb-0">{`Choose "I have a different payroll provider" and search for your payroll vendor in the vendor list. `}</p>
        <p className="mb-0">​</p>
        <p>If your payroll service only participates in payroll file upload (180° integration), you will be able to continue to review your account representatives information.</p>
      </div>
    </div>
  );
}

function Step1() {
  return (
    <div className="d-flex gap-4 align-items-start flex-shrink-0 w-100" data-name="Step">
      <Text6 />
    </div>
  );
}

function Steps3() {
  return (
    <div className="d-flex flex-column align-items-start flex-shrink-0 w-100" data-name="Steps">
      <Step1 />
    </div>
  );
}

function NumberContainer2() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-2 rounded-circle flex-shrink-0" style={{backgroundColor: '#80641f', width: '32px', height: '32px'}} data-name="Number Container">
      <p className="fw-medium text-center text-white w-100 mb-0">3</p>
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="d-flex flex-fill flex-column gap-1 align-items-start" data-name="Text Container">
      <p className="fw-semibold w-100" style={{color: '#00594f'}}>{`Review payroll representative's contact information `}</p>
    </div>
  );
}

function AccordionExpanded2() {
  return (
    <div className="bg-white rounded w-100 position-relative" data-name="Accordion/expanded">
      <div className="d-flex flex-row align-items-center overflow-hidden rounded w-100 h-100">
        <div className="d-flex gap-3 align-items-center p-4 w-100 h-100">
          <NumberContainer2 />
          <TextContainer2 />
          <div className="overflow-hidden flex-shrink-0 position-relative" style={{width: '24px', height: '24px'}} data-name="chevron-down">
            <div className="position-absolute" style={{inset: '28.12% 9.37%'}} data-name="Vector">
              <svg className="d-block w-100 h-100" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5023 10.5027">
                <path clipRule="evenodd" d={svgPaths.p979b300} fill="var(--fill-0, #00594F)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="position-absolute border border-1 rounded pointer-events-none" style={{inset: 0, borderColor: '#00594f'}} />
    </div>
  );
}

function Text7() {
  return (
    <div className="d-flex flex-fill flex-column align-items-start" data-name="Text">
      <div className="text-secondary w-100">
        <p className="mb-0">Add or use a previously added bank account that your company will use to send employee contributions.</p>
        <p className="mb-0">​</p>
        <p>{`If your bank account isn't added, select "Add a bank account" to enter your routing and account numbers. You will have to option to provide a customized account nickname if you have multiple bank accounts. `}</p>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="d-flex gap-4 align-items-start flex-shrink-0 w-100" data-name="Step">
      <Text7 />
    </div>
  );
}

function Steps4() {
  return (
    <div className="d-flex flex-column align-items-start flex-shrink-0 w-100" data-name="Steps">
      <Step2 />
    </div>
  );
}

function NumberContainer3() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-2 rounded-circle flex-shrink-0" style={{backgroundColor: '#80641f', width: '32px', height: '32px'}} data-name="Number Container">
      <p className="fw-medium text-center text-white w-100 mb-0">4</p>
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="d-flex flex-fill flex-column gap-1 align-items-start" data-name="Text Container">
      <p className="fw-semibold w-100" style={{color: '#00594f'}}>Set up banking for future employee contributions</p>
    </div>
  );
}

function AccordionExpanded3() {
  return (
    <div className="bg-white rounded w-100 position-relative" data-name="Accordion/expanded">
      <div className="d-flex flex-row align-items-center overflow-hidden rounded w-100 h-100">
        <div className="d-flex gap-3 align-items-center p-4 w-100 h-100">
          <NumberContainer3 />
          <TextContainer3 />
          <div className="overflow-hidden flex-shrink-0 position-relative" style={{width: '24px', height: '24px'}} data-name="chevron-down">
            <div className="position-absolute" style={{inset: '28.12% 9.37%'}} data-name="Vector">
              <svg className="d-block w-100 h-100" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5023 10.5027">
                <path clipRule="evenodd" d={svgPaths.p979b300} fill="var(--fill-0, #00594F)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="position-absolute border border-1 rounded pointer-events-none" style={{inset: 0, borderColor: '#00594f'}} />
    </div>
  );
}

function Text8() {
  return (
    <div className="d-flex flex-fill flex-column align-items-start" data-name="Text">
      <div className="text-secondary w-100">
        <p className="mb-0">Add or use a previously added bank account that your company will use to send employee contributions.</p>
        <p className="mb-0">​</p>
        <p>{`If your bank account isn't added, select "Add a bank account" to enter your routing and account numbers. You will have to option to provide a customized account nickname if you have multiple bank accounts. `}</p>
      </div>
    </div>
  );
}

function Step3() {
  return (
    <div className="d-flex gap-4 align-items-start flex-shrink-0 w-100" data-name="Step">
      <Text8 />
    </div>
  );
}

function Steps5() {
  return (
    <div className="d-flex flex-column align-items-start flex-shrink-0 w-100" data-name="Steps">
      <Step3 />
    </div>
  );
}

function NumberContainer4() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-2 rounded-circle flex-shrink-0" style={{backgroundColor: '#80641f', width: '32px', height: '32px'}} data-name="Number Container">
      <p className="fw-medium text-center text-white w-100 mb-0">5</p>
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="d-flex flex-fill flex-column gap-1 align-items-start" data-name="Text Container">
      <p className="fw-semibold w-100" style={{color: '#00594f'}}>Submit the invite request to your payroll representative to finish the set up</p>
    </div>
  );
}

function AccordionExpanded4() {
  return (
    <div className="bg-white rounded w-100 position-relative" data-name="Accordion/expanded">
      <div className="d-flex flex-row align-items-center overflow-hidden rounded w-100 h-100">
        <div className="d-flex gap-3 align-items-center p-4 w-100 h-100">
          <NumberContainer4 />
          <TextContainer4 />
          <div className="overflow-hidden flex-shrink-0 position-relative" style={{width: '24px', height: '24px'}} data-name="chevron-down">
            <div className="position-absolute" style={{inset: '28.12% 9.37%'}} data-name="Vector">
              <svg className="d-block w-100 h-100" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5023 10.5027">
                <path clipRule="evenodd" d={svgPaths.p979b300} fill="var(--fill-0, #00594F)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="position-absolute border border-1 rounded pointer-events-none" style={{inset: 0, borderColor: '#00594f'}} />
    </div>
  );
}

function Text9() {
  return (
    <div className="d-flex flex-fill flex-column align-items-start" data-name="Text">
      <div className="text-secondary w-100">
        <p className="mb-0">
          <span className="fw-semibold text-decoration-underline" style={{color: '#00594f'}}>Log in</span>
          <span>{` to the employer portal and select "Payroll Provider" on the left-hand side of the screen under Dashboard.`}</span>
        </p>
        <p className="mb-0">​</p>
        <p className="mb-0">Select "Add New" to start the payroll integration process.</p>
        <p className="mb-0">​</p>
        <p>​</p>
      </div>
    </div>
  );
}

function Step4() {
  return (
    <div className="d-flex gap-4 align-items-start flex-shrink-0 w-100" data-name="Step">
      <Text9 />
    </div>
  );
}

function Steps6() {
  return (
    <div className="d-flex flex-column align-items-start flex-shrink-0 w-100" data-name="Steps">
      <Step4 />
    </div>
  );
}

function Accordions() {
  return (
    <div className="d-flex flex-column gap-4 align-items-start flex-shrink-0 w-100" data-name="Accordions">
      <div className="d-flex flex-column align-items-start flex-shrink-0 w-100" data-name="Accordion">
        <AccordionExpanded />
        <div className="bg-white flex-shrink-0 w-100" data-name="Step=Step 1">
          <div className="overflow-hidden w-100 h-100">
            <div className="d-flex flex-column gap-4 align-items-start p-4 w-100 h-100">
              <Steps2 />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white d-flex flex-column align-items-start overflow-hidden flex-shrink-0 w-100" data-name="Accordion">
        <AccordionExpanded1 />
        <div className="bg-white flex-shrink-0 w-100" data-name="Step=Step 2">
          <div className="overflow-hidden w-100 h-100">
            <div className="d-flex flex-column gap-4 align-items-start p-4 w-100 h-100">
              <Steps3 />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white d-flex flex-column align-items-start overflow-hidden flex-shrink-0 w-100" data-name="Accordion">
        <AccordionExpanded2 />
        <div className="bg-white flex-shrink-0 w-100" data-name="Step=Step 4">
          <div className="overflow-hidden w-100 h-100">
            <div className="d-flex flex-column gap-4 align-items-start p-4 w-100 h-100">
              <Steps4 />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white d-flex flex-column align-items-start overflow-hidden flex-shrink-0 w-100" data-name="Accordion">
        <AccordionExpanded3 />
        <div className="bg-white flex-shrink-0 w-100" data-name="Step=Step 4">
          <div className="overflow-hidden w-100 h-100">
            <div className="d-flex flex-column gap-4 align-items-start p-4 w-100 h-100">
              <Steps5 />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white d-flex flex-column align-items-start overflow-hidden flex-shrink-0 w-100" data-name="Accordion">
        <AccordionExpanded4 />
        <div className="bg-white flex-shrink-0 w-100" data-name="Step=Step 1">
          <div className="overflow-hidden w-100 h-100">
            <div className="d-flex flex-column gap-4 align-items-start p-4 w-100 h-100">
              <Steps6 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RegisterNovice() {
  return (
    <div className="d-flex flex-column align-items-start flex-shrink-0 w-100" data-name="Register/Novice">
      <Accordions />
    </div>
  );
}

function Group2() {
  return (
    <div className="d-flex flex-column gap-5 align-items-start flex-shrink-0 w-100" data-name="Group">
      <StepText />
      <RegisterNovice />
    </div>
  );
}

function Switch1() {
  return (
    <div className="position-relative flex-shrink-0" style={{width: '22px', height: '22px'}} data-name="Switch">
      <svg className="d-block w-100 h-100" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Switch">
          <circle cx="11" cy="11" fill="var(--fill-0, white)" id="Ellipse 1" r="11" />
          <g id="Frame 1344">
            <path d={svgPaths.p25fc6700} id="Rectangle 47" stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <button className="d-inline-flex flex-shrink-0 border-0 bg-transparent p-0 position-relative">
      <div className="rounded-pill flex-shrink-0" style={{backgroundColor: '#00594f', height: '24px', width: '44px'}} data-name="Background" />
      <div className="position-absolute" style={{marginLeft: '21px', marginTop: '1px'}}>
        <Switch1 />
      </div>
    </button>
  );
}

function Frame1() {
  return (
    <div className="d-flex flex-column gap-1 align-items-start flex-shrink-0">
      <p className="fst-italic text-secondary w-100">Need a simplified walk-though?</p>
      <div className="d-flex align-items-start flex-shrink-0" data-name="QuickViewToggle">
        <div className="d-flex gap-2 align-items-center flex-shrink-0" data-name="Toggle Switch">
          <p className="fw-semibold text-dark text-end flex-shrink-0 text-nowrap">Toggle Quick Overview Instructions</p>
          <Group5 />
        </div>
      </div>
    </div>
  );
}

function StepText1() {
  return (
    <div className="d-flex gap-2 align-items-start flex-shrink-0 w-100" data-name="StepText">
      <p className="flex-fill fw-medium text-dark">Setup guide to integrate payroll with a 180° integration</p>
      <Frame1 />
    </div>
  );
}

function NumberContainer5() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-2 rounded-circle flex-shrink-0" style={{backgroundColor: '#80641f', width: '32px', height: '32px'}} data-name="Number Container">
      <p className="fw-medium text-center text-white w-100 mb-0">1</p>
    </div>
  );
}

function TextContainer5() {
  return (
    <div className="d-flex flex-fill flex-column gap-1 align-items-start w-100" data-name="Text Container">
      <p className="fw-semibold text-dark w-100">Log in to your account and go to "Payroll Provider" to begin adding your provider</p>
      <p className="text-secondary w-100">{`Go to payroll provider and select "Add New." Choose "I have a different payroll provider" and search for your payroll provider in the participating vendor list. `}</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="d-flex flex-fill flex-column gap-3 align-items-start" data-name="Container">
      <TextContainer5 />
      <a className="btn d-flex gap-2 align-items-center justify-content-center px-3 py-2 rounded flex-shrink-0 text-white text-decoration-none" href="https://employer.calsavers.com/californiaertpl/enroll/createEmp/viewCollectEmpPreRegDetails.cs?request_locale=en_US" target="_blank" style={{backgroundColor: '#00594f'}} data-name="Button">
        <span className="fw-semibold text-center text-white text-nowrap">Account Login</span>
      </a>
    </div>
  );
}

function Step5() {
  return (
    <div className="bg-white w-100 rounded position-relative" data-name="Step 1">
      <div className="overflow-hidden rounded w-100 h-100">
        <div className="d-flex gap-3 align-items-start p-4 w-100 h-100">
          <NumberContainer5 />
          <Container17 />
        </div>
      </div>
      <div aria-hidden="true" className="position-absolute border border-1 rounded pointer-events-none" style={{inset: 0, borderColor: '#d3d3d3'}} />
    </div>
  );
}

function NumberContainer6() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-2 rounded-circle flex-shrink-0" style={{backgroundColor: '#80641f', width: '32px', height: '32px'}} data-name="Number Container">
      <p className="fw-medium text-center text-white w-100 mb-0">1</p>
    </div>
  );
}

function TextContainer6() {
  return (
    <div className="d-flex flex-fill flex-column gap-1 align-items-start" data-name="Text Container">
      <p className="fw-semibold text-dark w-100">Review payroll representative's contact information</p>
      <div className="text-secondary w-100">
        <p className="mb-0">Review if your listed payroll representative's contact information is correct.</p>
        <p className="mb-0">​</p>
        <p>
          <span>{`If the representative contact information is incorrect, please contact client services at (855) 650-6916 M-F 8am-8pm EST, or `}</span>
          <span className="fw-semibold text-decoration-underline" style={{color: '#00594f'}}>clientservices@calsavers.com</span>
          <span>.</span>
        </p>
      </div>
    </div>
  );
}

function Step6() {
  return (
    <div className="bg-white w-100 rounded position-relative" data-name="Step 2">
      <div className="overflow-hidden rounded w-100 h-100">
        <div className="d-flex gap-3 align-items-start p-4 w-100 h-100">
          <NumberContainer6 />
          <TextContainer6 />
        </div>
      </div>
      <div aria-hidden="true" className="position-absolute border border-1 rounded pointer-events-none" style={{inset: 0, borderColor: '#d3d3d3'}} />
    </div>
  );
}

function Row() {
  return (
    <div className="row g-4 align-items-start flex-shrink-0 w-100" data-name="Row">
      <div className="col-md-6 d-flex">
        <Step5 />
      </div>
      <div className="col-md-6 d-flex">
        <Step6 />
      </div>
    </div>
  );
}

function NumberContainer7() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-2 rounded-circle flex-shrink-0" style={{backgroundColor: '#80641f', width: '32px', height: '32px'}} data-name="Number Container">
      <p className="fw-medium text-center text-white w-100 mb-0">3</p>
    </div>
  );
}

function TextContainer7() {
  return (
    <div className="d-flex flex-fill flex-column gap-1 align-items-start" data-name="Text Container">
      <p className="fw-semibold text-dark w-100">Add a bank or select a previously added account</p>
      <p className="text-secondary w-100">Select a bank account that your company will use to send employee contributions.</p>
    </div>
  );
}

function Step7() {
  return (
    <div className="bg-white w-100 rounded position-relative" data-name="Step 3">
      <div className="overflow-hidden rounded w-100 h-100">
        <div className="d-flex gap-3 align-items-start p-4 w-100 h-100">
          <NumberContainer7 />
          <TextContainer7 />
        </div>
      </div>
      <div aria-hidden="true" className="position-absolute border border-1 rounded pointer-events-none" style={{inset: 0, borderColor: '#d3d3d3'}} />
    </div>
  );
}

function NumberContainer8() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-2 rounded-circle flex-shrink-0" style={{backgroundColor: '#80641f', width: '32px', height: '32px'}} data-name="Number Container">
      <p className="fw-medium text-center text-white w-100 mb-0">4</p>
    </div>
  );
}

function TextContainer8() {
  return (
    <div className="d-flex flex-fill flex-column gap-1 align-items-start" data-name="Text Container">
      <p className="fw-semibold text-dark w-100">Submit to invite your payroll representative to manage your account</p>
      <p className="text-secondary w-100">Once the invite is sent, your representative will receive an email to start the file upload process with CalSavers.</p>
    </div>
  );
}

function Step8() {
  return (
    <div className="bg-white w-100 rounded position-relative" data-name="Step 4">
      <div className="overflow-hidden rounded w-100 h-100">
        <div className="d-flex gap-3 align-items-start p-4 w-100 h-100">
          <NumberContainer8 />
          <TextContainer8 />
        </div>
      </div>
      <div aria-hidden="true" className="position-absolute border border-1 rounded pointer-events-none" style={{inset: 0, borderColor: '#d3d3d3'}} />
    </div>
  );
}

function Row1() {
  return (
    <div className="row g-4 align-items-start flex-shrink-0 w-100" data-name="Row">
      <div className="col-md-6 d-flex">
        <Step7 />
      </div>
      <div className="col-md-6 d-flex">
        <Step8 />
      </div>
    </div>
  );
}

function StepsContainer() {
  return (
    <div className="d-flex flex-column gap-4 align-items-start flex-shrink-0 w-100" data-name="StepsContainer">
      <Row />
      <Row1 />
    </div>
  );
}

function RegisterExerienced() {
  return (
    <div className="d-flex flex-column align-items-start flex-shrink-0 w-100" data-name="Register/Exerienced">
      <StepsContainer />
    </div>
  );
}

function Group4() {
  return (
    <div className="d-flex flex-column gap-5 align-items-start flex-shrink-0 w-100" data-name="Group">
      <StepText1 />
      <RegisterExerienced />
    </div>
  );
}

// Export the tab body content for use in the unified layout
export { InnerContainer as Tab180OverviewContent };

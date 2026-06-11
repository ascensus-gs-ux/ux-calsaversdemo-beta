import svgPaths from "./svg-lbezz3nxnc";

function Switch() {
  return (
    <div className="position-relative flex-shrink-0" style={{width: '22px', height: '22px'}} data-name="Switch">
      <svg className="d-block w-100 h-100" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Switch">
          <circle cx="11" cy="11" fill="var(--fill-0, white)" id="Ellipse 1" r="11" />
          <g id="Frame 1344">
            <path d="M6.99995 11.6562L9.51411 14.1704L15.171 8.51355" id="Rectangle 47" stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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
        <Switch />
      </div>
    </button>
  );
}

function Frame5() {
  return (
    <div className="d-flex flex-column gap-1 align-items-start flex-fill">
      <p className="fst-italic text-secondary w-100">Need a more detailed walk-through?</p>
      <div className="d-flex align-items-start flex-shrink-0 w-100" data-name="QuickViewToggle">
        <div className="d-flex gap-2 align-items-center flex-shrink-0 w-100" data-name="Toggle Switch">
          <p className="fw-semibold text-dark text-end flex-shrink-0">Toggle Detailed Instructions</p>
          <Group5 />
        </div>
      </div>
    </div>
  );
}

function StepText() {
  return (
    <div className="d-flex flex-column flex-md-row gap-2 align-items-start flex-shrink-0 w-100" data-name="StepText">
      <p className="flex-fill fw-medium text-dark">Setup guide to integrate Paychex or TJH</p>
      <Frame5 />
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
      <p className="fw-semibold w-100" style={{color: '#00594f'}}>Go to "Payroll Provider" to begin the integration process</p>
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

function Text3() {
  return (
    <div className="d-flex flex-fill flex-column align-items-start" data-name="Text">
      <div className="text-secondary w-100">
        <p className="mb-0">
          <span>{`Select "Payroll integration" on the left-hand side of the screen under Dashboard. Select "Add New" to start the payroll integration process.`}</span>
        </p>
        <p className="mb-0">​</p>
        <p className="mb-0">When prompted, choose your payroll provider by selecting either Paychex or TJH from the options, then continue.</p>
      </div>
    </div>
  );
}

function Step1() {
  return (
    <div className="d-flex gap-4 align-items-start flex-shrink-0 w-100" data-name="Step">
      <Text3 />
    </div>
  );
}

function Steps2() {
  return (
    <div className="d-flex flex-column align-items-start flex-shrink-0 w-100" data-name="Steps">
      <Step1 />
    </div>
  );
}

function NumberContainer2() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-2 rounded-circle flex-shrink-0" style={{backgroundColor: '#80641f', width: '32px', height: '32px'}} data-name="Number Container">
      <p className="fw-medium text-center text-white w-100 mb-0">1</p>
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="d-flex flex-fill flex-column gap-1 align-items-start" data-name="Text Container">
      <p className="fw-semibold w-100" style={{color: '#00594f'}}>Log in and add a bank or select a previously added account</p>
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

function Text4() {
  return (
    <div className="d-flex flex-fill flex-column align-items-start" data-name="Text">
      <div className="text-secondary w-100">
        <p className="mb-0">Once <a href="https://employer.calsavers.com/californiaertpl/enroll/createEmp/viewCollectEmpPreRegDetails.cs?request_locale=en_US" target="_blank" className="fw-semibold text-decoration-underline" style={{color: '#00594f'}}>logged in</a> go to "Banking Information" and add a bank account that your company will use to send employee contributions.</p>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="d-flex gap-4 align-items-start flex-shrink-0 w-100" data-name="Step">
      <Text4 />
    </div>
  );
}

function Steps3() {
  return (
    <div className="d-flex flex-column align-items-start flex-shrink-0 w-100" data-name="Steps">
      <Step2 />
    </div>
  );
}

function NumberContainer4() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-2 rounded-circle flex-shrink-0" style={{backgroundColor: '#80641f', width: '32px', height: '32px'}} data-name="Number Container">
      <p className="fw-medium text-center text-white w-100 mb-0">3</p>
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="d-flex flex-fill flex-column gap-1 align-items-start" data-name="Text Container">
      <p className="fw-semibold w-100" style={{color: '#00594f'}}>Complete setup and verify connection</p>
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

function Text6() {
  return (
    <div className="d-flex flex-fill flex-column align-items-start" data-name="Text">
      <p className="text-secondary w-100">{"Then you can select Paychex or TJH Payroll from the screen to link up the integration.\n\nPaychex users must sign a Docusign from Paychex that will be emailed to you. Once signed, the integration is complete.\n\nOnce setup is complete, you will be re-routed to your CalSavers dashboard. You should see a \"Connected\" badge."}</p>
    </div>
  );
}

function Step4() {
  return (
    <div className="d-flex gap-4 align-items-start flex-shrink-0 w-100" data-name="Step">
      <Text6 />
    </div>
  );
}

function Steps5() {
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
        <AccordionExpanded2 />
        <div className="bg-white flex-shrink-0 w-100" data-name="Step=Step 3">
          <div className="overflow-hidden w-100 h-100">
            <div className="d-flex flex-column gap-4 align-items-start p-4 w-100 h-100">
              <Steps3 />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-start flex-shrink-0 w-100" data-name="Accordion">
        <AccordionExpanded1 />
        <div className="bg-white flex-shrink-0 w-100" data-name="Step=Step 2">
          <div className="overflow-hidden w-100 h-100">
            <div className="d-flex flex-column gap-4 align-items-start p-4 w-100 h-100">
              <Steps2 />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-start flex-shrink-0 w-100" data-name="Accordion">
        <AccordionExpanded4 />
        <div className="bg-white flex-shrink-0 w-100" data-name="Step=Step 5">
          <div className="overflow-hidden w-100 h-100">
            <div className="d-flex flex-column gap-4 align-items-start p-4 w-100 h-100">
              <Steps5 />
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

function Group1() {
  return (
    <div className="d-flex flex-column gap-5 align-items-start flex-shrink-0 w-100" data-name="Group">
      <StepText />
      <RegisterNovice />
    </div>
  );
}

// Export the tab body content for use in the unified layout
export { Group1 as Tab3ToggleOffBodyContent };

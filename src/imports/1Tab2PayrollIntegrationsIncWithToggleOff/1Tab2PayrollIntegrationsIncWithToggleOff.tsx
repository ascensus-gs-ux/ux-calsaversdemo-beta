import svgPaths from "./svg-w7u21k61l1";

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
      <div className="rounded-pill flex-shrink-0" style={{backgroundColor: '#00594f', border: '1px solid #00594f', height: '24px', width: '44px'}} data-name="Background" />
      <div className="position-absolute" style={{marginLeft: '21px', marginTop: '1px'}}>
        <Switch />
      </div>
    </button>
  );
}

function Frame5() {
  return (
    <div className="d-flex flex-column gap-1 align-items-start flex-shrink-0">
      <p className="fst-italic text-secondary w-100">Need a more detailed walk-through?</p>
      <div className="d-flex align-items-center flex-shrink-0 w-100" data-name="QuickViewToggle">
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
    <div className="d-flex flex-column flex-md-row gap-3 align-items-start align-items-md-center justify-content-md-between flex-shrink-0 w-100" data-name="StepText">
      <h3 className="mb-0">Setup guide to integrate with Payroll Integrations Inc.</h3>
      <Frame5 />
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
    <div className="d-flex flex-fill align-items-center" data-name="Text Container">
      <p className="fw-semibold w-100 mb-0" style={{color: '#00594f'}}>Set up a deduction line with your provider</p>
    </div>
  );
}

function AccordionExpanded() {
  return (
    <div className="bg-white rounded w-100 position-relative" data-name="Accordion/expanded">
      <div className="overflow-hidden rounded w-100 h-100">
        <div className="d-flex align-items-center justify-content-between p-4 w-100">
          <div className="d-flex align-items-center gap-3">
            <NumberContainer />
            <TextContainer />
          </div>
          <div className="overflow-hidden flex-shrink-0 position-relative" style={{width: '24px', height: '24px'}} data-name="chevron-up">
            <div className="position-absolute" style={{inset: '28.12% 9.37%'}} data-name="Vector">
              <svg className="d-block w-100 h-100" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5019 10.5023">
                <path clipRule="evenodd" d={svgPaths.p36fe5600} fill="var(--fill-0, #00594F)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="position-absolute rounded pointer-events-none accordion-border-overlay" style={{inset: 0}} />
    </div>
  );
}

function Text2() {
  return (
    <div className="d-flex flex-fill flex-column gap-3 align-items-start" data-name="Text">
      <p className="text-secondary w-100">Reach out to your payroll provider to create the CalSavers deduction line item on your payroll platform.</p>
    </div>
  );
}

function Step() {
  return (
    <div className="d-flex gap-4 align-items-start flex-shrink-0 w-100" data-name="Step">
      <Text2 />
    </div>
  );
}

function Steps1() {
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
    <div className="d-flex flex-fill align-items-center" data-name="Text Container">
      <p className="fw-semibold w-100 mb-0" style={{color: '#00594f'}}>Log in your CalSavers account and go to Payroll Provider</p>
    </div>
  );
}

function AccordionExpanded1() {
  return (
    <div className="bg-white rounded w-100 position-relative" data-name="Accordion/expanded">
      <div className="overflow-hidden rounded w-100 h-100">
        <div className="d-flex align-items-center justify-content-between p-4 w-100">
          <div className="d-flex align-items-center gap-3">
            <NumberContainer1 />
            <TextContainer1 />
          </div>
          <div className="overflow-hidden flex-shrink-0 position-relative" style={{width: '24px', height: '24px'}} data-name="chevron-up">
            <div className="position-absolute" style={{inset: '28.12% 9.37%'}} data-name="Vector">
              <svg className="d-block w-100 h-100" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5019 10.5023">
                <path clipRule="evenodd" d={svgPaths.p36fe5600} fill="var(--fill-0, #00594F)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="position-absolute rounded pointer-events-none accordion-border-overlay" style={{inset: 0}} />
    </div>
  );
}

function Text3() {
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
        <p className="mb-0">{`Choose "I have a different payroll provider" and search for your payroll vendor in the Payroll Integrations Inc. participating vendor list. `}</p>
        <p className="mb-0">​</p>
        <p>If your payroll service participates, you will be able to continue through the set up process</p>
      </div>
    </div>
  );
}

function Step1() {
  return (
    <div className="row g-4 align-items-start w-100">
      <div className="col-lg-6">
        <Text3 />
      </div>
      <div className="col-lg-6">
        <img src="https://cdn.unite529.com/jcdn/files/CAER/images/initiate-payroll-integrations.png" alt="" className="img-fluid" style={{border: '1px solid rgba(0, 89, 79, 0.5)'}} />
      </div>
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
      <p className="fw-medium text-center text-white w-100 mb-0">3</p>
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="d-flex flex-fill align-items-center" data-name="Text Container">
      <p className="fw-semibold w-100 mb-0" style={{color: '#00594f'}}>Add a bank or select a previously added account</p>
    </div>
  );
}

function AccordionExpanded2() {
  return (
    <div className="bg-white rounded w-100 position-relative" data-name="Accordion/expanded">
      <div className="overflow-hidden rounded w-100 h-100">
        <div className="d-flex align-items-center justify-content-between p-4 w-100">
          <div className="d-flex align-items-center gap-3">
            <NumberContainer2 />
            <TextContainer2 />
          </div>
          <div className="overflow-hidden flex-shrink-0 position-relative" style={{width: '24px', height: '24px'}} data-name="chevron-up">
            <div className="position-absolute" style={{inset: '28.12% 9.37%'}} data-name="Vector">
              <svg className="d-block w-100 h-100" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5019 10.5023">
                <path clipRule="evenodd" d={svgPaths.p36fe5600} fill="var(--fill-0, #00594F)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="position-absolute rounded pointer-events-none accordion-border-overlay" style={{inset: 0}} />
    </div>
  );
}

function Text4() {
  return (
    <div className="d-flex flex-fill flex-column align-items-start" data-name="Text">
      <div className="text-secondary w-100">
        <p className="mb-0">Add a bank or select a previously added account</p>
        <p className="mb-0">​</p>
        <p>{`Select a bank account that your company will use to send employee contributions.`}</p>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="row g-4 align-items-start w-100">
      <div className="col-lg-6">
        <Text4 />
      </div>
      <div className="col-lg-6">
        <img src="https://cdn.unite529.com/jcdn/files/CAER/images/add-bank-account-preview.png" alt="" className="img-fluid" style={{border: '1px solid rgba(0, 89, 79, 0.5)'}} />
      </div>
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

function NumberContainer3() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-2 rounded-circle flex-shrink-0" style={{backgroundColor: '#80641f', width: '32px', height: '32px'}} data-name="Number Container">
      <p className="fw-medium text-center text-white w-100 mb-0">4</p>
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="d-flex flex-fill align-items-center" data-name="Text Container">
      <p className="fw-semibold w-100 mb-0" style={{color: '#00594f'}}>Initiate Payroll Integrations flow to register for the integration</p>
    </div>
  );
}

function AccordionExpanded3() {
  return (
    <div className="bg-white rounded w-100 position-relative" data-name="Accordion/expanded">
      <div className="overflow-hidden rounded w-100 h-100">
        <div className="d-flex align-items-center justify-content-between p-4 w-100">
          <div className="d-flex align-items-center gap-3">
            <NumberContainer3 />
            <TextContainer3 />
          </div>
          <div className="overflow-hidden flex-shrink-0 position-relative" style={{width: '24px', height: '24px'}} data-name="chevron-up">
            <div className="position-absolute" style={{inset: '28.12% 9.37%'}} data-name="Vector">
              <svg className="d-block w-100 h-100" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5019 10.5023">
                <path clipRule="evenodd" d={svgPaths.p36fe5600} fill="var(--fill-0, #00594F)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="position-absolute rounded pointer-events-none accordion-border-overlay" style={{inset: 0}} />
    </div>
  );
}

function Text5() {
  return (
    <div className="d-flex flex-fill flex-column gap-3 align-items-start text-secondary" data-name="Text">
      <p className="w-100">{`You will then be taken to the Payroll Integrations Inc. connection page to start your payroll connection. Once more, you will be required add banking information for the monthly fee associated with Payroll Integrations Inc. The fee for this service is based on the number of active employees making contributions. `}</p>
      <p className="fst-italic w-100" style={{fontSize: '12px'}}>Pricing tier applied is determined monthly after payrolls are processed based on number of employees. The service charge associated with Payroll Integrations is not affiliated with CalSavers program. It is an optional service provided and billed directly by Payroll Integrations as a third-party.</p>
    </div>
  );
}

function Step3() {
  return (
    <div className="row g-4 align-items-start w-100">
      <div className="col-lg-6">
        <Text5 />
      </div>
      <div className="col-lg-6">
        <img src="https://cdn.unite529.com/jcdn/files/CAER/images/Payroll-Integrations-Inc-registration.png" alt="" className="img-fluid" style={{border: '1px solid rgba(0, 89, 79, 0.5)'}} />
      </div>
    </div>
  );
}

function Steps4() {
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
    <div className="d-flex flex-fill align-items-center" data-name="Text Container">
      <p className="fw-semibold w-100 mb-0" style={{color: '#00594f'}}>Complete setup and verify connection</p>
    </div>
  );
}

function AccordionExpanded4() {
  return (
    <div className="bg-white rounded w-100 position-relative" data-name="Accordion/expanded">
      <div className="overflow-hidden rounded w-100 h-100">
        <div className="d-flex align-items-center justify-content-between p-4 w-100">
          <div className="d-flex align-items-center gap-3">
            <NumberContainer4 />
            <TextContainer4 />
          </div>
          <div className="overflow-hidden flex-shrink-0 position-relative" style={{width: '24px', height: '24px'}} data-name="chevron-up">
            <div className="position-absolute" style={{inset: '28.12% 9.37%'}} data-name="Vector">
              <svg className="d-block w-100 h-100" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5019 10.5023">
                <path clipRule="evenodd" d={svgPaths.p36fe5600} fill="var(--fill-0, #00594F)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="position-absolute rounded pointer-events-none accordion-border-overlay" style={{inset: 0}} />
    </div>
  );
}

function Text6() {
  return (
    <div className="d-flex flex-fill flex-column align-items-start" data-name="Text">
      <p className="text-secondary w-100">{"Finish your connection by logging into your payroll provider account and follow on-screen instructions.\n\nOnce setup is complete, you will be re-routed to your CalSavers dashboard. You should see a \"Connected\" badge."}</p>
    </div>
  );
}

function Step4() {
  return (
    <div className="row g-4 align-items-start w-100">
      <div className="col-lg-6">
        <Text6 />
      </div>
      <div className="col-lg-6">
        <img src="https://cdn.unite529.com/jcdn/files/CAER/images/verify-connection-preview.png" alt="" className="img-fluid" style={{border: '1px solid rgba(0, 89, 79, 0.5)'}} />
      </div>
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
        <AccordionExpanded />
        <div className="bg-white flex-shrink-0 w-100" data-name="Step=Step 1">
          <div className="overflow-hidden w-100 h-100">
            <div className="d-flex flex-column gap-4 align-items-start p-4 w-100 h-100">
              <Steps1 />
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
        <AccordionExpanded3 />
        <div className="bg-white flex-shrink-0 w-100" data-name="Step=Step 4">
          <div className="overflow-hidden w-100 h-100">
            <div className="d-flex flex-column gap-4 align-items-start p-4 w-100 h-100">
              <Steps4 />
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

function VideoSection() {
  return (
    <div className="row g-4 align-items-center w-100">
      <div className="col-12 col-md-6">
        <div className="ratio ratio-16x9">
          <iframe
            src="https://fast.wistia.net/embed/iframe/86yl3cedux?videoFoam=true"
            title="Setting up your Payroll Provider"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      </div>
      <div className="col-12 col-md-6 d-flex align-items-center">
        <h4 className="text-dark mb-0">Learn how to integrate your payroll using Payroll Integrations Inc.</h4>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="d-flex flex-column gap-5 align-items-start flex-shrink-0 w-100" data-name="Group">
      <StepText />
      <VideoSection />
      <RegisterNovice />
    </div>
  );
}

// Export the tab body content for use in the unified layout
export { Group1 as Tab2ToggleOffBodyContent };

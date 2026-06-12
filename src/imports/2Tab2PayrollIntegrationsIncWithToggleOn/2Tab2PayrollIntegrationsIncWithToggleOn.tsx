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

function Group4() {
  return (
    <button className="d-inline-flex flex-shrink-0 border-0 bg-transparent p-0 position-relative">
      <div className="bg-light border rounded-pill flex-shrink-0" style={{height: '24px', width: '44px'}} data-name="Background" />
      <div className="position-absolute" style={{marginLeft: '7px', marginTop: '6px'}}>
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
          <Group4 />
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
    <div className="d-flex flex-fill flex-column gap-1 align-items-start" data-name="Text Container">
      <p className="fw-semibold text-dark w-100">Set up deduction line with your provider</p>
      <p className="text-secondary w-100">{`Reach out to your payroll provider to create the CalSavers deduction line item on your payroll platform.`}</p>
    </div>
  );
}

function Step1() {
  return (
    <div className="bg-white w-100 rounded" data-name="Step 2">
      <div className="overflow-hidden rounded w-100 h-100">
        <div className="d-flex gap-3 align-items-start p-4 w-100 h-100">
          <NumberContainer />
          <TextContainer />
        </div>
      </div>
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
    <div className="d-flex flex-fill flex-column gap-1 align-items-start w-100" data-name="Text Container">
      <p className="fw-semibold text-dark w-100">Log in your CalSavers account and go to Payroll Provider</p>
      <p className="text-secondary w-100">{`Go to payroll provider and select "Add New." Choose "I have a different payroll provider" and search for your payroll vendor in the Payroll Integrations Inc. participating vendor list. `}</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="d-flex flex-fill flex-column gap-3 align-items-start" data-name="Container">
      <TextContainer1 />
      <a className="btn btn-primary d-flex gap-2 align-items-center justify-content-center px-3 py-2 rounded flex-shrink-0 text-decoration-none" href="https://employer.calsavers.com/californiaertpl/enroll/createEmp/viewCollectEmpPreRegDetails.cs?request_locale=en_US" target="_blank" data-name="Button">
        <span className="fw-semibold text-center text-nowrap">Account Login</span>
      </a>
    </div>
  );
}

function Step() {
  return (
    <div className="bg-white w-100 rounded" data-name="Step 1">
      <div className="overflow-hidden rounded w-100 h-100">
        <div className="d-flex gap-3 align-items-start p-4 w-100 h-100">
          <NumberContainer1 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="d-flex flex-column gap-3 align-items-start flex-shrink-0 w-100" data-name="Row">
      <Step1 />
      <Step />
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
      <p className="fw-semibold text-dark w-100">Add a bank or select a previously added account</p>
      <p className="text-secondary w-100">Select a bank account that your company will use to send employee contributions.</p>
    </div>
  );
}

function Step2() {
  return (
    <div className="bg-white w-100 rounded" data-name="Step 3">
      <div className="overflow-hidden rounded w-100 h-100">
        <div className="d-flex gap-3 align-items-start p-4 w-100 h-100">
          <NumberContainer2 />
          <TextContainer2 />
        </div>
      </div>
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
      <p className="fw-semibold text-dark w-100">Initiate Payroll Integrations flow to register for the integration</p>
      <p className="text-secondary w-100">You will then be taken to the Payroll Integrations Inc. connection page to start your payroll integration.</p>
    </div>
  );
}

function Step3() {
  return (
    <div className="bg-white w-100 rounded" data-name="Step 4">
      <div className="overflow-hidden rounded w-100 h-100">
        <div className="d-flex gap-3 align-items-start p-4 w-100 h-100">
          <NumberContainer3 />
          <TextContainer3 />
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="d-flex flex-column gap-3 align-items-start flex-shrink-0 w-100" data-name="Row">
      <Step2 />
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
      <p className="fw-semibold text-dark w-100">Complete setup and verify connection</p>
      <p className="text-secondary w-100">{"Finish your connection by logging into your payroll provider account and follow on-screen instructions.\n\nOnce setup is complete, you will be re-routed to your CalSavers dashboard. You should see a \"Connected\" badge."}</p>
    </div>
  );
}

function Step4() {
  return (
    <div className="bg-white w-100 rounded" data-name="Step 3">
      <div className="overflow-hidden rounded w-100 h-100">
        <div className="d-flex gap-3 align-items-start p-4 w-100 h-100">
          <NumberContainer4 />
          <TextContainer4 />
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="d-flex flex-column gap-3 align-items-start flex-shrink-0 w-100" data-name="Row">
      <Step4 />
    </div>
  );
}

function StepsContainer() {
  return (
    <div className="d-flex flex-column gap-4 align-items-start flex-shrink-0 w-100" data-name="StepsContainer">
      <Row />
      <Row1 />
      <Row2 />
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

function Group1() {
  return (
    <div className="d-flex flex-column gap-5 align-items-start flex-shrink-0 w-100" data-name="Group">
      <StepText />
      <RegisterExerienced />
    </div>
  );
}

// Export the tab body content for use in the unified layout
export { Group1 as Tab2ToggleOnBodyContent };

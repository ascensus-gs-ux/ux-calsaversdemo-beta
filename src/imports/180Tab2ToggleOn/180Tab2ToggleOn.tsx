export function Tab180SetupToggleOnBodyContent() {
  return (
    <div className="d-flex flex-column gap-5 align-items-start w-100" data-name="Group">
      {/* Header with title and toggle */}
      <div className="d-flex flex-column flex-md-row gap-2 align-items-start flex-shrink-0 w-100" data-name="StepText">
        <p className="flex-fill fw-medium text-dark">Setup guide to integrate payroll with a 180° integration</p>
        <div className="d-flex flex-column gap-1 align-items-start flex-shrink-0">
          <p className="fst-italic text-secondary w-100">Need a more detailed walk-through?</p>
          <div className="d-flex align-items-start flex-shrink-0 w-100" data-name="QuickViewToggle">
            <div className="d-flex gap-2 align-items-center flex-shrink-0 w-100" data-name="Toggle Switch">
              <p className="fw-semibold text-dark text-end flex-shrink-0">Toggle Detailed Instructions</p>
              <button className="d-inline-flex flex-shrink-0 border-0 bg-transparent p-0">
                <div className="bg-light border rounded-pill flex-shrink-0" style={{height: '24px', width: '44px'}} data-name="Background" />
                <div className="position-absolute" style={{marginLeft: '7px', marginTop: '6px', width: '12px', height: '12px'}} data-name="Switch">
                  <svg className="d-block w-100 h-100" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                    <g id="Switch">
                      <circle cx="6" cy="6" fill="var(--fill-0, #828282)" id="Ellipse 1" r="5.5" stroke="var(--stroke-0, #828282)" />
                    </g>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Container */}
      <div className="d-flex flex-column gap-4 align-items-start flex-shrink-0 w-100" data-name="StepsContainer">
        <div className="d-flex flex-column gap-3 align-items-start flex-shrink-0 w-100" data-name="Row">
          {/* Step 1 */}
          <div className="bg-white w-100 rounded" data-name="Step 1">
            <div className="overflow-hidden rounded w-100 h-100">
              <div className="d-flex gap-3 align-items-start p-4 w-100 h-100">
                <div className="d-flex flex-column align-items-center justify-content-center p-2 rounded-circle flex-shrink-0" style={{backgroundColor: '#80641f', width: '32px', height: '32px'}} data-name="Number Container">
                  <p className="fw-medium text-center text-white w-100 mb-0">1</p>
                </div>
                <div className="d-flex flex-fill flex-column gap-3 align-items-start" data-name="Container">
                  <div className="d-flex flex-column gap-1 align-items-start w-100" data-name="Text Container">
                    <p className="fw-semibold text-dark w-100">Log into the CalSavers employer dashboard to start the integration set up</p>
                    <p className="text-secondary w-100">Go to payroll provider and select "Add New." Choose "I have a different payroll provider" and search for your payroll provider in the participating vendor list.</p>
                  </div>
                  <a className="btn d-flex gap-2 align-items-center justify-content-center px-3 py-2 rounded flex-shrink-0 text-white text-decoration-none" href="https://employer.calsavers.com/californiaertpl/enroll/createEmp/viewCollectEmpPreRegDetails.cs?request_locale=en_US" target="_blank" style={{backgroundColor: '#00594f'}} data-name="Button">
                    <span className="fw-semibold text-center text-white text-nowrap">Account Login</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white w-100 rounded" data-name="Step 2">
            <div className="overflow-hidden rounded w-100 h-100">
              <div className="d-flex gap-3 align-items-start p-4 w-100 h-100">
                <div className="d-flex flex-column align-items-center justify-content-center p-2 rounded-circle flex-shrink-0" style={{backgroundColor: '#80641f', width: '32px', height: '32px'}} data-name="Number Container">
                  <p className="fw-medium text-center text-white w-100 mb-0">2</p>
                </div>
                <div className="d-flex flex-fill flex-column gap-1 align-items-start" data-name="Text Container">
                  <p className="fw-semibold text-dark w-100">Confirm Payroll Provider</p>
                  <div className="text-secondary w-100">
                    <p className="mb-0">
                      Verify that the payroll company listed is correct. For questions, please contact Client Services at <strong>855-650-6916</strong> M-F 8am-8pm EST, or <a href="mailto:clientservices@calsavers.com" className="fw-semibold text-decoration-underline" style={{color: '#00594f'}}>clientservices@calsavers.com</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column gap-3 align-items-start flex-shrink-0 w-100" data-name="Row">
          {/* Step 3 */}
          <div className="bg-white w-100 rounded" data-name="Step 3">
            <div className="overflow-hidden rounded w-100 h-100">
              <div className="d-flex gap-3 align-items-start p-4 w-100 h-100">
                <div className="d-flex flex-column align-items-center justify-content-center p-2 rounded-circle flex-shrink-0" style={{backgroundColor: '#80641f', width: '32px', height: '32px'}} data-name="Number Container">
                  <p className="fw-medium text-center text-white w-100 mb-0">3</p>
                </div>
                <div className="d-flex flex-fill flex-column gap-1 align-items-start" data-name="Text Container">
                  <p className="fw-semibold text-dark w-100">Add a bank account</p>
                  <p className="text-secondary w-100">Enter a bank account that your company will use to send employee contributions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white w-100 rounded" data-name="Step 4">
            <div className="overflow-hidden rounded w-100 h-100">
              <div className="d-flex gap-3 align-items-start p-4 w-100 h-100">
                <div className="d-flex flex-column align-items-center justify-content-center p-2 rounded-circle flex-shrink-0" style={{backgroundColor: '#80641f', width: '32px', height: '32px'}} data-name="Number Container">
                  <p className="fw-medium text-center text-white w-100 mb-0">4</p>
                </div>
                <div className="d-flex flex-fill flex-column gap-1 align-items-start" data-name="Text Container">
                  <p className="fw-semibold text-dark w-100">Complete Payroll Integration Setup</p>
                  <p className="text-secondary w-100">After submitting your information, contact your payroll provider to finalize the integration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

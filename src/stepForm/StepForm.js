import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StepForm.css"; // Import custom CSS file

const StepForm = () => {
  const [step, setStep] = useState(1);

  // State for each form field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  const [academicLevel, setAcademicLevel] = useState("");
  const [subjectArea, setSubjectArea] = useState("");
  const [areaOfResearch, setAreaOfResearch] = useState("");
  const [topicOfResearch, setTopicOfResearch] = useState("");
  const [serviceRequired, setServiceRequired] = useState("");

  const [researchObjectives, setResearchObjectives] = useState("");
  const [researchHypothesis, setResearchHypothesis] = useState("");
  const [timeline, setTimeline] = useState("");
  const [instructions, setInstructions] = useState("");

  const [proposalFiles, setProposalFiles] = useState([]);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <div className="step-form">
      <Container className="d-flex justify-content-center">
        <div className="step-content">
          {step === 1 && (
            <>
              <h2>Step 1</h2>
              <Form>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="confirmEmail">
                  <Form.Label>Confirm Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Confirm your email"
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="country">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="phone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>

                <div className="step-buttons">
                  <Button variant="primary" onClick={handleNext}>
                    Next
                  </Button>
                </div>
              </Form>
            </>
          )}

          {step === 2 && (
            <>
              <h2>Step 2</h2>
              <Form>
                <Form.Group controlId="academicLevel">
                  <Form.Label>Academic Level</Form.Label>
                  <Form.Control
                    as="select"
                    value={academicLevel}
                    onChange={(e) => setAcademicLevel(e.target.value)}
                  >
                    <option value="">Select academic level</option>
                    <option value="High School">High School</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Postgraduate">Postgraduate</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="subjectArea">
                  <Form.Label>Subject Area</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter subject area"
                    value={subjectArea}
                    onChange={(e) => setSubjectArea(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="areaOfResearch">
                  <Form.Label>Area of Research</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter area of research"
                    value={areaOfResearch}
                    onChange={(e) => setAreaOfResearch(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="topicOfResearch">
                  <Form.Label>Topic of Research</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter topic of research"
                    value={topicOfResearch}
                    onChange={(e) => setTopicOfResearch(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="serviceRequired">
                  <Form.Label>Service Required</Form.Label>
                  <Form.Control
                    as="select"
                    value={serviceRequired}
                    onChange={(e) => setServiceRequired(e.target.value)}
                  >
                    <option value="">Select service required</option>
                    <option value="Writing">Writing</option>
                    <option value="Editing">Editing</option>
                    <option value="Proofreading">Proofreading</option>
                  </Form.Control>
                </Form.Group>

                <div className="step-buttons">
                  <Button variant="secondary" onClick={handlePrevious}>
                    Previous
                  </Button>
                  <Button variant="primary" onClick={handleNext}>
                    Next
                  </Button>
                </div>
              </Form>
            </>
          )}

          {step === 3 && (
            <>
              <h2>Step 3</h2>
              <Form>
                <Form.Group controlId="researchObjectives">
                  <Form.Label>Research Objectives</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter research objectives"
                    value={researchObjectives}
                    onChange={(e) => setResearchObjectives(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="researchHypothesis">
                  <Form.Label>Research Hypothesis</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter research hypothesis"
                    value={researchHypothesis}
                    onChange={(e) => setResearchHypothesis(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="timeline">
                  <Form.Label>Timeline</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter timeline"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="instructions">
                  <Form.Label>Instructions</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter instructions"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                  />
                </Form.Group>
                <div className="step-buttons">
                  <Button variant="secondary" onClick={handlePrevious}>
                    Previous
                  </Button>
                  <Button variant="primary" onClick={handleNext}>
                    Next
                  </Button>
                </div>
              </Form>
            </>
          )}

          {step === 4 && (
            <>
              <h2>Step 4</h2>
              <Form>
                <Form.Group controlId="proposalFiles">
                  <Form.Label>Upload Proposal Files</Form.Label>
                  <Form.Control
                    type="file"
                    multiple
                    onChange={(e) =>
                      setProposalFiles(Array.from(e.target.files))
                    }
                  />
                </Form.Group>

                <div className="step-buttons">
                  <Button variant="secondary" onClick={handlePrevious}>
                    Previous
                  </Button>
                  <Button variant="primary" onClick={handleSubmit}>
                    Submit
                  </Button>
                </div>
              </Form>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default StepForm;

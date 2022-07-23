import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PythonEssentialTraining from ''
import ASPNETCoreMiddleware from ''
import ASPNETCoreNewFeatures from ''
import ASPNETCoreRazorPages from ''
import ASPNETCoreSecurity from ''
import ASPNETCoreTestDrivenDevelopment from ''
import BecomeanASPNETCoreDeveloper from ''
import BuildingandSecuringRESTfulAPIsinASPNETCore from ''
import BuildingModernProjectswithReact from ''
import DeployingASPNETCoreApplications from ''
import LearningASPNETCoreMVC from ''
import LearningMySQLDevelopment from ''
import ReactHooks from ''
import ExcelbasicswithIBMRPA from ''
import ReactjsBuildinganInterface from ''
import ReactjsEssentialTraining from ''
import LearningEntityFrameworkCore from ''
import IBMRoboticProcessAutomationBasicI from ''
import IBMRoboticProcessAutomationBasicII from ''
import IBMRoboticProcessAutomationDatabase from ''
import IBMRoboticProcessAutomationIntermediateI from ''
import IBMRoboticProcessAutomationIntermediateII from ''
import IBMRoboticProcessAutomationIVA from ''
import IBMRoboticProcessAutomationRegex from ''
import IBMRoboticProcessAutomationReports from ''
import WindowsApplicationsAutomationwithIBMRPA from ''
import ReactCreatingandHostingaFullStackSite from ''
import ASPNETWebFormsEssentialTraining from ''
import CforUnityGameDevelopment from ''
import DescubraoSQL from ''
import PHPManagingPersistentSessions from ''
import JavaScriptFormacaoBasica from ''

function ModalCertificate(props) {
  const [certificate, setCertificate] = React.useState();
  const [toggleClassName, setToggleClassName] = React.useState(true)

  useEffect(() => {
    const windownWidth = window.innerWidth;
    if(windownWidth <= 1024){
      setToggleClassName(false);
    }
    if(props.num == 1){
      setCertificate(ReactjsEssentialTraining);
    }
    else if(props.num == 2){
      setCertificate(ReactHooks);
    }
    else if(props.num == 3){
      setCertificate(BuildingModernProjectswithReact);
    }
    else if(props.num == 4){
      setCertificate(ReactjsBuildinganInterface);
    }
    else if(props.num == 5){
      setCertificate(ReactCreatingandHostingaFullStackSite);
    }
    else if(props.num == 6){
      setCertificate(JavaScriptFormacaoBasica);
    }
    else if(props.num == 7){
      setCertificate(PythonEssentialTraining);
    }
    else if(props.num == 8){
      setCertificate(ASPNETCoreMiddleware);
    }
    else if(props.num == 9){
      setCertificate(ASPNETCoreNewFeatures);
    }
    else if(props.num == 10){
      setCertificate(ASPNETCoreRazorPages);
    }
    else if(props.num == 11){
      setCertificate(ASPNETCoreSecurity);
    }
    else if(props.num == 12){
      setCertificate(ASPNETCoreTestDrivenDevelopment);
    }
    else if(props.num == 13){
      setCertificate(BecomeanASPNETCoreDeveloper);
    }
    else if(props.num == 14){
      setCertificate(BuildingandSecuringRESTfulAPIsinASPNETCore);
    }
    else if(props.num == 15){
      setCertificate(DeployingASPNETCoreApplications);
    }
    else if(props.num == 16){
      setCertificate(LearningASPNETCoreMVC);
    }
    else if(props.num == 17){
      setCertificate(ASPNETWebFormsEssentialTraining);
    }
    else if(props.num == 18){
      setCertificate(PHPManagingPersistentSessions);
    }
    else if(props.num == 19){
      setCertificate(DescubraoSQL);
    }
    else if(props.num == 20){
      setCertificate(LearningMySQLDevelopment);
    }
    else if(props.num == 21){
      setCertificate(LearningEntityFrameworkCore);
    }
    else if(props.num == 22){
      setCertificate(CforUnityGameDevelopment);
    }
    else if(props.num == 23){
      setCertificate(IBMRoboticProcessAutomationBasicI);
    }
    else if(props.num == 24){
      setCertificate(IBMRoboticProcessAutomationBasicII);
    }
    else if(props.num == 25){
      setCertificate(IBMRoboticProcessAutomationIntermediateI);
    }
    else if(props.num == 26){
      setCertificate(IBMRoboticProcessAutomationIntermediateII);
    }
    else if(props.num == 27){
      setCertificate(IBMRoboticProcessAutomationDatabase);
    }
    else if(props.num == 28){
      setCertificate(IBMRoboticProcessAutomationIVA);
    }
    else if(props.num == 29){
      setCertificate(IBMRoboticProcessAutomationRegex);
    }
    else if(props.num == 30){
      setCertificate(IBMRoboticProcessAutomationReports);
    }
    else if(props.num == 31){
      setCertificate(WindowsApplicationsAutomationwithIBMRPA);
    }
    else if(props.num == 32){
      setCertificate(ExcelbasicswithIBMRPA);
    }
  }, [props.num])

  return (
    <Modal
      {...props}
      centered
      dialogClassName={toggleClassName ? 'modal-content': null}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={certificate} alt="Certificate" />
      </Modal.Body>
      <Modal.Footer>
        <button className='btn-second' onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCertificate
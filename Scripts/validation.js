try {
  var success = true;

  $('.modal-edit-consolidation input').on('keyup', function () {
    validatePayrollConso();
    // console.log('focusout');
  });

  $('#btnSave').on('click', function () {
    validatePayrollConso();

    if (success == false) {
      alert('Please check your inputs!');
      return;
    } else {
      confirm('You want to save changes made?');
      //Proceed on savings
    }
  });

  $('#btnCancelEdit').on('click', function () {
    txtNumberOfDays.setCustomValidity('');
    txtLegalHoliday.setCustomValidity('');
    txtSpecialHoliday.setCustomValidity('');
    txtRestDay.setCustomValidity('');
    txtLegalRestDay.setCustomValidity('');
    txtSundayRate.setCustomValidity('');
    txtOrdinaryOT.setCustomValidity('');
    txtLegalOT.setCustomValidity('');
    txtSpecialRestOT.setCustomValidity('');
    txtRegularNSD.setCustomValidity('');
    txtHolidayNSD.setCustomValidity('');
    txtAbsencesUndertime.setCustomValidity('');
    txtAllowancesRetro.setCustomValidity('');
    txtSSSLoan.setCustomValidity('');
    txtHDMFLoan.setCustomValidity('');
    txtCashBond.setCustomValidity('');
    txtCashAdvances.setCustomValidity('');
    txtOthers.setCustomValidity('');
    txtSBWS.setCustomValidity('');
    txtMP2.setCustomValidity('');
    txtSss.setCustomValidity('');
    txtSssEr.setCustomValidity('');
    txtPhilhealth.setCustomValidity('');
    txtPhicEr.setCustomValidity('');
    txtHdmf.setCustomValidity('');
    txtHdmfEr.setCustomValidity('');
    txtCash.setCustomValidity('');

    closeModalEditConsolidation();
  });
} catch (e) {
  console.log(e);
}

function validatePayrollConso() {
  try {
    var txtNumberOfDays =
      document.forms['payroll-consolidation']['txtNumberOfDays'];
    var txtLegalHoliday =
      document.forms['payroll-consolidation']['txtLegalHoliday'];
    var txtSpecialHoliday =
      document.forms['payroll-consolidation']['txtSpecialHoliday'];
    var txtRestDay = document.forms['payroll-consolidation']['txtRestDay'];
    var txtLegalRestDay =
      document.forms['payroll-consolidation']['txtLegalRestDay'];
    var txtSundayRate =
      document.forms['payroll-consolidation']['txtSundayRate'];
    var txtOrdinaryOT =
      document.forms['payroll-consolidation']['txtOrdinaryOT'];
    var txtLegalOT = document.forms['payroll-consolidation']['txtLegalOT'];
    var txtSpecialRestOT =
      document.forms['payroll-consolidation']['txtSpecialRestOT'];
    var txtRegularNSD =
      document.forms['payroll-consolidation']['txtRegularNSD'];
    var txtHolidayNSD =
      document.forms['payroll-consolidation']['txtHolidayNSD'];

    var txtAbsencesUndertime =
      document.forms['payroll-consolidation']['txtAbsencesUndertime'];
    var txtAllowancesRetro =
      document.forms['payroll-consolidation']['txtAllowancesRetro'];
    var txtSSSLoan = document.forms['payroll-consolidation']['txtSSSLoan'];
    var txtHDMFLoan = document.forms['payroll-consolidation']['txtHDMFLoan'];
    var txtCashBond = document.forms['payroll-consolidation']['txtCashBond'];
    var txtCashAdvances =
      document.forms['payroll-consolidation']['txtCashAdvances'];
    var txtOthers = document.forms['payroll-consolidation']['txtOthers'];
    var txtSBWS = document.forms['payroll-consolidation']['txtSBWS'];
    var txtMP2 = document.forms['payroll-consolidation']['txtMP2'];
    var txtSss = document.forms['payroll-consolidation']['txtSss'];
    var txtSssEr = document.forms['payroll-consolidation']['txtSssEr'];
    var txtPhilhealth =
      document.forms['payroll-consolidation']['txtPhilhealth'];
    var txtPhicEr = document.forms['payroll-consolidation']['txtPhicEr'];
    var txtHdmf = document.forms['payroll-consolidation']['txtHdmf'];
    var txtHdmfEr = document.forms['payroll-consolidation']['txtHdmfEr'];
    // var txtNetpay = document.forms['payroll-consolidation']['txtNetpay'];
    // var txtATM = document.forms['payroll-consolidation']['txtATM'];
    var txtCash = document.forms['payroll-consolidation']['txtCash'];

    // Validate txtNumberOfDays
    if ($.isNumeric(txtNumberOfDays.value) == false) {
      txtNumberOfDays.setCustomValidity('Invalid input!');
      // txtNumberOfDays.reportValidity();
      // t
    } else {
      txtNumberOfDays.setCustomValidity('');
    }

    // Validate txtLegalHoliday
    if ($.isNumeric(txtLegalHoliday.value) == false) {
      txtLegalHoliday.setCustomValidity('Invalid input!');
      // txtLegalHoliday.reportValidity();
      // t
    } else {
      txtLegalHoliday.setCustomValidity('');
    }

    // Validate txtSpecialHoliday
    if ($.isNumeric(txtSpecialHoliday.value) == false) {
      txtSpecialHoliday.setCustomValidity('Invalid input!');
      // txtSpecialHoliday.reportValidity();
      // txt
    } else {
      txtSpecialHoliday.setCustomValidity('');
    }

    // Validate txtRestDay
    if ($.isNumeric(txtRestDay.value) == false) {
      txtRestDay.setCustomValidity('Invalid input!');
      // txtRestDay.reportValidity();
    } else {
      txtRestDay.setCustomValidity('');
    }

    // Validate txtLegalRestDay
    if ($.isNumeric(txtLegalRestDay.value) == false) {
      txtLegalRestDay.setCustomValidity('Invalid input!');
      // txtLegalRestDay.reportValidity();
      // t
    } else {
      txtLegalRestDay.setCustomValidity('');
    }

    // Validate txtSundayRate
    if ($.isNumeric(txtSundayRate.value) == false) {
      txtSundayRate.setCustomValidity('Invalid input!');
      // txtSundayRate.reportValidity();
      //
    } else {
      txtSundayRate.setCustomValidity('');
    }

    // Validate txtOrdinaryOT
    if ($.isNumeric(txtOrdinaryOT.value) == false) {
      txtOrdinaryOT.setCustomValidity('Invalid input!');
      // txtOrdinaryOT.reportValidity();
      //
    } else {
      txtOrdinaryOT.setCustomValidity('');
    }

    // Validate txtLegalOT
    if ($.isNumeric(txtLegalOT.value) == false) {
      txtLegalOT.setCustomValidity('Invalid input!');
      // txtLegalOT.reportValidity();
    } else {
      txtLegalOT.setCustomValidity('');
    }

    // Validate txtSpecialRestOT
    if ($.isNumeric(txtSpecialRestOT.value) == false) {
      txtSpecialRestOT.setCustomValidity('Invalid input!');
      // txtSpecialRestOT.reportValidity();
      // tx
    } else {
      txtSpecialRestOT.setCustomValidity('');
    }

    // Validate txtRegularNSD
    if ($.isNumeric(txtRegularNSD.value) == false) {
      txtRegularNSD.setCustomValidity('Invalid input!');
      // txtRegularNSD.reportValidity();
      //
    } else {
      txtRegularNSD.setCustomValidity('');
    }

    // Validate txtHolidayNSD
    if ($.isNumeric(txtHolidayNSD.value) == false) {
      txtHolidayNSD.setCustomValidity('Invalid input!');
      // txtHolidayNSD.reportValidity();
      //
    } else {
      txtHolidayNSD.setCustomValidity('');
    }

    // Validate txtAbsencesUndertime
    if ($.isNumeric(txtAbsencesUndertime.value) == false) {
      txtAbsencesUndertime.setCustomValidity('Invalid input!');
      // txtAbsencesUndertime.reportValidity();
      // txtAbs
    } else {
      txtAbsencesUndertime.setCustomValidity('');
    }

    // Validate txtAllowancesRetro
    if ($.isNumeric(txtAllowancesRetro.value) == false) {
      txtAllowancesRetro.setCustomValidity('Invalid input!');
      // txtAllowancesRetro.reportValidity();
      // txtA
    } else {
      txtAllowancesRetro.setCustomValidity('');
    }

    // Validate txtSSSLoan
    if ($.isNumeric(txtSSSLoan.value) == false) {
      txtSSSLoan.setCustomValidity('Invalid input!');
      // txtSSSLoan.reportValidity();
    } else {
      txtSSSLoan.setCustomValidity('');
    }

    // Validate txtHDMFLoan
    if ($.isNumeric(txtHDMFLoan.value) == false) {
      txtHDMFLoan.setCustomValidity('Invalid input!');
      // txtHDMFLoan.reportValidity();
    } else {
      txtHDMFLoan.setCustomValidity('');
    }

    // Validate txtCashBond
    if ($.isNumeric(txtCashBond.value) == false) {
      txtCashBond.setCustomValidity('Invalid input!');
      // txtCashBond.reportValidity();
    } else {
      txtCashBond.setCustomValidity('');
    }

    // Validate txtCashAdvances
    if ($.isNumeric(txtCashAdvances.value) == false) {
      txtCashAdvances.setCustomValidity('Invalid input!');
      // txtCashAdvances.reportValidity();
      // t
    } else {
      txtCashAdvances.setCustomValidity('');
    }

    // Validate txtOthers
    if ($.isNumeric(txtOthers.value) == false) {
      txtOthers.setCustomValidity('Invalid input!');
      // txtOthers.reportValidity();
    } else {
      txtOthers.setCustomValidity('');
    }

    // Validate txtSBWS
    if ($.isNumeric(txtSBWS.value) == false) {
      txtSBWS.setCustomValidity('Invalid input!');
      // txtSBWS.reportValidity();
    } else {
      txtSBWS.setCustomValidity('');
    }

    // Validate txtMP2
    if ($.isNumeric(txtMP2.value) == false) {
      txtMP2.setCustomValidity('Invalid input!');
      // txtMP2.reportValidity();
    } else {
      txtMP2.setCustomValidity('');
    }

    // Validate txtSss
    if ($.isNumeric(txtSss.value) == false) {
      txtSss.setCustomValidity('Invalid input!');
      // txtSss.reportValidity();
    } else {
      txtSss.setCustomValidity('');
    }

    // Validate txtSssEr
    if ($.isNumeric(txtSssEr.value) == false) {
      txtSssEr.setCustomValidity('Invalid input!');
      // txtSssEr.reportValidity();
    } else {
      txtSssEr.setCustomValidity('');
    }

    // Validate txtPhilhealth
    if ($.isNumeric(txtPhilhealth.value) == false) {
      txtPhilhealth.setCustomValidity('Invalid input!');
      // txtPhilhealth.reportValidity();
      //
    } else {
      txtPhilhealth.setCustomValidity('');
    }

    // Validate txtPhicEr
    if ($.isNumeric(txtPhicEr.value) == false) {
      txtPhicEr.setCustomValidity('Invalid input!');
      // txtPhicEr.reportValidity();
    } else {
      txtPhicEr.setCustomValidity('');
    }

    // Validate txtHdmf
    if ($.isNumeric(txtHdmf.value) == false) {
      txtHdmf.setCustomValidity('Invalid input!');
      // txtHdmf.reportValidity();
    } else {
      txtHdmf.setCustomValidity('');
    }

    // Validate txtHdmfEr
    if ($.isNumeric(txtHdmfEr.value) == false) {
      txtHdmfEr.setCustomValidity('Invalid input!');
      // txtHdmfEr.reportValidity();
    } else {
      txtHdmfEr.setCustomValidity('');
    }

    // Validate txtCash
    if ($.isNumeric(txtCash.value) == false) {
      txtCash.setCustomValidity('Invalid input!');
      // txtCash.reportValidity();
    } else {
      txtCash.setCustomValidity('');
    }

    success = document.forms['payroll-consolidation'].reportValidity();
    // console.log(success);
  } catch (e) {
    console.log(e);
  }
}

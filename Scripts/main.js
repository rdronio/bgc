function togglePassword() {
  try {
    var x = document.querySelector("#txtPass");

    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  } catch (e) {
    console.log(e);
  }
}

function togglePassword2() {
  try {
    var x = document.querySelector("#txtPass2");

    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  } catch (e) {
    console.log(e);
  }
}

function checkAccessRole() {
  try {
    const accessRole = document.querySelector("#accessrole").innerHTML;
    const navList = document.querySelectorAll(".nav-list");
    const sudoAccess = document.querySelector("#sudoaccess");
    const hrsupervisorAccess = document.querySelector("#hrsupervisoraccess");
    const hradminAccess = document.querySelector("#hradminaccess");
    const financeAccess = document.querySelector("#financeaccess");
    const hrpayrollAccess = document.querySelector("#hrpayrollaccess");
    const oicAccess = document.querySelector("#oicaccess");
    const employeeAccess = document.querySelector("#employee");
    const coordinatorAccess = document.querySelector("#coordinator");
    const engineeringAccess = document.querySelector("#engineering");

    navList.forEach((item) => {
      item.classList.remove("block");
    });

    if (accessRole === "Admin") {
      sudoAccess.classList.add("block");
    } else if (accessRole === "Supervisor") {
      hrsupervisorAccess.classList.add("block");
    } else if (accessRole === "HR Admin") {
      hradminAccess.classList.add("block");
    } else if (accessRole === "Finance") {
      financeAccess.classList.add("block");
    } else if (accessRole === "HR Payroll") {
      hrpayrollAccess.classList.add("block");
    } else if (accessRole === "OIC") {
      oicAccess.classList.add("block");
    } else if (accessRole === "Employee") {
      employeeAccess.classList.add("block");
    } else if (accessRole === "Coordinator") {
      coordinatorAccess.classList.add("block");
    } else if (accessRole === "Engineering") {
      engineeringAccess.classList.add("block");
    } else {
      navList.classList.remove("block");
    }
  } catch (e) {
    console.log(e);
  }
}

// navigation
$(document).ready(function () {
  try {
    checkAccessRole();

    //check admin dashboard
    $(window).on("load", loadSavedValue(`txtSeachRegular`));
    $(window).on("load", loadSavedValue(`txtSearch`));

    $(".nav-list").on("click", "li", function () {
      $(".nav-list li.current-page").removeClass("current-page");
      $(this).addClass("current-page");
    });

    $(".btn-dropdown").on("click", function () {
      this.classList.add("hidden");
    });

    $(document).click(function (e) {
      e.stopPropagation();
      let container = $(".search-main-container");

      //check if the clicked area is dropDown or not
      if (container.has(e.target).length === 0) {
        // $(".search-filter-container").addClass("hidden");
        // $(".showSearchOptions svg").removeClass("rotate");
        hideDataList();
      }
    });

    $(".datalist-data").on("click", "li", function () {
      $(".datalist-data li").removeClass("selected-datalist");
      $(this).addClass("selected-datalist");

      let selectedOption = document.querySelector(
        ".selected-datalist div span"
      ).innerHTML;
      let txtSearch = document.querySelector("#txtSearch");

      txtSearch.value = selectedOption;
      hideDataList();
    });

    $(document).click(function (e) {
      e.stopPropagation();
      let container = $(".btn-tools-container");

      //check if the clicked area is dropDown or not
      if (container.has(e.target).length === 0) {
        $(".btn-dropdown").addClass("hidden");
      }
    });

    $(document).click(function (e) {
      e.stopPropagation();
      let containerRec = $(".searchRec-main-container");
      const showSearchRecOptions = document.querySelector(
        ".showSearchRecOptions"
      );

      //check if the clicked area is dropDown or not
      if (containerRec.has(e.target).length === 0) {
        $(".searchRec-filter-container").addClass("hidden");
        // showSearchRecOptions.classList.remove("rotate");
        $(".showSearchRecOptions svg").removeClass("rotate");
        hideDataList();
      }
    });
  } catch (e) {
    console.log(e);
  }
});

// function selectNav() {
//   $(".nav").on("click", "li", function() {
//     $(".nav-list li.current-page").removeClass("current-page");
//     $(this).addClass("current-page");
//   });
// }

// function selectPage() {
//   try {
//     $(".pagination-container").on("click", "a", function() {
//       $(".pagination a.active").removeClass("active");
//       $(this).addClass("active");
//     });
//   } catch (e) {
//     console.log(e);
//   }
// }

function selectTab() {
  try {
    $("#tab").on("click", "li", function () {
      $(".tab-list li.current-tab").removeClass("current-tab");
      $(this).addClass("current-tab");
    });
  } catch (e) {
    console.log(e);
  }
}

function selectTabEI() {
  try {
    $("#tabIE").on("click", "li", function () {
      $(".modal-tab-list li.current-tab").removeClass("current-tab");
      $(this).addClass("current-tab");
    });
  } catch (e) {
    console.log(e);
  }
}
function selectTabViewEI() {
  try {
    $("#tabViewIE").on("click", "li", function () {
      $(".modal-tab-list li.current-tab").removeClass("current-tab");
      $(this).addClass("current-tab");
    });
  } catch (e) {
    console.log(e);
  }
}

function toggleMenu() {
  try {
    const menu = document.querySelector("#nav");
    const content = document.querySelector(".content");
    const menuBtn = document.querySelector(".menu-btn");
    const body = document.querySelector("body");

    menu.classList.toggle("show");
    content.classList.toggle("blur");
    menuBtn.classList.toggle("hidden");
    body.classList.toggle("noscroll");
  } catch (e) {
    console.log(e);
  }
}

// Time Picker
$(".timepicker").each(function () {
  try {
    $(this).timepicker({
      timeFormat: "hh:mm p",
      interval: 1,
      minTime: "12:00 AM",
      maxTime: "11:59 PM",
      defaultTime: "null",
      startTime: "8:00 AM",
      dynamic: false,
      dropdown: true,
      scrollbar: true,
    });
  } catch (e) {
    console.log(e);
  }
});

// Month Picker
$(".monthPicker").each(function () {
  try {
    //Create jQueryUI datepicker
    $(this).datepicker({
      changeMonth: true,
      changeYear: true,
      showButtonPanel: true,
      dateFormat: "MM yy",
      yearRange: "+0:+10",
      minDate: new Date(),
      onClose: function (dateText, inst, selectedDate) {
        $(this).datepicker(
          "setDate",
          new Date(inst.selectedYear, inst.selectedMonth, 1),
          "option",
          "minDate",
          selectedDate
        );
      },
    });
  } catch (e) {
    console.log(e);
  }
});
// Month Picker2
$(".monthPicker2").each(function () {
  try {
    //Create jQueryUI datepicker
    $(this).datepicker({
      changeMonth: true,
      changeYear: true,
      showButtonPanel: true,
      dateFormat: "mm/yy",
      yearRange: "+0:+10",
      // minDate: new Date(),
      // onClose: function (dateText, inst, selectedDate) {
      //   $(this).datepicker(
      //     "setDate",
      //     new Date(inst.selectedYear, inst.selectedMonth, 1),
      //     "option",
      //     "minDate",
      //     selectedDate
      //   );
      // },
    });
  } catch (e) {
    console.log(e);
  }
});
// $(".monthPicker2").each(function () {
//   try {
//     //Create jQueryUI datepicker
//     $(this).datepicker({
//       changeMonth: true,
//       changeYear: true,
//       showButtonPanel: true,
//       dateFormat: "mm/yy",
//       yearRange: "+0:+10",
//       minDate: new Date(),
//       onClose: function (dateText, inst, selectedDate) {
//         $(this).datepicker(
//           "setDate",
//           new Date(inst.selectedYear, inst.selectedMonth, 1),
//           "option",
//           "minDate",
//           selectedDate
//         );
//       },
//     });
//   } catch (e) {
//     console.log(e);
//   }
// });

// Saturday Date Picker
$(".saturdayDatePicker").each(function () {
  try {
    //Create jQueryUI datepicker
    $(this).datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "-10:+10",
      beforeShowDay: function (date) {
        var day = date.getDay();
        return [day == 6, ""];
      },
      onChangeMonthYear: function (year, month) {
        var $datepicker = jQuery(this);
        var date = new Date($datepicker.datepicker("getDate"));
        var lastDayOfMonth = new Date(year, month, 0).getDate();
        var preservedDay = Math.min(
          lastDayOfMonth,
          Math.max(1, date.getDate())
        );
        $datepicker.datepicker(
          "setDate",
          month + "/" + preservedDay + "/" + year
        );
      },
    });
  } catch (e) {
    console.log(e);
  }
});

// Birthday Picker
$(".bdayPicker").each(function () {
  try {
    //Create jQueryUI datepicker
    $(this).datepicker({
      changeMonth: true,
      changeYear: true,
      defaultDate: "-18Y",
      yearRange: "-80:-18",
      onChangeMonthYear: function (year, month) {
        var $datepicker = jQuery(this);
        var date = new Date($datepicker.datepicker("getDate"));
        var lastDayOfMonth = new Date(year, month, 0).getDate();
        var preservedDay = Math.min(
          lastDayOfMonth,
          Math.max(1, date.getDate())
        );
        $datepicker.datepicker(
          "setDate",
          month + "/" + preservedDay + "/" + year
        );
      },
    });
  } catch (e) {
    console.log(e);
  }
});

// Licence Expiration Date Picker
$(".expDatePicker").each(function () {
  try {
    //Create jQueryUI datepicker
    $(this).datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "-10:+10",
      onChangeMonthYear: function (year, month) {
        var $datepicker = jQuery(this);
        var date = new Date($datepicker.datepicker("getDate"));
        var lastDayOfMonth = new Date(year, month, 0).getDate();
        var preservedDay = Math.min(
          lastDayOfMonth,
          Math.max(1, date.getDate())
        );
        $datepicker.datepicker(
          "setDate",
          month + "/" + preservedDay + "/" + year
        );
      },
    });
  } catch (e) {
    console.log(e);
  }
});

// datePicker Payroll
// $(".datePickerPayroll").each(function() {
//   //Create jQueryUI datepicker
//   $(this).datepicker({
//     changeMonth: true,
//     changeYear: true,
//     yearRange: "-10:+10"
//   });
// });

// Date Picker
$(".datePicker").each(function () {
  try {
    //Create jQueryUI datepicker
    $(this).datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "-10:+10",
      beforeShowDay: $.datepicker.noWeekends,
      onChangeMonthYear: function (year, month) {
        var $datepicker = jQuery(this);
        var date = new Date($datepicker.datepicker("getDate"));
        var lastDayOfMonth = new Date(year, month, 0).getDate();
        var preservedDay = Math.min(
          lastDayOfMonth,
          Math.max(1, date.getDate())
        );
        $datepicker.datepicker(
          "setDate",
          month + "/" + preservedDay + "/" + year
        );
      },
    });
  } catch (e) {
    console.log(e);
  }
});

// Date Picker with weekends
$(".datePicker2").each(function () {
  try {
    //Create jQueryUI datepicker
    $(this).datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "-10:+10",
      onChangeMonthYear: function (year, month) {
        var $datepicker = jQuery(this);
        var date = new Date($datepicker.datepicker("getDate"));
        var lastDayOfMonth = new Date(year, month, 0).getDate();
        var preservedDay = Math.min(
          lastDayOfMonth,
          Math.max(1, date.getDate())
        );
        $datepicker.datepicker(
          "setDate",
          month + "/" + preservedDay + "/" + year
        );
      },
    });
  } catch (e) {
    console.log(e);
  }
});

// Leave Picker
$(".leavePicker").each(function () {
  try {
    //Create jQueryUI datepicker
    $(this).datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "-10:+10",
      beforeShowDay: $.datepicker.noWeekends,
      onChangeMonthYear: function (year, month) {
        var $datepicker = jQuery(this);
        var date = new Date($datepicker.datepicker("getDate"));
        var lastDayOfMonth = new Date(year, month, 0).getDate();
        var preservedDay = Math.min(
          lastDayOfMonth,
          Math.max(1, date.getDate())
        );
        $datepicker.datepicker(
          "setDate",
          month + "/" + preservedDay + "/" + year
        );
      },
    });
  } catch (e) {
    console.log(e);
  }
});

// OT Picker
$(".otPicker").each(function () {
  try {
    //Create jQueryUI datepicker
    $(this).datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "-10:+10",
      // beforeShowDay: $.datepicker.noWeekends,
      // beforeShowDay: function (date) {
      //   var day = date.getDay();
      //   return [day != 0, ''];
      // },
      onChangeMonthYear: function (year, month) {
        var $datepicker = jQuery(this);
        var date = new Date($datepicker.datepicker("getDate"));
        var lastDayOfMonth = new Date(year, month, 0).getDate();
        var preservedDay = Math.min(
          lastDayOfMonth,
          Math.max(1, date.getDate())
        );
        $datepicker.datepicker(
          "setDate",
          month + "/" + preservedDay + "/" + year
        );
      },
    });
  } catch (e) {
    console.log(e);
  }
});

// Undertime Picker
$(".utPicker").each(function () {
  try {
    //Create jQueryUI datepicker
    $(this).datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "-10:+10",
      beforeShowDay: $.datepicker.noWeekends,
      onChangeMonthYear: function (year, month) {
        var $datepicker = jQuery(this);
        var date = new Date($datepicker.datepicker("getDate"));
        var lastDayOfMonth = new Date(year, month, 0).getDate();
        var preservedDay = Math.min(
          lastDayOfMonth,
          Math.max(1, date.getDate())
        );
        $datepicker.datepicker(
          "setDate",
          month + "/" + preservedDay + "/" + year
        );
      },
    });
  } catch (e) {
    console.log(e);
  }
});

// Termination Date Picker
$(".terminationDatePicker").each(function () {
  try {
    //Create jQueryUI datepicker
    $(this).datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "-10:+10",
      onChangeMonthYear: function (year, month) {
        var $datepicker = jQuery(this);
        var date = new Date($datepicker.datepicker("getDate"));
        var lastDayOfMonth = new Date(year, month, 0).getDate();
        var preservedDay = Math.min(
          lastDayOfMonth,
          Math.max(1, date.getDate())
        );
        $datepicker.datepicker(
          "setDate",
          month + "/" + preservedDay + "/" + year
        );
      },
    });
  } catch (e) {
    console.log(e);
  }
});

$(".startDatePicker").each(function () {
  try {
    $(this).datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "-10:+10",
      onChangeMonthYear: function (year, month) {
        var $datepicker = jQuery(this);
        var date = new Date($datepicker.datepicker("getDate"));
        var lastDayOfMonth = new Date(year, month, 0).getDate();
        var preservedDay = Math.min(
          lastDayOfMonth,
          Math.max(1, date.getDate())
        );
        $datepicker.datepicker(
          "setDate",
          month + "/" + preservedDay + "/" + year
        );
      },

      // onSelect: function(date) {
      //   let selectedDate = new Date(date);
      //   let payFreq = document.querySelector("#drpDownPayFreq").value;
      //   let endDate = new Date(date);
      //   console.log("this is date from onSelect:" + date);

      //   if (payFreq === "weekly") {
      //     endDate.setDate(selectedDate.getDate() + 7);
      //     $(".endDatePicker").datepicker("setDate", endDate);
      //   } else if (payFreq === "twoWeeks") {
      //     endDate.setDate(selectedDate.getDate() + 14);
      //     $(".endDatePicker").datepicker("setDate", endDate);
      //   } else if (payFreq === "monthly") {
      //     endDate.setMonth(selectedDate.getMonth() + 1);
      //     $(".endDatePicker").datepicker("setDate", endDate);
      //   } else {
      //     endDate.setDate(selectedDate.getDate());
      //     $(".endDatePicker").datepicker("option", "minDate", selectedDate);
      //   }
      // }
    });
  } catch (e) {
    console.log(e);
  }
});

$(".endDatePicker").each(function () {
  try {
    $(this).datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "-10:+10",
      onChangeMonthYear: function (year, month) {
        var $datepicker = jQuery(this);
        var date = new Date($datepicker.datepicker("getDate"));
        var lastDayOfMonth = new Date(year, month, 0).getDate();
        var preservedDay = Math.min(
          lastDayOfMonth,
          Math.max(1, date.getDate())
        );
        $datepicker.datepicker(
          "setDate",
          month + "/" + preservedDay + "/" + year
        );
      },
    });
  } catch (e) {
    console.log(e);
  }
});

function generatePayPeriod(
  drpDownPayFreqID,
  startDatePickerID,
  endDatePickerID,
  formID
) {
  try {
    let payFreq = document.querySelector(drpDownPayFreqID).value;
    let startDatePickerValue = document.querySelector(startDatePickerID).value;
    let startDatePicker = document.querySelector(startDatePickerID);
    let endDatePicker = document.querySelector(endDatePickerID);

    let selectedDate = new Date(startDatePickerValue);
    let endDate = new Date(startDatePickerValue);

    if (startDatePickerValue != "") {
      startDatePicker.classList.add("disabled");
      endDatePicker.classList.add("disabled");

      if (payFreq === "twoWeeksAdmin") {
        startDatePicker.classList.remove("disabled");
        endDatePicker.classList.remove("disabled");
        endDate.setDate(selectedDate.getDate() + 14);
        $(endDatePicker).datepicker("setDate", endDate);
      } else if (payFreq === "twoWeeksOthers") {
        endDate.setDate(selectedDate.getDate() + 14);
        $(endDatePicker).datepicker("setDate", endDate);
      } else if (payFreq === "custom") {
        startDatePicker.classList.remove("disabled");
        endDatePicker.classList.remove("disabled");
        // endDate.setDate(selectedDate.getDate());
        // endDate.setDate(selectedDate.getDate());
        // $(endDatePicker).datepicker("option", "minDate", selectedDate);
      } else {
        reset(formID);
      }
    }
  } catch (e) {
    console.log(e);
  }
}

function generatePayPeriodBgc(
  drpDownPayFreqID,
  startDatePickerID,
  endDatePickerID,
  formID
) {
  try {
    let payFreq = document.querySelector(drpDownPayFreqID).value;
    let startDatePickerValue = document.querySelector(startDatePickerID).value;
    let startDatePicker = document.querySelector(startDatePickerID);
    let endDatePicker = document.querySelector(endDatePickerID);

    let selectedDate = new Date(startDatePickerValue);
    let endDate = new Date(startDatePickerValue);

    let date = new Date(),
      y = date.getFullYear(),
      m = date.getMonth();
    let first = new Date(y, m, 1);
    let fifteen = new Date(y, m, 15);
    let sixteen = new Date(y, m, 16);
    let thirty = new Date(y, m, 30);
    let ten = new Date(y, m, 10);
    let eleven = new Date(y, m, 11);
    let twentysix = new Date(y, m, 26);
    let twentyseven = new Date(y, m - 1, 27);

    if (payFreq != "") {
      startDatePicker.classList.add("disabled");
      endDatePicker.classList.add("disabled");

      if (payFreq === "Admin1") {
        $(startDatePicker).datepicker("setDate", first);
        $(startDatePicker).datepicker("setDate", first);
        $(endDatePicker).datepicker("setDate", fifteen);
      } else if (payFreq === "Admin2") {
        $(startDatePicker).datepicker("setDate", sixteen);
        $(startDatePicker).datepicker("setDate", sixteen);
        $(endDatePicker).datepicker("setDate", thirty);
      } else if (payFreq === "Others1") {
        $(startDatePicker).datepicker("setDate", twentyseven);
        $(startDatePicker).datepicker("setDate", twentyseven);
        $(endDatePicker).datepicker("setDate", ten);
      } else if (payFreq === "Others2") {
        $(startDatePicker).datepicker("setDate", eleven);
        $(startDatePicker).datepicker("setDate", eleven);
        $(endDatePicker).datepicker("setDate", twentysix);
      } else if (payFreq === "custom") {
        startDatePicker.classList.remove("disabled");
        endDatePicker.classList.remove("disabled");
        // endDate.setDate(selectedDate.getDate());

        // $(endDatePicker).datepicker("option", "minDate", selectedDate);
      } else {
        reset(formID);
      }
    }
  } catch (e) {
    console.log(e);
  }
}

function hidePayslipInfo() {
  try {
    const drpEmployee = document.querySelector("#drpDownEmployee");
    const emp = drpEmployee.options[drpEmployee.selectedIndex].value;

    const child7 = document.querySelector(
      "#payroll .modal-content > *:nth-child(7)"
    );
    const child11 = document.querySelector(
      "#payroll .modal-content > *:nth-child(11)"
    );
    const child12 = document.querySelector(
      "#payroll .modal-content > *:nth-child(12)"
    );
    const child13 = document.querySelector(
      "#payroll .modal-content > *:nth-child(13)"
    );
    const child14 = document.querySelector(
      "#payroll .modal-content > *:nth-child(14)"
    );
    const child15 = document.querySelector(
      "#payroll .modal-content > *:nth-child(15)"
    );
    const child16 = document.querySelector(
      "#payroll .modal-content > *:nth-child(16)"
    );
    const child17 = document.querySelector(
      "#payroll .modal-content > *:nth-child(17)"
    );

    console.log();
    if (emp === "All") {
      child7.classList.add("hidden");
      child11.classList.add("hidden");
      child12.classList.add("hidden");
      child13.classList.add("hidden");
      child14.classList.add("hidden");
      child15.classList.add("hidden");
      child16.classList.add("hidden");
      child17.classList.add("hidden");
    } else {
      child7.classList.remove("hidden");
      child11.classList.remove("hidden");
      child12.classList.remove("hidden");
      child13.classList.remove("hidden");
      child14.classList.remove("hidden");
      child15.classList.remove("hidden");
      child16.classList.remove("hidden");
      child17.classList.remove("hidden");
    }
  } catch (e) {
    console.log(e);
  }
}

function calcBusinessDays(dDate1, dDate2) {
  try {
    // input given as Date objects
    var iWeeks,
      iDateDiff,
      iAdjust = 0;
    if (dDate2 < dDate1) return -1; // error code if dates transposed
    var iWeekday1 = dDate1.getDay(); // day of week
    var iWeekday2 = dDate2.getDay();
    iWeekday1 = iWeekday1 == 0 ? 7 : iWeekday1; // change Sunday from 0 to 7
    iWeekday2 = iWeekday2 == 0 ? 7 : iWeekday2;
    if (iWeekday1 > 5 && iWeekday2 > 5) iAdjust = 1; // adjustment if both days on weekend
    iWeekday1 = iWeekday1 > 5 ? 5 : iWeekday1; // only count weekdays
    iWeekday2 = iWeekday2 > 5 ? 5 : iWeekday2;

    // calculate differnece in weeks (1000mS * 60sec * 60min * 24hrs * 7 days = 604800000)
    iWeeks = Math.floor((dDate2.getTime() - dDate1.getTime()) / 604800000);

    if (iWeekday1 < iWeekday2) {
      //Equal to makes it reduce 5 days
      iDateDiff = iWeeks * 5 + (iWeekday2 - iWeekday1);
    } else {
      iDateDiff = (iWeeks + 1) * 5 - (iWeekday1 - iWeekday2);
    }

    iDateDiff -= iAdjust; // take into account both days on weekend

    return iDateDiff + 1; // add 1 because dates are inclusive
  } catch (e) {
    console.log(e);
  }
}

// leave records From To Counter
function getBusinessDateCount(startDate, endDate) {
  try {
    var elapsed, daysBeforeFirstSaturday, daysAfterLastSunday;
    var ifThen = function (a, b, c) {
      return a == b ? c : a;
    };

    elapsed = endDate - startDate;
    elapsed /= 86400000;

    daysBeforeFirstSunday = (7 - startDate.getDay()) % 7;
    daysAfterLastSunday = endDate.getDay();

    elapsed -= daysBeforeFirstSunday + daysAfterLastSunday;
    elapsed = (elapsed / 7) * 5;
    elapsed +=
      ifThen(daysBeforeFirstSunday - 1, -1, 0) +
      ifThen(daysAfterLastSunday, 6, 5);

    return Math.ceil(elapsed);
  } catch (e) {
    console.log(e);
  }
}

function calc() {
  try {
    let start = document.querySelector("#txtDateFrom").value,
      end = document.querySelector("#txtDateTo").value,
      result = getBusinessDateCount(new Date(start), new Date(end));
    document.querySelector("#result").innerHTML = result;
  } catch (e) {
    console.log(e);
  }
}

// Show Employee based on selected option
function getEmployeeBy() {
  try {
    const select = document.querySelector("#showEmployeeBy");
    const showEmployeeByCategory = document.querySelector(
      "#showEmployeeByCategory"
    );
    removeOptions(showEmployeeByCategory);
    const departments = ["Programming", "Marketing", "Sales", "Human Resource"];
    const positions = ["Manager", "Programmer", "Sales Assistant", "Technical"];

    if (select.options[select.selectedIndex].value == "department") {
      for (dept in departments) {
        showEmployeeByCategory.appendChild(new Option(departments[dept]));
      }
    } else if (select.options[select.selectedIndex].value == "position") {
      for (pos in positions) {
        showEmployeeByCategory.appendChild(new Option(positions[pos]));
      }
    } else {
    }
  } catch (e) {
    console.log(e);
  }
}

// Show Employee based on selected option
function getEmployeeByModal() {
  try {
    const select = document.querySelector("#showEmployeeByModal");
    const showEmployeeByCategory = document.querySelector(
      "#showEmployeeByCategoryModal"
    );
    removeOptions(showEmployeeByCategory);
    const departments = ["Programming", "Marketing", "Sales", "Human Resource"];
    const positions = ["Manager", "Programmer", "Sales Assistant", "Technical"];

    if (select.options[select.selectedIndex].value == "department") {
      for (dept in departments) {
        showEmployeeByCategory.appendChild(new Option(departments[dept]));
      }
    } else if (select.options[select.selectedIndex].value == "position") {
      for (pos in positions) {
        showEmployeeByCategory.appendChild(new Option(positions[pos]));
      }
    } else {
    }
  } catch (e) {
    console.log(e);
  }
}

// Clear Options
function removeOptions(select_box) {
  try {
    let i;
    for (i = select_box.options.length - 1; i >= 0; i--) {
      select_box.remove(i);
    }
  } catch (e) {
    console.log(e);
  }
}

function scrollTop() {
  try {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  } catch (e) {
    console.log(e);
  }
}

function scrollTopModal() {
  try {
    document.querySelector(".modal-content").scrollTop = 0;
  } catch (e) {
    console.log(e);
  }
}

function scrollTopDataList() {
  try {
    document.querySelector(".datalist-data").scrollTop = 0;
  } catch (e) {
    console.log(e);
  }
}

function openModal(btn_id) {
  try {
    // List modal
    const modal1 = document.querySelector(".modal");
    const modalFileUpload = document.querySelector(".modal-file-upload");
    const modalFileSubstitution = document.querySelector(
      ".modal-file-substitution"
    );
    const modalTimeAlteration = document.querySelector(
      ".modal-time-alteration"
    );
    const modalOvertimeRecord = document.querySelector(
      ".modal-overtime-application"
    );

    const modalUndertimeRecord = document.querySelector(
      ".modal-undertime-application"
    );
    const modalExpenseRecord = document.querySelector(
      ".modal-expense-application"
    );

    const modalAddHoliday = document.querySelector(".modal-add-holiday");
    const modalEditHoliday = document.querySelector(".modal-edit-holiday");

    const modalFileLeave = document.querySelector(".modal-file-leave");
    const modalCreatePayroll = document.querySelector(".modal-create-payroll");
    const modalMassPayroll = document.querySelector(".modal-mass-payroll");
    const modalPayrollMemo = document.querySelector(".modal-payrollmemo");
    const modalAddEmployee = document.querySelector(".modal-add-employee");
    const modalAddEmployeeHeader = document.querySelector(
      "#add-employee-header"
    );
    const btnMoreContainer = document.querySelector(".more-container");
    const modalAddEmployeeBtn = document.querySelector("#btnModalAddEmployee");
    const modalUpdateEmployeeBtn = document.querySelector(
      "#btnModalUpdateEmployee"
    );
    // const modalDeleteEmployeeBtn = document.querySelector(
    //   '#btnModalDeleteEmployee'
    // );
    const selectDept = document.querySelector("#drpDepartment");
    const selectDeptUpdate = document.querySelector("#drpDepartmentUpdate");
    // const modalUpdateEmployee = document.querySelector(
    //   ".modal-update-employee"
    // );
    const modalViewEmployee = document.querySelector(".modal-view-employee");
    const modalAddEmpTask = document.querySelector(".modal-add-inprogresstask");
    const modalViewPayslip = document.querySelector(".modal-view-payslip");
    const modalViewMemo = document.querySelector(".modal-viewpayrollmemo");

    // get open modal button
    const modalBtn = btn_id;

    if (modalBtn === "#btnTimeAlteration") {
      modalTimeAlteration.style.display = "flex";
    } else if (modalBtn === "#btnOvertimeApplication") {
      modalOvertimeRecord.style.display = "flex";
    } else if (modalBtn === "#btnUndertimeApplication") {
      modalUndertimeRecord.style.display = "flex";
    } else if (modalBtn === "#btnFileSubstitution") {
      modalFileSubstitution.style.display = "flex";
    } else if (modalBtn === "#btnFileLeave") {
      modalFileLeave.style.display = "flex";
    } else if (modalBtn === "#btnAddExpense") {
      modalExpenseRecord.style.display = "flex";
    } else if (modalBtn === "#btnCreatePayroll") {
      modalCreatePayroll.style.display = "flex";
    } else if (modalBtn === "#btnMassGeneratePayroll") {
      modalMassPayroll.style.display = "flex";
    } else if (modalBtn === "#btnAddEmployee") {
      modalAddEmployee.style.display = "flex";
      modalAddEmployeeHeader.innerHTML = "Add Employment Information";
      modalAddEmployeeBtn.classList.remove("hidden");
      modalUpdateEmployeeBtn.classList.add("hidden");
      // modalDeleteEmployeeBtn.classList.add('hidden');
      btnMoreContainer.classList.add("hidden");
      selectDept.classList.remove("hidden");
      selectDeptUpdate.classList.add("hidden");
    } else if (modalBtn === "#btnUpdateEmployee") {
      modalAddEmployee.style.display = "flex";
      modalAddEmployeeHeader.innerHTML = "Update Employment Information";
      modalAddEmployeeBtn.classList.add("hidden");
      modalUpdateEmployeeBtn.classList.remove("hidden");
      // modalDeleteEmployeeBtn.classList.remove('hidden');
      selectDept.classList.add("hidden");
      selectDeptUpdate.classList.remove("hidden");
      btnMoreContainer.classList.remove("hidden");
      // defaultTabUpdate("primary-info-update");
    } else if (modalBtn === "#btnViewEmployee") {
      modalViewEmployee.style.display = "flex";
      hideBasicInfo("view-primary-info");
    } else if (modalBtn === "#btnAddEmpTask") {
      modalAddEmpTask.style.display = "flex";
    } else if (modalBtn === "#btnViewPayslip") {
      modalViewPayslip.style.display = "flex";
    } else if (modalBtn === "#btnAddHoliday") {
      modalAddHoliday.style.display = "flex";
    } else if (modalBtn === "#btnEditHoliday") {
      modalEditHoliday.style.display = "flex";
    } else if (modalBtn === "#btnAddPayrollMemo") {
      modalPayrollMemo.style.display = "flex";
    } else if (modalBtn === "#btnViewMemoNotice") {
      modalViewMemo.style.display = "flex";
    } else if (modalBtn === "#btnFileUpload") {
      modalFileUpload.style.display = "flex";
    } else if (modalBtn === "#btnModal1") {
      modal1.style.display = "flex";
    }

    //set tab back to primary-info
    defaultTab("primary-info");
    scrollTopModal();
  } catch (e) {
    console.log(e);
  }
}

function closeModal(btn_id) {
  try {
    // List modal
    const modal1 = document.querySelector(".modal");
    const modalFileUpload = document.querySelector(".modal-file-upload");
    const modalFileSubstitution = document.querySelector(
      ".modal-file-substitution"
    );
    const modalTimeAlteration = document.querySelector(
      ".modal-time-alteration"
    );
    const modalOvertimeRecord = document.querySelector(
      ".modal-overtime-application"
    );
    const modalUndertimeRecord = document.querySelector(
      ".modal-undertime-application"
    );
    const modalExpenseRecord = document.querySelector(
      ".modal-expense-application"
    );
    const modalAddHoliday = document.querySelector(".modal-add-holiday");
    const modalEditHoliday = document.querySelector(".modal-edit-holiday");
    const modalFileLeave = document.querySelector(".modal-file-leave");
    const modalCreatePayroll = document.querySelector(".modal-create-payroll");
    const modalMassPayroll = document.querySelector(".modal-mass-payroll");
    const modalAddEmployee = document.querySelector(".modal-add-employee");
    // const modalUpdateEmployee = document.querySelector(
    //   ".modal-update-employee"
    // );
    const modalViewEmployee = document.querySelector(".modal-view-employee");
    const modalAddEmpTask = document.querySelector(".modal-add-inprogresstask");
    const modalViewPayslip = document.querySelector(".modal-view-payslip");
    const modalPayrollMemo = document.querySelector(".modal-payrollmemo");
    const modalViewMemo = document.querySelector(".modal-viewpayrollmemo");

    // get open modal button
    const modalBtn = btn_id;

    if (modalBtn === "#btnCloseTimeAlteration") {
      modalTimeAlteration.style.display = "none";
    } else if (modalBtn === "#btnCloseOvertimeApplication") {
      modalOvertimeRecord.style.display = "none";
    } else if (modalBtn === "#btnCloseUndertimeApplication") {
      modalUndertimeRecord.style.display = "none";
    } else if (modalBtn === "#btnCloseFileSubstitution") {
      modalFileSubstitution.style.display = "none";
    } else if (modalBtn === "#btnCloseFileLeave") {
      modalFileLeave.style.display = "none";
    } else if (modalBtn === "#btnCloseAddExpense") {
      modalExpenseRecord.style.display = "none";
    } else if (modalBtn === "#btnCloseCreatePayroll") {
      modalCreatePayroll.style.display = "none";
      reset(`payroll`);
    } else if (modalBtn === "#btnCloseMassPayroll") {
      modalMassPayroll.style.display = "none";
      reset(`payroll`);
    } else if (modalBtn === "#btnCloseAddEmployee") {
      modalAddEmployee.style.display = "none";
    } else if (modalBtn === "#btnCloseAddHoliday") {
      modalAddHoliday.style.display = "none";
    } else if (modalBtn === "#btnCloseEditHoliday") {
      modalEditHoliday.style.display = "none";
    }
    //  else if (modalBtn === "#btnCloseUpdateEmployee") {
    //   modalUpdateEmployee.style.display = "none";
    // }
    else if (modalBtn === "#btnCloseViewEmployee") {
      modalViewEmployee.style.display = "none";
    } else if (modalBtn === "#btnCloseAddEmpTask") {
      modalAddEmpTask.style.display = "none";
      resetAddEmpProj();
    } else if (modalBtn === "#btnCloseViewPayslip") {
      modalViewPayslip.style.display = "none";
    } else if (modalBtn === "#btnClosePayrollMemo") {
      modalPayrollMemo.style.display = "none";
    } else if (modalBtn === "#btnCloseViewMemo") {
      modalViewMemo.style.display = "none";
    } else if (modalBtn === "#btnCloseFileUpload") {
      modalFileUpload.style.display = "none";
    } else if (modalBtn === "#btnCloseModal1") {
      modal1.style.display = "none";
    }

    //set tab back to primary-info
    defaultTab("primary-info");
    // defaultTabUpdate("primary-info-update");
    defaultTabViewIE("view-primary-info");
  } catch (e) {
    console.log(e);
  }
}

function openTabHrInfo() {
  try {
    const modalAddEmployee = document.querySelector(".modal-add-employee");
    const modalAddEmployeeBtn = document.querySelector("#btnModalAddEmployee");
    const modalUpdateEmployeeBtn = document.querySelector(
      "#btnModalUpdateEmployee"
    );

    modalAddEmployee.style.display = "flex";
    modalAddEmployeeBtn.classList.remove("hidden");
    modalUpdateEmployeeBtn.classList.add("hidden");

    const x = document.getElementsByClassName("tabNameHrModal");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById("hr-info").style.display = "flex";

    $(".modal-tab-list li.current-tab").removeClass("current-tab");
    $(".modal-tab-list li:nth-child(2)").addClass("current-tab");

    scrollTopModal();
  } catch (e) {
    console.log(e);
  }
}

function openTabHrInfoUpdate() {
  try {
    const modalAddEmployee = document.querySelector(".modal-add-employee");
    const modalAddEmployeeHeader = document.querySelector(
      "#add-employee-header"
    );
    const modalAddEmployeeBtn = document.querySelector("#btnModalAddEmployee");
    const modalUpdateEmployeeBtn = document.querySelector(
      "#btnModalUpdateEmployee"
    );
    const modalDeleteEmployeeBtn = document.querySelector(
      "#btnModalDeleteEmployee"
    );
    const selectDept = document.querySelector("#drpDepartment");
    const selectDeptUpdate = document.querySelector("#drpDepartmentUpdate");

    modalAddEmployee.style.display = "flex";
    modalAddEmployeeHeader.innerHTML = "Update Employment Information";
    modalAddEmployeeBtn.classList.add("hidden");
    modalUpdateEmployeeBtn.classList.remove("hidden");
    modalDeleteEmployeeBtn.classList.remove("hidden");
    selectDept.classList.add("hidden");
    selectDeptUpdate.classList.remove("hidden");

    const x = document.getElementsByClassName("tabNameHrModal");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById("hr-info").style.display = "flex";

    $(".modal-tab-list li.current-tab").removeClass("current-tab");
    $(".modal-tab-list li:nth-child(2)").addClass("current-tab");

    scrollTopModal();
  } catch (e) {
    console.log(e);
  }
}

function reset(frm_id) {
  try {
    document.getElementById(frm_id).reset();
  } catch (e) {
    console.log(e);
  }
}

function clearField(input) {
  try {
    input.value = "";
  } catch (e) {
    console.log(e);
  }
}

function clearSelectDepartment(input) {
  try {
    input.value = "Select Department";
  } catch (e) {
    console.log(e);
  }
}

function clearSelectEmployee(input) {
  try {
    input.value = "Select Employee";
  } catch (e) {
    console.log(e);
  }
}

function enableField(field_ID) {
  try {
    document.getElementById(field_ID).disabled = false;
  } catch (e) {
    console.log(e);
  }
}

function openModalWithPay() {
  try {
    const modalWithPay = document.querySelector(".modal-with-pay");
    modalWithPay.style.display = "flex";
  } catch (e) {
    console.log(e);
  }
}

function closeModalWithPay() {
  try {
    const modalWithPay = document.querySelector(".modal-with-pay");
    modalWithPay.style.display = "none";
  } catch (e) {
    console.log(e);
  }
}

function openModalConfirmation() {
  try {
    const modalConfirmation = document.querySelector(".modal-confirmation");
    modalConfirmation.style.display = "flex";
  } catch (e) {
    console.log(e);
  }
}

function closeModalConfirmation() {
  try {
    const modalConfirmation = document.querySelector(".modal-confirmation");
    modalConfirmation.style.display = "none";
  } catch (e) {
    console.log(e);
  }
}

function loadModal() {
  try {
    document.querySelector(".modal").innerHTML = "confirmation.html";
    openModalConfirmation();
  } catch (e) {
    console.log(e);
  }
}

function openModalSetLeave() {
  try {
    const modal = document.querySelector(".modal-set-leave");
    modal.style.display = "flex";
  } catch (e) {
    console.log(e);
  }
}

function closeModalSetLeave() {
  try {
    const modal = document.querySelector(".modal-set-leave");
    modal.style.display = "none";
  } catch (e) {
    console.log(e);
  }
}

function openTab(tabName) {
  try {
    var x = document.getElementsByClassName("tabNameHrModal");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "flex";

    $(".tab-list").on("click", "li", function () {
      $(".tab-list li.current-tab").removeClass("current-tab");
      $(this).addClass("current-tab");
    });
  } catch (e) {
    console.log(e);
  }
}

function openViewEmpInfoTab(tabName) {
  try {
    var x = document.getElementsByClassName("tabViewIEList");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "flex";

    hideBasicInfo(tabName);

    $(".tab-list").on("click", "li", function () {
      $(".tab-list li.current-tab").removeClass("current-tab");
      $(this).addClass("current-tab");
    });
  } catch (e) {
    console.log(e);
  }
}

function hideBasicInfo(tabName) {
  try {
    const basicInfo = document.querySelector(
      ".summary-employee-info-container"
    );
    if (tabName === "view-primary-info") {
      basicInfo.classList.add("hidden");
    } else {
      basicInfo.classList.remove("hidden");
    }
  } catch (e) {
    console.log(e);
  }
}

function redirectModalToUpdateEmployee() {
  try {
    const modalViewEmployee = document.querySelector(".modal-view-employee");
    modalViewEmployee.style.display = "none";
    openModal(`#btnUpdateEmployee`);
  } catch (e) {
    console.log(e);
  }
}

function defaultTab(tabName) {
  try {
    var x = document.getElementsByClassName("tabNameHrModal");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "flex";

    $(".modal-tab-list li.current-tab").removeClass("current-tab");
    $(".modal-tab-list li:first-child").addClass("current-tab");
  } catch (e) {
    console.log(e);
  }
}

function defaultTabUpdate(tabName) {
  try {
    var x = document.getElementsByClassName("tabNameHrModal");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "flex";

    $(".modal-tab-list li.current-tab").removeClass("current-tab");
    $(".modal-tab-list li:nth-child(1)").addClass("current-tab");
  } catch (e) {
    console.log(e);
  }
}

function defaultTabViewIE(tabName) {
  try {
    var x = document.getElementsByClassName("tabViewIEList");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "flex";

    $(".modal-tab-list li.current-tab").removeClass("current-tab");
    $(".modal-tab-list li:first-child").addClass("current-tab");
  } catch (e) {
    console.log(e);
  }
}

function toggleTermination() {
  try {
    const selectEmploymentStatus = $("#drpEmpStatus").find(":selected").text();

    const dtTermDateLabel = document.querySelector("#dtTermDateLabel");
    const dtTermDate = document.querySelector("#dtTermDate");

    dtTermDateLabel.classList.add("disabled");
    dtTermDate.classList.add("disabled");

    if (selectEmploymentStatus === "Terminated") {
      dtTermDateLabel.classList.remove("disabled");
      dtTermDate.classList.remove("disabled");
    }
  } catch (e) {
    console.log(e);
  }
}

function toggleEndo() {
  try {
    const selectEmploymentStatus = $("#selectEmploymentStatus")
      .find(":selected")
      .text();
    const lblLeave = document.querySelector("#txtLeaveLabel");
    const lblSickLeave = document.querySelector("#txtSickLeaveLabel");
    const txtSickLeave = document.querySelector("#txtSickLeave");
    const lblVELeave = document.querySelector("#txtVELeaveLabel");
    const txtVELeave = document.querySelector("#txtVELeave");
    const dtTermDateLabel = document.querySelector("#dtTermDateLabel");
    const dtTermDate = document.querySelector("#dtTermDate");

    lblLeave.classList.add("disabled");
    lblSickLeave.classList.add("disabled");
    txtSickLeave.classList.add("disabled");
    lblVELeave.classList.add("disabled");
    txtVELeave.classList.add("disabled");
    dtTermDateLabel.classList.add("disabled");
    dtTermDate.classList.add("disabled");

    if (selectEmploymentStatus === "Regular") {
      lblLeave.classList.remove("disabled");
      lblSickLeave.classList.remove("disabled");
      txtSickLeave.classList.remove("disabled");
      lblVELeave.classList.remove("disabled");
      txtVELeave.classList.remove("disabled");
    } else if (selectEmploymentStatus === "Terminated") {
      dtTermDateLabel.classList.remove("disabled");
      dtTermDate.classList.remove("disabled");
    }
  } catch (e) {
    console.log(e);
  }
}
function toggleEndo2() {
  try {
    const selectEmploymentStatus = $("#selectEmploymentStatus2")
      .find(":selected")
      .text();
    const lblLeave = document.querySelector("#txtLeaveLabel2");
    const lblSickLeave = document.querySelector("#txtSickLeaveLabel2");
    const txtSickLeave = document.querySelector("#txtSickLeave2");
    const lblVELeave = document.querySelector("#txtVELeaveLabel2");
    const txtVELeave = document.querySelector("#txtVELeave2");
    const dtTermDateLabel = document.querySelector("#dtTermDateLabel2");
    const dtTermDate = document.querySelector("#dtTermDate2");

    lblLeave.classList.add("disabled");
    lblSickLeave.classList.add("disabled");
    txtSickLeave.classList.add("disabled");
    lblVELeave.classList.add("disabled");
    txtVELeave.classList.add("disabled");
    dtTermDateLabel.classList.add("disabled");
    dtTermDate.classList.add("disabled");

    if (selectEmploymentStatus === "Regular") {
      lblLeave.classList.remove("disabled");
      lblSickLeave.classList.remove("disabled");
      txtSickLeave.classList.remove("disabled");
      lblVELeave.classList.remove("disabled");
      txtVELeave.classList.remove("disabled");
    } else if (selectEmploymentStatus === "End of Contract") {
      dtTermDateLabel.classList.remove("disabled");
      dtTermDate.classList.remove("disabled");
    }
  } catch (e) {
    console.log(e);
  }
}

function enableReq() {
  try {
    const req1 = document.querySelector("#req1");
    const req2 = document.querySelector("#req2");
    const req3 = document.querySelector("#req3");
    req1.classList.remove("disabled");
    req2.classList.remove("disabled");
    req3.classList.remove("disabled");
  } catch (e) {
    console.log(e);
  }
}

function disableReq() {
  try {
    const req1 = document.querySelector("#req1");
    const req2 = document.querySelector("#req2");
    const req3 = document.querySelector("#req3");
    req1.classList.add("disabled");
    req2.classList.add("disabled");
    req3.classList.add("disabled");
  } catch (e) {
    console.log(e);
  }
}

function enableReq2() {
  try {
    const req1 = document.querySelector("#req1_2");
    const req2 = document.querySelector("#req2_2");
    const req3 = document.querySelector("#req3_2");
    req1.classList.remove("disabled");
    req2.classList.remove("disabled");
    req3.classList.remove("disabled");
  } catch (e) {
    console.log(e);
  }
}

function disableReq2() {
  try {
    const req1 = document.querySelector("#req1_2");
    const req2 = document.querySelector("#req2_2");
    const req3 = document.querySelector("#req3_2");
    req1.classList.add("disabled");
    req2.classList.add("disabled");
    req3.classList.add("disabled");
  } catch (e) {
    console.log(e);
  }
}

function enableAccessRole() {
  try {
    const selectRoleLabel = document.querySelector("#selectRoleLabel");
    const selectRole = document.querySelector("#selectRole");
    const txtPasswordLabel = document.querySelector("#txtPasswordLabel");
    const txtPassword = document.querySelector("#txtPassword");
    selectRoleLabel.classList.remove("disabled");
    selectRole.classList.remove("disabled");
    txtPasswordLabel.classList.remove("disabled");
    txtPassword.classList.remove("disabled");
  } catch (e) {
    console.log(e);
  }
}

function disableAccessRole() {
  try {
    const selectRoleLabel = document.querySelector("#selectRoleLabel");
    const selectRole = document.querySelector("#selectRole");
    const txtPasswordLabel = document.querySelector("#txtPasswordLabel");
    const txtPassword = document.querySelector("#txtPassword");
    selectRoleLabel.classList.add("disabled");
    selectRole.classList.add("disabled");
    txtPasswordLabel.classList.add("disabled");
    txtPassword.classList.add("disabled");
  } catch (e) {
    console.log(e);
  }
}

function enableAccessRole2() {
  try {
    const selectRoleLabel = document.querySelector("#selectRoleLabel2");
    const selectRole = document.querySelector("#selectRole2");
    const txtPasswordLabel = document.querySelector("#txtPasswordLabel2");
    const txtPassword = document.querySelector("#txtPassword2");
    selectRoleLabel.classList.remove("disabled");
    selectRole.classList.remove("disabled");
    txtPasswordLabel.classList.remove("disabled");
    txtPassword.classList.remove("disabled");
  } catch (e) {
    console.log(e);
  }
}

function disableAccessRole2() {
  try {
    const selectRoleLabel = document.querySelector("#selectRoleLabel2");
    const selectRole = document.querySelector("#selectRole2");
    const txtPasswordLabel = document.querySelector("#txtPasswordLabel2");
    const txtPassword = document.querySelector("#txtPassword2");
    selectRoleLabel.classList.add("disabled");
    selectRole.classList.add("disabled");
    txtPasswordLabel.classList.add("disabled");
    txtPassword.classList.add("disabled");
  } catch (e) {
    console.log(e);
  }
}

function removeHidden() {
  try {
    const inputProjectTask = document.querySelector(
      "input.txtTaskField.hidden"
    );
    inputProjectTask.classList.remove("hidden");

    const lastTaskField = document.querySelector("#txtTaskField_15");
    const btnProjectTask = document.querySelector(".btnAddTask");

    if (lastTaskField.classList.contains("hidden") == false) {
      btnProjectTask.classList.add("hidden");
    }
  } catch (e) {
    console.log(e);
  }
}

function resetAddEmpProj() {
  try {
    const resetEmpProj = document.querySelectorAll(
      ".txtTaskName-container .txtTaskField"
    );

    resetEmpProj.forEach((element) => {
      element.classList.add("hidden");
    });

    const firstTaskField = document.querySelector("#txtTaskField_1");
    firstTaskField.classList.remove("hidden");

    const lastTaskField = document.querySelector("#txtTaskField_15");
    const btnProjectTask = document.querySelector(".btnAddTask");

    if (lastTaskField.classList.contains("hidden") == true) {
      btnProjectTask.classList.remove("hidden");
    }
  } catch (e) {
    console.log(e);
  }
}

function showEM() {
  try {
    const card1 = document.querySelector(
      "#employee-masterlist .container .card-1"
    );
    const card2 = document.querySelector(
      "#employee-masterlist .container .card-2"
    );
    const card3 = document.querySelector(
      "#employee-masterlist .container .card-3"
    );

    card3.classList.add("hidden");
    card2.classList.add("hidden");
    card1.classList.remove("hidden");
  } catch (e) {
    console.log(e);
  }
}
function showSM() {
  try {
    const card1 = document.querySelector(
      "#employee-masterlist .container .card-1"
    );
    const card2 = document.querySelector(
      "#employee-masterlist .container .card-2"
    );
    const card3 = document.querySelector(
      "#employee-masterlist .container .card-3"
    );

    card3.classList.add("hidden");
    card1.classList.add("hidden");
    card2.classList.remove("hidden");
  } catch (e) {
    console.log(e);
  }
}

function showAE() {
  try {
    const card1 = document.querySelector(
      "#employee-masterlist .container .card-1"
    );
    const card2 = document.querySelector(
      "#employee-masterlist .container .card-2"
    );
    const card3 = document.querySelector(
      "#employee-masterlist .container .card-3"
    );

    card1.classList.add("hidden");
    card2.classList.add("hidden");
    card3.classList.remove("hidden");
  } catch (e) {
    console.log(e);
  }
}

function showPayrollIM() {
  try {
    const card1 = document.querySelector(
      "#payroll-add-employee .container .card-1"
    );
    const card2 = document.querySelector(
      "#payroll-add-employee .container .card-2"
    );

    card2.classList.remove("hidden");
    card1.classList.add("hidden");
  } catch (e) {
    console.log(e);
  }
}
function showPayrollEM() {
  try {
    const card1 = document.querySelector(
      "#payroll-add-employee .container .card-1"
    );
    const card2 = document.querySelector(
      "#payroll-add-employee .container .card-2"
    );

    card2.classList.add("hidden");
    card1.classList.remove("hidden");
  } catch (e) {
    console.log(e);
  }
}

function showIM() {
  try {
    const card1 = document.querySelector(
      "#employee-masterlist .container .card-1"
    );
    const card2 = document.querySelector(
      "#employee-masterlist .container .card-2"
    );

    card2.classList.remove("hidden");
    card1.classList.add("hidden");
  } catch (e) {
    console.log(e);
  }
}

function showER() {
  try {
    const card1 = document.querySelector("#expense-records .container .card-1");
    const card2 = document.querySelector("#expense-records .container .card-2");

    card2.classList.add("hidden");
    card1.classList.remove("hidden");
  } catch (e) {
    console.log(e);
  }
}

function showPE() {
  try {
    const card1 = document.querySelector("#expense-records .container .card-1");
    const card2 = document.querySelector("#expense-records .container .card-2");

    card2.classList.remove("hidden");
    card1.classList.add("hidden");
  } catch (e) {
    console.log(e);
  }
}

function showTR() {
  try {
    const card1 = document.querySelector("#time-records .container .card-1");
    const card2 = document.querySelector("#time-records .container .card-2");

    card2.classList.add("hidden");
    card1.classList.remove("hidden");
  } catch (e) {
    console.log(e);
  }
}
function showPTA() {
  try {
    const card1 = document.querySelector("#time-records .container .card-1");
    const card2 = document.querySelector("#time-records .container .card-2");

    card2.classList.remove("hidden");
    card1.classList.add("hidden");
  } catch (e) {
    console.log(e);
  }
}

function showLR() {
  try {
    const card1 = document.querySelector("#leaverecords .container .card-1");
    const card2 = document.querySelector("#leaverecords .container .card-2");

    card2.classList.add("hidden");
    card1.classList.remove("hidden");
  } catch (e) {
    console.log(e);
  }
}

function showPLA() {
  try {
    const card1 = document.querySelector("#leaverecords .container .card-1");
    const card2 = document.querySelector("#leaverecords .container .card-2");

    card2.classList.remove("hidden");
    card1.classList.add("hidden");
  } catch (e) {
    console.log(e);
  }
}

function showOR() {
  try {
    const card1 = document.querySelector(
      "#overtime-records .container .card-1"
    );
    const card2 = document.querySelector(
      "#overtime-records .container .card-2"
    );

    card2.classList.add("hidden");
    card1.classList.remove("hidden");
  } catch (e) {
    console.log(e);
  }
}

function showPOA() {
  try {
    const card1 = document.querySelector(
      "#overtime-records .container .card-1"
    );
    const card2 = document.querySelector(
      "#overtime-records .container .card-2"
    );

    card2.classList.remove("hidden");
    card1.classList.add("hidden");
  } catch (e) {
    console.log(e);
  }
}

function showUR() {
  try {
    const card1 = document.querySelector(
      "#undertime-records .container .card-1"
    );
    const card2 = document.querySelector(
      "#undertime-records .container .card-2"
    );

    card2.classList.add("hidden");
    card1.classList.remove("hidden");
  } catch (e) {
    console.log(e);
  }
}

function showPUA() {
  try {
    const card1 = document.querySelector(
      "#undertime-records .container .card-1"
    );
    const card2 = document.querySelector(
      "#undertime-records .container .card-2"
    );

    card2.classList.remove("hidden");
    card1.classList.add("hidden");
  } catch (e) {
    console.log(e);
  }
}

function showIP() {
  try {
    const card1 = document.querySelector("#project-task .container .card-1");
    const card2 = document.querySelector("#project-task .container .card-2");

    card2.classList.add("hidden");
    card1.classList.remove("hidden");
  } catch (e) {
    console.log(e);
  }
}

function showCT() {
  try {
    const card1 = document.querySelector("#project-task .container .card-1");
    const card2 = document.querySelector("#project-task .container .card-2");

    card2.classList.remove("hidden");
    card1.classList.add("hidden");
  } catch (e) {
    console.log(e);
  }
}
function showP() {
  try {
    const card1 = document.querySelector("#payroll .container .card-1");
    const card2 = document.querySelector("#payroll .container .card-2");

    card2.classList.add("hidden");
    card1.classList.remove("hidden");
  } catch (e) {
    console.log(e);
  }
}

function showPPA() {
  try {
    const card1 = document.querySelector("#payroll .container .card-1");
    const card2 = document.querySelector("#payroll .container .card-2");

    card2.classList.remove("hidden");
    card1.classList.add("hidden");
  } catch (e) {
    console.log(e);
  }
}

function openModalLeaveRemarks() {
  try {
    const modalRemarks = document.querySelector(".modal-leave-remarks");
    modalRemarks.style.display = "flex";
  } catch (e) {
    console.log(e);
  }
}

function closeModalLeaveRemarks() {
  try {
    const modalRemarks = document.querySelector(".modal-leave-remarks");
    modalRemarks.style.display = "none";
  } catch (e) {
    console.log(e);
  }
}

function openModalOvertimeRemarks() {
  try {
    const modalRemarks = document.querySelector(".modal-overtime-remarks");
    modalRemarks.style.display = "flex";
  } catch (e) {
    console.log(e);
  }
}

function closeModalOvertimeRemarks() {
  try {
    const modalRemarks = document.querySelector(".modal-overtime-remarks");
    modalRemarks.style.display = "none";
  } catch (e) {
    console.log(e);
  }
}
function openModalTimeAlterationRemarks() {
  try {
    const modalRemarks = document.querySelector(
      ".modal-timealteration-remarks"
    );
    modalRemarks.style.display = "flex";
  } catch (e) {
    console.log(e);
  }
}

function closeModalTimeAlterationRemarks() {
  try {
    const modalRemarks = document.querySelector(
      ".modal-timealteration-remarks"
    );
    modalRemarks.style.display = "none";
  } catch (e) {
    console.log(e);
  }
}
function openModalExpenseRemarks() {
  try {
    const modalRemarks = document.querySelector(".modal-expense-remarks");
    modalRemarks.style.display = "flex";
  } catch (e) {
    console.log(e);
  }
}

function closeModalExpenseRemarks() {
  try {
    const modalRemarks = document.querySelector(".modal-expense-remarks");
    modalRemarks.style.display = "none";
  } catch (e) {
    console.log(e);
  }
}
function openModalUndertimeRemarks() {
  try {
    const modalRemarks = document.querySelector(".modal-undertime-remarks");
    modalRemarks.style.display = "flex";
  } catch (e) {
    console.log(e);
  }
}

function closeModalUndertimeRemarks() {
  try {
    const modalRemarks = document.querySelector(".modal-undertime-remarks");
    modalRemarks.style.display = "none";
  } catch (e) {
    console.log(e);
  }
}

function openModalViewDTR() {
  try {
    const modal = document.querySelector(".modal-view-dtr");
    modal.style.display = "flex";
  } catch (e) {
    console.log(e);
  }
}

function closeModalViewDTR() {
  try {
    const modal = document.querySelector(".modal-view-dtr");
    modal.style.display = "none";
  } catch (e) {
    console.log(e);
  }
}

function toggleDropDown() {
  try {
    const drpdown = document.querySelector(".btn-dropdown");
    drpdown.classList.toggle("hidden");
  } catch (e) {
    console.log(e);
  }
}

function toggleEmployeeSelection() {
  try {
    const div1 = document.querySelector(".div1");
    const div2 = document.querySelector(".div2");
    const div3 = document.querySelector(".div3");
    let radioValue = $("input[name='employeeSelection']:checked").val();

    if (radioValue === "All") {
      div1.classList.remove("hidden");
      div2.classList.add("hidden");
      div3.classList.add("hidden");
    } else if (radioValue === "Custom") {
      div1.classList.add("hidden");
      div2.classList.remove("hidden");
      div3.classList.remove("hidden");
    }
  } catch (e) {
    console.log(e);
  }
}

function toggleEmployeeSelection3() {
  try {
    const div7 = document.querySelector(".div7");
    const div8 = document.querySelector(".div8");
    const div9 = document.querySelector(".div9");
    let radioValue = $("input[name='employeeSelection3']:checked").val();

    if (radioValue === "All") {
      div7.classList.remove("hidden");
      div8.classList.add("hidden");
      div9.classList.add("hidden");
    } else if (radioValue === "Custom") {
      div7.classList.add("hidden");
      div8.classList.remove("hidden");
      div9.classList.remove("hidden");
    }
  } catch (e) {
    console.log(e);
  }
}

function checkSearchInput() {
  try {
    const txtSearch = document.querySelector("#txtSearch").value;
    const btnClearSearch = document.querySelector(".btn-clear-search");

    if (txtSearch === "") {
      btnClearSearch.classList.add("hidden");
      // hideDataList();
    } else {
      btnClearSearch.classList.remove("hidden");
      // showDataList();
      scrollTopDataList();
    }
  } catch (e) {
    console.log(e);
  }
}

function checkSearchInput2() {
  try {
    const txtSearch = document.querySelector("#txtSearch2").value;
    const btnClearSearch = document.querySelector(".btn-clear-search2");

    if (txtSearch === "") {
      btnClearSearch.classList.add("hidden");
    } else {
      btnClearSearch.classList.remove("hidden");
    }
  } catch (e) {
    console.log(e);
  }
}

function clearSearch(formID, tableID) {
  try {
    const btnClearSearch = document.querySelector(".btn-clear-search");
    var n = 0;

    btnClearSearch.classList.add("hidden");
    reset(formID);

    var tr, td, i;
    table = document.getElementById(tableID);

    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {
      tr[i].style.display = "";
      if (n % 2 == 0) {
        tr[i].style.backgroundColor = "#d3dee2";
      } else {
        tr[i].style.backgroundColor = "#ffffff";
      }
      n++;
    }
  } catch (e) {
    console.log(e);
  }
}

function clearSearch2(formID) {
  try {
    const btnClearSearch = document.querySelector(".btn-clear-search2");

    btnClearSearch.classList.add("hidden");
    reset(formID);
  } catch (e) {
    console.log(e);
  }
}

function clearSearch1(formID, tableID1, noresult_id1) {
  try {
    const btnClearSearch = document.querySelector(".btn-clear-search");
    var n = 0;

    btnClearSearch.classList.add("hidden");
    reset(formID);

    var tr1, tr2;
    table1 = document.getElementById(tableID1);
    //Last edited
    tr1 = table1.getElementsByTagName("tr");

    var noresult1 = document.getElementById(noresult_id1);
    noresult1.classList.add("hidden");

    table1.style.display = "block";

    for (i = 1; i < tr1.length; i++) {
      tr1[i].style.display = "";
      if (n % 2 == 0) {
        tr1[i].style.backgroundColor = "#d3dee2";
      } else {
        tr1[i].style.backgroundColor = "#ffffff";
      }
      n++;
    }
  } catch (e) {
    console.log(e);
  }
}

function clearSearch2(formID, tableID1, tableID2, noresult_id1, noresult_id2) {
  try {
    const btnClearSearch = document.querySelector(".btn-clear-search");
    var n = 0;

    btnClearSearch.classList.add("hidden");
    reset(formID);

    var tr1, tr2;
    table1 = document.getElementById(tableID1);
    table2 = document.getElementById(tableID2);
    //Last edited
    tr1 = table1.getElementsByTagName("tr");
    tr2 = table2.getElementsByTagName("tr");

    var noresult1 = document.getElementById(noresult_id1);
    var noresult2 = document.getElementById(noresult_id2);
    noresult1.classList.add("hidden");
    noresult2.classList.add("hidden");

    table1.style.display = "block";
    table2.style.display = "block";

    for (i = 1; i < tr1.length; i++) {
      tr1[i].style.display = "";
      if (n % 2 == 0) {
        tr1[i].style.backgroundColor = "#d3dee2";
      } else {
        tr1[i].style.backgroundColor = "#ffffff";
      }
      n++;
    }
    n = 0;
    for (i = 1; i < tr2.length; i++) {
      tr2[i].style.display = "";
      if (n % 2 == 0) {
        tr2[i].style.backgroundColor = "#d3dee2";
      } else {
        tr2[i].style.backgroundColor = "#ffffff";
      }
      n++;
    }
  } catch (e) {
    console.log(e);
  }
}

function clearSearch4(
  formID,
  tableID1,
  tableID2,
  tableID3,
  tableID4,
  noresult_id1,
  noresult_id2
) {
  try {
    const btnClearSearch = document.querySelector(".btn-clear-search");
    var n = 0;

    btnClearSearch.classList.add("hidden");
    reset(formID);

    var tr1, td1, i;
    table1 = document.getElementById(tableID1);
    table2 = document.getElementById(tableID2);
    table3 = document.getElementById(tableID3);
    table4 = document.getElementById(tableID4);
    //Last edited
    tr1 = table1.getElementsByTagName("tr");
    tr2 = table2.getElementsByTagName("tr");
    tr3 = table3.getElementsByTagName("tr");
    tr4 = table4.getElementsByTagName("tr");

    var noresult1 = document.getElementById(noresult_id1);
    var noresult2 = document.getElementById(noresult_id2);
    noresult1.classList.add("hidden");
    noresult2.classList.add("hidden");

    table1.style.display = "block";
    table2.style.display = "block";
    table3.style.display = "block";
    table4.style.display = "block";

    for (i = 1; i < tr1.length; i++) {
      tr1[i].style.display = "";
      if (n % 2 == 0) {
        tr1[i].style.backgroundColor = "#d3dee2";
      } else {
        tr1[i].style.backgroundColor = "#ffffff";
      }
      n++;
    }
    n = 0;
    for (i = 1; i < tr2.length; i++) {
      tr2[i].style.display = "";
      if (n % 2 == 0) {
        tr2[i].style.backgroundColor = "#d3dee2";
      } else {
        tr2[i].style.backgroundColor = "#ffffff";
      }
      n++;
    }
    n = 0;
    for (i = 1; i < tr3.length; i++) {
      tr3[i].style.display = "";
      if (n % 2 == 0) {
        tr3[i].style.backgroundColor = "#d3dee2";
      } else {
        tr3[i].style.backgroundColor = "#ffffff";
      }
      n++;
    }
    n = 0;
    for (i = 1; i < tr4.length; i++) {
      tr4[i].style.display = "";
      if (n % 2 == 0) {
        tr4[i].style.backgroundColor = "#d3dee2";
      } else {
        tr4[i].style.backgroundColor = "#ffffff";
      }
      n++;
    }
  } catch (e) {
    console.log(e);
  }
}

function toggleSearchFilter() {
  try {
    const container = document.querySelector(".search-filter-container");
    const showSearchOptions = document.querySelector(".showSearchOptions svg");

    container.classList.toggle("hidden");
    showSearchOptions.classList.toggle("rotate");
  } catch (e) {
    console.log(e);
  }
}

function toggleSearchFilter2() {
  try {
    const container = document.querySelector(".search-filter-container2");
    const showSearchOptions = document.querySelector(".showSearchOptions2 svg");

    container.classList.toggle("hidden");
    showSearchOptions.classList.toggle("rotate");
  } catch (e) {
    console.log(e);
  }
}

// function toggleSearchFilter2() {
//   try {
//     const container = document.querySelector('.sr-f-2');
//     const showSearchOptions = document.querySelector('.showSearchOptions2 svg');

//     container.classList.toggle('hidden');
//     showSearchOptions.classList.toggle('rotate');
//   } catch (e) {
//     console.log(e);
//   }
// }

function toggleSearchRecFilter(btnID) {
  try {
    const container = document.querySelector(".searchRec-filter-container");
    const showSearchRecOptions = document.querySelector(
      ".showSearchRecOptions"
    );

    container.classList.toggle("hidden");
    showSearchRecOptions.classList.toggle("rotate");
  } catch (e) {
    console.log(e);
  }
}

function searchTable(txtSearchID, tableID) {
  try {
    var tr, td1, td2, td3, i;
    var n = 0;

    input = document.getElementById(txtSearchID);
    filter = input.value.toUpperCase();
    table = document.getElementById(tableID);

    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
      td1 = tr[i].getElementsByTagName("td")[1];
      td2 = tr[i].getElementsByTagName("td")[2];
      td3 = tr[i].getElementsByTagName("td")[3];

      if (td1 && td2 && td3) {
        if (
          td1.innerHTML.toUpperCase().indexOf(filter) > -1 ||
          td2.innerHTML.toUpperCase().indexOf(filter) > -1 ||
          td3.innerHTML.toUpperCase().indexOf(filter) > -1
        ) {
          tr[i].style.display = "";
          if (n % 2 == 0) {
            tr[i].style.backgroundColor = "#FFFFFF";
          } else {
            tr[i].style.backgroundColor = "#d3dee2";
          }
          n++;
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
}

function searchTable1(txtSearchID, tableID) {
  try {
    var tr, td1, td2, td3, i;
    var n = 0;

    input = document.getElementById(txtSearchID);
    filter = input.value.toUpperCase();
    table = document.getElementById(tableID);

    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
      td1 = tr[i].getElementsByTagName("td")[1];

      if (td1) {
        if (td1.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          if (n % 2 == 0) {
            tr[i].style.backgroundColor = "#d3dee2";
          } else {
            tr[i].style.backgroundColor = "#FFFFFF";
          }
          n++;
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
}

function searchTable0(txtSearchID, tableID) {
  try {
    var tr, td1, td2, td3, i;
    var n = 0;

    input = document.getElementById(txtSearchID);
    filter = input.value.toUpperCase();
    table = document.getElementById(tableID);

    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
      td1 = tr[i].getElementsByTagName("td")[0];

      if (td1) {
        if (td1.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          if (n % 2 == 0) {
            tr[i].style.backgroundColor = "#d3dee2";
          } else {
            tr[i].style.backgroundColor = "#FFFFFF";
          }
          n++;
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
}

function searchTableAll(txtSearchID, tableID_table, noresult_table) {
  try {
    var input, filter, tr1, td1, i;
    input = document.getElementById(txtSearchID);
    filter = input.value.toUpperCase();
    table1 = document.getElementById(tableID_table);

    (tr1 = table1.getElementsByTagName("tr")),
      (td1 = table1.getElementsByTagName("td"));

    // console.log("tr1 " + tr1.length);

    var n = 0;
    var matchCounter1 = 0;

    //  table 1
    if (tr1.length > 0) {
      var col1Length =
        document.getElementById(tableID_table).rows[0].cells.length;

      for (i = 1; i < tr1.length; i++) {
        // tr1[i].style.display = "none";
        for (var j = 1; j < col1Length; j++) {
          td1 = tr1[i].getElementsByTagName("td")[j];
          if (td1) {
            if (
              td1.innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1
            ) {
              tr1[i].style.display = "";
              if (n % 2 == 0) {
                tr1[i].style.backgroundColor = "#d3dee2";
              } else {
                tr1[i].style.backgroundColor = "#FFFFFF";
              }
              n++;
              matchCounter1++;
              break;
            } else {
              tr1[i].style.display = "none";
            }
          }
        }
      }
      if (matchCounter1 == 0) {
        var noresult = document.getElementById(noresult_table);
        noresult.classList.remove("hidden");

        table1.style.display = "none";
      } else {
        var noresult = document.getElementById(noresult_table);
        noresult.classList.add("hidden");

        table1.style.display = "block";
      }
    }
  } catch (e) {
    console.log(e);
  }
}

//for BGC
function searchDriverConsoTableAll(
  txtSearchID,
  tableID_driver1_1stcutoff,
  tableID_driver2_1stcutoff,
  tableID_driver1_2ndcutoff,
  tableID_driver2_2ndcutoff,
  noresult_driver
) {
  try {
    var input, filter, tr1, td1, tr2, td2, tr3, td3, tr4, td4, i;
    input = document.getElementById(txtSearchID);
    filter = input.value.toUpperCase();
    table1 = document.getElementById(tableID_admin1);
    table2 = document.getElementById(tableID_admin2);
    table3 = document.getElementById(tableID_ops1);
    table4 = document.getElementById(tableID_ops2);

    (tr1 = table1.getElementsByTagName("tr")),
      (td1 = table1.getElementsByTagName("td"));
    (tr2 = table2.getElementsByTagName("tr")),
      (td2 = table2.getElementsByTagName("td"));
    (tr3 = table3.getElementsByTagName("tr")),
      (td3 = table3.getElementsByTagName("td"));
    (tr4 = table4.getElementsByTagName("tr")),
      (td4 = table4.getElementsByTagName("td"));

    console.log("tr1 " + tr1.length);
    console.log("tr2 " + tr2.length);

    var n = 0;
    var matchCounter1 = 0;
    var matchCounter2 = 0;
    var matchCounter3 = 0;
    var matchCounter4 = 0;

    // Admin table 1
    if (tr1.length > 0) {
      var col1Length =
        document.getElementById(tableID_admin1).rows[0].cells.length;

      for (i = 1; i < tr1.length; i++) {
        // tr1[i].style.display = "none";
        for (var j = 1; j < col1Length; j++) {
          td1 = tr1[i].getElementsByTagName("td")[j];
          if (td1) {
            if (
              td1.innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1
            ) {
              tr1[i].style.display = "";
              if (n % 2 == 0) {
                tr1[i].style.backgroundColor = "#d3dee2";
              } else {
                tr1[i].style.backgroundColor = "#FFFFFF";
              }
              n++;
              matchCounter1++;
              break;
            } else {
              tr1[i].style.display = "none";
            }
          }
        }
      }
      if (matchCounter1 == 0) {
        var noresult = document.getElementById(noresult_admin);
        noresult.classList.remove("hidden");

        table1.style.display = "none";
      } else {
        var noresult = document.getElementById(noresult_admin);
        noresult.classList.add("hidden");

        table1.style.display = "block";
      }
    }

    if (tr2.length > 0) {
      var col2Length =
        document.getElementById(tableID_admin2).rows[0].cells.length;

      //Admin table 2
      for (i = 1; i < tr2.length; i++) {
        // tr1[i].style.display = "none";
        for (var j = 1; j < col2Length; j++) {
          td2 = tr2[i].getElementsByTagName("td")[j];
          if (td2) {
            if (
              td2.innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1
            ) {
              tr2[i].style.display = "";
              if (n % 2 == 0) {
                tr2[i].style.backgroundColor = "#d3dee2";
              } else {
                tr2[i].style.backgroundColor = "#FFFFFF";
              }
              n++;
              matchCounter2++;
              break;
            } else {
              tr2[i].style.display = "none";
            }
          }
        }
      }
      if (matchCounter2 == 0) {
        var noresult = document.getElementById(noresult_admin);
        noresult.classList.remove("hidden");

        table2.style.display = "none";
      } else {
        var noresult = document.getElementById(noresult_admin);
        noresult.classList.add("hidden");

        table2.style.display = "block";
      }
    }

    if (tr3.length > 0) {
      var col3Length =
        document.getElementById(tableID_ops1).rows[0].cells.length;

      // Ops table 1
      for (i = 1; i < tr3.length; i++) {
        // tr1[i].style.display = "none";
        for (var j = 1; j < col3Length; j++) {
          td3 = tr3[i].getElementsByTagName("td")[j];
          if (td3) {
            if (
              td3.innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1
            ) {
              tr3[i].style.display = "";
              if (n % 2 == 0) {
                tr3[i].style.backgroundColor = "#d3dee2";
              } else {
                tr3[i].style.backgroundColor = "#FFFFFF";
              }
              n++;
              matchCounter3++;
              break;
            } else {
              tr3[i].style.display = "none";
            }
          }
        }
      }

      // Check for no match found
      if (matchCounter3 == 0) {
        var noresult = document.getElementById(noresult_ops);
        noresult.classList.remove("hidden");

        table3.style.display = "none";
      } else {
        var noresult = document.getElementById(noresult_ops);
        noresult.classList.add("hidden");

        table3.style.display = "block";
      }
    }

    if (tr4.length > 0) {
      var col4Length =
        document.getElementById(tableID_ops2).rows[0].cells.length;
      // Ops table 2
      for (i = 1; i < tr4.length; i++) {
        // tr1[i].style.display = "none";
        for (var j = 1; j < col4Length; j++) {
          td4 = tr4[i].getElementsByTagName("td")[j];
          if (td4) {
            if (
              td4.innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1
            ) {
              tr4[i].style.display = "";
              if (n % 2 == 0) {
                tr4[i].style.backgroundColor = "#d3dee2";
              } else {
                tr4[i].style.backgroundColor = "#FFFFFF";
              }
              n++;
              matchCounter4++;
              break;
            } else {
              tr4[i].style.display = "none";
            }
          }
        }
      }

      // Check for no match found
      if (matchCounter4 == 0) {
        var noresult = document.getElementById(noresult_ops);
        noresult.classList.remove("hidden");

        table4.style.display = "none";
      } else {
        var noresult = document.getElementById(noresult_ops);
        noresult.classList.add("hidden");
        table4.style.display = "block";
      }
    }
  } catch (e) {
    console.log(e);
  }
}

function search4TableAll(
  txtSearchID,
  tableID_admin1,
  tableID_admin2,
  tableID_ops1,
  tableID_ops2,
  noresult_admin,
  noresult_ops
) {
  try {
    var input, filter, tr1, td1, tr2, td2, tr3, td3, tr4, td4, i;
    input = document.getElementById(txtSearchID);
    filter = input.value.toUpperCase();
    table1 = document.getElementById(tableID_admin1);
    table2 = document.getElementById(tableID_admin2);
    table3 = document.getElementById(tableID_ops1);
    table4 = document.getElementById(tableID_ops2);

    (tr1 = table1.getElementsByTagName("tr")),
      (td1 = table1.getElementsByTagName("td"));
    (tr2 = table2.getElementsByTagName("tr")),
      (td2 = table2.getElementsByTagName("td"));
    (tr3 = table3.getElementsByTagName("tr")),
      (td3 = table3.getElementsByTagName("td"));
    (tr4 = table4.getElementsByTagName("tr")),
      (td4 = table4.getElementsByTagName("td"));

    console.log("tr1 " + tr1.length);
    console.log("tr2 " + tr2.length);

    var n = 0;
    var matchCounter1 = 0;
    var matchCounter2 = 0;
    var matchCounter3 = 0;
    var matchCounter4 = 0;

    // Admin table 1
    if (tr1.length > 0) {
      var col1Length =
        document.getElementById(tableID_admin1).rows[0].cells.length;

      for (i = 1; i < tr1.length; i++) {
        // tr1[i].style.display = "none";
        for (var j = 1; j < col1Length; j++) {
          td1 = tr1[i].getElementsByTagName("td")[j];
          if (td1) {
            if (
              td1.innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1
            ) {
              tr1[i].style.display = "";
              if (n % 2 == 0) {
                tr1[i].style.backgroundColor = "#d3dee2";
              } else {
                tr1[i].style.backgroundColor = "#FFFFFF";
              }
              n++;
              matchCounter1++;
              break;
            } else {
              tr1[i].style.display = "none";
            }
          }
        }
      }
      if (matchCounter1 == 0) {
        var noresult = document.getElementById(noresult_admin);
        noresult.classList.remove("hidden");

        table1.style.display = "none";
      } else {
        var noresult = document.getElementById(noresult_admin);
        noresult.classList.add("hidden");

        table1.style.display = "block";
      }
    }

    if (tr2.length > 0) {
      var col2Length =
        document.getElementById(tableID_admin2).rows[0].cells.length;

      //Admin table 2
      for (i = 1; i < tr2.length; i++) {
        // tr1[i].style.display = "none";
        for (var j = 1; j < col2Length; j++) {
          td2 = tr2[i].getElementsByTagName("td")[j];
          if (td2) {
            if (
              td2.innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1
            ) {
              tr2[i].style.display = "";
              if (n % 2 == 0) {
                tr2[i].style.backgroundColor = "#d3dee2";
              } else {
                tr2[i].style.backgroundColor = "#FFFFFF";
              }
              n++;
              matchCounter2++;
              break;
            } else {
              tr2[i].style.display = "none";
            }
          }
        }
      }
      if (matchCounter2 == 0) {
        var noresult = document.getElementById(noresult_admin);
        noresult.classList.remove("hidden");

        table2.style.display = "none";
      } else {
        var noresult = document.getElementById(noresult_admin);
        noresult.classList.add("hidden");

        table2.style.display = "block";
      }
    }

    if (tr3.length > 0) {
      var col3Length =
        document.getElementById(tableID_ops1).rows[0].cells.length;

      // Ops table 1
      for (i = 1; i < tr3.length; i++) {
        // tr1[i].style.display = "none";
        for (var j = 1; j < col3Length; j++) {
          td3 = tr3[i].getElementsByTagName("td")[j];
          if (td3) {
            if (
              td3.innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1
            ) {
              tr3[i].style.display = "";
              if (n % 2 == 0) {
                tr3[i].style.backgroundColor = "#d3dee2";
              } else {
                tr3[i].style.backgroundColor = "#FFFFFF";
              }
              n++;
              matchCounter3++;
              break;
            } else {
              tr3[i].style.display = "none";
            }
          }
        }
      }

      // Check for no match found
      if (matchCounter3 == 0) {
        var noresult = document.getElementById(noresult_ops);
        noresult.classList.remove("hidden");

        table3.style.display = "none";
      } else {
        var noresult = document.getElementById(noresult_ops);
        noresult.classList.add("hidden");

        table3.style.display = "block";
      }
    }

    if (tr4.length > 0) {
      var col4Length =
        document.getElementById(tableID_ops2).rows[0].cells.length;
      // Ops table 2
      for (i = 1; i < tr4.length; i++) {
        // tr1[i].style.display = "none";
        for (var j = 1; j < col4Length; j++) {
          td4 = tr4[i].getElementsByTagName("td")[j];
          if (td4) {
            if (
              td4.innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1
            ) {
              tr4[i].style.display = "";
              if (n % 2 == 0) {
                tr4[i].style.backgroundColor = "#d3dee2";
              } else {
                tr4[i].style.backgroundColor = "#FFFFFF";
              }
              n++;
              matchCounter4++;
              break;
            } else {
              tr4[i].style.display = "none";
            }
          }
        }
      }

      // Check for no match found
      if (matchCounter4 == 0) {
        var noresult = document.getElementById(noresult_ops);
        noresult.classList.remove("hidden");

        table4.style.display = "none";
      } else {
        var noresult = document.getElementById(noresult_ops);
        noresult.classList.add("hidden");
        table4.style.display = "block";
      }
    }
  } catch (e) {
    console.log(e);
  }
}

function search2TableAll(
  txtSearchID,
  tableID_admin,
  tableID_ops,
  noresult_admin,
  noresult_ops
) {
  try {
    var input, filter, tr1, td1, tr2, td2, i;
    input = document.getElementById(txtSearchID);
    filter = input.value.toUpperCase();
    table1 = document.getElementById(tableID_admin);
    table2 = document.getElementById(tableID_ops);

    (tr1 = table1.getElementsByTagName("tr")),
      (td1 = table1.getElementsByTagName("td"));
    (tr2 = table2.getElementsByTagName("tr")),
      (td2 = table2.getElementsByTagName("td"));

    var n = 0;
    var matchCounter1 = 0;
    var matchCounter2 = 0;

    // Admin table
    if (tr1.length > 0) {
      var col1Length =
        document.getElementById(tableID_admin).rows[0].cells.length;

      for (var i = 1; i < tr1.length; i++) {
        // tr1[i].style.display = "none";
        for (var j = 1; j < col1Length; j++) {
          td1 = tr1[i].getElementsByTagName("td")[j];

          if (td1) {
            if (
              td1.innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1
            ) {
              tr1[i].style.display = "";

              if (n % 2 == 0) {
                tr1[i].style.backgroundColor = "#d3dee2";
              } else {
                tr1[i].style.backgroundColor = "#FFFFFF";
              }
              n++;
              matchCounter1++;
              break;
            } else {
              tr1[i].style.display = "none";
            }
          }
        }
      }
      if (matchCounter1 == 0) {
        var noresult = document.getElementById(noresult_admin);
        noresult.classList.remove("hidden");

        table1.style.display = "none";
      } else {
        var noresult = document.getElementById(noresult_admin);
        noresult.classList.add("hidden");

        table1.style.display = "block";
      }
    }

    // Ops Table
    if (tr2.length > 0) {
      var col2Length =
        document.getElementById(tableID_ops).rows[0].cells.length;

      //Admin table 2
      for (i = 1; i < tr2.length; i++) {
        // tr1[i].style.display = "none";
        for (var j = 1; j < col2Length; j++) {
          td2 = tr2[i].getElementsByTagName("td")[j];
          if (td2) {
            if (
              td2.innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1
            ) {
              tr2[i].style.display = "";
              if (n % 2 == 0) {
                tr2[i].style.backgroundColor = "#d3dee2";
              } else {
                tr2[i].style.backgroundColor = "#FFFFFF";
              }
              n++;
              matchCounter2++;
              break;
            } else {
              tr2[i].style.display = "none";
            }
          }
        }
      }
      if (matchCounter2 == 0) {
        var noresult = document.getElementById(noresult_ops);
        noresult.classList.remove("hidden");

        table2.style.display = "none";
      } else {
        var noresult = document.getElementById(noresult_ops);
        noresult.classList.add("hidden");

        table2.style.display = "block";
      }
    }
  } catch (e) {
    console.log(e);
  }
}

function filterTable(filterMonth, filterYear, tableID) {
  try {
    var tr, td1, i;
    var n = 0;

    month = document.getElementById(filterMonth).value.toUpperCase();
    year = document.getElementById(filterYear).value.toUpperCase();
    table = document.getElementById(tableID);

    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
      td1 = tr[i].getElementsByTagName("td")[3];

      if (td1) {
        if (td1.innerHTML.toUpperCase().indexOf(month + ", " + year) > -1) {
          tr[i].style.display = "";
          if (n % 2 == 0) {
            tr[i].style.backgroundColor = "#d3dee2";
          } else {
            tr[i].style.backgroundColor = "#FFFFFF";
          }
          n++;
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
}

function populateYear() {
  try {
    var max = new Date().getFullYear(),
      min = max - 4,
      select = document.getElementById("filterYear");

    removeOptions(select);
    for (var i = min; i <= max; i++) {
      var opt = document.createElement("option");
      opt.value = i;
      opt.innerHTML = i;
      select.appendChild(opt);

      if (i == max) {
        opt.setAttribute("selected", true);
      }
    }
  } catch (e) {
    console.log(e);
  }
}

function openModalSelectRecTo() {
  try {
    const container = document.querySelector(".selectRecTo");

    container.classList.toggle("hidden");
  } catch (e) {
    console.log(e);
  }
}

function openModalSelectRecCc() {
  try {
    const container = document.querySelector(".selectRecCc");

    container.classList.toggle("hidden");
  } catch (e) {
    console.log(e);
  }
}

function openModalSelectRecBcc() {
  try {
    const container = document.querySelector(".selectRecBcc");

    container.classList.toggle("hidden");
  } catch (e) {
    console.log(e);
  }
}

function openModalSelectRecTo2() {
  try {
    const container = document.querySelector(".modal-payrollmemo");
    const modal = document.querySelector(".selectRecTo");

    container.style.display = "flex";
    modal.classList.remove("hidden");
  } catch (e) {
    console.log(e);
  }
}

function openModalSelectRecCc2() {
  try {
    const container = document.querySelector(".modal-payrollmemo");
    const modal = document.querySelector(".selectRecCc");

    container.style.display = "flex";
    modal.classList.remove("hidden");
  } catch (e) {
    console.log(e);
  }
}

function openModalSelectRecBcc2() {
  try {
    const container = document.querySelector(".modal-payrollmemo");
    const modal = document.querySelector(".selectRecBcc");

    container.style.display = "flex";
    modal.classList.remove("hidden");
  } catch (e) {
    console.log(e);
  }
}

function toggleSearchRecFilter3() {
  try {
    const container3 = document.querySelector(".sr-f-3");
    const showSearchRecOptions3 = document.querySelector(".sr-o-3");

    container3.classList.toggle("hidden");
    showSearchRecOptions3.classList.toggle("rotate");
  } catch (e) {
    console.log(e);
  }
}

function showDataList() {
  try {
    const datalist = document.querySelector(".datalist-data");
    scrollTopDataList();
    datalist.classList.remove("hidden");
  } catch (e) {
    console.log(e);
  }
}

function hideDataList() {
  try {
    const datalist = document.querySelector(".datalist-data");

    datalist.classList.add("hidden");
  } catch (e) {
    console.log(e);
  }
}

function reloadOnEnter(e, txtID) {
  var keycode = event.keyCode ? event.keyCode : event.which;

  saveValue(txtID);
  if (keycode == "13") {
    location.reload();
  }
}

function saveValue(e) {
  try {
    var id = e.id; // get the sender's id to save it .
    var val = e.value; // get the value.
    localStorage.setItem(id, val); // Every time user writing something, the localStorage's value will override .
  } catch (e) {
    console.log(e);
  }
}

function getSavedValue(v) {
  try {
    if (!localStorage.getItem(v)) {
      return ""; // You can change this to your defualt value.
    }
    return localStorage.getItem(v);
  } catch (e) {
    console.log(e);
  }
}

function loadSavedValue(txtID) {
  try {
    document.getElementById(txtID).value = getSavedValue(txtID);
    resetSaveValue(txtID);
  } catch (e) {
    console.log(e);
  }
}

function resetSaveValue(id) {
  try {
    localStorage.removeItem(id);
  } catch (e) {
    console.log(e);
  }
}

function openModalPayrollList() {
  try {
    const modal = document.querySelector(".modal-payroll-list");
    const modal2 = document.querySelector(".modal-mass-payroll");
    modal.style.display = "flex";
    modal2.style.display = "none";
  } catch (e) {
    console.log(e);
  }
}
function closeModalPayrollList() {
  try {
    const modal = document.querySelector(".modal-payroll-list");
    const modal2 = document.querySelector(".modal-mass-payroll");
    modal.style.display = "none";
    modal2.style.display = "flex";
  } catch (e) {
    console.log(e);
  }
}

function openModalMassPayroll() {
  try {
    const modal = document.querySelector(".modal-mass-payroll");
    modal.style.display = "flex";
  } catch (e) {
    console.log(e);
  }
}

function closeModalMassPayroll() {
  try {
    const modal = document.querySelector(".modal-mass-payroll");
    modal.style.display = "none";
  } catch (e) {
    console.log(e);
  }
}

function addModalMerit() {
  try {
    const modal = document.querySelector(".modal-merit");
    // const btnDelete = document.querySelector('#btnDelete');
    const btnAdd = document.querySelector("#btnAdd");
    const btnEdit = document.querySelector("#btnEdit");
    const btnMoreContainer = document.querySelector(".more-container");

    modal.style.display = "flex";
    // btnDelete.classList.add('hidden');
    btnAdd.classList.remove("hidden");
    btnEdit.classList.add("hidden");
    btnMoreContainer.classList.add("hidden");
  } catch (e) {
    console.log(e);
  }
}

function editModalMerit() {
  try {
    const modal = document.querySelector(".modal-merit");
    // const btnDelete = document.querySelector('#btnDelete');
    const btnAdd = document.querySelector("#btnAdd");
    const btnEdit = document.querySelector("#btnEdit");
    const btnMoreContainer = document.querySelector(".more-container");

    modal.style.display = "flex";
    // btnDelete.classList.remove('hidden');
    btnAdd.classList.add("hidden");
    btnEdit.classList.remove("hidden");
    btnMoreContainer.classList.remove("hidden");
  } catch (e) {
    console.log(e);
  }
}

function closeModalMerit() {
  try {
    const modal = document.querySelector(".modal-merit");
    modal.style.display = "none";

    enableField("drpDepartment");
    enableField("drpEmployee");
    clearSelectDepartment(drpDepartment);
    clearSelectEmployee(drpEmployee);
    clearField(selectMonth);
    clearField(txtMeritPoints);
    clearField(txtAreaReason);
  } catch (e) {
    console.log(e);
  }
}

function addModalSavings() {
  try {
    const modal = document.querySelector(".modal-savings");
    // const btnDelete = document.querySelector('#btnDelete');
    const btnAdd = document.querySelector("#btnAdd");
    const btnEdit = document.querySelector("#btnEdit");
    const btnMoreContainer = document.querySelector(".more-container");

    modal.style.display = "flex";
    // btnDelete.classList.add('hidden');
    btnAdd.classList.remove("hidden");
    btnEdit.classList.add("hidden");
    btnMoreContainer.classList.add("hidden");
  } catch (e) {
    console.log(e);
  }
}

function editModalSavings() {
  try {
    const modal = document.querySelector(".modal-savings");
    // const btnDelete = document.querySelector('#btnDelete');
    const btnAdd = document.querySelector("#btnAdd");
    const btnEdit = document.querySelector("#btnEdit");
    const btnMoreContainer = document.querySelector(".more-container");

    modal.style.display = "flex";
    // btnDelete.classList.remove('hidden');
    btnAdd.classList.add("hidden");
    btnEdit.classList.remove("hidden");
    btnMoreContainer.classList.remove("hidden");
  } catch (e) {
    console.log(e);
  }
}

function closeModalSavings() {
  try {
    const modal = document.querySelector(".modal-savings");
    modal.style.display = "none";
    enableField("drpDepartment");
    enableField("drpEmployee");
    clearSelectDepartment(drpDepartment);
    clearSelectEmployee(drpEmployee);
    clearField(txtDate);
    clearField(txtAmount);
  } catch (e) {
    console.log(e);
  }
}
function addModalContributions() {
  try {
    const modal = document.querySelector(".modal-contributions");
    // const btnDelete = document.querySelector('#btnDelete');
    const btnAdd = document.querySelector("#btnAdd");
    const btnEdit = document.querySelector("#btnEdit");
    const btnMoreContainer = document.querySelector(".more-container");

    modal.style.display = "flex";
    // btnDelete.classList.add('hidden');
    btnAdd.classList.remove("hidden");
    btnEdit.classList.add("hidden");
    btnMoreContainer.classList.add("hidden");
  } catch (e) {
    console.log(e);
  }
}

function editModalContributions() {
  try {
    const modal = document.querySelector(".modal-contributions");
    // const btnDelete = document.querySelector('#btnDelete');
    const btnAdd = document.querySelector("#btnAdd");
    const btnEdit = document.querySelector("#btnEdit");
    const btnMoreContainer = document.querySelector(".more-container");

    modal.style.display = "flex";
    // btnDelete.classList.remove('hidden');
    btnAdd.classList.add("hidden");
    btnEdit.classList.remove("hidden");
    btnMoreContainer.classList.remove("hidden");
  } catch (e) {
    console.log(e);
  }
}

function closeModalContributions() {
  try {
    const modal = document.querySelector(".modal-contributions");
    modal.style.display = "none";

    enableField("drpDepartment");
    enableField("drpEmployee");
    clearSelectDepartment(drpDepartment);
    clearSelectEmployee(drpEmployee);
    clearField(txtDate);
    clearField(txtSSS);
    clearField(txtPagIbig);
    clearField(txtPhilhealth);
  } catch (e) {
    console.log(e);
  }
}

function clearSelectPayPeriod(input) {
  try {
    input.value = "Select Pay Period";
  } catch (e) {
    console.log(e);
  }
}

function openModalConsolidation() {
  try {
    const modal = document.querySelector(".modal-payrollconsolidation");

    modal.style.display = "flex";
    checkLeapYear();
  } catch (e) {
    console.log(e);
  }
}

function closeModalConsolidation() {
  try {
    const modal = document.querySelector(".modal-payrollconsolidation");
    modal.style.display = "none";

    // clearField(txtDateFromModal);
    // clearField(txtDateToModal);
    // clearSelectPayPeriod(selectPayperiod);
  } catch (e) {
    console.log(e);
  }
}

function showB() {
  try {
    const card1 = document.querySelector("#backups .container .card-1");
    const card2 = document.querySelector("#backups .container .card-2");

    card2.classList.add("hidden");
    card1.classList.remove("hidden");
  } catch (e) {
    console.log(e);
  }
}
function showRB() {
  try {
    const card1 = document.querySelector("#backups .container .card-1");
    const card2 = document.querySelector("#backups .container .card-2");

    card1.classList.add("hidden");
    card2.classList.remove("hidden");
  } catch (e) {
    console.log(e);
  }
}

function openModalEditConsolidation() {
  try {
    const modal = document.querySelector(".modal-edit-consolidation");
    const contriER = document.querySelectorAll(".contri-ER");
    const deductions = document.querySelectorAll(".deductions");
    const driverField = document.querySelectorAll(".driverField");
    const notDriverField = document.querySelectorAll(".notDriverField");
    const adminOpsButton = document.querySelector("#btnSave");
    const driverButton = document.querySelector("#btnSaveDriver");

    modal.style.display = "flex";

    // always show contri
    contriER.forEach((item) => {
      item.classList.remove("hidden");
    });

    // always show deductions
    deductions.forEach((item) => {
      item.classList.remove("hidden");
    });

    driverField.forEach((item) => {
      item.classList.add("hidden");
    });

    notDriverField.forEach((item) => {
      item.classList.remove("hidden");
    });

    adminOpsButton.classList.remove("hidden");

    driverButton.classList.add("hidden");
  } catch (e) {
    console.log(e);
  }
}

function openModalEditConsolidation2() {
  try {
    const modal = document.querySelector(".modal-edit-consolidation");
    const contriER = document.querySelectorAll(".contri-ER");
    const deductions = document.querySelectorAll(".deductions");
    const driverField = document.querySelectorAll(".driverField");
    const notDriverField = document.querySelectorAll(".notDriverField");
    const adminOpsButton = document.querySelector("#btnSave");
    const driverButton = document.querySelector("#btnSaveDriver");

    modal.style.display = "flex";

    // always show contri
    contriER.forEach((item) => {
      item.classList.remove("hidden");
    });

    // always show deductions
    deductions.forEach((item) => {
      item.classList.remove("hidden");
    });

    driverField.forEach((item) => {
      item.classList.add("hidden");
    });

    notDriverField.forEach((item) => {
      item.classList.remove("hidden");
    });

    adminOpsButton.classList.remove("hidden");

    driverButton.classList.add("hidden");
  } catch (e) {
    console.log(e);
  }
}

function openModalEditDriverConsolidation() {
  try {
    const modal = document.querySelector(".modal-edit-consolidation");
    const contriER = document.querySelectorAll(".contri-ER");
    const deductions = document.querySelectorAll(".deductions");
    const driverField = document.querySelectorAll(".driverField");
    const notDriverField = document.querySelectorAll(".notDriverField");
    const adminOpsButton = document.querySelector("#btnSave");
    const driverButton = document.querySelector("#btnSaveDriver");

    modal.style.display = "flex";

    // always show contri
    contriER.forEach((item) => {
      item.classList.remove("hidden");
    });

    // always show deductions
    deductions.forEach((item) => {
      item.classList.remove("hidden");
    });

    driverField.forEach((item) => {
      item.classList.remove("hidden");
    });
    notDriverField.forEach((item) => {
      item.classList.add("hidden");
    });

    adminOpsButton.classList.add("hidden");

    driverButton.classList.remove("hidden");

    selectTabAOC();
  } catch (e) {
    console.log(e);
  }
}

function openModalEditDriverConsolidation2() {
  try {
    const modal = document.querySelector(".modal-edit-consolidation");
    const contriER = document.querySelectorAll(".contri-ER");
    const deductions = document.querySelectorAll(".deductions");
    const driverField = document.querySelectorAll(".driverField");
    const notDriverField = document.querySelectorAll(".notDriverField");
    const adminOpsButton = document.querySelector("#btnSave");
    const driverButton = document.querySelector("#btnSaveDriver");

    modal.style.display = "flex";

    // always show contri
    contriER.forEach((item) => {
      item.classList.remove("hidden");
    });

    // always show deductions
    deductions.forEach((item) => {
      item.classList.remove("remove");
    });
    driverField.forEach((item) => {
      item.classList.remove("hidden");
    });

    notDriverField.forEach((item) => {
      item.classList.add("hidden");
    });

    adminOpsButton.classList.add("hidden");

    driverButton.classList.remove("hidden");

    selectTabDC();
  } catch (e) {
    console.log(e);
  }
}

function closeModalEditConsolidation() {
  try {
    const modal = document.querySelector(".modal-edit-consolidation");
    modal.style.display = "none";

    // clearField(txtDateFromModal);
    // clearField(txtDateToModal);
  } catch (e) {
    console.log(e);
  }
}

function leapyear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

function checkLeapYear() {
  try {
    const optLeap = document.querySelector("#optLeap");
    const optNotLeap = document.querySelector("#optNotLeap");
    const currentYear = leapyear(new Date().getFullYear());

    optLeap.style.display = "none";
    optNotLeap.style.display = "none";

    if (currentYear == true) {
      optLeap.style.display = "block";
    } else {
      optNotLeap.style.display = "block";
    }
  } catch (e) {
    console.log(e);
  }
}

function showAOC() {
  try {
    const card1 = document.querySelector(
      "#payroll-consolidation .container .card-1"
    );
    const card2 = document.querySelector(
      "#payroll-consolidation .container .card-2"
    );
    const card3 = document.querySelector(
      "#payroll-consolidation .container .card-3"
    );

    card1.classList.remove("hidden");
    card2.classList.add("hidden");
    card3.classList.add("hidden");
  } catch (e) {
    console.log(e);
  }
}

function showDC() {
  try {
    const card1 = document.querySelector(
      "#payroll-consolidation .container .card-1"
    );
    const card2 = document.querySelector(
      "#payroll-consolidation .container .card-2"
    );
    const card3 = document.querySelector(
      "#payroll-consolidation .container .card-3"
    );

    card1.classList.add("hidden");
    card2.classList.remove("hidden");
    card3.classList.add("hidden");
  } catch (e) {
    console.log(e);
  }
}

function selectTabAOC() {
  try {
    $(".tab-list li.current-tab").removeClass("current-tab");
    $(".tab-list li:nth-child(1)").addClass("current-tab");
    showAOC();
  } catch (e) {
    console.log(e);
  }
}

function selectTabDC() {
  try {
    $(".tab-list li.current-tab").removeClass("current-tab");
    $(".tab-list li:nth-child(2)").addClass("current-tab");
    showDC();
  } catch (e) {
    console.log(e);
  }
}

function showTU() {
  try {
    const card1 = document.querySelector(
      "#payroll-consolidation .container .card-1"
    );
    const card2 = document.querySelector(
      "#payroll-consolidation .container .card-2"
    );
    const card3 = document.querySelector(
      "#payroll-consolidation .container .card-3"
    );

    card1.classList.add("hidden");
    card2.classList.add("hidden");
    card3.classList.remove("hidden");
  } catch (e) {
    console.log(e);
  }
}

function selectTabTU() {
  try {
    $(".tab-list li.current-tab").removeClass("current-tab");
    $(".tab-list li:last-child").addClass("current-tab");
    showTU();
  } catch (e) {
    console.log(e);
  }
}

function openModalConfirmConso() {
  try {
    const modal = document.querySelector(".modal-confirm-consolidation");
    const payPeriod = document.querySelector("#selectPayperiod").value;
    const existingPayperiod = document.querySelector("#lblExistingPayPeriod");
    // alert(payPeriod);
    if (payPeriod == 0) {
      alert("Please select a Pay Period");
      return;
    } else if (payPeriod == 1) {
      existingPayperiod.innerHTML = "January 1 - January 15";
    } else if (payPeriod == 2) {
      existingPayperiod.innerHTML = "January 16 - January 30";
    } else if (payPeriod == 3) {
      existingPayperiod.innerHTML = "February 1 - February 15";
    } else if (payPeriod == 4) {
      existingPayperiod.innerHTML = "February 16 - February 28";
    } else if (payPeriod == 4) {
      existingPayperiod.innerHTML = "February 16 - February 29";
    } else if (payPeriod == 5) {
      existingPayperiod.innerHTML = "March 1 - March 15";
    } else if (payPeriod == 6) {
      existingPayperiod.innerHTML = "March 16 - March 30";
    } else if (payPeriod == 7) {
      existingPayperiod.innerHTML = "April 1 - April 15";
    } else if (payPeriod == 8) {
      existingPayperiod.innerHTML = "April 16 - April 30";
    } else if (payPeriod == 9) {
      existingPayperiod.innerHTML = "May 1 - May 15";
    } else if (payPeriod == 10) {
      existingPayperiod.innerHTML = "May 16 - May 30";
    } else if (payPeriod == 11) {
      existingPayperiod.innerHTML = "June 1 - June 15";
    } else if (payPeriod == 12) {
      existingPayperiod.innerHTML = "June 16 - June 30";
    } else if (payPeriod == 13) {
      existingPayperiod.innerHTML = "July 1 - July 15";
    } else if (payPeriod == 14) {
      existingPayperiod.innerHTML = "July 16 - July 30";
    } else if (payPeriod == 15) {
      existingPayperiod.innerHTML = "August 1 - August 15";
    } else if (payPeriod == 16) {
      existingPayperiod.innerHTML = "August 16 - August 30";
    } else if (payPeriod == 17) {
      existingPayperiod.innerHTML = "September 1 - September 15";
    } else if (payPeriod == 18) {
      existingPayperiod.innerHTML = "September 16 - September 30";
    } else if (payPeriod == 19) {
      existingPayperiod.innerHTML = "October 1 - October 15";
    } else if (payPeriod == 20) {
      existingPayperiod.innerHTML = "October 16 - October 30";
    } else if (payPeriod == 21) {
      existingPayperiod.innerHTML = "November 1 - November 15";
    } else if (payPeriod == 22) {
      existingPayperiod.innerHTML = "November 16 - November 30";
    } else if (payPeriod == 23) {
      existingPayperiod.innerHTML = "December 1 - December 15";
    } else if (payPeriod == 24) {
      existingPayperiod.innerHTML = "December 16 - December 30";
    }

    closeModalConsolidation();
    modal.style.display = "flex";
  } catch (e) {
    console.log(e);
  }
}

function closeModalConfirmConso() {
  try {
    const modal = document.querySelector(".modal-confirm-consolidation");
    modal.style.display = "none";
  } catch (e) {
    console.log(e);
  }
}

function openModalOT() {
  try {
    const modal = document.querySelector(".modal-overtime-application");
    const btnRequestOvertime = document.querySelector("#btnRequestOvertime");
    const btnUpdateOvertime = document.querySelector("#btnUpdateOvertime");
    // const btnDeleteOvertime = document.querySelector('#btnDelete');
    const btnMoreContainer = document.querySelector(".more-container");

    modal.style.display = "flex";
    btnRequestOvertime.classList.remove("hidden");
    btnUpdateOvertime.classList.add("hidden");
    btnMoreContainer.classList.add("hidden");

    scrollTopModal();
  } catch (e) {
    console.log(e);
  }
}
function editModalOT() {
  const modal = document.querySelector(".modal-overtime-application");
  const btnRequestOvertime = document.querySelector("#btnRequestOvertime");
  const btnUpdateOvertime = document.querySelector("#btnUpdateOvertime");
  // const btnDeleteOvertime = document.querySelector('#btnDelete');
  const btnMoreContainer = document.querySelector(".more-container");

  modal.style.display = "flex";
  btnRequestOvertime.classList.add("hidden");
  btnUpdateOvertime.classList.remove("hidden");
  btnMoreContainer.classList.remove("hidden");
}

function toggleMoreSubContainer() {
  try {
    const container = document.querySelector(".more-sub-container");

    container.classList.toggle("hidden");
  } catch (e) {
    console.log(e);
  }
}

function openModalCashBond() {
  try {
    const modal = document.querySelector(".modal-cashbond");

    modal.style.display = "flex";
    // checkLeapYear();
  } catch (e) {
    console.log(e);
  }
}

function openModalEditCashbond() {
  try {
    const modal = document.querySelector(".modal-edit-cashbond");
    const accessRole = document.querySelector("#accessrole").innerHTML;

    if (accessRole === "HR Admin") {
      modal.style.display = "flex";
    } else {
      modal.style.display = "none";
      alert("You don't have enough permission!");
    }
  } catch (e) {
    console.log(e);
  }
}
function closeModalEditCashbond() {
  try {
    const modal = document.querySelector(".modal-edit-cashbond");

    modal.style.display = "none";
  } catch (e) {
    console.log(e);
  }
}

function closeModalCashBond() {
  try {
    const modal = document.querySelector(".modal-cashbond");
    modal.style.display = "none";
  } catch (e) {
    console.log(e);
  }
}
function openModalCashAdvance() {
  try {
    const modal = document.querySelector(".modal-cashadvance");

    modal.style.display = "flex";
    // checkLeapYear();
  } catch (e) {
    console.log(e);
  }
}

function openModalEditCashAdvance() {
  try {
    const modal = document.querySelector(".modal-edit-cashadvance");
    const accessRole = document.querySelector("#accessrole").innerHTML;

    // modal.style.display = "flex";
    if (accessRole === "HR Admin") {
      modal.style.display = "flex";
    } else {
      modal.style.display = "none";
      alert("You don't have enough permission!");
    }
  } catch (e) {
    console.log(e);
  }
}

function closeModalEditCashAdvance() {
  try {
    const modal = document.querySelector(".modal-edit-cashadvance");

    modal.style.display = "none";
  } catch (e) {
    console.log(e);
  }
}

function closeModalCashAdvance() {
  try {
    const modal = document.querySelector(".modal-cashadvance");
    modal.style.display = "none";

    // clearField(txtDateFromModal);
    // clearField(txtDateToModal);
    // clearSelectPayPeriod(selectPayperiod);
  } catch (e) {
    console.log(e);
  }
}

function openModalScheduling() {
  try {
    const modal = document.querySelector(".modal-scheduling");

    modal.style.display = "flex";
    // checkLeapYear();
  } catch (e) {
    console.log(e);
  }
}

function closeModalScheduling() {
  try {
    const modal = document.querySelector(".modal-scheduling");

    modal.style.display = "none";
  } catch (e) {
    console.log(e);
  }
}
function openModalSchedulingStatus() {
  try {
    const modal = document.querySelector(".modal-schedulingstatus");

    modal.style.display = "flex";
    // checkLeapYear();
  } catch (e) {
    console.log(e);
  }
}

function closeModalSchedulingStatus() {
  try {
    const modal = document.querySelector(".modal-schedulingstatus");

    modal.style.display = "none";
  } catch (e) {
    console.log(e);
  }
}
function openModalSchedulingApproval() {
  try {
    const modal = document.querySelector(".modal-schedulingapproval");

    modal.style.display = "flex";
    // checkLeapYear();
  } catch (e) {
    console.log(e);
  }
}

function closeModalSchedulingApproval() {
  try {
    const modal = document.querySelector(".modal-schedulingapproval");

    modal.style.display = "none";
  } catch (e) {
    console.log(e);
  }
}

function openModalRemarks() {
  try {
    const modalRemarks = document.querySelector(".modal-remarks");
    modalRemarks.style.display = "flex";
  } catch (e) {
    console.log(e);
  }
}

function closeModalRemarks() {
  try {
    const modalRemarks = document.querySelector(".modal-remarks");
    modalRemarks.style.display = "none";
  } catch (e) {
    console.log(e);
  }
}

function openModalPromotion() {
  try {
    const modalRemarks = document.querySelector(".modal-promote-employee");
    openModal(`#btnViewEmployee`);
    modalRemarks.style.display = "flex";
  } catch (e) {
    console.log(e);
  }
}

function closeModalPromotion() {
  try {
    const modalRemarks = document.querySelector(".modal-promote-employee");
    modalRemarks.style.display = "none";
  } catch (e) {
    console.log(e);
  }
}

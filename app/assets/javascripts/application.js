// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
$(document).ready(function () {

  $('.datepicker').datepicker({
    format: 'yyyy-mm-dd',
    i18n: {
      months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      weekdaysFull: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
    },
    selectMonths: true,
    selectYears: 100,
    today: 'Hoy',
    clear: 'Limpiar',
    close: 'Ok',
    labelMonthNext: 'Siguiente mes',
    labelMonthPrev: 'Mes anterior',
    labelMonthSelect: 'Selecciona un mes',
    labelYearSelect: 'Selecciona un año',
  }); // Formateo de la visualización de la fecha

  $('select').formSelect(); //Sin esto los select no se muestran

  $('.modal').modal();

  // Arrastrar informacion hacia el grupo social
  $("#comp_form_continue").click(function () {
    var departamento = $("#departamento").val();
    var municipio = $("#municipio").val();
    var fecha = $("#fecha").val();
    var correo = $("#email").val();
    var hechos = $("#textarea1").val();
    var archivo = $("#archivo").val();

    sessionStorage.setItem('departamento', departamento);
    sessionStorage.setItem('municipio', municipio);
    sessionStorage.setItem('fecha', fecha);
    sessionStorage.setItem('correo', correo);
    sessionStorage.setItem('hechos', hechos);
    sessionStorage.setItem('archivo', archivo);
  });

  //Arrastrar informacion hacia el submit final
  $("#social_group_continue").click(function () {    
    var grupo = $("#grupo").val();
    var organizacion = $("#organizacion").val();
    sessionStorage.setItem('grupo', grupo);
    sessionStorage.setItem('organizacion', organizacion);
  });

  //LLenar la denuncia final
  $("#complaint_department").val(sessionStorage.getItem("departamento"));
  $("#complaint_city").val(sessionStorage.getItem("municipio"));
  $("#complaint_date_event").val(sessionStorage.getItem("fecha"));
  $("#complaint_email").val(sessionStorage.getItem("correo"));
  $("#complaint_description").val(sessionStorage.getItem("hechos"));
  $("#complaint_file").val(sessionStorage.getItem("archivo"));
  // $("#complaint_organization").val(sessionStorage.getItem("grupo"));

  //Mantener color de los input al hacer click
  $("textarea#textarea1.materialize-textarea, input#email.validate, input#fecha.datepicker").focus(function(){    
    $("label.active").css("color", "#011826");
  });

});

function comeBack(event) {
  if (confirm("¿Seguro que deseas salir?")) {
  } else {
    event.preventDefault();
  }
}

function verify(event) {

  //Form verification
  if ($("select#departamento").val() === null) {
    event.preventDefault();
    $(".dep input.select-dropdown.dropdown-trigger").css("border-bottom-color", "red");
  } else {
    $(".dep input.select-dropdown.dropdown-trigger").css("border-bottom-color", "#9e9e9e");
  }

  if ($("select#municipio").val() === null) {
    event.preventDefault();
    $(".mun input.select-dropdown.dropdown-trigger").css("border-bottom-color", "red");
  } else {
    $(".mun input.select-dropdown.dropdown-trigger").css("border-bottom-color", "#9e9e9e");
  }

  if ($("input#fecha").val() === "") {
    event.preventDefault();
    $("input#fecha").css("border-bottom-color", "red");
  } else {
    $("input#fecha").css("border-bottom-color", "#9e9e9e");
  }

  if ($("textarea#textarea1").val() === "") {
    event.preventDefault();
    $("textarea#textarea1").css("border-bottom-color", "red");
    alert("Los campos en rojo son obligatorios");
  } else {
    $("textarea#textarea1").css("border-bottom-color", "#9e9e9e");
  }

  //Social group verification
  if ($("select#grupo").val() === null) {
    event.preventDefault();
    $(".grup input.select-dropdown.dropdown-trigger").css("border-bottom-color", "red");
  } else {
    $(".grup input.select-dropdown.dropdown-trigger").css("border-bottom-color", "#9e9e9e");
  }

  if ($("select#organizacion").val() === null) {
    event.preventDefault();
    $(".org input.select-dropdown.dropdown-trigger").css("border-bottom-color", "red");
    alert("Los campos en rojo son obligatorios");
  } else {
    $(".org input.select-dropdown.dropdown-trigger").css("border-bottom-color", "#9e9e9e");
  }

}





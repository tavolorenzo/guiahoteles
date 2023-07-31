$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $('.carousel').carousel({
      interval:2000
    });
    $('#contactoBtn').on('show.bs.modal', function(e){
      console.log('El modal contacto se esta mostrando');
      $('#contactoBtn').removeClass('btn-outline-info');
      $('#contactoBtn').addClass('btn-outline-success');
    });
    $('#contactoBtn').on('shown.bs.modal', function(e){
      console.log('El modal contaccto se mostro');
      $('#contactoBtn').prop('disabled',true);
    });
    $('#contactoBtn').on('hidde.bs.modal', function(e){
      console.log('El modal contacto se oculta');
    });
    $('#contactoBtn').on('hidden.bs.modal', function(e){
      console.log('El modal contacto se oculto');
      $('#contactoBtn').prop('disabled',false);
      $('#contactoBtn').addClass('btn-outline-info');
      $('#contactoBtn').removeClass('btn-outline-success');
    })
 })
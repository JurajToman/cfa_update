// JavaScript Document// Javascript to enable link to tab
var url = document.location.toString();
if (url.match('#')) {
    $('.vtom[href="#' + url.split('#')[1] + '"]').tab('show');
} 

// Change hash for page-reload
$('.vtom').on('shown.bs.tab', function (e) {
    window.location.hash = e.target.hash;
})
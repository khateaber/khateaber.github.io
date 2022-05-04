$(document).ready(function(){

$('.persianDate').each(function () {
  var pDate = persianDate($(this).attr('data-timestamp'))
  $(this).text(pDate);
});
$('.content img').each(function () {
  if ($(this).attr('title')) {
    $(this).after('<figcaption class="figure-caption">'+$(this).attr('title')+'</figcaption>')
  }
})
})
function persianDate(timestamp) {
  var stampDate = new Date(timestamp*1000);
  var faDate = stampDate.toLocaleDateString('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' });
  return faDate;
}

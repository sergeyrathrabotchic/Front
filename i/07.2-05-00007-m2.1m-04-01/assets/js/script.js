$(document).ready(function() {

    $('.js-tab-item').on('click', function(event) {
        event.preventDefault();

        $('.js-tab-item').removeClass('active');
        $(this).addClass('active');

        let indexTab = $(this).index();

        $('.js-content-item').addClass('d-none');
        $('.js-content-item').eq(indexTab).removeClass('d-none');
    });

});

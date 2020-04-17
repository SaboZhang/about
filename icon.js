$(document).ready(function () {
    $('.tab-container .content:first').show()

    $('#tabs li').click(function (e) {
        var tabContent = $('.tab-container .content')
        var index = $(this).index()

        if ($(this).hasClass('active')) {
            return
        } else {
            $('#tabs li').removeClass('active')
            $(this).addClass('active')

            tabContent.hide().eq(index).fadeIn()
        }
    })
})
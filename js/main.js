$('.print__btn').click(function (event) {
    window.print();
    event.preventDefault();
});

$('.right-block__skills-percent').each(function()
{
    var val = $(this).data('label');
    $(this).css('width', val);

});


$('.right-block__skills-text').mouseover(function()
{
    var val = $(this).next('.right-block__skills-indicator').find('.right-block__skills-percent').data('label');
    $(this).next('.right-block__skills-indicator').find('.right-block__skills-percent').css('width', '1');

    $('.right-block__skills-text').mouseout(function()
    {
        $(this).next('.right-block__skills-indicator').find('.right-block__skills-percent').css('width', val);
    });
});


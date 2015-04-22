/**
 * readMore.js
 *
 * Mechanics:
 *  If there is more than one non-blank <p>aragraph inside the class,
 *      The other paragraphs will be hidden inside a read more div
 * @author Mark Christian D. Lopez <mark@ypdigital.com.au><xmarkclx@gmail.com>
 */

$(window).load(function(){
    // Create a new container to hide the paragraphs
    var div = $("<div id='readMoreContainer' style='display:none'></div>");
    $(".can-read-more").append(div);
    var readMoreLink = $("<a id='readMoreText' style='cursor: pointer'>Read more</a>");
    $(".can-read-more").append(readMoreLink);

    $(readMoreLink).click(function(event){
        event.preventDefault();
        readMoreToggle($(this), $('#readMoreContainer'));
    });

    if($('.can-read-more p').length != 1){
        // Get the first non blank <p>aragraph
        var hasFirstParagraph = false;
        $('.can-read-more p').each(function(){
            var content = $(this).html();

            if(!hasFirstParagraph) {
                if (content == '')
                    return;
                else
                    hasFirstParagraph = true;
            }else{
                // Move all the succeeding paragraphs to this div
                $(this).appendTo(div);
            }
        });
    };
});

function readMoreToggle(link, container){
    var readMoreContainer = $(container);
    var readMoreContent = $(link);
    console.log(readMoreContent);
    readMoreContainer.toggleClass('open');
    readMoreContainer.slideToggle();

    if(readMoreContainer.hasClass('open'))
        readMoreContent.html('Read less');
    else
        readMoreContent.html('Read more');
};
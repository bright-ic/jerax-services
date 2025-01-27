$(function() {
     /**
     * Submit button event handle, the following data-[attributes] can be defined for the button
     * @data waitme - {string} - Yes|No| - Load waitme overlay or not
     * @data target - {string} - Form submitted by the button
     * @data action - {string} - Action to be taken when form is submited
     */
     $('.submit_btn:not(.not_submit)').off('click').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        // check of form has not been submitted
        if (!$this.hasClass('is_clicked')) {
            // show waitme overlay if submit button requires it
            if (typeof $this.data('waitme') !== 'undefined' && $this.data('waitme') == 'yes') {
                display_spinner();
            }
            // disable submitted button
            $this.addClass('is_clicked');
            $this.attr('disabled', 'disabled');
            $('.errors').removeClass('errors');
            $('.error_label').remove();
            // Setting Up Variables for form submission
            var action = '';
            var target_form_id = '';
            var callback_name = '';
            // Setting up action for form post submission
            if (typeof $this.data('action') !== 'undefined') {
                action = $this.data('action');
            }
            // check/get the submitted form is from the submit button
            if (typeof $this.data('target') !== 'undefined') {
                target_form_id = $this.data('target');
            }
            // check/get the success callback function
            if (typeof $this.data('callback_name') !== 'undefined') {
                callback_name = $this.data('callback_name');
            }
            // Submit Form
            if (!empty(target_form_id)) {
                // Use Ajax to Submit form
                if (!empty(action)) {
                    if (!empty(callback_name)) {
                        process_form_submit(target_form_id, action, callback_name);
                    } else {
                        process_form_submit(target_form_id, action);
                    }
                } else {
                    if (!empty(callback_name)) {
                        process_form_submit(target_form_id, null, callback_name);
                    } else {
                        process_form_submit(target_form_id);
                    }
                }
            } else {
                // Submit Form Directly
                $this.closest('form').submit();
            }
        }
    });

    var headerFixed = function() {
        if ($('body').hasClass('header-sticky')) {
            var nav = $('.header');

            if (nav.size() != 0) {
                var offsetTop = $('.header').offset().top,
                    headerHeight = $('.header').height(),
                    injectSpace = $('<div />', {
                        height: headerHeight
                    }).insertAfter(nav);
                injectSpace.hide();

                $(window).on('load scroll', function() {
                    if ($(window).scrollTop() > offsetTop + 120) {
                        $('.header').addClass('downscrolled');
                        injectSpace.show();
                    } else {
                        $('.header').removeClass('header-small downscrolled');
                        injectSpace.hide();
                    }

                    if ($(window).scrollTop() > 500) {
                        $('.header').addClass('header-small upscrolled');
                    } else {
                        $('.header').removeClass('upscrolled');
                    }
                })
            }
        }
    };


    responsiveMenu();
})

// This is for the navigation to hide and show
var responsiveMenu = function() {
    var menuType = 'desktop';

    $(window).on('load resize', function() {
        var currMenuType = 'desktop';

        if (matchMedia('only screen and (max-width: 991px)').matches) {
            currMenuType = 'mobile';
        }

        if (currMenuType !== menuType) {
            menuType = currMenuType;

            if (currMenuType === 'mobile') {
                var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');

                $('#header').after($mobileMenu);
                hasChildMenu.children('ul').hide();
                hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                $('.btn-menu').removeClass('active');
            } else {
                var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');

                $desktopMenu.find('.submenu').removeAttr('style');
                $('#header').find('.nav-wrap').append($desktopMenu);
                $('.btn-submenu').remove();
            }
        }
    });

    $('.btn-menu').on('click', function() {
        $('#mainnav-mobi').slideToggle(300);
        $(this).toggleClass('active');
    });

    $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
        $(this).toggleClass('active').next('ul').slideToggle(300);
        e.stopImmediatePropagation()
    });
}

if($("#contact-form")[0]) {
    $("#contact-form").off("submit").on("submit", function(e) {
        e.preventDefault();
        display_spinner();
        process_form_submit('contact-form');
    });
}
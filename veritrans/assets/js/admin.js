
jQuery().ready(function ($) {

    /************/
    /* Handlers */
    /************/

    handleRecurringDate = function () {
        var recurring_number = $('#params_recurring_number').val();
        var integration = $('#params_integration').val();

        $('.recurring_date').parents('.control-group').hide();

        if (integration == 'recurring') {
            if (recurring_number == '2') {
                $('.recurring_date').parents('.control-group').show();
            }
        }
    }

    handleIntegration = function () {
        var integration = $('#params_integration').val();

        $('.integration ').parents('.control-group').hide();

        if (integration == 'recurring') {
            $('.recurring').parents('.control-group').show();
        } else if (integration == 'subscribe') {
            $('.subscribe').parents('.control-group').show();
        }
    }

    handleSubscribeNumber = function () {
        var subscribe_number = $('#params_subscribe_number').val();
        var integration = $('#params_integration').val();

        $('.subscribe_number_1 ').parents('.control-group').hide();
        $('.subscribe_number_2 ').parents('.control-group').hide();
        $('.subscribe_number_3 ').parents('.control-group').hide();
        if (integration == 'subscribe') {
            $('.subscribe_number_1').parents('.control-group').show();
            if (subscribe_number == '2') {
                $('.subscribe_number_2').parents('.control-group').show();
            } else if (subscribe_number == '3') {
                $('.subscribe_number_2').parents('.control-group').show();
                $('.subscribe_number_3').parents('.control-group').show();
            }
        }
    }
    handleShopMode = function () {
        var shop_mode = $('#params_shop_mode').val();

        $('.shop_mode ').parents('.control-group').hide();

        if (shop_mode == 'test') {
            $('.shop_mode').parents('.control-group').show();
        }
    }

    /**********/
    /* Events */
    /**********/


    $('#params_recurring_number').change(function () {
        //handleRecurringDate();

    });
    $('#params_shop_mode').change(function () {
        handleShopMode();

    });
    $('#params_integration').change(function () {
        handleIntegration();
        handleRecurringDate();
        handleSubscribeNumber();


    });
    $('#params_subscribe_number').change(function () {
        handleSubscribeNumber();
    });
    /*****************/
    /* Initial calls */
    /*****************/
    handleShopMode();
    handleIntegration();
    // handleRecurringDate();
    handleSubscribeNumber();
});

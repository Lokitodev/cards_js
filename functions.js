$(document).ready(function () {
    var card = new Card({
        // a selector or DOM element for the form where users will
        // be entering their information
        form: 'form', // *required*
        // a selector or DOM element for the container
        // where you want the card to appear
        container: '.card-wrapper', // *required*

        formSelectors: {
            numberInput: 'input#numero_cartao', // optional — default input[name="number"]
            expiryInput: 'input#expiracao_cartao', // optional — default input[name="expiry"]
            cvcInput: 'input#cvc_cartao', // optional — default input[name="cvc"]
            nameInput: 'input#nome_cartao' // optional - defaults input[name="name"]
        },

        width: 400, // optional — default 350px
        formatting: true, // optional - default true

        // Strings for translation - optional
        messages: {
            validDate: 'valido\naté', // optional - default 'valid\nthru'
            monthYear: 'mes / ano', // optional - default 'month/year'
        },

        // Default placeholders for rendered fields - optional
        placeholders: {
            number: '•••• •••• •••• ••••',
            name: 'Nome Completo',
            expiry: '••/••',
            cvc: '•••'
        },

        masks: {
            // cardNumber: '•' // optional - mask card number
        },

        // if true, will log helpful messages for setting up Card
        debug: false // optional - default false
    });
    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });
    jQuery.validator.addMethod("expiracao_cartao", function (value, element) {
        var dateobj = new Date();
        var dataAtual = dateobj;

        value = value.replace(/ /g, '');
        var pattern = /(\d{2})\/(\d{4})/;
        if (pattern.test(value)) {
            var dataInput = new Date(value.replace(pattern, '$2-$1') + '-02');
            console.log("dataInput", dataInput.getMonth() + '/' + dataInput.getFullYear())
            console.log('dataAtual', dataAtual.getMonth() + '/' + dataAtual.getFullYear());
            console.log("dataInput >= dataAtual", dataInput.getMonth() >= dataAtual.getMonth() && dataInput.getFullYear() >= dataAtual.getFullYear())
            if (dataInput.getMonth() >= dataAtual.getMonth() && dataInput.getFullYear() >= dataAtual.getFullYear()) {
                return true;
            } else {
                $(element).val('');
                setTimeout(() => {
                    return false;
                }, 300);
            }
        }

    }, "Cartão expirado, tente novamente!");
    $("form").validate({
        rules: {
            'numero_cartao': {
                required: true,
                // creditcard: true
            },
            'expiracao_cartao': {
                required: true,
                expiracao_cartao: true,
            },
            'cvc_cartao': {
                required: true,
            },
            'nome_cartao': {
                required: true,
            },
        }
    });
});
$(document).ready(
    $('#btn').click( function() {

        var selection = '';
        if ( window.getSelection() ) {
            selection = window.getSelection().toString();
        } else {
            selection = document.selection.createRange().text;
        };

        if ( selection === '' ) return alert('Выделите область текста с ошибкой.');

        var href = window.location.href;

        alert(selection + ', ' + href);

        /** Отправляем данные в php */

        $.get(
            "php/addTypo.php",
            {
                selection: selection,
                href: href,
                status: "true"
            },
            function(data) {
                console.log(data);
            }

        );
        return false;
    });

    /* $('#btn_load_typo') */
);

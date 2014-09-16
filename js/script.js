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

        /** Отправляем данные в php */
        $.get(
            "php/addTypo.php",
            {
                selection: selection,
                href: href
            },
            function(data) {
                console.log(data);
                alert('Спасибо. Информация об ошибке добавлена в базу.');
                loadTypo();
            }
        );
        return false;
    })
);
    $('#btn_load_typo').click(  function() {

            $.getJSON(
                "json/data.json",
                function(data) {
                    var html = "<table class='table table-bordered'>";
                    html += "<tr><th>ID</th><th>Время добавления</th><th>Текст с ошибкой</th><th>Страница с ошибкой</th><th>Уже исправили?</th></tr>";
                    for ( var key in data ) {
                        html += "<tr>";
                        html += "<td>" + key + "</td>";
                        for (var key_2 in data[key]){
                            html += "<td>" + data[key][key_2] + "</td>";
                        }
                        html += "<td><button onClick = 'deleteTypo(" + key + ")'>исправлено</button></td>";
                        html += "</tr>"
                    }
                    html += "</table>"
                    $('#load_typo').html(html);
                }
            )
            return false;
        }
    );
    function deleteTypo(delete_id) {

            $.get(
                "php/deleteTypo.php",
                {
                    id: delete_id
                },
                function(data) {
                    console.log(data);
                    loadTypo();
                }

            );
            return false;
    };

    function loadTypo() {

        $.getJSON(
            "json/data.json",
            function(data) {
                var html = "<table class='table table-bordered'>";
                html += "<tr><th>ID</th><th>Время добавления</th><th>Текст с ошибкой</th><th>Страница с ошибкой</th><th>Уже исправили?</th></tr>";
                for ( var key in data ) {
                    html += "<tr>";
                    html += "<td>" + key + "</td>";
                    for (var key_2 in data[key]){
                        html += "<td>" + data[key][key_2] + "</td>";
                    }
                    html += "<td><button onClick = 'deleteTypo(" + key + ")'>исправлено</button></td>";
                    html += "</tr>"
                }
                html += "</table>"
                $('#load_typo').html(html);
            }
        );
    };
    loadTypo();
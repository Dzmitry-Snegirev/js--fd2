"use strict";

function testLoadData() {
    $.ajax("https://fe.it-academy.by/Examples/dyn_form_ajax/formDef1.json", {
        type: 'GET',
        dataType: 'json',
        success: creatForm,
        error: errorHandler
    });
}

function errorHandler(jqXHR, statusStr, errorStr) {
    alert(statusStr + ' ' + errorStr);
}

function creatForm(data) {
    var elem = document.getElementById('top');
    var formNew = document.createElement('form');
    formNew.setAttribute('action', 'http://fe.it-academy.by/TestForm.php');
    elem.appendChild(formNew);

    data.forEach(function(element) {
        for (let key in element) {

            if (key === "label" || key === "caption") {
                var label = document.createElement('label');
                formNew.appendChild(label);
                var textLabel = document.createTextNode(element[key]);
                var br = document.createElement('br');
                label.appendChild(br);
                label.appendChild(textLabel);
            }

            if (element[key] === "longtext" || element[key] === "number" || element[key] === "shorttext") {
                var input = document.createElement('input');
                input.setAttribute('type', element[key]);
                label.appendChild(input);
            }

            if (element[key] === "name") {
                input.setAttribute('name', element[key]);
                label.appendChild(input);
            }


            if (element[key] === "combo") {
                var select = document.createElement('select');
                label.appendChild(select);
                select.setAttribute('name', element[key]);
                label.appendChild(select);
                for (let key in element) {
                    if (key === "variants") {
                        var k = element[key];
                        k.forEach(function(el) {
                            for (let key in el) {
                                if (key === "text") {
                                    var option = document.createElement('option');
                                    var optionText = document.createTextNode(el[key]);
                                    option.appendChild(optionText);
                                }
                                if (key === "value") {
                                    option.setAttribute('value', el[key]);
                                    select.appendChild(option);
                                }
                            }
                        });
                    }
                }
            }

            if (element[key] === "radio") {
                for (let key in element) {
                    if (key === "variants") {
                        var m = element[key];
                        m.forEach(function(el) {
                            for (let key in el) {
                                if (key === "text") {
                                    var input = document.createElement('input');
                                    var inputText = document.createTextNode(el[key]);
                                    input.setAttribute('type', "radio");
                                    input.setAttribute('name', 'placing');
                                    label.appendChild(input);
                                    label.appendChild(inputText);
                                }
                                if (key === "value") {
                                    input.setAttribute('value', el[key]);
                                }
                            }
                        });
                    }
                };
            }
            if (element[key] === "check") {
                var input = document.createElement('input');
                input.setAttribute('type', 'checkbox');
                input.setAttribute('name', element[key]);
                input.checked = true;
                label.appendChild(input);
            }
            if (element[key] === "memo") {
                var textarea = document.createElement('textarea');
                label.appendChild(textarea);
            }


            if (element[key] === "submit") {
                var input = document.createElement('input');
                input.setAttribute('type', element[key]);
                label.appendChild(input);
                for (let key in element) {
                    if (key === "caption") {
                        input.setAttribute('value', element[key]);
                    }
                }
            }
        }
    });
    console.log(data);
    return formNew;

}
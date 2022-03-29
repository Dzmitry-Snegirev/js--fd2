
var AjaxHandlerScript = "http://fe.it-academy.by/AjaxStringStorage2.php";
var UpdatePassword;
var StringName = 'SNEGIREV_FROG_RECORDS';
var InfoH = [];


function storeInfo() {
	UpdatePassword = Math.random();
	$.ajax(
		{
			url: AjaxHandlerScript, type: 'POST', cache: false, dataType: 'json',
			data: { f: 'LOCKGET', n: StringName, p: UpdatePassword },
			success: LockGetReady, error: ErrorHandler
		}
	);
}

function LockGetReady(ResultH) {
	if (ResultH.error != undefined)
		alert(ResultH.error);
	else {
		// нам всё равно, что было прочитано - 
		// всё равно перезаписываем
		var InfoA =
		{
			name: document.getElementById('Player').value,
			record: score
		}
		InfoH.push(InfoA)
		$.ajax(
			{
				url: AjaxHandlerScript, type: 'POST', cache: false, dataType: 'json',
				data: { f: 'UPDATE', n: StringName, v: JSON.stringify(InfoH), p: UpdatePassword },
				success: UpdateReady, error: ErrorHandler
			}
		);
	}
}

function UpdateReady(ResultH) {
	if (ResultH.error != undefined)
		alert(ResultH.error);
}

function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
	alert(StatusStr + ' ' + ErrorStr);
}


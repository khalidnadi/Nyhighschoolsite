$(document).ready(function() {
	$("#contactForm").on("submit", function(e) {
		// e.preventDefault();
		var formValid = true;
		var nameIsValid = $("#userName").prop("validity").valid;
		if (nameIsValid) {
			$(".nameError").addClass("hidden");
		} else {
			formValid = false;
			$(".nameError").removeClass("hidden");
		}
		var emailIsValid = $("#userEmail").prop("validity").valid;
		if (emailIsValid) {
			$(".emailError").addClass("hidden");
		} else {
			formValid = false;
			$(".emailError").removeClass("hidden");
		}
		var messageIsValid = $("#writtenMessage").prop("validity").valid;
		if (messageIsValid) {
			$(".writtenmessageError").addClass("hidden");
		} else {
			formValid = false;
			$(".writtenmessageError").removeClass("hidden");
		}
		return formValid;
	});

	$("#contactFormChinese").on("submit", function(e) {
		// e.preventDefault();
		var formValid = true;
		var nameIsValid = $("#userNameC").prop("validity").valid;
		if (nameIsValid) {
			$(".nameError").addClass("hidden");
		} else {
			formValid = false;
			$(".nameError").removeClass("hidden");
		}
		var emailIsValid = $("#userEmailC").prop("validity").valid;
		if (emailIsValid) {
			$(".emailError").addClass("hidden");
		} else {
			formValid = false;
			$(".emailError").removeClass("hidden");
		}
		var messageIsValid = $("#writtenMessageC").prop("validity").valid;
		if (messageIsValid) {
			$(".writtenmessageError").addClass("hidden");
		} else {
			formValid = false;
			$(".writtenmessageError").removeClass("hidden");
		}
		return formValid;
	});
});

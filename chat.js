function() {
  var e = $(this).data("navigation-target"),
    o = $(".sidebar-group .sidebar#" + e);
  o.closest(".sidebar-group").find(".sidebar").removeClass("active"), o.addClass("active"), o.find("form input:first").focus(), $("[data-navigation-target]").removeClass("active"), $('[data-navigation-target="' + e + '"]').addClass("active"), $(".sidebar-group").removeClass("mobile-open"), o.closest(".sidebar-group").addClass("mobile-open"), t.Started.scrolllRun(!0)
}

$(document).ready(function(){
	$('.profile').click(function(){
		var e = $(this).data("navigation-target"),
    	o = $(".sidebar-group .sidebar#" + e);
  		o.closest(".sidebar-group").find(".sidebar").removeClass("active"), o.addClass("active"), o.find("form input:first").focus(), $("[data-navigation-target]").removeClass("active"), $('[data-navigation-target="' + e + '"]').addClass("active"), $(".sidebar-group").removeClass("mobile-open"), o.closest(".sidebar-group").addClass("mobile-open"), t.Started.scrolllRun(!0)
	})
})
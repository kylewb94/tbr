// Init Bootstrap tooltips
$(function () {
	$('[data-toggle="tooltip"]').tooltip({
		container: 'table'
	})
})


// Sort and filter table
function sortTable(n) {
	var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	table = document.getElementById("table");
	switching = true;
	dir = "asc";
	while (switching) {
		switching = false;
		rows = table.rows;
		for (i = 1; i < (rows.length - 1); i++) {
			shouldSwitch = false;
			x = rows[i].getElementsByTagName("TD")[n];
			y = rows[i + 1].getElementsByTagName("TD")[n];
			if (dir == "asc") {
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
					shouldSwitch = true;
					break;
				}
			} else if (dir == "desc") {
				if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
					shouldSwitch = true;
					break;
				}
			}
		}
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
			switchcount ++;
		} else {
			if (switchcount == 0 && dir == "asc") {
				dir = "desc";
				switching = true;
			}
		}
	}
}


// Back to top button
	
var btn = $('#button');

$(window).scroll(function() {
	if ($(window).scrollTop() > 200) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
});

btn.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '200');
});


// GSAP Timeline

var tl = gsap.timeline({defaults:{duration: 0.5, y:-50, opacity: 0}});

tl.from("h1", {})
  .from(".navbar a", {stagger: .3}, "-=0.8")
  .from("tr", {stagger: .125}, "-=0.8")
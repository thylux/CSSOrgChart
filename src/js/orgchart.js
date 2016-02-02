$(window).ready(function() {
	var main = $("<ul class=\"board\"></ul>");
    var board = $("<li><a href=\"#\"><span>" + org.name + "</span></a></li>");
    var branches = $("<ul class=\"branches\"></ul>");
	
    appendBranches(org, branches);
    
    board.append(branches);
    main.append(board);
	$(".org-chart").append(main);
});

function appendBranches(d, parent) {	
	if(d!==undefined && d.children!==undefined)
		d.children.forEach(function(child) {
			var branch = $("<li class=\"branch\">" + 
                (child.name !== "" ? "<span>" + child.name + "</span>" : "") + 
                "</li>");
            if(child.children!==undefined && child.children.length>0)
            {
                var groups = $("<ul class=\"groups\"></ul>");
            
                branch.append(groups);
                appendGroups(child, groups);
            }
            
            parent.append(branch); 
		});
};

function appendGroups(d, parent) {	
	if(d!==undefined && d.children!==undefined)
		d.children.forEach(function(child) {
			var group = $("<li class=\"group " + child.name + "\"><a href=\"#\"><span>" + child.name + "</span></a></li>");
            if(child.children!==undefined && child.children.length>0)
            {
                var departments = $("<ul class=\"departments\"></ul>");
            
                group.append(departments);
                appendDepartments(child, departments);
            }
            
            parent.append(group); 
		});
};

function appendDepartments(d, parent) {	
	if(d!==undefined && d.children!==undefined)
		d.children.forEach(function(child) {
			var dep = $("<li class=\"department\"><a href=\"#\"><span>" + child.name + "</span></a></li>");
            if(child.children!==undefined && child.children.length>0)
            {
                var sections = $("<ul class=\"sections\"></ul>");
            
                dep.append(sections);
                appendSection(child, sections);
            }
            
            parent.append(dep); 
		});
};

function appendSection(d, parent) {	
	if(d!==undefined && d.children!==undefined)
		d.children.forEach(function(child) {
			var dep = $("<li class=\"section\"><a href=\"#\"><span>" + child.name + "</span></a></li>");
			parent.append(dep);
		});
};

colors = [
    "#FFD600",
    "#AAD4E7",
    "#FDB0FD",
    "#A3A2A2",
    "#f0f0f0"
];

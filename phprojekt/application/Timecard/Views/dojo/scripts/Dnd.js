dojo.provide("phpr.Timecard.Booking");
dojo.provide("phpr.Timecard.ContentBar");

dojo.declare("phpr.Timecard.Booking", dojo.dnd.Target, {
    onDndDrop:function(source, nodes, copy) {
		dojo.byId('projectId_0').value = nodes[0].id;
		dojo.byId('projectName_0').innerHTML = nodes[0].innerHTML;
        for (var i in timecardProjectPositions) {
            var id = timecardProjectPositions[i].id;
			var node = dojo.byId('projectBookingForm_' + id);
			if (node) {
				dojo.style(node, "display", "none");
			}
        }		
        dojo.fadeIn({
            node: dojo.byId('projectBookingForm_0'),
            duration: 1000,
            beforeBegin:function() {
                var node = dojo.byId('projectBookingForm_0');
                dojo.style(node, "opacity", 0);
                dojo.style(node, "display", "block");
            }
        }).play();							
        this.onDndCancel();  // cleanup the drop state
    },

    markupFactory:function(params, node) {
        params._skipStartup = true;
        return new phpr.Timecard.Booking(node, params);
    },
	
    // mouse events
    onMouseDown:function(e) {
		var position = Math.abs(e.target.style.left.replace(/px/, "")) + e.layerX;
		var start = 1;
		for (var i in timecardProjectPositions) {
            var id = timecardProjectPositions[i].id;
            var node = dojo.byId('projectBookingForm_' + id);
			if (node) {
				dojo.style(node, "display", "none");
			}
		}
        var node = dojo.byId('projectBookingForm_0');
		if (node) {
			dojo.style(node, "display", "none");
		}		
		for (var i in timecardProjectPositions) {
			if (start && position >= timecardProjectPositions[i].start && position <= timecardProjectPositions[i].end ) {				
				id = timecardProjectPositions[i].id;
				start = 0;
                dojo.fadeIn({
                    node: dojo.byId('projectBookingForm_' + id),
                    duration: 1000,
                    beforeBegin:function() {
                        var node = dojo.byId('projectBookingForm_' + id);
						if (node) {
							dojo.style(node, "opacity", 0);
							dojo.style(node, "display", "block");
						}
                    }
                }).play();  
			}
		}
        dojo.stopEvent(e);
    }
});

dojo.declare("phpr.Timecard.ContentBar", null, {
	dojoNode: null,
	node:     null,
	start:    8,
	end:      20,
	
    constructor:function(id) {
        this.dojoNode = dojo.byId(id);
		this.node     = dijit.byId(id); 		
	},
	
	getWidth:function() {
		return Math.abs(this.dojoNode.style.width.replace(/px/, ""));
	},
	
	convertHourToPixels:function(hourWith, time) {
		var hours   = ((time.substr(0,2) - this.start) * hourWith) + 4;
		var minutes = Math.floor((((time.substr(3,2) / 60)) * hourWith)) + 4;
		return hours + minutes;
	},
	
	convertAmountToPixels:function(hourWith, time) {
        var hours   = (time.substr(0,2) * hourWith);
		var minutes = Math.floor((time.substr(3,2)/60) * hourWith);
		return hours + minutes;
    }
});
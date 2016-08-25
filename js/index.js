$(document).ready(function() {
  var source = $("#yearsTemplate").html();
  var template = Handlebars.compile(source);

  var data = {years: [
    
      {
        yearName: "1776",
        events: [
          {
            class: "danger",
            eventName: "JFK DIED",
            eventDesc: "he died"
          },
        ]
      },
      
      {
        yearName: "1779",
        events: [
          {
            class: "info",
            eventName: "Abe Lincoln lied",
            eventDesc: "he died"
          },
          {
            class: "danger",
            eventName: "Abe Lincoln lied again",
            eventDesc: "he died.. again"
          },
        ]
      },
      
  ]};

  $("#mainContainer").html(template(data));
});

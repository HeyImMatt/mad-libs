$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const noun1Input = $("input#noun1").val();
    const pluralNoun1Input = $("input#pluralNoun1").val();
    const verb1Input = $("input#verb1").val();
    const verb2Input = $("input#verb2").val();
    const bodyPartInput = $("input#bodyPart").val();
    const adjective1Input = $("input#adjective1").val();
    const pluralNoun2Input = $("input#pluralNoun2").val();
    const adjective2Input = $("input#adjective2").val();

    $(".noun1").text(noun1Input);
    $(".pluralNoun1").text(pluralNoun1Input);
    $(".verb1").text(verb1Input);
    $(".verb2").text(verb2Input);
    $(".bodyPart").text(bodyPartInput);
    $(".adjective1").text(adjective1Input);
    $(".pluralNoun2").text(pluralNoun2Input);
    $(".adjective2").text(adjective2Input);

    $("#story").show();
  });
})
function get_data() {
    $.getJSON("https://www.boredapi.com/api/activity", (e) => {
        $(".type").html("Type: " + e.type);
        $(".activity").html(e.activity);
        $(".participants").html("Participants: " + e.participants);
    });
}

$(document).ready(function () {
    get_data();

    $("button").on("click", () => {
        get_data();
    });

    $(document).ajaxError(function () {
        alert("Please wait a few seconds. Also check your internet!");
    });
});
